import {act} from "react-dom/test-utils";

import TestRenderer from "react-test-renderer";
import ReactTestUtils from "react-dom/test-utils";
import user from "@testing-library/user-event";

import React from "react";
import Capture, {getTodaysDate} from "./capture";
import * as reactRedux from "react-redux";
import ReactDOM from "react-dom";

const generateInput = () => {
    let value = "";

    for (let i = 0; i < 60; i++) {
        value += "i";
    }
    return value;
};

let container: any;

const activeUser = {
    user: {
        activeUser: {
            "id": 3,
            "username": "@Ironman",
            "role": "user",
            "usersDetailsId": 3,
            "profilePic": "https://avatarfiles.alphacoders.com/139/thumb-139523.jpg"
        }
    }
};

describe("Capture component tests", () => {

    const useSelectorMock = jest.spyOn(reactRedux, "useSelector");
    const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");

    beforeEach(() => {
        useSelectorMock.mockClear();
        useDispatchMock.mockClear();
        container = document.createElement("div");
        document.body.appendChild(container);
    });

    it("should render the Capture component", () => {
        useSelectorMock.mockReturnValue(activeUser);

        const testRenderer = TestRenderer.create(
            <Capture/>
        );
        expect(testRenderer).toMatchSnapshot();
    });


    it("should submit a tweet", () => {
        useSelectorMock.mockReturnValue(activeUser);
        const newTweet = "giraffe are cool";
        act(() => {
            ReactDOM.render(<Capture/>, container);
        });

        const input = container.querySelector("textarea");

        expect(input.value).toEqual("");

        input.value = newTweet;
        ReactTestUtils.Simulate.change(input);
        expect(input.value).toEqual(newTweet);
    });

    it("should not be able to submit a tweet larger than 50 characters, input length 60 characters", () => {
        useSelectorMock.mockReturnValue(activeUser);
        const newTweet = generateInput();

        act(() => {
            ReactDOM.render(<Capture/>, container);
        });

        const input = container.querySelector("textarea");

        expect(input.value).toEqual("");

        input.value = newTweet;
        ReactTestUtils.Simulate.change(input);
        expect(input.value).toEqual("");
    });

    it("should not be able to submit a tweet that is only spaces", () => {
        useSelectorMock.mockReturnValue(activeUser);
        const newTweet = "   ";

        act(() => {
            ReactDOM.render(<Capture/>, container);
        });

        const input = container.querySelector("textarea");

        expect(input.value).toEqual("");

        input.value = newTweet;
        ReactTestUtils.Simulate.change(input);
        expect(input.value).toEqual("");
    });

    it("should get todays date in yyyy-mm-dd format", () => {
        const date = new Date();
        const month = date.getUTCMonth() + 1; // getUTCMonth starts at 0
        const day = date.getUTCDate();
        const year = date.getUTCFullYear();

        const today = `${year}-${month}-${day}`;

        expect(getTodaysDate()).toEqual(today);
    });
});
