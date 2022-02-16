import {Link} from 'react-router-dom';
import {TopbarContainer, TopbarLeft,TopbarRight} from "./TopbarStyles";
const link='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhEbl4Y6lv79GxTlgsqGs5C0iI27aZFhs75w&usqp=CAU';
function UserName(){
    localStorage.setItem('userName','Daniel Radcliffe')
    localStorage.setItem('userAvatar',link)
    const userName=localStorage.getItem('userName');
    const userAvatar=localStorage.getItem('userAvatar');
    console.log(userName);
    console.log(userAvatar);
    return [userName,userAvatar];
}

export default function Topbar(){
    const [userName,userAvatar]=UserName();
    return(
        <TopbarContainer>
            <TopbarLeft>
                <img src="/assets/a1png.png" alt=""/>
                <Link to="/">
                    <div >asperiod</div>
                </Link>
            </TopbarLeft>
            <TopbarRight>
                <img src={userAvatar} alt=""/>
                <div>{userName}</div>
            </TopbarRight>
        </TopbarContainer>
    );
}