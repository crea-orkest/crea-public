export function hasOnlyStringValues(
  obj: object
): obj is Record<string, string> {
  return (
    Object.keys(obj).length > 0 &&
    Object.values(obj).every((v: unknown) => typeof v === 'string')
  )
}
