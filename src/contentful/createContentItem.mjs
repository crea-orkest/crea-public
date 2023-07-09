export async function createContentItem({
  environment,
  contentTypeId,
  id,
  fields,
}) {
  await environment
    .createEntryWithId(contentTypeId, id, {
      fields,
    })
    .then(async (entry) => await entry.publish());
}
