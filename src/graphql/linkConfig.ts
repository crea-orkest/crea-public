const accessToken = process.env?.["DATOCMS_ACCESS_TOKEN"];

export const linkConfig = {
  url: `https://main--crea-orkest-p7nmyh.apollographos.net/graphql`,
  headers: {
    "X-Exclude-Invalid": "true", // dato cms strict mode
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
    "Content-Language": "nl-NL",
  },
};
