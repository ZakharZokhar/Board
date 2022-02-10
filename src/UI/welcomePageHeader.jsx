import React from 'react';
import { Link } from 'react-router-dom';
import WhiteButton from './Buttons/whiteButton';
import BlueButton from './Buttons/blueButton';

const WelcomePageHeader = () => (
  <div>
    <div style={{
      background: '#F2F2F2', paddingTop: '7px', width: '100%', height: '56px',
    }}
    >
      <div style={{ marginRight: '50px', display: 'flex', justifyContent: 'right' }}>
        <Link to="/auth">
          <WhiteButton title="Sign In" />
        </Link>
        <Link to="/reg">
          <BlueButton title="Sign Up" />
        </Link>
      </div>

    </div>
  </div>
);

export default WelcomePageHeader;
