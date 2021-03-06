import axios from "axios";
import {UserInterface} from "../interfaces/userInterface";

class AuthenticationService {

    /**
     * Fetches all users
     * Attempts to match the username, returns the lookup result
     * Assuming username's are unique
     * @param username
     */
    async mathUsers(username: string): Promise<UserInterface> {
        const loginUrl = `${process.env.REACT_APP_BASE_APIE_URL}users`;
        const {data} = await axios.get<Array<UserInterface>>(loginUrl);

        return data.filter((user) => {
            return user.username === username;
        })[0];


    }
}

export default AuthenticationService;

