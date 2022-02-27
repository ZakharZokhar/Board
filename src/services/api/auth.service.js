import axios from 'axios';

const API_URL = 'http://173.212.214.70:3004/';

const register = (email, name, password) => axios.post(`${API_URL}auth/signup`, {
  email,
  name,
  password,
}).then((response) => {
  console.log(response);
  // login(email, password);
  localStorage.setItem('userName', name);
  return response.data;
});

const login = (email, password) => axios
  .post(`${API_URL}auth/login`, {
    email,
    password,
  })
  .then((response) => {
    console.log(response);
    if (response.data.token) {
      localStorage.setItem('tokens', JSON.stringify(response.data));
    }
    return response.data;
  });


export default {
  register,
  login,
};
