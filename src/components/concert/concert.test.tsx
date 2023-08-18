import { Concert, Props } from "./concert";
import { getEvent } from "graphql/getters/getEvent";

import React from "react";

import { render, screen } from "@testing-library/react";
import { resolvedComponent } from "../../testHelpers/resolvedComponent";

jest.mock("../location/location", () => {
  return {
    __esModule: true,
    Location: jest.fn(() => <p>Location Component</p>),
  };
});

jest.mock("../../graphql/getters/getEvent", () => {
  return {
    __esModule: true,
    getEvent: jest.fn(),
  };
});

const getEventMock = jest.mocked(getEvent);

describe("Concert component", () => {
  it("shows all the data", async () => {
    getEventMock.mockResolvedValueOnce({
      data: {
        id: "id",
        title: "name",
        image: undefined,
        locations: [{ id: "test id" }],
      },
      loading: false,
      errors: undefined,
    });

    const Resolved = await resolvedComponent<Props>(Concert, {
      id: "some id",
    });

    render(<Resolved />);

    expect(screen.getByText("name")).toBeTruthy();
    expect(screen.getByText("Location Component")).toBeTruthy();
  });
});
