import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://173.212.214.70:3004/';
const getPublicContent = () => axios.get(`${API_URL}all`);
const getUserBoard = () => axios.get(`${API_URL}user`, { headers: authHeader() });
const getModeratorBoard = () => axios.get(`${API_URL}mod`, { headers: authHeader() });
const getAdminBoard = () => axios.get(`${API_URL}admin`, { headers: authHeader() });
const getUsers = () => axios.get(`${API_URL}users`, authHeader()).then((response) => response);
const getProjectById = (id) => axios.get(`${API_URL}projects/${id}`, authHeader()).then((response) => response);
const createProject = (project) => axios.post(
    `${API_URL}projects/create`,
    project,
    authHeader()).then((response) => response);
const updateUserProjectsIds = (userId, newProjectId) => axios.put(
    `${API_URL}users/update/${userId}`,
    {projectIds: [newProjectId]},
    authHeader()).then((response) => response);
const updateUserBoardIds = (userId, newBoardId) => axios.put(
    `${API_URL}users/update/${userId}`,
    {boardIds: [newBoardId]},
    authHeader()).then((response) => response);
const getUserById = (id) => axios.get(`${API_URL}users/${id}`, authHeader()).then((response) => response);
const getBoards = () => axios.get(`${API_URL}boards`, authHeader()).then((response) => response);
const createBoard = (board) => axios.post(
    `${API_URL}boards/create`,
    board,
    authHeader()).then((response) => response);
const addBoardIdToColumn = (id, boardId) => axios.put(
    `${API_URL}statuses/update/${id}`,
    boardId,
    authHeader()).then((response) => response);
const createColumn = (column) => axios.post(
    `${API_URL}statuses/create`,
    column,
    authHeader()).then((response) => response);
const deleteBoardById = (id) => axios.delete(
    `${API_URL}boards/delete/${id}`,
    authHeader()).then((response) => response);
const getColumns = () => axios.get(`${API_URL}statuses`, authHeader()).then((response) => response);
export {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
  getUsers,
  getProjectById,
  createProject,
  updateUserProjectsIds,
  getUserById,
  getBoards,
  createBoard,
  deleteBoardById,
  updateUserBoardIds,
  getColumns,
  createColumn,
  addBoardIdToColumn,
};
