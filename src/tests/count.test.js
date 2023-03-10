import React from "react";
import {render, screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import {Count} from '../components/count'
import { Counter } from "../components/counter";

test("the counter component should render on the page", () => {
    render(<Counter />);
    const expectedContent = screen.getByText(/The button has been clicked/);
    expect(expectedContent).toBeInTheDocument();
});
/*
test("The page should show a count from the API", () => {
  jest.spyOn(window, 'fetch').mockImplementation(() => {
    return {
      json: async () => {
        value: '', // whatever you're expecting
      },
    };
  });
});

const {getByTestId} = render(<Count number={1} /> );
*/

