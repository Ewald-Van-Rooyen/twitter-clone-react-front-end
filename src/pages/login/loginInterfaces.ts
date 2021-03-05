export interface LoginInterface {
    username: string;
    password: string;
}

export interface LoginPropsInterface {
    onSubmitClickCallback: () => void;
}
