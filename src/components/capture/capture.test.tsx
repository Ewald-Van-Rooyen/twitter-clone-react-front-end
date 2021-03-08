import {act} from "react-dom/test-utils";

import TestRenderer from "react-test-renderer";
import ReactTestUtils from "react-dom/test-utils";

import React from "react";
import Capture from "./capture";
import * as reactRedux from "react-redux";
import ReactDOM from "react-dom";

let container: any;
const defaultProfilePic = "https://avatarfiles.alphacoders.com/139/thumb-139523.jpg";

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
});
