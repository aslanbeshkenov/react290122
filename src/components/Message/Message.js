import './Message.css';

export const Message = ({ text }) => {
    return (
        <h3 className="Message">
            Message, {text}
        </h3>
    );
};
