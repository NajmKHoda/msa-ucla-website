'use client';

import { useState } from 'react';
import DayView from './DayView';
import Icon from '../wrappers/Icon';

interface CalendarControlProps {
    date: Date;
    onDateChange: (date: Date) => void;
}

export default function CalendarControl({ date, onDateChange }: CalendarControlProps) {
    const [currentMonth, setCurrentMonth] = useState(date);

    const startOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);

    const prevMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
    };

    const nextMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
    };

    function handleDateClick(day: number) {
        const selectedDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
        onDateChange(selectedDate);
    }

    function renderDays() {
        const days: React.ReactNode[] = [];
        const startDate = new Date(startOfMonth);
        startDate.setDate(startDate.getDate() - startDate.getDay()); // Adjust to start from Sunday

        for (let i = 0; i < 42; i++) {
            const currentDate = new Date(startDate);
            currentDate.setDate(startDate.getDate() + i);

            const isCurrentMonth = currentDate.getMonth() === currentMonth.getMonth();
            const isSelected = currentDate.getDate() === date.getDate() &&
                currentDate.getMonth() === date.getMonth() &&
                currentDate.getFullYear() === date.getFullYear();

            days.push(
                <DayView
                    key={`day-${i}`}
                    day={currentDate.getDate()}
                    isCurrentMonth={isCurrentMonth}
                    isSelected={isSelected}
                    onClick={() => handleDateClick(currentDate.getDate())}
                />
            );
        }

        return days;
    };

    return (
        <div className='rounded-xl overflow-hidden shadow-lg w-fit'>
            <div className='flex items-center justify-between p-2 bg-msa-blue text-text-secondary'>
                <button
                    onClick={prevMonth}
                    className='text-gray-600 hover:text-gray-800'
                >
                    <Icon name='chevron_left' size={36} />
                </button>
                <span className='font-bold text-xl'>
                    {currentMonth.toLocaleString('default', { month: 'long' })} {currentMonth.getFullYear()}
                </span>
                <button
                    onClick={nextMonth}
                    className='text-gray-600 hover:text-gray-800'
                >
                    <Icon name='chevron_right' size={36} />
                </button>
            </div>
            <div className='grid grid-cols-7'>{renderDays()}</div>
        </div>
    );
}
