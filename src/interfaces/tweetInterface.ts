export interface TweetInterface {
    id: number;
    tweet: string;
    claps: number;
    date: string;
    userId: number;
}

export interface TweetPostInterface {
    tweet: string;
    claps: number;
    date: string;
    userId: number;
}

export interface TweetPutInterface {
    id: number;
    claps?: number;
}

