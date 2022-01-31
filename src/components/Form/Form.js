import { useState } from "react";
import "./Form.css";

export const Form = ({ onSubmit }) => {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(value);
        setValue("");
        console.log(value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input value={value} onChange={handleChange} type="text" autoFocus className="input-text" />
            <input type="submit" className="input-submit" />
        </form>
    );
};
