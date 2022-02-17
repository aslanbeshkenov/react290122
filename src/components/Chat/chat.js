import { useEffect, useState } from 'react';
import { Form } from '../Form/Form';
import { AUTHORS } from '../../utils/constans';
import { MessageList } from '../MessageList/MessageList';
import { Navigate, useParams } from 'react-router-dom';

import '../../App.css';

const myText = "Hello from App";

function Chat() {
    const { chatId } = useParams();

    const [messageList, setMessageList] = useState({
        1: [],
        2: [],
    });

    const handleAddMessage = (text, author) => {
        sendMessage(text, AUTHORS.ME)
    };

    const sendMessage = (text, author) => {
        setMessageList((prevMessageList) => ({
            ...prevMessageList,
            [chatId]: [...prevMessageList[chatId], { text: text, author: author }],
        }));
    };

    useEffect(() => {
        let interval;
        if (messageList[chatId]?.[messageList[chatId].length - 1]?.author === AUTHORS.ME) {
            interval = setTimeout(() => {
                sendMessage("Hello, I am Bot!", AUTHORS.BOT);
            }, 1500);
        };

        return () => {
            clearTimeout(interval);
        };
    }, [messageList]);

    if (!messageList[chatId]) {
        return <Navigate to="/chats" replace />
    }

    return (
        <div className="App">
            <header className="App-header">
                <h4>{myText}</h4>
                <MessageList messageList={messageList[chatId]} />
                <Form onSubmit={handleAddMessage} />
            </header>
        </div>
    );
}

export default Chat;
