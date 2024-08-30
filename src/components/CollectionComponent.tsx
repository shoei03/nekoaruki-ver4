"use client";

import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [selectedDate, setSelectedDate] = useState<dayjs.Dayjs | null>(null);

  const startOfMonth = currentDate.startOf('month');
  const endOfMonth = currentDate.endOf('month');
  const startOfWeek = startOfMonth.startOf('week');
  const endOfWeek = endOfMonth.endOf('week');

  const days = [];
  let day = startOfWeek;

  while (day.isBefore(endOfWeek, 'day')) {
    days.push(day);
    day = day.add(1, 'day');
  }

  const handlePrevMonth = () => {
    setCurrentDate(currentDate.subtract(1, 'month'));
  };

  const handleNextMonth = () => {
    setCurrentDate(currentDate.add(1, 'month'));
  };

  const handleDateClick = (day: dayjs.Dayjs) => {
    setSelectedDate(day);
  };

  const handleOutsideClick = (e: MouseEvent) => {
    if (selectedDate) {
      setSelectedDate(null);
    }
  };

  useEffect(() => {
    if (selectedDate) {
      document.addEventListener('click', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [selectedDate]);

  return (
    <div className="p-4 max-w-md mx-auto">
      <div className="flex justify-between items-center mb-4">
        <button onClick={handlePrevMonth}>&lt;</button>
        <h2 className="text-lg font-bold">{currentDate.format('MMMM YYYY')}</h2>
        <button onClick={handleNextMonth}>&gt;</button>
      </div>

      {selectedDate ? (
        <div className="flex justify-center items-center h-64 bg-gray-100 mb-4">
          <div className="text-sm font-bold text-left">
            {selectedDate.format('MMMM D, YYYY')}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-7 gap-1 text-center">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="font-bold">{day}</div>
          ))}
          {days.map(day => (
            <div
              key={day.format('YYYY-MM-DD')}
              onClick={() => handleDateClick(day)}
              className={`p-2 cursor-pointer ${day.isSame(currentDate, 'month') ? '' : 'text-gray-400'}
                ${day.isSame(selectedDate, 'day') ? 'bg-blue-200' : ''}`}
            >
              {day.date()}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
