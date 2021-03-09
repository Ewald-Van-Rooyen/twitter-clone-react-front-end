import TestRenderer, {ReactTestRenderer} from "react-test-renderer";
import Tweet from "./tweet";
import React from "react";
import * as reactRedux from "react-redux";

let testRenderer: ReactTestRenderer;
const date = "2015-01-17";
const claps = 50;
const tweet = "Hello World";

describe("Tweet component tests", () => {
    const useSelectorMock = jest.spyOn(reactRedux, "useSelector");
    const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");

    beforeAll(() => {
        useSelectorMock.mockReturnValue({});
        useDispatchMock.mockReturnValue({});

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

        expect(testInstance.props.date).toBe(date);
        expect(testInstance.props.claps).toBe(claps);
        expect(testInstance.props.tweet).toBe(tweet);
        expect(testInstance.props.id).toBe(1);
        expect(testInstance.props.userId).toBe(2);
    });

    it("should check for class names", () => {
        const testInstance = testRenderer.root;
        const img = testInstance.findByType("img");

        expect(img.props.className.includes("avatar")).toBe(true);
    });

});


