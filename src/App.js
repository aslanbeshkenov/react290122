import './App.css';
import { Message } from './components/Message/Message';
import { Counter } from './components/Counter';
import { useEffect, useState } from 'react';
import { Form } from './components/Form/Form';

const myText = "Hello from App";

function App() {
  const [messageList, setMessageList] = useState([
    // { text: "Hello", author: "Me" },
    // { text: "Hello. I am bot", author: "Robot" }
  ]);

  const handleAddMessage = (text, author = "Me") => {
    setMessageList((prevMessageList) => [...prevMessageList, { text: text, author: author }]);
  };

  useEffect(() => {
    // const { author } = messageList;
    // console.log(messageList[messageList.length - 1].author);
    if (messageList.length !== 0 && messageList[messageList.length - 1].author == "Me") {
      handleAddMessage("Hello, I am Bot!", "Robot");
    };
    // const interval = setInterval(() => {
    //   console.log(1);
    // }, 1500);

    // if (messageList.length !== 0) {
    //   clearInterval(interval);
    // }
  }, [messageList]);

  return (
    <div className="App">
      <header className="App-header">{myText}
        {messageList.map(({ text, author }, index) => (
          <Message text={text} key={index} author={author} />
        ))}
        <Form onSubmit={handleAddMessage} />
      </header>
    </div>
  );
}

export default App;
