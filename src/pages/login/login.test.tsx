import React from "react";
import * as reactRedux from "react-redux";
import TestRenderer, {ReactTestRenderer} from "react-test-renderer";
import {fireEvent, render, waitFor} from "@testing-library/react";

import LoginPage from "./loginPage";

describe("test suite", () => {
    const useSelectorMock = jest.spyOn(reactRedux, "useSelector");
    const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");
    let testRenderer: ReactTestRenderer;

    beforeEach(() => {
        useSelectorMock.mockClear();
        useDispatchMock.mockClear();
    });

    it("should render the login", () => {

        testRenderer = TestRenderer.create(
            <LoginPage onSubmitClickCallback={() => {
            }}/>
        );
        expect(testRenderer).toMatchSnapshot();
    });

    it("rendering and submitting a basic Formik form failing validation", async () => {
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

    it("rendering and submitting a basic Formik form failing password length", async () => {
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
