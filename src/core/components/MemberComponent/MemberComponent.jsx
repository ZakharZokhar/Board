import React from 'react';
import {TaskText, TaskItem, Wrapper, Item, Avatar, UserName, TrashContainer} from './MemberComponentStyles'
import {deleteUsers} from "../../../services/api/deleteUser";
import {TrashIcon} from "../../../shared/icons/icons";

const MemberComponent = (props) => {
    const avatars =
        ['https://clck.ru/btFE7', 'https://clck.ru/btFET',
            'https://clck.ru/btFFP', 'https://clck.ru/btFFp',
            'https://clck.ru/btFG7', 'https://clck.ru/btFGK',
            'https://clck.ru/btFKC', 'https://clck.ru/btFKd']

    const delUser = (id) => {
        deleteUsers(id);
    }
    const rand = () => {
        let num = Math.floor(Math.random() * 8);
        return num;
    }
    return (
        <div>
            <Wrapper>
                <Item>
                    <Avatar
                        src={avatars[rand()]}
                        alt=""/>
                    <UserName>{props.name}</UserName>
                </Item>
                <Item>{props.email}</Item>
                <TaskItem><TaskText>{props.tasks}</TaskText></TaskItem>
                <TrashContainer onClick={() => delUser(props.id)}><TrashIcon/></TrashContainer>
            </Wrapper>
        </div>
    );
}

export default MemberComponent;