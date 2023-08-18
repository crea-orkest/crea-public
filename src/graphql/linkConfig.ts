const accessToken = process.env?.["DATOCMS_ACCESS_TOKEN"];
const url = `https://graphql.datocms.com`;

export const linkConfig = {
  uri: url,
  credentials: "same-origin",
  headers: {
    "X-Exclude-Invalid": "true", // strict mode
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
    "Content-Language": "nl-NL",
  },
};
