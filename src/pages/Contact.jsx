import React, { useState } from "react";
import { Editor } from "primereact/editor";
import { Button } from "primereact/button";

const Contact = () => {
    const [text, setText] = useState('');
    return (
    <>
        <div className="home">
            <Editor value={text} onTextChange={(e) => setText(e.htmlValue)} style={{ height: '400px' } } />
            <div className='p-d-flex p-jc-center'>
                <div className="button-container">
                    <Button label="click" />
                    <Button label="cancel" />
                </div>
            </div>
        </div>
    </>
    
    )
};

export default Contact;