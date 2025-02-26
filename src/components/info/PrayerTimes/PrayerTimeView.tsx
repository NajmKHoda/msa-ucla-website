import Icon from '../../wrappers/Icon';
import { MaterialSymbol } from 'material-symbols';

interface PrayerTimeViewProps {
    prayerName: string;
    prayerStartTime: string;
    symbol: MaterialSymbol;
    isCurrent?: boolean;
}

export default function PrayerTimeView({ prayerName, prayerStartTime, isCurrent, symbol }: PrayerTimeViewProps) {
    const bgClass = isCurrent ? 'bg-msa-blue' : 'bg-bg-secondary';
    const iconClass = isCurrent ? 'text-msa-yellow' : 'text-msa-blue';
    const textClass = isCurrent ? 'text-text-secondary' : '';

    return (
        <div className={`flex flex-col flex-grow gap-[10px] items-center py-[14px] ${bgClass}`}>
            <p className={`text-white text-center text-3xl font-semibold ${textClass}`}>{prayerName}</p>
            <Icon name={symbol} className={iconClass} size={64} fill={isCurrent} /> {/* Passed the symbol prop */}
            <p className={`text-white text-center text-3xl font-semibold ${textClass}`}>{prayerStartTime}</p>
        </div>
    );
}
