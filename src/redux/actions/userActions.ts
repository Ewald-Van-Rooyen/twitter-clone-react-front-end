import {UserInterface} from "../../interfaces/userInterface";
import {USER_ACTIONS} from "./userConstants";

export const setActiveUser = (user: UserInterface) => ({
    type: USER_ACTIONS.SET_ACTIVE_USER,
    payload: user
});
