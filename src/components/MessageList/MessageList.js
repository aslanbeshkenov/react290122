import { Message } from "../Message/Message";

export const MessageList = ({ messageList }) =>
    messageList.map(({ text, author }, index) => (
        <Message text={text} key={index} author={author} />
    ));
