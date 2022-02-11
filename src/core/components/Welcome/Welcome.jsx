// import PropTypes from 'prop-types';
import Logo from '../../../shared/LogoAsperiod.svg';
import {
  Button, ButtonText, ButtonWrapper, CenterLayout, Image, TextWrapper,
} from './WelcomeStyles';

function clickMe() {
  // eslint-disable-next-line no-alert
  alert('You clicked me!');
}

function Welcome() {
  return (
    <CenterLayout>
      <Image src={Logo} alt="Logo" width="auto" />
      <TextWrapper>asperiod - it’s the best site in the world</TextWrapper>
      <ButtonWrapper>
        <Button onClick={clickMe} theme="blue">
          <ButtonText color="#ffffff">Continue</ButtonText>
        </Button>
        <Button onClick={clickMe} theme="white">
          <ButtonText style={{ color: '#000' }}>Sign in</ButtonText>
        </Button>
      </ButtonWrapper>

    </CenterLayout>
  );
}

export default Welcome;
