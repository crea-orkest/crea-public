import { Location, Props } from "./location";
import { getLocation } from "graphql/getters/getLocation";

import React from "react";

import { render, screen } from "@testing-library/react";
import { resolvedComponent } from "../../testHelpers/resolvedComponent";

jest.mock("../../graphql/getters/getLocation", () => {
  return {
    __esModule: true,
    getLocation: jest.fn(),
  };
});

const getLocationMock = jest.mocked(getLocation);

describe("Concert component", () => {
  it("shows all the data", async () => {
    getLocationMock.mockResolvedValueOnce({
      data: {
        title: "title",
        address: "some address lines",
        lat: 5,
        lon: 42,
        id: "mock-ids",
      },
      loading: false,
      errors: undefined,
    });

    const Resolved = await resolvedComponent<Props>(Location, {
      id: "mock-id",
    });

    render(<Resolved />);

    expect(screen.getByText("title")).toBeTruthy();
  });
});
