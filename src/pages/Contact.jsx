import React, { useState } from "react";
import { Editor } from "primereact/editor";

const Contact = () => {
    const [text, setText] = useState('');
    return (
        <div>
            <Editor value={text} onTextChange={(e) => setText(e.htmlValue)} style={{ height: '600px' } } />
        </div>
    )
};

export default Contact;