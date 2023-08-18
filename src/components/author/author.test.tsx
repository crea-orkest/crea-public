import { Author, Props } from "./author";
import { getAuthor } from "graphql/getters/getAuthor";

import React from "react";

import { render, screen } from "@testing-library/react";

async function resolvedComponent(Component: Function, props: Props) {
  const ComponentResolved = await Component(props);
  return () => ComponentResolved;
}

jest.mock("../../graphql/getters/getAuthor", () => {
  const originalModule = jest.requireActual("../../graphql/getters/getAuthor");

  return {
    __esModule: true,
    ...originalModule,
    getAuthor: jest.fn(),
  };
});

const getAuthorMock = jest.mocked(getAuthor);

describe("Author component", () => {
  it("shows all the data", async () => {
    getAuthorMock.mockResolvedValueOnce({
      data: {
        id: "id",
        name: "name",
        description: "role",
      },
      loading: false,
      errors: undefined,
    });

    const AuthorResolved = await resolvedComponent(Author, { id: "some id" });

    render(<AuthorResolved />);

    expect(screen.getByText("name")).toBeTruthy();
    expect(screen.getByText("role")).toBeTruthy();
  });
});
