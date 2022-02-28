import { fetchUsersFromServer, deleteUserInMembers } from "./actions";

function usersReducer(state = [], action) {
    switch (action.type) {
        case fetchUsersFromServer.type:
            return action.payload

        case deleteUserInMembers.type:
            return state.filter((user) => user._id !== action.payload)

        default:
            return [
                ...state,
            ];
    }
}

export default usersReducer;
