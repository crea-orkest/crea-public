import { DefaultPage, Props } from "./defaultPage";
import { getPage } from "graphql/getters/getPage";

import React from "react";

import { render, screen } from "@testing-library/react";
import { resolvedComponent } from "../../testHelpers/resolvedComponent";

jest.mock("../../graphql/getters/getPage", () => {
  return {
    __esModule: true,
    getPage: jest.fn(),
  };
});

const getPageMock = jest.mocked(getPage);

describe("Concert component", () => {
  it("shows all the data", async () => {
    getPageMock.mockResolvedValueOnce({
      data: {
        id: "id",
        title: "title",
        slug: "contact",
      },
      loading: false,
      errors: undefined,
    });

    const Resolved = await resolvedComponent<Props>(DefaultPage, {
      slug: "contact",
    });

    render(<Resolved />);

    expect(screen.getByText("title")).toBeTruthy();
  });
});
