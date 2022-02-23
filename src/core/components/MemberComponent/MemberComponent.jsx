import React, {useEffect} from 'react';
import {TaskText, TaskItem, Wrapper, Item, Avatar} from './MemberComponentStyles'
import {deleteUsers} from "../../../services/api/deleteUser";
import {TrashIcon} from "../../../shared/icons/icons";

const MemberComponent = (props) => {
const avatars =
    ['https://clck.ru/btFE7', 'https://clck.ru/btFET',
        'https://clck.ru/btFFP', 'https://clck.ru/btFFp', 'https://clck.ru/btFG7', 'https://clck.ru/btFGK',
        'https://clck.ru/btFKC', 'https://clck.ru/btFKd']
    const delUser = (id) => {
        deleteUsers(id);
    }
    const rand = () => {
        let num = Math.floor(Math.random() * 8);
        return num;
    }
    useEffect(() => {
        console.log('rerender')
    }, [delUser]);
    return (
        <div>
            <Wrapper>
                <Item>
                    <div className="avatar"><Avatar
                        src={avatars[rand()]}
                        alt=""/></div>
                    <div className="name" style={{paddingLeft: '10px'}}>{props.name}</div>
                </Item>
                <Item>{props.email}</Item>
                <TaskItem><TaskText>{props.tasks}</TaskText></TaskItem>
                <div onClick={() => delUser(props.id)}
                     style={{cursor: 'pointer', width: '50px', height: '50px'}} className="delete"><TrashIcon/></div>
            </Wrapper>
        </div>
    );}

export default MemberComponent;