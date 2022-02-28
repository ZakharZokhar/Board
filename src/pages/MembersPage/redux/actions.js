import { getUsers } from "../../../services/api/user.service"

export const fetchUsersFromServer = { type: 'FETCH_USERS_FROM_SERVER' };

export const deleteUserInMembers = { type: 'DELETE_USER_IN_MEMBERS' };

export const fetchUsers = () => async (dispatch) => {
    try {
        const { data } = await getUsers()
        dispatch({...fetchUsersFromServer, payload: data});
    } catch (error) {
        console.log(error)
    }
};
