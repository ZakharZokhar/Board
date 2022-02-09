import { get } from './base';
import { apiUrl, apiBoardUrl } from './base/axios';

/* eslint-disable-next-line max-len */
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDJiM2QxNDY0MWU2MmEyZDQ4OTJjZCIsImlhdCI6MTY0NDQyODg0NiwiZXhwIjoxNjQ0NDMwNjQ2fQ.nn_JHMn5feMoG0skv33vA2men8th5flpYzBQSIDEwvU';

export default {
  getRandomDogImg: () => get(`${apiUrl}/image/random`),
  getUsers: () => get(`${apiBoardUrl}/users`, { headers: { Authorization: `Bearer ${token}` } }),
  getProjectById: (id) => get(`${apiBoardUrl}/project/${id}`, { headers: { Authorization: `Bearer ${token}` } }),
};
