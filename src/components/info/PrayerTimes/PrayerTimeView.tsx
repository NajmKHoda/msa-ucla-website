'use client';

import { useMediaQuery } from '@/lib/hooks/useMediaQuery';
import Icon from '../../wrappers/Icon';
import { MaterialSymbol } from 'material-symbols';

interface PrayerTimeViewProps {
    prayerName: string;
    prayerStartTime: string;
    symbol: MaterialSymbol;
    isCurrent?: boolean;
}

export default function PrayerTimeView({ prayerName, prayerStartTime, isCurrent, symbol }: PrayerTimeViewProps) {
    const isMobile = useMediaQuery('(max-width: 1024px)');

    const bgClass = isCurrent ? 'bg-msa-blue' : 'bg-bg-secondary';
    const iconClass = isCurrent ? 'text-msa-yellow' : 'text-msa-blue';
    const textClass = isCurrent ? 'text-text-secondary' : '';

    return isMobile ? (
        <div className={`flex flex-row gap-3 items-stretch px-3 py-2 ${bgClass}`}>
            <Icon name={symbol} className={iconClass} size={24} fill={isCurrent} /> 
            <p className={`text-center text-2xl font-semibold ${textClass}`}>{prayerName}</p>
            <p className={`flex-1 text-end text-2xl font-semibold ${textClass}`}>{prayerStartTime}</p>
        </div>
    ) : (
        <div className={`flex flex-col flex-grow gap-[10px] items-center py-[14px] ${bgClass}`}>
            <p className={`text-center text-3xl font-semibold ${textClass}`}>{prayerName}</p>
            <Icon name={symbol} className={iconClass} size={64} fill={isCurrent} /> 
            <p className={`text-center text-3xl font-semibold ${textClass}`}>{prayerStartTime}</p>
        </div>
    );
}
