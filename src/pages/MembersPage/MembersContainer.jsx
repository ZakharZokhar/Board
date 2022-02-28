import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import MemberComponent from "../../core/components/MemberComponent/MemberComponent";
import {Legend, Wrapper, Header, Title, Titles, ExternalWrap, TitlesEl, FilterButton} from "./styles";
import {ExpandIcon} from "../../shared/icons/icons";
import {FilterBar} from "../../core/components/FilterBar";
import { fetchUsers } from "./redux/actions";

const MembersContainer = () => {
    const dispatch = useDispatch();
    const [showFilter, setShowFilter] = useState(false)
    const toggleFilter = () => {
        setShowFilter(!showFilter);
    };
    useEffect(() => {
        dispatch(fetchUsers());
    }, []);
    const memberCopy = useSelector((state) => state.users);
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
                <div className="filter" onClick={toggleFilter}>
                    <FilterButton>Show filter</FilterButton>
                </div>
            </Header>
        </Wrapper>
            { showFilter? <div style={{height: 'auto'}}><FilterBar/></div> : null }
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
