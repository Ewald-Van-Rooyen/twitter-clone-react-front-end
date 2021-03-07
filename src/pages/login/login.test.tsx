import TestRenderer, {ReactTestRenderer} from "react-test-renderer";

import React from "react";
import LoginPage from "./loginPage";
import {fireEvent, render, screen, wait, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

let container: any;
let testRenderer: ReactTestRenderer;

describe("Login component tests", () => {

    it("should render the Login component", () => {
        testRenderer = TestRenderer.create(
            <LoginPage onSubmitClickCallback={() => {
            }}/>
        );
        expect(testRenderer).toMatchSnapshot();
    });

    test('rendering and submitting a basic Formik form failing vallidation', async () => {
        const {container} = render(<LoginPage onSubmitClickCallback={() => {
        }}/>);


        const username = container.querySelector('input[name="username"]');
        const password = container.querySelector('input[name="password"]');
        const submit = container.querySelector('button[type="submit"]');

        await waitFor(() => {
            fireEvent.change(username, {
                target: {
                    value: ""
                }
            })
        });

        await waitFor(() => {
            fireEvent.change(password, {
                target: {
                    value: ""
                }
            })
        });

        await waitFor(() => {
            fireEvent.click(submit);
        });

        const passwordErrorMessage = container.querySelector("#passwordErrorMessage");
        const usernameErrorMessage = container.querySelector("#usernameErrorMessage");

        expect(passwordErrorMessage.innerHTML).toBe("Password is required");
        expect(usernameErrorMessage.innerHTML).toBe("Username is required");
    });

    test("rendering and submitting a basic Formik form failing password length", async () => {
        const {container} = render(<LoginPage onSubmitClickCallback={() => {
        }}/>);


        const username = container.querySelector('input[name="username"]');
        const password = container.querySelector('input[name="password"]');
        const submit = container.querySelector('button[type="submit"]');

        await waitFor(() => {
            fireEvent.change(username, {
                target: {
                    value: "123456"
                }
            })
        });

        await waitFor(() => {
            fireEvent.change(password, {
                target: {
                    value: "124"
                }
            })
        });

        await waitFor(() => {
            fireEvent.click(submit);
        });

        const passwordErrorMessage = container.querySelector("#passwordErrorMessage");
        expect(passwordErrorMessage.innerHTML).toBe("Password should be of minimum 4 characters length");
    });

});
