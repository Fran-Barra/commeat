import  { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Importar estilos básicos

const MyCalendar = () => {
    const [date, setDate] = useState(new Date());

    return (
        <div className="my-calendar">
            <Calendar
                onChange={(value) => setDate(value as Date)}
                value={date}
                calendarType="gregory" // Empieza el domingo
            />
        </div>
    );
};

export default MyCalendar;
