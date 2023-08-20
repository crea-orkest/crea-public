import { Concert } from "./concert";
import type { Props } from "./concert";
import React from "react";
import { getEvent } from "graphql/getters/getEvent";
import { resolvedComponent } from "../../testHelpers/resolvedComponent";
import { render, screen } from "@testing-library/react";

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
        locations: [{ startTime: "DATETIME", id: "test id" }],
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
