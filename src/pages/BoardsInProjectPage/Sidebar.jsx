import {Link} from 'react-router-dom';
import {
    ViewGridIcon,
    UserCircleIcon,
    PlusIcon1
} from '../../shared/icons/icons';
import {SidebarWrapper, SidebarList} from '../../core/components/Sidebar/SidebarStyles'
import { useDispatch } from 'react-redux';
import {togglePopUpBoardOn} from "../../core/components/Boards/redux/actions";

export default function Sidebar() {
    const showPopUp = () => {
        dispatch(togglePopUpBoardOn);
    };
    const dispatch = useDispatch();

    return (
        <SidebarWrapper>
            <SidebarList>
                <li>
                    <ViewGridIcon />
                    <Link to='/projects'>
                        <span>Back to projects</span>
                    </Link>
                </li>
                <li>
                    <PlusIcon1 />
                    <span onClick={showPopUp}>New board</span>
                </li>
                <li>
                    <UserCircleIcon/>
                    <span>Members</span>
                </li>
            </SidebarList>
        </SidebarWrapper>
    );
}