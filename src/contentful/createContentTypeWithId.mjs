export async function createContentTypeWithId({ environment, name, fields }) {
  await environment.createContentTypeWithId(name, {
    name,
    fields,
  });

  await environment
    .getContentType(name)
    .then(async (entry) => await entry.publish());
}
