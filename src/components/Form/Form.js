import { useState } from "react";
import "./Form.css";
import { TextField, Button } from "@mui/material";

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
            <TextField
                label="Введите сообщение"
                variant="filled"
                color="success"
                onChange={handleChange}
                value={value}
                focused
                autoFocus />
            <Button variant="contained" type="submit" className="input-submit" sx={{}}>Отправить</Button>
        </form>
    );
};
