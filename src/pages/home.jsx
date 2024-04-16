import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';

const Home = () => {
    const [date, setDate] = useState(null);
    return (
        <div className = "home">
            <form className='p-inputtext-sm'>
                <div>
                    <InputText keyfilter="text" placeholder="Nome" />
                </div>
                <div>
                    <InputText keyfilter="text" placeholder="Email" />
                </div>
                <div>
                    <InputText keyfilter="int" placeholder="Matrícula" />
                </div>
                <div className='p-d-flex p-jc-center'>
                    <Calendar value={date} onChange={(e) => setDate(e.value)} dateFormat="dd/mm/yy" />
                </div>
                <div className='p-d-flex p-jc-center'>
                    <Button label="click" />
                    <Button label="cancel" />
                </div>
            </form>
        </div>
    );
};

export default Home;
