import {Link} from 'react-router-dom';
import {LogoutWrapper, TopbarContainer, TopbarLeft, TopbarRight, UserNameStyled} from "./TopbarStyles";
import {getUserById} from "../../../services/api/user.service";
import Logout from "../Logout/Logout";
import {useState} from "react";
import {ExpandIcon} from "../../../shared/icons/icons";

const Default = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhEbl4Y6lv79GxTlgsqGs5C0iI27aZFhs75w&usqp=CAU';

export const getUserData = async (id = undefined, args = ["avatarLink", "name", "email"]) => {
  const userId = id !== undefined ? id : JSON.parse(localStorage.getItem('tokens'))['userId'];
  const {data} = await getUserById(userId);
  const userData = Object.entries(data).filter(([key, _]) => args.some((arg) => key === arg))
  return Object.fromEntries(userData)
}

function UserName() {
  getUserData().then((res) => {
    localStorage.setItem('userAvatar', res['avatarLink'] || localStorage.getItem('userAvatar') || Default) //userAvatar
    let name = res['name'] || localStorage.getItem('userName') // set username
    if (!name) name = res['email'].split("@")[0] // if name is undefined. this line can be deleted
    localStorage.setItem('userName', name || "undefined")
  })
  const userName = localStorage.getItem('userName');
  const userAvatar = localStorage.getItem('userAvatar');
  return [userName, userAvatar];
}


export default function Topbar() {
  const [userName, userAvatar] = UserName();
  const [showLogout, setShowLogout] = useState(false);
  return (
    <TopbarContainer>
      <TopbarLeft>
        <img src="/assets/a1png.png" alt=""/>
        <Link to="/">
          <div>asperiod</div>
        </Link>
      </TopbarLeft>
      <TopbarRight>
        <img src={userAvatar} alt=""/>
        <UserNameStyled>{userName}</UserNameStyled>
        <LogoutWrapper onMouseEnter={() => {setShowLogout(true)}} onMouseLeave={() => {setShowLogout(false)}}>
        <ExpandIcon />
        {(showLogout) ? <Logout /> : <span></span>}
        </LogoutWrapper>
      </TopbarRight>
    </TopbarContainer>
  );
}
