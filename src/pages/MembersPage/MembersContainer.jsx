import React from 'react';
import './MembersPage.css'
import MemberComponent from "./MemberComponent";
import GetUsers from "../../services/api/getUsers";


const MembersContainer = () => {
const members = GetUsers();
const memberCopy = [...members];
    for (let arrStr in memberCopy) {
        if (arrStr.length > 40) {
            // arrStr = arrStr.substr(40)
            console.log(arrStr)
        }
    }
console.log(memberCopy)

    const nameLength = (e) => {
        if (e.length > 35) {
            return e.substring(35, -35) + '...'
        } else {
            return e;
        }
    };

    return (
        <div className='wrapper'>
 <div className="header">
     <div className="title"><h1>Members of Big board </h1><img src="" alt=""/>
     </div>
     <div className="filter"><button className='whiteButton'>Show filter</button></div>
 </div>
            <div className="legend">
                <hr/>
                <div className="titles">
                    <span>Name</span>
                    <span>Email</span>
                    <span>Tasks</span>
                    <span></span>
                </div>
                <hr/>
            </div>
{memberCopy.map((i)=> <MemberComponent key={i + Math.random()} name={nameLength(i.name)}
          email={nameLength(i.email)} tasks={Math.floor(Math.random() * (4 - 1)) + 1} id={i._id} />)}
        </div>
    )
    };

export default MembersContainer;