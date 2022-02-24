import React from 'react';

import MemberComponent from "../../core/components/MemberComponent/MemberComponent";
import GetUsers from "../../services/api/getUsers";
import {Legend, Wrapper, Header, Title, Titles, ExternalWrap, TitlesEl} from "./styles";
import {ExpandIcon} from "../../shared/icons/icons";


const MembersContainer = () => {
    let members = GetUsers();
    const memberCopy = [...members];
    const nameLength = (e) => {
        if (e.length > 35) {
            return e.substring(35, -35) + '...'
        } else {
            return e;
        }
    };
    return (
        <ExternalWrap>
        <Wrapper>
            <Header>
                <Title><h1>Members <span style={{fontWeight: '400'}}>of Big board </span></h1><ExpandIcon/>
                </Title>
                <div className="filter">
                    <button className='whiteButton' style={{margin: '10px'}}>Show filter</button>
                </div>
            </Header>
        </Wrapper>
            <Legend>
                <hr/>
                <Titles>
                    <TitlesEl>Name</TitlesEl>
                    <TitlesEl>Email</TitlesEl>
                    <TitlesEl>Tasks</TitlesEl>
                    <TitlesEl></TitlesEl>
                </Titles>
                <hr/>

            </Legend>
            {memberCopy.map((i) => <MemberComponent key={i + Math.random()} name={nameLength(i.name)}
                                                    email={nameLength(i.email)}
                                                    tasks={Math.floor(Math.random() * (4 - 1)) + 1} id={i._id}/>)}

        </ExternalWrap>
    )
};

export default MembersContainer;