import React, {useState} from "react";
import {useFormik} from "formik";

import "./login.styles.scss";

import {LoginInterface, LoginPropsInterface} from "./loginInterfaces";
import loginValidationSchema from "./loginValidationSchema";

import AuthenticationService from "../../services/authentication";
import Loader from "../../components/loader/loader";


const authenticationService = new AuthenticationService();

const Login = (props: LoginPropsInterface) => {

    const [showLoader, setShowLoader] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);

    const formik = useFormik<LoginInterface>({
        initialValues: {
            username: "",
            password: ""
        },
        validationSchema: loginValidationSchema,
        onSubmit: (values: LoginInterface) => {
            setShowLoader(true);
            authenticationService.mathUsers(values.username).then(isValidUser => {
                if (isValidUser) {
                    // TODO update global user here
                    props.onSubmitClickCallback();
                } else {
                    setShowErrorMessage(true);
                }
                setShowLoader(false);
            }).catch(error => console.log(error));
        },
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
                               className="login-fieldset-field"/>
                        {formik.errors.username ?
                            <div id="usernameErrorMessage" className="error-message-container">{formik.errors.username}</div> : null}

                        <input type="password"
                               value={formik.values.password}
                               onChange={formik.handleChange}
                               placeholder="Password"
                               name="password"
                               className="login-fieldset-field"/>
                        {formik.errors.password ?
                            <div id="passwordErrorMessage" className="error-message-container">{formik.errors.password}</div> : null}

                        <button type="submit" className="login-fieldset-submit">
                            Log In
                        </button>

                        {showErrorMessage && <div id="serverErrorMessage" className="error-message-container">Incorrect user details</div>}
                    </fieldset>
                </form>
            </main>
            {showLoader && <Loader/>}
        </>
    );
};

export default Login;
