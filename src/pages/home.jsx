import React, {useState} from 'react';
import { Button } from 'primereact/button'; 
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';


const Home = () => {
    const [date, setDate] = useState(null);
    return (
        <>
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
                <div className=''>
                    <Calendar value={date} onChange={(e) => setDate(e.value)} dateFormat="dd/mm/yy" />  
                </div>
            </form>
            <div>
                <Button label="click"/>
                <Button label="cancel"/>
            </div>
        </>
    );
};

export default Home;