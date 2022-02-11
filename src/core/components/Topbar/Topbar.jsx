import {Link} from 'react-router-dom';
import {TopbarContainer, TopbarLeft,TopbarRight} from "./TopbarStyles";

export default function Topbar(){
    return(
        <TopbarContainer>
            <TopbarLeft>
                <img src="/assets/a1png.png" alt=""/>
                <Link to="/">
                    <div className={"topbarAsperiod"}>asperiod</div>
                </Link>
            </TopbarLeft>
            <TopbarRight>
                <img src="/assets/person/1.jpeg" alt=""/>
                <div>Daniel Radcliffe</div>
            </TopbarRight>
        </TopbarContainer>
    );
}