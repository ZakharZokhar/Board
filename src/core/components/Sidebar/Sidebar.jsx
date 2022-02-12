import {Link} from 'react-router-dom';
import {
    ViewGridIcon,
    GearIcon,
    UserCircleIcon,
    ChartBarIcon,
    ViewBoardsIcon,
    PlusIcon1
} from '../../../shared/icons/icons';
import {SidebarWrapper, SidebarList, SidebarCurrent} from './SidebarStyles'

export default function Sidebar() {
    return (
        <SidebarWrapper>
            <SidebarList>
                <li>
                    <ViewGridIcon />
                    <Link to='/boards'>
                        <span>All boards</span>
                    </Link>
                </li>
                <li>
                    <PlusIcon1 ml={13.5} mr={13.5} />
                    <span>New board</span>
                </li>
                <li>
                    <GearIcon />
                    <span>Settings</span>
                </li>
                <hr/>
                <li>
                    <SidebarCurrent>CURRENT BOARD MENU</SidebarCurrent>
                </li>
                <li>
                    <ViewBoardsIcon/>
                    <span>Kanban</span>
                </li>
                <li>
                    <UserCircleIcon/>
                    <span>Members</span>
                </li>
                <li>
                    <ChartBarIcon />
                    <span>Statistics</span>
                </li>
            </SidebarList>
        </SidebarWrapper>
    );
}