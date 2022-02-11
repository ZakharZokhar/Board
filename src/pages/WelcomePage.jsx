import React from 'react';
import {Welcome} from '../core/components/Welcome';
import WelcomePageHeader from '../UI/welcomePageHeader';

const WelcomePage = () => (
  <div>
    <WelcomePageHeader />
      <Welcome />
  </div>
);

export default WelcomePage;
