import React from 'react';
import {wrapper} from './MemberComponent.module.css'

const MemberComponent = (props) => (
        <div>
            <div className={wrapper}>
                <div className="person">
                    <div className="avatar"></div>
                    <div className="name">{props.name}</div>
                </div>
                <div className="email">{props.email}</div>
                <div className="tasks">{props.tasks}</div>
                <div style={{cursor: 'pointer'}} className="delete">{props.id}</div>
            </div>
        </div>
    );

export default MemberComponent;