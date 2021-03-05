import TestRenderer from "react-test-renderer";
import ReactTestUtils from "react-dom/test-utils";
import ReactDOM from 'react-dom';
import {act} from 'react-dom/test-utils';

import React from "react";
import Capture from "../capture/capture";

let container: any;
const defaultProfilePic = "https://avatarfiles.alphacoders.com/174/174225.jpg";

describe("Capture component tests", () => {

    beforeEach(() => {
        container = document.createElement("div");
        document.body.appendChild(container);
    });

    it("should render the Capture component", () => {
        const testRenderer = TestRenderer.create(
            <Capture/>
        );
        expect(testRenderer).toMatchSnapshot();
    });

    it("should match the props", () => {
        const testRenderer = TestRenderer.create(
            <Capture profilePic={defaultProfilePic}/>
        );
        const testInstance = testRenderer.root;

        expect(testInstance.props.profilePic).toBe(defaultProfilePic);

    });

    it("should check for default img url", () => {
        const testRenderer = TestRenderer.create(
            <Capture/>
        );
        const testInstance = testRenderer.root;
        const img = testInstance.findByType("img");

        expect(img.props.src).toEqual(defaultProfilePic);
        expect(img.props.className).toEqual("avatar");

    });

    it("should submit a tweet", () => {
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
