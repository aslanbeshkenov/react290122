import './App.css';
import { useEffect, useState } from 'react';
import { Form } from './components/Form/Form';
import { AUTHORS } from './utils/constans';
import { MessageList } from './components/MessageList/MessageList';
import { Chats } from './components/Chats/chats';

const myText = "Hello from App";

function App() {
  const [messageList, setMessageList] = useState([]);

  const handleAddMessage = (text, author) => {
    sendMessage(text, AUTHORS.ME)
  };

  const sendMessage = (text, author) => {
    setMessageList((prevMessageList) => [...prevMessageList, { text: text, author: author }]);
  }

  useEffect(() => {
    let interval;
    if (messageList[messageList.length - 1]?.author === AUTHORS.ME) {
      interval = setTimeout(() => {
        sendMessage("Hello, I am Bot!", AUTHORS.BOT);
      }, 1500);
    };

    return () => {
      clearTimeout(interval);
    };
  }, [messageList]);

  return (
    <div className="App">
      <Chats />
      <header className="App-header">
        <h4>{myText}</h4>
        <MessageList messageList={messageList} />
        <Form onSubmit={handleAddMessage} />
      </header>
    </div>
  );
}

export default App;
