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
import { togglePopUpOn } from '../AllProjectsContainer/redux/actions';
import { useDispatch } from 'react-redux';

export default function Sidebar() {
    const showPopUp = () => {
        dispatch(togglePopUpOn);
    };
    const dispatch = useDispatch();

    return (
        <SidebarWrapper>
            <SidebarList>
                <li>
                    <ViewGridIcon />
                    <Link to='/projects'>
                        <span>All projects</span>
                    </Link>
                </li>
                <li>
                    <PlusIcon1 ml={13.5} mr={13.5} />
                    <span onClick={showPopUp}>New project</span>
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