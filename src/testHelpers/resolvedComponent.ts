export const resolvedComponent = async <T>(
  Component: Function,
  props: T
): Promise<() => JSX.Element> => {
  const ComponentResolved = await Component(props);
  return () => ComponentResolved;
};
