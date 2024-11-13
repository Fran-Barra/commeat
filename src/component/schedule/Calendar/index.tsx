import { useState } from 'react';
import Calendar from 'react-calendar';

const MyCalendar = () => {
    const [date, setDate] = useState<Date>(new Date());


    return (
        <div className="border-0 bg-gray-100 flex flex-col justify-items-center ">
            <span className="text-blue-500 font-light text-md bg-gray-100 w-full p-3 flex justify-center items-center">
                {date.toLocaleDateString('en-US', {month: 'short', year: 'numeric'})}
            </span>

            <Calendar
                onChange={(value) => setDate(value as Date)}
                value={date}
                calendarType="gregory"
                locale="en-US"
                formatShortWeekday={(_locale, date) =>
                    date.toLocaleDateString('en-US', {weekday: 'narrow'})
                }
                formatMonth={(_locale, date) =>
                    date.toLocaleDateString('en-US', {month: 'short'})
                }
                prevLabel={null}
                nextLabel={null}
                prev2Label={null}
                next2Label={null}
                className="w-full text-center custom-calendar border-0 bg-gray-100 flex"
                tileClassName={({date: tileDate}) => {
                    const isSelected = tileDate.toDateString() === date.toDateString();
                    const isToday = tileDate.toDateString() === new Date().toDateString();
                    const day = tileDate.getDay();
                    const isWeekend = day === 0 || day === 6;
                    const isDisabled = tileDate.getMonth() !== date.getMonth();

                    return `h-12 w-12 flex items-center justify-center rounded-full ${
                        isDisabled
                            ? 'text-gray-100 bg-blue bg-gray-100'
                            : isSelected
                                ? 'bg-primary-500 text-white'
                                : isToday
                                    ? 'text-primary-500 bg-gray-100 font-bold'
                                    : isWeekend
                                        ? 'text-gray-500 bg-gray-100'
                                        : 'hover:bg-primary-100 bg-gray-100'
                    }`;
                }}
                navigationLabel={({date}) => (
                    <span className="text-blue-500 font-light text-sm bg-gray-100">
                        {date.toLocaleDateString('en-US', {month: 'short'})}
                    </span>
                )}
                showNavigation={false}

            />
        </div>
    );
};

export default MyCalendar;
