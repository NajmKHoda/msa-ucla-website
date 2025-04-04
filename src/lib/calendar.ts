'use server';

import { Credentials, JWT } from 'google-auth-library';
import { google } from 'googleapis';

const GOOGLE_SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY?.replaceAll('\\n', '\n') ?? '';

let jwtClient: JWT | null = null;
let tokenExpiry = 0;

export default async function getEvents(
    startDate: Date = new Date(),
    endDate: Date | undefined = undefined,
    maxResults: number = 6
): Promise<CalendarEvent[]> {
    try {
        const client = await authorize();
        const calendar = google.calendar({ version: 'v3', auth: client });

        // Retrieve raw data
        const { data } = await calendar.events.list({
            calendarId: process.env.GOOGLE_CALENDAR_ID,
            timeMin: startDate.toISOString(),
            timeMax: endDate?.toISOString(),
            maxResults,
            singleEvents: true,
            orderBy: 'startTime',
        });

        // Parse into server-friendly format
        return data.items?.map(event => {
            const start = event.start?.dateTime || event.start?.date;
            const end = event.end?.dateTime || event.end?.date;
            return {
                id: event.id!,
                title: event.summary || 'Event',
                start: new Date(start!),
                end: end ? new Date(end) : null,
                location: event.location ?? null,
            }
        }) || [];
    } catch (error) {
        console.error(error);
        return [];
    }
}

export interface CalendarEvent {
    id: string;
    title: string;
    start: Date;
    end: Date | null;
    location: string | null;
}

async function authorize() {
    const now = Date.now();
    // If we already have a jwtClient and the token is still valid, return it.
    if (jwtClient && now < tokenExpiry) {
        return jwtClient;
    }

    // Create a new JWT client and authorize it
    jwtClient = new google.auth.JWT(
        GOOGLE_SERVICE_ACCOUNT_EMAIL,
        undefined,
        GOOGLE_PRIVATE_KEY,
        ['https://www.googleapis.com/auth/calendar.readonly']
    );
    const credentials = await jwtClient.authorize() as Credentials;
    tokenExpiry = credentials.expiry_date || Date.now() + 3600 * 1000;
    
    return jwtClient;
}

