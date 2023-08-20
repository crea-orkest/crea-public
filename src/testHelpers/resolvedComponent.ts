import type { JSX } from "react";

export const resolvedComponent = async <T>(
  Component: (props: T) => Promise<JSX.Element>,
  props: T
) => {
  const ComponentResolved = await Component(props);
  return () => ComponentResolved;
};
