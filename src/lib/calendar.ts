'use server';

import { google } from 'googleapis';

const GOOGLE_SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY?.replaceAll('\\n', '\n') ?? '';

export default async function getEvents() {
    try {
        // Create a JWT client using service account credentials
        const jwtClient = new google.auth.JWT(
            GOOGLE_SERVICE_ACCOUNT_EMAIL,
            undefined,
            GOOGLE_PRIVATE_KEY,
            ['https://www.googleapis.com/auth/calendar.readonly']
        );
        await jwtClient.authorize();

        const calendar = google.calendar({ version: 'v3', auth: jwtClient });

        // Retrieve raw data
        const { data } = await calendar.events.list({
            calendarId: process.env.GOOGLE_CALENDAR_ID,
            timeMin: new Date().toISOString(),
            maxResults: 9,
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
                location: event.location,
            }
        }) || [];
    } catch (error) {
        console.error(error);
        return [];
    }
}