import axios from 'axios';
import authHeader from './auth-header';

const getUsers = () => {
  const apiUrl = 'http://173.212.214.70:3004/users';
  axios.get(apiUrl, authHeader()).then((resp) => {
    console.log(resp);
  });
};

export default getUsers;
