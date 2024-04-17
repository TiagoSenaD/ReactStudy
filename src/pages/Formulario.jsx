import React, { useState } from "react";
import { Editor } from "primereact/editor";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";

const Contact = () => {
    const [text, setText] = useState('');
    const [infoText, setInfoText] = useState('');
    return (
    <>
        <div className="quill">
            <div style ={{display: "flex", flexDirection: "row"}}>
            <FloatLabel>
                <InputText id="username" value={infoText} onChange={(e) => setInfoValue(e.target.value)} />
                <label htmlFor="username">Username</label>
            </FloatLabel>
            <FloatLabel>
                <InputText id="username" value={infoText} onChange={(e) => setInfoValue(e.target.value)} />
                <label htmlFor="username">Username</label>
            </FloatLabel>
            <FloatLabel>
                <InputText id="username" value={infoText} onChange={(e) => setInfoValue(e.target.value)} />
                <label htmlFor="username">Username</label>
            </FloatLabel>
            </div>
            <br />
            <Editor value={text} onTextChange={(e) => setText(e.htmlValue)} style={{ height: '400px' } } />
            <div className='p-d-flex p-jc-center'>
                <div className="button-container" >
                    <Button label="click" />
                    <Button label="cancel" />
                </div>
            </div>
        </div>
    </>
    
    )
};

export default Contact;