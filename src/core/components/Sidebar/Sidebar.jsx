import './style.css';
import {
    ViewGridIcon,
    GearIcon,
    UserCircleIcon,
    ChartBarIcon,
    ViewBoardsIcon,
    PlusIcon
} from '../../../shared/icons/icons';

{/*function KanbanIcon() {
    return <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="7" height="9" rx="1" stroke="#BFBFBF" stroke-width="2"/>
        <rect x="12" y="10" width="7" height="9" rx="1" stroke="#BFBFBF" stroke-width="2"/>
        <rect x="12" y="1" width="7" height="5" rx="1" stroke="#BFBFBF" stroke-width="2"/>
        <rect x="1" y="14" width="7" height="5" rx="1" stroke="#BFBFBF" stroke-width="2"/>
    </svg>
}*/
}
export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarlistItem">
                        <ViewGridIcon className="sidebarIcon"/>
                        <span className="sidebarListItemText">All boards</span>
                    </li>
                    <li className="sidebarlistItem">
                        <PlusIcon className="sidebarIcon"/>
                        <span className="sidebarListItemText">New board</span>
                    </li>
                    <li className="sidebarlistItem">
                        <GearIcon className="sidebarIcon"/>
                        <span className="sidebarListItemText">Settings</span>
                    </li>
                    <hr/>
                    <li className="sidebarCurrent">
                        <span>CURRENT BOARD MENU</span>
                    </li>
                    <li className="sidebarlistItem">
                        {/* <KanbanIcon className={"sidebarIcon"}/>*/}
                        <ViewBoardsIcon className="sidebarIcon"/>
                        <span className="sidebarListItemText">Kanban</span>
                    </li>
                    <li className="sidebarlistItem">
                        <UserCircleIcon className="sidebarIcon"/>
                        <span className="sidebarListItemText">Members</span>
                    </li>
                    <li className="sidebarlistItem">
                        <ChartBarIcon className="sidebarIcon"/>
                        <span className="sidebarListItemText">Statistics</span>
                    </li>
                </ul>
            </div>
        </div>
    );

}