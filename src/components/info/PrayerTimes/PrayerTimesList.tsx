'use client';

import { useMemo } from 'react';
import PrayerTimeView from '@/components/info/PrayerTimes/PrayerTimeView';
import { CalculationMethod, Coordinates, PrayerTimes } from 'adhan';

const UCLA_COORDS = new Coordinates(34.0722, -118.4427);
const ISNA_METHOD = CalculationMethod.NorthAmerica();
const DATE_FORMATTER = Intl.DateTimeFormat(undefined, {
    timeStyle: 'short',
    timeZone: 'America/Los_Angeles'
 });

export default function PrayerTimesList() {
    const now = new Date();
    const calendarNow = toCalendar(now);

    const prayerTimes = useMemo(() => {
        const prayerInfo = new PrayerTimes(UCLA_COORDS, now, ISNA_METHOD);
        return {
            fajr: prayerInfo.fajr,
            dhuhr: prayerInfo.dhuhr,
            asr: prayerInfo.asr,
            maghrib: prayerInfo.maghrib,
            isha: prayerInfo.isha
        }
    }, [calendarNow]);

    function getCurrentPrayer() {
        const currentTime = now.getTime();
        
        if (currentTime < prayerTimes.fajr.getTime()) return 'isha';
        if (currentTime < prayerTimes.dhuhr.getTime()) return 'fajr';
        if (currentTime < prayerTimes.asr.getTime()) return 'dhuhr';
        if (currentTime < prayerTimes.maghrib.getTime()) return 'asr';
        if (currentTime < prayerTimes.isha.getTime()) return 'maghrib';
        return 'isha';
    };

    const currentPrayer = getCurrentPrayer();

    return (
        <div className='flex flex-col gap-[5px] lg:flex-row lg:gap-[10px] rounded-xl lg:rounded-3xl overflow-hidden'>
            <PrayerTimeView 
                prayerName='Fajr' 
                prayerStartTime={DATE_FORMATTER.format(prayerTimes.fajr)} 
                symbol='flare' 
                isCurrent={currentPrayer === 'fajr'} 
            />
            <PrayerTimeView 
                prayerName='Dhuhr' 
                prayerStartTime={DATE_FORMATTER.format(prayerTimes.dhuhr)} 
                symbol='sunny' 
                isCurrent={currentPrayer === 'dhuhr'} 
            />
            <PrayerTimeView 
                prayerName='Asr' 
                prayerStartTime={DATE_FORMATTER.format(prayerTimes.asr)} 
                symbol='wb_sunny' 
                isCurrent={currentPrayer === 'asr'} 
            />
            <PrayerTimeView 
                prayerName='Maghrib' 
                prayerStartTime={DATE_FORMATTER.format(prayerTimes.maghrib)} 
                symbol='wb_twilight' 
                isCurrent={currentPrayer === 'maghrib'} 
            />
            <PrayerTimeView 
                prayerName='Isha' 
                prayerStartTime={DATE_FORMATTER.format(prayerTimes.isha)} 
                symbol='bedtime' 
                isCurrent={currentPrayer === 'isha'} 
            />
            <PrayerTimeView 
                prayerName='Jummah' 
                prayerStartTime='1:10 PM' 
                symbol='mosque' 
                isCurrent={false} 
            />
        </div>
    );
}

function toCalendar(date: Date): string {
    const year = date.getFullYear().toString();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = (date.getDate()).toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
}