import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://173.212.214.70:3004/';
const getPublicContent = () => axios.get(`${API_URL}all`);
const getUserBoard = () => axios.get(`${API_URL}user`, { headers: authHeader() });
const getModeratorBoard = () => axios.get(`${API_URL}mod`, { headers: authHeader() });
const getAdminBoard = () => axios.get(`${API_URL}admin`, { headers: authHeader() });
const getUsers = () => axios.get(`${API_URL}users`, authHeader()).then((response) => response);
const getProjectById = (id) => axios.get(`${API_URL}projects/${id}`, authHeader()).then((response) => response);
export {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
  getUsers,
  getProjectById,
};
