import { Events, Props } from "./events";
import { getEvents } from "graphql/getters/getEvents";

import React from "react";

import { render, screen } from "@testing-library/react";
import { resolvedComponent } from "../../testHelpers/resolvedComponent";

jest.mock("../../graphql/getters/getEvents", () => {
  return {
    __esModule: true,
    getEvents: jest.fn(),
  };
});

const getEventsMock = jest.mocked(getEvents);

describe("Events component", () => {
  it("shows all the data", async () => {
    getEventsMock.mockResolvedValueOnce({
      data: [
        {
          id: "id",
          title: "title",
          image: undefined,
          locations: [{ startTime: "time", id: "loc" }],
        },
      ],
      loading: false,
      errors: undefined,
    });

    const Resolved = await resolvedComponent<Props>(Events, {
      skip: 0,
      first: 3,
    });

    render(<Resolved />);

    expect(screen.getByText("title")).toBeTruthy();
  });
});
