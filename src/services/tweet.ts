import axios from "axios";

class TweetsService {

    getAllTweets = async (url: string) => {
        const response = await axios.get(url);
        return response.data
    }
}

