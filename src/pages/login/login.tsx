import React, {useState} from "react";
import {useFormik} from "formik";

import {LoginInterface, LoginPropsInterface} from "./loginInterfaces";
import loginValidationSchema from "./loginValidationSchema";

import AuthenticationService from "../../services/authenticationService";
import Loader from "../../components/loader/loader";

import "./login.styles.scss";
import {UserInterface} from "../../interfaces/userInterface";
import {useDispatch} from "react-redux";
import {setActiveUser} from "../../redux/actions/user/userActions";

/**
 * Login uses Formik and Yup to validate the login form
 * Both username and password are required, Formik enforced
 * Password requires a length of 4.
 * In essence the password is just fluff here, I only match on username
 * @param props:LoginPropsInterface callback function to hide the login screen
 * @constructor
 */
const Login = (props: LoginPropsInterface) => {

    const [showLoader, setShowLoader] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);

    const dispatch = useDispatch();

    const formik = useFormik<LoginInterface>({
        initialValues: {
            username: "",
            password: ""
        },
        validationSchema: loginValidationSchema,
        onSubmit: (values: LoginInterface) => {
            setShowLoader(true);

            // Simulated user authentication
            AuthenticationService.mathUsers(values.username)
                .then((user: UserInterface) => {
                    if (user) {
                        dispatch(setActiveUser(user));
                        props.onSubmitClickCallback();
                    } else {
                        setShowErrorMessage(true);
                    }
                    setShowLoader(false);
                })
                .catch(error => {
                    // I would not use console logging in a production app
                    console.error(error);
                    setShowErrorMessage(true);
                    setShowLoader(false);
                });
        }
    });

    return (<>
            <main className="main">
                <div className="button-twitter"/>
                <form onSubmit={formik.handleSubmit} className="login">
                    <svg className="login-sides">
                        <line className="top-right first" x1="50%" x2="100%" y1="0" y2="0"/>
                        <line className="top-left first" x1="50%" x2="0" y1="0" y2="0"/>
                        <line className="right second" x1="100%" x2="100%" y1="0" y2="100%"/>
                        <line className="left second" x1="0" x2="0" y1="0" y2="100%"/>
                        <line className="bottom-left third" x1="0" x2="50%" y1="100%" y2="100%"/>
                        <line className="bottom-right third" x1="100%" x2="50%" y1="100%" y2="100%"/>
                    </svg>
                    <fieldset className="login-fieldset">
                        <input type="text"
                               value={formik.values.username}
                               onChange={formik.handleChange}
                               placeholder="Username"
                               name="username"
                               className="login-fieldset-field"
                               autoComplete="username"/>
                        {formik.errors.username ?
                            <div id="usernameErrorMessage"
                                 className="error-message-container">{formik.errors.username}</div> : null}

                        <input type="password"
                               value={formik.values.password}
                               onChange={formik.handleChange}
                               placeholder="Password"
                               name="password"
                               className="login-fieldset-field"
                               autoComplete="current-password"/>
                        {formik.errors.password ?
                            <div id="passwordErrorMessage"
                                 className="error-message-container">{formik.errors.password}</div> : null}

                        <button type="submit" className="login-fieldset-submit">
                            Log In
                        </button>

                        {showErrorMessage &&
                        <div id="serverErrorMessage" className="error-message-container">Incorrect user details</div>}
                    </fieldset>
                </form>
            </main>
            {showLoader && <Loader/>}
        </>
    );
};

export default Login;
