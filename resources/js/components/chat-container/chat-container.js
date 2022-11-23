const ChatContainer = () => {
    return (
        <div className="chat__container">
            <div className="chat__msg-date-container">
                <span className="chat__msg-date">
                    17 ноября
                </span>
            </div>

            <div className="chat__msg-container inc">
                <img src="/images/avatar.jpg" className="avatar w35 h35 online" alt="Avatar" />
                <div className="chat__msg-text-container">
                    <span className="chat__msg-text">Привет!</span>
                </div>
                <div className="chat__msg-time-container">
                    <span className="chat__msg-time-text">12:34</span>
                </div>
            </div>

            <div className="chat__msg-container out">
                <div className="chat__msg-time-container">
                    <span className="chat__msg-time-text">12:34</span>
                </div>
                <div className="chat__msg-text-container">
                    <span className="chat__msg-text">
                        Привет!!!!
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ChatContainer;