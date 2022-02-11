import { Link } from 'react-router-dom';
import './style.css';
import {
    ViewGridIcon,
    GearIcon,
    UserCircleIcon,
    ChartBarIcon,
    ViewBoardsIcon,
    PlusIcon
} from '../../../shared/icons/icons';


export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarlistItem">
                        <Link to='/boards'>
                            <ViewGridIcon className="sidebarIcon"/>
                            <span className="sidebarListItemText">All boards</span>
                        </Link>
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