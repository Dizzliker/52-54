const ChatForm = () => {
    return (
        <div className="chat__form-container">
            <form action="#" className="chat__form" method="post">
                <textarea name="messageText" className="chat__form-input" placeholder="Отправить сообщение" id="" />
                <div className="chat__form-attach-container">
                    <img src="/images/attach.svg" alt="Прикрепить" />
                </div>
                <button className="chat__form-btn-submit">
                    <img src="/images/send.svg" alt="Отправить" />
                </button>
            </form>
        </div>
    )
};

export default ChatForm;