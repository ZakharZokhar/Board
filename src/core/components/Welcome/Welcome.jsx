import React from 'react';

import Logo from '../../../shared/LogoAsperiod.svg';
import {
    CenterLayout, TextWrapper,
} from './WelcomeStyles';

export const Welcome = () => (
    <CenterLayout>
        <img style={{height: '15%', width: '15%', marginTop: '3em'}} src={Logo} alt="Logo"/>
        <TextWrapper>
            Manage your tasks wherever you want
        </TextWrapper>
    </CenterLayout>
);
