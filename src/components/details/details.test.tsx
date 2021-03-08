import TestRenderer, {ReactTestRenderer} from "react-test-renderer";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Details from "./details";

describe("Tests for the Details component", () => {

    const userDetails = {
        birthday: "1989-08-04",
        firstName: "Ewald",
        lastName: "Van Rooyen",
        tweetsPerDay: 5,
        username: "@Ewald42"
    };

    it("should render the Details screen", () => {
        let testRenderer: ReactTestRenderer = TestRenderer.create(
            <Details birthday={userDetails.birthday}
                     fullName={userDetails.firstName + userDetails.lastName}
                     tweetsPerDay={userDetails.tweetsPerDay}
                     username={userDetails.username}/>
        );
        expect(testRenderer).toMatchSnapshot();
    });

    it("should check the Details screen content", () => {
        render(<Details birthday={userDetails.birthday}
                        fullName={`${userDetails.firstName}  ${userDetails.lastName}`}
                        tweetsPerDay={userDetails.tweetsPerDay}
                        username={userDetails.username}/>);

        expect(screen.getByText(/@Ewald42/i)).toBeInTheDocument();
        expect(screen.getByText(/Ewald Van Rooyen/i)).toBeInTheDocument();
        expect(screen.getByText(/1989-08-04/i)).toBeInTheDocument();
        expect(screen.getByText(/5/i)).toBeInTheDocument();
    });


});
