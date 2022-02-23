import {Link} from 'react-router-dom';
import {
    ViewGridIcon,
    UserCircleIcon,
    PlusIcon1
} from '../../../shared/icons/icons';
import {SidebarWrapper, SidebarList} from './SidebarStyles'
import { togglePopUpOn } from '../AllProjectsContainer/redux/actions';
import { useDispatch } from 'react-redux';

export default function Sidebar(params) {
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
                    <UserCircleIcon/>
                    <span>Members</span>
                </li>
            </SidebarList>
        </SidebarWrapper>
    );
}