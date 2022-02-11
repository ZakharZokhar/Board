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
import {SidebarWrapper, SidebarList,SidebarListItem} from './SidebarStyles'

export default function Sidebar() {
    return (
        <SidebarWrapper>
                <SidebarList>
                    <SidebarListItem>
                        <ViewGridIcon className="sidebarIcon"/>
                        <Link to='/boards' style={{textDecoration:"none"}}>
                          <span className="sidebarListItemText">All boards</span>
                        </Link>
                    </SidebarListItem>
                    <SidebarListItem>
                    <PlusIcon className="sidebarIcon"/>
                        <span className="sidebarListItemText">New board</span>
                    </SidebarListItem>
                    <SidebarListItem>
                        <GearIcon className="sidebarIcon"/>
                        <span className="sidebarListItemText">Settings</span>
                    </SidebarListItem>
                    <hr/>
                    <li className="sidebarCurrent">
                        <span>CURRENT BOARD MENU</span>
                    </li>
                    <SidebarListItem>
                        {/* <KanbanIcon className={"sidebarIcon"}/>*/}
                        <ViewBoardsIcon className="sidebarIcon"/>
                        <span className="sidebarListItemText">Kanban</span>
                    </SidebarListItem>
                    <SidebarListItem>
                        <UserCircleIcon className="sidebarIcon"/>
                        <span className="sidebarListItemText">Members</span>
                    </SidebarListItem>
                    <SidebarListItem>
                        <ChartBarIcon className="sidebarIcon"/>
                        <span className="sidebarListItemText">Statistics</span>
                    </SidebarListItem>
                </SidebarList>
        </SidebarWrapper>
    );
}