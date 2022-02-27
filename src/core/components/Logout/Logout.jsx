import React from 'react';
import {LogoutButton} from "./LogoutStyles";
import {useHistory} from "react-router-dom";

const Logout = () => {
    const history = useHistory();
    return (
        <LogoutButton onClick={() => {
            localStorage.removeItem('tokens');

            history.push("/")
        }}>
            Logout
        </LogoutButton>
    )};


export default Logout;