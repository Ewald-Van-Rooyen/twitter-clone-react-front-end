import axios from "axios";
import {UserInterface} from "../interfaces/user";

class AuthenticationService {

    async mathUsers(username: string) {
        const loginUrl = `${process.env.REACT_APP_BASE_APIE_URL}users`;
        const {data} = await axios.get<Array<UserInterface>>(loginUrl);

        const matchedUsers = data.filter((user) => {
            return user.username === username;
        });

        return matchedUsers.length > 0;
    }
}

export default AuthenticationService;

