import { Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/LoginPage/LoginPage';
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage';
import AllboardPage from '../pages/AllboardPage';
import Welcome from './components/Welcome';

const Router = () => (
  <Routes>
    <Route path="/" element={Welcome} />
    <Route path="/auth" element={<LoginPage />} />
    <Route path="/reg" element={<RegistrationPage />} />
    <Route path="/boards" element={<AllboardPage />} />
  </Routes>
);

export default Router;
