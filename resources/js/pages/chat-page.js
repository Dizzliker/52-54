import Sidebar from "../components/sidebar";
import Chat from "../components/chat";

const ChatPage = () => {
    return (
        <>
            <Sidebar />
            <div className="chat">
                <Chat />
            </div>
        </>
    );
};

export default ChatPage;