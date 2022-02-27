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
const updateUserProjectsIds = (userId, projectIdsWithNew) => axios.put(
    `${API_URL}users/update/${userId}`,
    {projectIds: projectIdsWithNew},
    authHeader()).then((response) => response);
const updateUserBoardIds = (userId, boardIdsWithNew) => axios.put(
    `${API_URL}users/update/${userId}`,
    {boardIds: boardIdsWithNew},
    authHeader()).then((response) => response);
const getUserById = (id) => axios.get(`${API_URL}users/${id}`, authHeader()).then((response) => response);
const getBoardById = (id) => axios.get(`${API_URL}boards/${id}`, authHeader()).then((response) => response);
const getProjects = () => axios.get(`${API_URL}projects`, authHeader()).then((response) => response);
const deleteProjectById = (id) => axios.delete(
    `${API_URL}projects/delete/${id}`,
    authHeader()).then((response) => response);
const getBoards = () => axios.get(`${API_URL}boards`, authHeader()).then((response) => response);
const createBoard = (board) => axios.post(
    `${API_URL}boards/create`,
    board,
    authHeader()).then((response) => response);
const addBoardIdToColumn = (id, boardIdsWithNew) => axios.put(
    `${API_URL}statuses/update/${id}`,
    boardIdsWithNew,
    authHeader()).then((response) => response);
const createColumn = (column) => axios.post(
    `${API_URL}statuses/create`,
    column,
    authHeader()).then((response) => response);
const deleteColumnById = (id) => axios.delete(
    `${API_URL}statuses/delete/${id}`,
    authHeader()).then((response) => response);
const deleteBoardById = (id) => axios.delete(
    `${API_URL}boards/delete/${id}`,
    authHeader()).then((response) => response);
const getColumns = () => axios.get(`${API_URL}statuses`, authHeader()).then((response) => response);
const getTasks = () => axios.get(`${API_URL}tasks`, authHeader()).then((response) => response);
const createNewTask = (task) => axios.post(
    `${API_URL}tasks/create`,
    task,
    authHeader()).then((response) => response);
const updateTaskColumnId = (id, columnId) => axios.put(
    `${API_URL}tasks/update/${id}`,
    {statusId: columnId},
    authHeader()).then((response) => response
);
const updateTaskDescription = (id, newDescription) => axios.put(
    `${API_URL}tasks/update/${id}`,
    {description: newDescription},
    authHeader()).then((response) => response
);
const updateTaskName = (id, newName) => axios.put(
    `${API_URL}tasks/update/${id}`,
    {name: newName},
    authHeader()).then((response) => response
);
const updateTaskAssigned = (id, newAssignedId) => axios.put(
    `${API_URL}tasks/update/${id}`,
    {assignedTo: newAssignedId},
    authHeader()).then((response) => response
);
const updateTaskTime = (id, newTime) => axios.put(
    `${API_URL}tasks/update/${id}`,
    {elapsedTime: newTime},
    authHeader()).then((response) => response
);
const deleteTask = (id) => axios.delete(
    `${API_URL}tasks/delete/${id}`,
    authHeader()).then((response) => response);

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
  getProjects,
  deleteProjectById,
  getBoards,
  createBoard,
  deleteBoardById,
  updateUserBoardIds,
  getColumns,
  createColumn,
  addBoardIdToColumn,
  deleteColumnById,
  getTasks,
  createNewTask,
  getBoardById,
  updateTaskColumnId,
  updateTaskDescription,
  updateTaskName,
  updateTaskAssigned,
  deleteTask,
  updateTaskTime,
};
