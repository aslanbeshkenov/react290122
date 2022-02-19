import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Chat from "../Chat/chat";
import { Chats } from "../Chats/chats";
import { Profile } from "../Profile/profile";

const Home = () => <h2>Home page</h2>;


export const Router = () => {
    return (
        <BrowserRouter>
            <div><Link to="/">Home</Link></div>
            <div><Link to="/chats">Chats</Link></div>
            <div><Link to="/profile">My Profile</Link></div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/chats" element={<Chats />}>
                    <Route path=":chatId" element={<Chat />} />
                </Route>
                <Route path="*" element={<h2>404 Not page</h2>} />
            </Routes>
        </BrowserRouter>
    );
};
