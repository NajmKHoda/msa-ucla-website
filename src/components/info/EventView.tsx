export interface EventViewProps {
    eventName: string;
    start: Date;
    end?: Date | null;
}

const dayFormatter = new Intl.DateTimeFormat(undefined, { weekday: 'short', timeZone: 'America/Los_Angeles' });
const dateFormatter = new Intl.DateTimeFormat(undefined, { month: '2-digit', day: '2-digit', timeZone: 'America/Los_Angeles' });
const timeFormatter = new Intl.DateTimeFormat(undefined, { timeStyle: 'short', timeZone: 'America/Los_Angeles' });

export default function EventView({ eventName, start, end }: EventViewProps) {
    const startDay = dayFormatter.format(start);
    const startDate = dateFormatter.format(start);
    const timeRange = timeFormatter.formatRange(start, end ?? start);
    
    return (
        <div className="flex items-stretch rounded-[20px] overflow-hidden bg-bg-secondary">
            <div className="flex p-[20px] flex-col items-center bg-msa-blue">
                <span className='text-2xl text-text-secondary font-bold'>{startDay}</span>
                <span className='text-2xl text-text-secondary font-bold'>{startDate}</span>
            </div>
            <div className="flex px-[15px] flex-col justify-center flex-1">
                <span className='text-2xl font-bold'>{eventName}</span>
                <span className='text-2xl'>{timeRange}</span>
            </div>
        </div>
    );
}
