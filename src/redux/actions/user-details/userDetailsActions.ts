// I could have joined the users and usersDetails entities, I fear for the size of the final object
import {UserDetailInterface} from "../../../interfaces/userDetailInterface";
import {USERS_DETAILS_ACTIONS} from "./userDetailsConstants";

export const setUsersDetails = (users: Array<UserDetailInterface>) => ({
    type: USERS_DETAILS_ACTIONS.FETCH_USERS_DETAILS,
    payload: users
});
