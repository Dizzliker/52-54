import SidebarHeader from "../sidebar-header";
import SidebarUserList from "../sidebar-user-list";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <SidebarHeader />
            <SidebarUserList />
        </div>
    );
};

export default Sidebar;