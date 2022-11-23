const ChatHeader = () => {
    return (
        <div className="chat__header">
            <img src="/images/avatar.jpg" className="avatar w55 h55 online" alt="Avatar" />

            <div className="chat__name-container">
                <span className="chat__user-name">
                    dizzliker
                </span>
            </div>

            <div className="chat__btn-more-options w55 h55">
                <div className="chat__more-option-circle"></div>
                <div className="chat__more-option-circle"></div>
                <div className="chat__more-option-circle"></div>
            </div>
        </div>
    );
};

export default ChatHeader;