const SidebarHeader = () => {
    return (
        <div className="sidebar__header">
            <div className="sidebar__settings">
                <img src="/images/settings.svg" alt="settings" />
            </div>
            <div className="sidebar__search">
                <input type="text" className="input-search" name="search" placeholder="Поиск"/>
            </div>
        </div>
    );
};

export default SidebarHeader;