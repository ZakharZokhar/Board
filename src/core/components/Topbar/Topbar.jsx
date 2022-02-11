import './style.css';
import {Link} from 'react-router-dom';

export default function Topbar(){
    return(
        <div className={"topbarContainer"}>
            <div className={"topbarLeft"}>
                <img className={"topbarLogo"} src="/assets/a1png.png" alt=""/>
                <Link to="/">
                    <div className={"topbarAsperiod"}>asperiod</div>
                </Link>
            </div>
            <div className={"topbarRight"}>
                <img className="topbarImage" src="/assets/person/1.jpeg" alt=""/>
                <div className={"ropbarRadcliffe"} >Daniel Radcliffe</div>
            </div>
        </div>
    );
}