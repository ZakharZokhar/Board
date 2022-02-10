import Topbar from '../../core/components/Topbar/Topbar'
import Sidebar from '../../core/components/Sidebar/Sidebar'
import Feed from '../../core/components/Feed/Feed'
import './style.css'

export default function Home () {
    return(
        <div >
            <Topbar/>
            <div className="homeContainer">
            <Sidebar/>
            <Feed/>
            </div>
        </div>
);
}