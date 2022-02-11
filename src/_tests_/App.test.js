/**
 * @jest-environment jsdom
 */
import React from "react";
import renderer from "react-test-renderer";
import axios from "axios";
import App from "../App";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

const mockData = {
  activeCases: "2000",
  deaths: "2000",
  states: [
    {
      id: 1,
      state: "Lagos",
    },
    {
      id: 2,
      state: "Delta",
    },
  ],
};

jest.mock("axios");

describe("fetchData", () => {
  it("fetches successfully data from an API and updates store", async () => {
    const initialState = {};
    const mockStore = configureStore();
    let store = mockStore(initialState);

    axios.get.mockImplementationOnce(() => Promise.resolve(mockData));
    const tree = renderer.create(
      <Provider store={store}>
        <App />
      </Provider>
    );
    await Promise.resolve();
    //create a snapshot for the component
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it("fetches erroneously data from an API", async () => {
    const errorMessage = "Network Error";

    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage))
    );
  });
});
