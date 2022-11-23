const SidebarUserList = () => {
    return (
        <div className="sidebar__users-container">
            <div className="sidebar__user-container">
                <img src="/images/avatar.jpg" className="sidebar__user-avatar online" alt="Avatar" />
                <div className="sidebar__user-message">
                    <div className="sidebar__user-info">
                        <span className="sidebar__user-name">dizzliker</span>
                        <span className="sidebar__msg-time">12:43</span>
                    </div>
                    <span className="sidebar__msg-text">Привет как дела</span>
                </div>
            </div>
            
            <div className="sidebar__user-container">
                <img src="/images/avatar.jpg" className="sidebar__user-avatar" alt="Avatar" />
                <div className="sidebar__user-message">
                    <div className="sidebar__user-info">
                        <span className="sidebar__user-name">dizzliker</span>
                        <span className="sidebar__msg-time">12:43</span>
                    </div>
                    <span className="sidebar__msg-text">Привет как дела</span>
                </div>
            </div>
        </div>
    );
};

export default SidebarUserList;