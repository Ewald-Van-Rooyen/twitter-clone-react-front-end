import TestRenderer, {ReactTestRenderer} from "react-test-renderer";
import Tweet from "./tweet";
import React from "react";

let testRenderer: ReactTestRenderer;
const fullname = "Ewald Van Rooyen";
const username = "@Ewald42";
const date = "2015-01-17";
const claps = 50;
const profilePic = "https://avatarfiles.alphacoders.com/174/174225.jpg";
const tweet = "Hello World";

describe("Tweet component tests", () => {

    beforeAll(() => {
        testRenderer = TestRenderer.create(
            <Tweet date={date}
                   tweet={tweet}
                   claps={claps}
                   id={1}
                   userId={2}/>
        );
    });

    it("should render the Tweet component", () => {
        expect(testRenderer).toMatchSnapshot();
    });

    it("should match the props", () => {
        const testInstance = testRenderer.root;

        expect(testInstance.props.fullname).toBe(fullname);
        expect(testInstance.props.username).toBe(username);
        expect(testInstance.props.date).toBe(date);
        expect(testInstance.props.claps).toBe(claps);
        expect(testInstance.props.profilePic).toBe(profilePic);
        expect(testInstance.props.tweet).toBe(tweet);
    });

    it("should check for class names", () => {
        const testInstance = testRenderer.root;
        const div = testInstance.findByType("div");
        const svg = testInstance.findByType("svg");
        const img = testInstance.findByType("img");

        expect(div.props.className.includes("tweet-container")).toBe(true);
        expect(img.props.className.includes("avatar")).toBe(true);
        expect(svg.props.className.includes("bi bi-heart")).toBe(true);
    });

});


