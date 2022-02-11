import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../shared/LogoAsperiod.svg';
import {
    Button, ButtonText, ButtonWrapper, CenterLayout, TextWrapper,
} from './WelcomeStyles';

export const Welcome = () => (
    <CenterLayout>
        <img src={Logo} alt="Logo"/>
        <TextWrapper>asperiod - it’s the best site in the world</TextWrapper>
        <ButtonWrapper>
            <Link to="/reg">
            <Button theme="blue">
                <ButtonText color="#ffffff">Continue</ButtonText>
            </Button>
            </Link>
            <Link to="/auth">
            <Button theme="white">
                <ButtonText style={{color: '#000'}}>Sign in</ButtonText>
            </Button>
            </Link>
        </ButtonWrapper>
    </CenterLayout>
);
