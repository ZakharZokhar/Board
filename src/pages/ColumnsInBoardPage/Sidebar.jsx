import {Link} from 'react-router-dom';
import {
    ViewGridIcon,
    UserCircleIcon,
    PlusIcon1
} from '../../shared/icons/icons';
import { useEffect } from 'react';
import {SidebarWrapper, SidebarList} from '../../core/components/Sidebar/SidebarStyles'
import { useDispatch } from 'react-redux';
import {fetchColumnsByBoardId, togglePopUpColumnOn} from "../../core/components/Columns/redux/actions";

export default function Sidebar({projectId, boardId}) {
    const dispatch = useDispatch();

    const showPopUp = () => {
        dispatch(togglePopUpColumnOn);
    };
    useEffect(() => {
        dispatch(fetchColumnsByBoardId(boardId));
    }, []);
    return (
        <SidebarWrapper>
            <SidebarList>
                <li>
                    <ViewGridIcon />
                    <Link to={`/projects/${projectId}`}>
                        <span>Back to boards</span>
                    </Link>
                </li>
                <li>
                    <PlusIcon1 />
                    <span onClick={showPopUp}>Add new column</span>
                </li>
                <li>
                    <UserCircleIcon/>
                    <Link to='/members'><span>Members</span></Link>
                </li>
            </SidebarList>
        </SidebarWrapper>
    );
}