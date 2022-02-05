import './Message.css';

export const Message = ({ text, author }) => {
    return (
        <p className="Message">
            <span>{author}:</span> {text}
        </p>
    );
};
