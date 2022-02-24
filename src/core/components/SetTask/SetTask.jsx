import {
    SetTaskWrapper,
    Header,
    Feed,
    Rightbar,
    DivAssigned,
    FeedRightbarWrapper,
    ABold,
    DivTimer,
    DivDescription,
    SpanStyled,
    WhiteButton,
    BlueButton,
    DivJustifyContentRight,
    InputPopUp,
    PopUp,
    ClosePopUpButton
} from './SetTaskStyles'
import {SidebarList} from '../Sidebar/SidebarStyles'
import {
    UserCircleIcon,
    DatesIcon,
    MoveIcon,
    DeleteIcon,
    StartTimerIcon,
    PencilIcon,
    CloseIcon
} from '../../../shared/icons/icons';

export default function SetTask() {
    let Member;
    Member = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhEbl4Y6lv79GxTlgsqGs5C0iI27aZFhs75w&usqp=CAU`;
    return (
        <PopUp>
            <SetTaskWrapper>
                <Header>
                    <span>Quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa is</span>
                    <div>
                        <PencilIcon/>
                        <ClosePopUpButton>
                            <CloseIcon />
                        </ClosePopUpButton>
                    </div>
                </Header>
                <FeedRightbarWrapper>
                    <Feed>
                        <DivTimer>
                            <ABold fs={16}>Timer</ABold>
                            <hr/>
                            <div><SpanStyled>Total</SpanStyled><SpanStyled>10d 5h 50m 20s</SpanStyled></div>
                            <hr/>
                            <div><SpanStyled>Today</SpanStyled><SpanStyled fw={600}>3h 25m 34s</SpanStyled></div>
                            <hr/>
                            <DivJustifyContentRight>
                                <WhiteButton>Details</WhiteButton>
                                <BlueButton Width={'100'}>Start timer</BlueButton>
                            </DivJustifyContentRight>
                        </DivTimer>
                        <DivAssigned><ABold fs={16}>Assigned to</ABold>
                            <div>
                                <div><img src={Member} alt=""/>
                                    <span>Daniel Radcliffe</span></div>
                                <PencilIcon/>
                            </div>
                        </DivAssigned>
                        <DivDescription>
                            <ABold fs={16}>Description</ABold>
                            <InputPopUp rows="8" maxlength="2300"
                                        placeholder={'Enter the description of task'}></InputPopUp>
                            <DivJustifyContentRight>
                                <WhiteButton>Undo</WhiteButton>
                                <BlueButton>Save</BlueButton>
                            </DivJustifyContentRight>
                        </DivDescription>
                    </Feed>
                    <Rightbar>
                        <SidebarList>
                            <div><ABold mb={0} ml={15}>Add to card</ABold></div>
                            <li><UserCircleIcon/><span>Assigned to</span></li>
                            <li><DatesIcon/><span>Dates</span></li>
                            <div><ABold mb={0} ml={15}>Actions</ABold></div>
                            <li><MoveIcon/><span>Move</span></li>
                            <li><DeleteIcon/><span>Delete</span></li>
                            <li><StartTimerIcon/><span>Start timer</span></li>
                        </SidebarList>

                    </Rightbar>
                </FeedRightbarWrapper>
            </SetTaskWrapper>
        </PopUp>
    );
}