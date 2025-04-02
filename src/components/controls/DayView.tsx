'use client';

interface DayViewProps {
    day: number;
    isCurrentMonth: boolean;
    isSelected: boolean;
    onClick?: () => void;
}

export default function DayView({ day, isCurrentMonth, isSelected, onClick }: DayViewProps) {
    let className = 'flex justify-center items-center p-4 ';
    
    if (isSelected) {
        className += 'bg-msa-yellow text-msa-blue';
    } else if (!isCurrentMonth) {
        className += 'bg-bg-secondary';
    } else {
        className += 'hover:bg-gray-200';
    }
    
    return (
        <button className={className} onClick={onClick} disabled={!isCurrentMonth}>
            {day}
        </button>
    );
}
