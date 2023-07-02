export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  DateTime: { input: any; output: any };
  JSON: { input: any; output: any };
  HexColor: { input: any; output: any };
  Dimension: { input: any; output: any };
  Quality: { input: any; output: any };
  Circle: { input: any; output: any };
  Rectangle: { input: any; output: any };
};

export type Query = {
  __typename?: "Query";
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  author?: Maybe<Author>;
  authorCollection?: Maybe<AuthorCollection>;
  blogPost?: Maybe<BlogPost>;
  blogPostCollection?: Maybe<BlogPostCollection>;
  entryCollection?: Maybe<EntryCollection>;
  event?: Maybe<Event>;
  eventCollection?: Maybe<EventCollection>;
  homePage?: Maybe<HomePage>;
  homePageCollection?: Maybe<HomePageCollection>;
  navigation?: Maybe<Navigation>;
  navigationCollection?: Maybe<NavigationCollection>;
  page?: Maybe<Page>;
  pageCollection?: Maybe<PageCollection>;
};

export type QueryAssetArgs = {
  id: Scalars["String"]["input"];
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<AssetFilter>;
};

export type QueryAuthorArgs = {
  id: Scalars["String"]["input"];
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QueryAuthorCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<Array<InputMaybe<AuthorOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<AuthorFilter>;
};

export type QueryBlogPostArgs = {
  id: Scalars["String"]["input"];
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QueryBlogPostCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<Array<InputMaybe<BlogPostOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<BlogPostFilter>;
};

export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<EntryFilter>;
};

export type QueryEventArgs = {
  id: Scalars["String"]["input"];
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QueryEventCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<Array<InputMaybe<EventOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<EventFilter>;
};

export type QueryHomePageArgs = {
  id: Scalars["String"]["input"];
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QueryHomePageCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<Array<InputMaybe<HomePageOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<HomePageFilter>;
};

export type QueryNavigationArgs = {
  id: Scalars["String"]["input"];
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QueryNavigationCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<Array<InputMaybe<NavigationOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<NavigationFilter>;
};

export type QueryPageArgs = {
  id: Scalars["String"]["input"];
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QueryPageCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<Array<InputMaybe<PageOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<PageFilter>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: "Asset";
  contentfulMetadata: ContentfulMetadata;
  contentType?: Maybe<Scalars["String"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  fileName?: Maybe<Scalars["String"]["output"]>;
  height?: Maybe<Scalars["Int"]["output"]>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars["Int"]["output"]>;
  sys: Sys;
  title?: Maybe<Scalars["String"]["output"]>;
  url?: Maybe<Scalars["String"]["output"]>;
  width?: Maybe<Scalars["Int"]["output"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  transform?: InputMaybe<ImageTransformOptions>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type ContentfulMetadata = {
  __typename?: "ContentfulMetadata";
  tags: Array<Maybe<ContentfulTag>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: "ContentfulTag";
  id?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
};

export type AssetLinkingCollections = {
  __typename?: "AssetLinkingCollections";
  authorCollection?: Maybe<AuthorCollection>;
  entryCollection?: Maybe<EntryCollection>;
  eventCollection?: Maybe<EventCollection>;
  navigationCollection?: Maybe<NavigationCollection>;
  pageCollection?: Maybe<PageCollection>;
};

export type AssetLinkingCollectionsAuthorCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<
    Array<InputMaybe<AssetLinkingCollectionsAuthorCollectionOrder>>
  >;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export type AssetLinkingCollectionsEventCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<
    Array<InputMaybe<AssetLinkingCollectionsEventCollectionOrder>>
  >;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export type AssetLinkingCollectionsNavigationCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<
    Array<InputMaybe<AssetLinkingCollectionsNavigationCollectionOrder>>
  >;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export type AssetLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<
    Array<InputMaybe<AssetLinkingCollectionsPageCollectionOrder>>
  >;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export enum AssetLinkingCollectionsAuthorCollectionOrder {
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

export type AuthorCollection = {
  __typename?: "AuthorCollection";
  items: Array<Maybe<Author>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

/** [See type definition](https://app.contentful.com/spaces/pwuxt9271wes/content_types/author) */
export type Author = Entry & {
  __typename?: "Author";
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars["String"]["output"]>;
  image?: Maybe<Asset>;
  linkedFrom?: Maybe<AuthorLinkingCollections>;
  name?: Maybe<Scalars["String"]["output"]>;
  sys: Sys;
};

/** [See type definition](https://app.contentful.com/spaces/pwuxt9271wes/content_types/author) */
export type AuthorDescriptionArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/pwuxt9271wes/content_types/author) */
export type AuthorImageArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/pwuxt9271wes/content_types/author) */
export type AuthorLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/pwuxt9271wes/content_types/author) */
export type AuthorNameArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type Sys = {
  __typename?: "Sys";
  environmentId: Scalars["String"]["output"];
  firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  id: Scalars["String"]["output"];
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  publishedVersion?: Maybe<Scalars["Int"]["output"]>;
  spaceId: Scalars["String"]["output"];
};

export type AuthorLinkingCollections = {
  __typename?: "AuthorLinkingCollections";
  blogPostCollection?: Maybe<BlogPostCollection>;
  entryCollection?: Maybe<EntryCollection>;
};

export type AuthorLinkingCollectionsBlogPostCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<
    Array<InputMaybe<AuthorLinkingCollectionsBlogPostCollectionOrder>>
  >;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export type AuthorLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export enum AuthorLinkingCollectionsBlogPostCollectionOrder {
  DatePublishedAsc = "datePublished_ASC",
  DatePublishedDesc = "datePublished_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

export type BlogPostCollection = {
  __typename?: "BlogPostCollection";
  items: Array<Maybe<BlogPost>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

/** [See type definition](https://app.contentful.com/spaces/pwuxt9271wes/content_types/blogPost) */
export type BlogPost = Entry & {
  __typename?: "BlogPost";
  authorCollection?: Maybe<BlogPostAuthorCollection>;
  body?: Maybe<BlogPostBody>;
  contentfulMetadata: ContentfulMetadata;
  datePublished?: Maybe<Scalars["DateTime"]["output"]>;
  linkedFrom?: Maybe<BlogPostLinkingCollections>;
  slug?: Maybe<Scalars["String"]["output"]>;
  sys: Sys;
  title?: Maybe<Scalars["String"]["output"]>;
};

/** [See type definition](https://app.contentful.com/spaces/pwuxt9271wes/content_types/blogPost) */
export type BlogPostAuthorCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<Array<InputMaybe<BlogPostAuthorCollectionOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<AuthorFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/pwuxt9271wes/content_types/blogPost) */
export type BlogPostBodyArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/pwuxt9271wes/content_types/blogPost) */
export type BlogPostDatePublishedArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/pwuxt9271wes/content_types/blogPost) */
export type BlogPostLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/pwuxt9271wes/content_types/blogPost) */
export type BlogPostSlugArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/pwuxt9271wes/content_types/blogPost) */
export type BlogPostTitleArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export enum BlogPostAuthorCollectionOrder {
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

export type AuthorFilter = {
  AND?: InputMaybe<Array<InputMaybe<AuthorFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  description_contains?: InputMaybe<Scalars["String"]["input"]>;
  description_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  description_not?: InputMaybe<Scalars["String"]["input"]>;
  description_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  description_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  image_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  name_contains?: InputMaybe<Scalars["String"]["input"]>;
  name_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  name_not?: InputMaybe<Scalars["String"]["input"]>;
  name_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  OR?: InputMaybe<Array<InputMaybe<AuthorFilter>>>;
  sys?: InputMaybe<SysFilter>;
};

export type ContentfulMetadataFilter = {
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  firstPublishedAt_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  firstPublishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  firstPublishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  firstPublishedAt_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  firstPublishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  firstPublishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  firstPublishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  firstPublishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  id?: InputMaybe<Scalars["String"]["input"]>;
  id_contains?: InputMaybe<Scalars["String"]["input"]>;
  id_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  id_not?: InputMaybe<Scalars["String"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  publishedAt_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  publishedVersion?: InputMaybe<Scalars["Float"]["input"]>;
  publishedVersion_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  publishedVersion_gt?: InputMaybe<Scalars["Float"]["input"]>;
  publishedVersion_gte?: InputMaybe<Scalars["Float"]["input"]>;
  publishedVersion_in?: InputMaybe<
    Array<InputMaybe<Scalars["Float"]["input"]>>
  >;
  publishedVersion_lt?: InputMaybe<Scalars["Float"]["input"]>;
  publishedVersion_lte?: InputMaybe<Scalars["Float"]["input"]>;
  publishedVersion_not?: InputMaybe<Scalars["Float"]["input"]>;
  publishedVersion_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["Float"]["input"]>>
  >;
};

export type BlogPostAuthorCollection = {
  __typename?: "BlogPostAuthorCollection";
  items: Array<Maybe<Author>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export type BlogPostBody = {
  __typename?: "BlogPostBody";
  json: Scalars["JSON"]["output"];
  links: BlogPostBodyLinks;
};

export type BlogPostBodyLinks = {
  __typename?: "BlogPostBodyLinks";
  assets: BlogPostBodyAssets;
  entries: BlogPostBodyEntries;
  resources: BlogPostBodyResources;
};

export type BlogPostBodyAssets = {
  __typename?: "BlogPostBodyAssets";
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type BlogPostBodyEntries = {
  __typename?: "BlogPostBodyEntries";
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type BlogPostBodyResources = {
  __typename?: "BlogPostBodyResources";
  block: Array<ResourceLink>;
};

export type ResourceLink = {
  __typename?: "ResourceLink";
  sys: ResourceSys;
};

export type ResourceSys = {
  __typename?: "ResourceSys";
  linkType: Scalars["String"]["output"];
  type: Scalars["String"]["output"];
  urn: Scalars["String"]["output"];
};

export type BlogPostLinkingCollections = {
  __typename?: "BlogPostLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
};

export type BlogPostLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export type EntryCollection = {
  __typename?: "EntryCollection";
  items: Array<Maybe<Entry>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export enum AssetLinkingCollectionsEventCollectionOrder {
  StartDateAsc = "startDate_ASC",
  StartDateDesc = "startDate_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

export type EventCollection = {
  __typename?: "EventCollection";
  items: Array<Maybe<Event>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

/** [See type definition](https://app.contentful.com/spaces/pwuxt9271wes/content_types/event) */
export type Event = Entry & {
  __typename?: "Event";
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<EventDescription>;
  image?: Maybe<Asset>;
  linkedFrom?: Maybe<EventLinkingCollections>;
  location?: Maybe<Location>;
  startDate?: Maybe<Scalars["DateTime"]["output"]>;
  sys: Sys;
  title?: Maybe<Scalars["String"]["output"]>;
};

/** [See type definition](https://app.contentful.com/spaces/pwuxt9271wes/content_types/event) */
export type EventDescriptionArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/pwuxt9271wes/content_types/event) */
export type EventImageArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/pwuxt9271wes/content_types/event) */
export type EventLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/pwuxt9271wes/content_types/event) */
export type EventLocationArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/pwuxt9271wes/content_types/event) */
export type EventStartDateArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/pwuxt9271wes/content_types/event) */
export type EventTitleArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type EventDescription = {
  __typename?: "EventDescription";
  json: Scalars["JSON"]["output"];
  links: EventDescriptionLinks;
};

export type EventDescriptionLinks = {
  __typename?: "EventDescriptionLinks";
  assets: EventDescriptionAssets;
  entries: EventDescriptionEntries;
  resources: EventDescriptionResources;
};

export type EventDescriptionAssets = {
  __typename?: "EventDescriptionAssets";
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type EventDescriptionEntries = {
  __typename?: "EventDescriptionEntries";
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type EventDescriptionResources = {
  __typename?: "EventDescriptionResources";
  block: Array<ResourceLink>;
};

export type EventLinkingCollections = {
  __typename?: "EventLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
};

export type EventLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export type Location = {
  __typename?: "Location";
  lat?: Maybe<Scalars["Float"]["output"]>;
  lon?: Maybe<Scalars["Float"]["output"]>;
};

export enum AssetLinkingCollectionsNavigationCollectionOrder {
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

export type NavigationCollection = {
  __typename?: "NavigationCollection";
  items: Array<Maybe<Navigation>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

/** [See type definition](https://app.contentful.com/spaces/pwuxt9271wes/content_types/navigation) */
export type Navigation = Entry & {
  __typename?: "Navigation";
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<NavigationLinkingCollections>;
  logo?: Maybe<Asset>;
  navigationItemsCollection?: Maybe<NavigationNavigationItemsCollection>;
  sys: Sys;
  title?: Maybe<Scalars["String"]["output"]>;
};

/** [See type definition](https://app.contentful.com/spaces/pwuxt9271wes/content_types/navigation) */
export type NavigationLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/pwuxt9271wes/content_types/navigation) */
export type NavigationLogoArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/pwuxt9271wes/content_types/navigation) */
export type NavigationNavigationItemsCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<
    Array<InputMaybe<NavigationNavigationItemsCollectionOrder>>
  >;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<PageFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/pwuxt9271wes/content_types/navigation) */
export type NavigationTitleArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type NavigationLinkingCollections = {
  __typename?: "NavigationLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
};

export type NavigationLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export enum NavigationNavigationItemsCollectionOrder {
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

export type PageFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageFilter>>>;
  body_contains?: InputMaybe<Scalars["String"]["input"]>;
  body_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  body_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  headerImage_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  OR?: InputMaybe<Array<InputMaybe<PageFilter>>>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
  slug_contains?: InputMaybe<Scalars["String"]["input"]>;
  slug_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  slug_not?: InputMaybe<Scalars["String"]["input"]>;
  slug_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title_not?: InputMaybe<Scalars["String"]["input"]>;
  title_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type NavigationNavigationItemsCollection = {
  __typename?: "NavigationNavigationItemsCollection";
  items: Array<Maybe<Page>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

/** [See type definition](https://app.contentful.com/spaces/pwuxt9271wes/content_types/page) */
export type Page = Entry & {
  __typename?: "Page";
  body?: Maybe<PageBody>;
  contentfulMetadata: ContentfulMetadata;
  headerImage?: Maybe<Asset>;
  linkedFrom?: Maybe<PageLinkingCollections>;
  slug?: Maybe<Scalars["String"]["output"]>;
  sys: Sys;
  title?: Maybe<Scalars["String"]["output"]>;
};

/** [See type definition](https://app.contentful.com/spaces/pwuxt9271wes/content_types/page) */
export type PageBodyArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/pwuxt9271wes/content_types/page) */
export type PageHeaderImageArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/pwuxt9271wes/content_types/page) */
export type PageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/pwuxt9271wes/content_types/page) */
export type PageSlugArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/pwuxt9271wes/content_types/page) */
export type PageTitleArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type PageBody = {
  __typename?: "PageBody";
  json: Scalars["JSON"]["output"];
  links: PageBodyLinks;
};

export type PageBodyLinks = {
  __typename?: "PageBodyLinks";
  assets: PageBodyAssets;
  entries: PageBodyEntries;
  resources: PageBodyResources;
};

export type PageBodyAssets = {
  __typename?: "PageBodyAssets";
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type PageBodyEntries = {
  __typename?: "PageBodyEntries";
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type PageBodyResources = {
  __typename?: "PageBodyResources";
  block: Array<ResourceLink>;
};

export type PageLinkingCollections = {
  __typename?: "PageLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
  navigationCollection?: Maybe<NavigationCollection>;
};

export type PageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export type PageLinkingCollectionsNavigationCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<
    Array<InputMaybe<PageLinkingCollectionsNavigationCollectionOrder>>
  >;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export enum PageLinkingCollectionsNavigationCollectionOrder {
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

export enum AssetLinkingCollectionsPageCollectionOrder {
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

export type PageCollection = {
  __typename?: "PageCollection";
  items: Array<Maybe<Page>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars["HexColor"]["input"]>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars["Int"]["input"]>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars["Dimension"]["input"]>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars["Quality"]["input"]>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars["Dimension"]["input"]>;
};

export enum ImageFormat {
  Avif = "AVIF",
  /** JPG image format. */
  Jpg = "JPG",
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = "JPG_PROGRESSIVE",
  /** PNG image format */
  Png = "PNG",
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = "PNG8",
  /** WebP image format. */
  Webp = "WEBP",
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = "BOTTOM",
  /** Focus the resizing on the bottom left. */
  BottomLeft = "BOTTOM_LEFT",
  /** Focus the resizing on the bottom right. */
  BottomRight = "BOTTOM_RIGHT",
  /** Focus the resizing on the center. */
  Center = "CENTER",
  /** Focus the resizing on the largest face. */
  Face = "FACE",
  /** Focus the resizing on the area containing all the faces. */
  Faces = "FACES",
  /** Focus the resizing on the left. */
  Left = "LEFT",
  /** Focus the resizing on the right. */
  Right = "RIGHT",
  /** Focus the resizing on the top. */
  Top = "TOP",
  /** Focus the resizing on the top left. */
  TopLeft = "TOP_LEFT",
  /** Focus the resizing on the top right. */
  TopRight = "TOP_RIGHT",
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = "CROP",
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = "FILL",
  /** Resizes the image to fit into the specified dimensions. */
  Fit = "FIT",
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = "PAD",
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = "SCALE",
  /** Creates a thumbnail from the image. */
  Thumb = "THUMB",
}

export enum AssetOrder {
  ContentTypeAsc = "contentType_ASC",
  ContentTypeDesc = "contentType_DESC",
  FileNameAsc = "fileName_ASC",
  FileNameDesc = "fileName_DESC",
  HeightAsc = "height_ASC",
  HeightDesc = "height_DESC",
  SizeAsc = "size_ASC",
  SizeDesc = "size_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  UrlAsc = "url_ASC",
  UrlDesc = "url_DESC",
  WidthAsc = "width_ASC",
  WidthDesc = "width_DESC",
}

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  contentType?: InputMaybe<Scalars["String"]["input"]>;
  contentType_contains?: InputMaybe<Scalars["String"]["input"]>;
  contentType_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  contentType_not?: InputMaybe<Scalars["String"]["input"]>;
  contentType_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  contentType_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  description?: InputMaybe<Scalars["String"]["input"]>;
  description_contains?: InputMaybe<Scalars["String"]["input"]>;
  description_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  description_not?: InputMaybe<Scalars["String"]["input"]>;
  description_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  description_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  fileName?: InputMaybe<Scalars["String"]["input"]>;
  fileName_contains?: InputMaybe<Scalars["String"]["input"]>;
  fileName_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fileName_not?: InputMaybe<Scalars["String"]["input"]>;
  fileName_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  height?: InputMaybe<Scalars["Int"]["input"]>;
  height_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  height_gt?: InputMaybe<Scalars["Int"]["input"]>;
  height_gte?: InputMaybe<Scalars["Int"]["input"]>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  height_lt?: InputMaybe<Scalars["Int"]["input"]>;
  height_lte?: InputMaybe<Scalars["Int"]["input"]>;
  height_not?: InputMaybe<Scalars["Int"]["input"]>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  size?: InputMaybe<Scalars["Int"]["input"]>;
  size_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  size_gt?: InputMaybe<Scalars["Int"]["input"]>;
  size_gte?: InputMaybe<Scalars["Int"]["input"]>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  size_lt?: InputMaybe<Scalars["Int"]["input"]>;
  size_lte?: InputMaybe<Scalars["Int"]["input"]>;
  size_not?: InputMaybe<Scalars["Int"]["input"]>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title_not?: InputMaybe<Scalars["String"]["input"]>;
  title_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  url?: InputMaybe<Scalars["String"]["input"]>;
  url_contains?: InputMaybe<Scalars["String"]["input"]>;
  url_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  url_not?: InputMaybe<Scalars["String"]["input"]>;
  url_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  width?: InputMaybe<Scalars["Int"]["input"]>;
  width_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  width_gt?: InputMaybe<Scalars["Int"]["input"]>;
  width_gte?: InputMaybe<Scalars["Int"]["input"]>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  width_lt?: InputMaybe<Scalars["Int"]["input"]>;
  width_lte?: InputMaybe<Scalars["Int"]["input"]>;
  width_not?: InputMaybe<Scalars["Int"]["input"]>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
};

export type AssetCollection = {
  __typename?: "AssetCollection";
  items: Array<Maybe<Asset>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export enum AuthorOrder {
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

export enum BlogPostOrder {
  DatePublishedAsc = "datePublished_ASC",
  DatePublishedDesc = "datePublished_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

export type BlogPostFilter = {
  AND?: InputMaybe<Array<InputMaybe<BlogPostFilter>>>;
  author?: InputMaybe<CfAuthorNestedFilter>;
  authorCollection_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  body_contains?: InputMaybe<Scalars["String"]["input"]>;
  body_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  body_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  datePublished?: InputMaybe<Scalars["DateTime"]["input"]>;
  datePublished_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  datePublished_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  datePublished_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  datePublished_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  datePublished_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  datePublished_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  datePublished_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  datePublished_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  OR?: InputMaybe<Array<InputMaybe<BlogPostFilter>>>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
  slug_contains?: InputMaybe<Scalars["String"]["input"]>;
  slug_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  slug_not?: InputMaybe<Scalars["String"]["input"]>;
  slug_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title_not?: InputMaybe<Scalars["String"]["input"]>;
  title_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type CfAuthorNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfAuthorNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  description_contains?: InputMaybe<Scalars["String"]["input"]>;
  description_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  description_not?: InputMaybe<Scalars["String"]["input"]>;
  description_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  description_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  image_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  name_contains?: InputMaybe<Scalars["String"]["input"]>;
  name_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  name_not?: InputMaybe<Scalars["String"]["input"]>;
  name_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  OR?: InputMaybe<Array<InputMaybe<CfAuthorNestedFilter>>>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  sys?: InputMaybe<SysFilter>;
};

export enum EventOrder {
  StartDateAsc = "startDate_ASC",
  StartDateDesc = "startDate_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

export type EventFilter = {
  AND?: InputMaybe<Array<InputMaybe<EventFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars["String"]["input"]>;
  description_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  description_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  image_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  location_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  location_within_circle?: InputMaybe<Scalars["Circle"]["input"]>;
  location_within_rectangle?: InputMaybe<Scalars["Rectangle"]["input"]>;
  OR?: InputMaybe<Array<InputMaybe<EventFilter>>>;
  startDate?: InputMaybe<Scalars["DateTime"]["input"]>;
  startDate_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  startDate_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  startDate_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  startDate_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  startDate_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  startDate_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  startDate_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  startDate_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title_not?: InputMaybe<Scalars["String"]["input"]>;
  title_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/pwuxt9271wes/content_types/homePage) */
export type HomePage = Entry & {
  __typename?: "HomePage";
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<HomePageLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars["String"]["output"]>;
};

/** [See type definition](https://app.contentful.com/spaces/pwuxt9271wes/content_types/homePage) */
export type HomePageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/pwuxt9271wes/content_types/homePage) */
export type HomePageTitleArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type HomePageLinkingCollections = {
  __typename?: "HomePageLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
};

export type HomePageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export enum HomePageOrder {
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

export type HomePageFilter = {
  AND?: InputMaybe<Array<InputMaybe<HomePageFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  OR?: InputMaybe<Array<InputMaybe<HomePageFilter>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title_not?: InputMaybe<Scalars["String"]["input"]>;
  title_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type HomePageCollection = {
  __typename?: "HomePageCollection";
  items: Array<Maybe<HomePage>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export enum NavigationOrder {
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

export type NavigationFilter = {
  AND?: InputMaybe<Array<InputMaybe<NavigationFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  logo_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  navigationItems?: InputMaybe<CfPageNestedFilter>;
  navigationItemsCollection_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  OR?: InputMaybe<Array<InputMaybe<NavigationFilter>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title_not?: InputMaybe<Scalars["String"]["input"]>;
  title_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type CfPageNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfPageNestedFilter>>>;
  body_contains?: InputMaybe<Scalars["String"]["input"]>;
  body_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  body_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  headerImage_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  OR?: InputMaybe<Array<InputMaybe<CfPageNestedFilter>>>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
  slug_contains?: InputMaybe<Scalars["String"]["input"]>;
  slug_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  slug_not?: InputMaybe<Scalars["String"]["input"]>;
  slug_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title_not?: InputMaybe<Scalars["String"]["input"]>;
  title_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export enum PageOrder {
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

export interface IntrospectionResultData {
  __schema: {
    types: {
      kind: string;
      name: string;
      possibleTypes: {
        name: string;
      }[];
    }[];
  };
}

const result: IntrospectionResultData = {
  __schema: {
    types: [
      {
        kind: "INTERFACE",
        name: "Entry",
        possibleTypes: [
          {
            name: "Author",
          },
          {
            name: "BlogPost",
          },
          {
            name: "Event",
          },
          {
            name: "Navigation",
          },
          {
            name: "Page",
          },
          {
            name: "HomePage",
          },
        ],
      },
    ],
  },
};

export default result;

export type AuthorFragmentFragment = {
  __typename: "Author";
  description?: string | null;
  name?: string | null;
  contentfulMetadata: {
    __typename: "ContentfulMetadata";
    tags: Array<{
      __typename: "ContentfulTag";
      id?: string | null;
      name?: string | null;
    } | null>;
  };
  image?: {
    __typename: "Asset";
    contentType?: string | null;
    description?: string | null;
    fileName?: string | null;
    height?: number | null;
    title?: string | null;
    url?: string | null;
    width?: number | null;
    contentfulMetadata: {
      __typename: "ContentfulMetadata";
      tags: Array<{
        __typename: "ContentfulTag";
        id?: string | null;
        name?: string | null;
      } | null>;
    };
    sys: {
      __typename: "Sys";
      id: string;
      firstPublishedAt?: any | null;
      publishedAt?: any | null;
      environmentId: string;
      spaceId: string;
    };
  } | null;
  sys: {
    __typename: "Sys";
    id: string;
    firstPublishedAt?: any | null;
    publishedAt?: any | null;
    environmentId: string;
    spaceId: string;
  };
};

export type BlogPostBodyFragmentFragment = {
  __typename: "BlogPostBody";
  json: any;
};

export type EventFragmentFragment = {
  __typename: "Event";
  title?: string | null;
  startDate?: any | null;
  contentfulMetadata: {
    __typename: "ContentfulMetadata";
    tags: Array<{
      __typename: "ContentfulTag";
      id?: string | null;
      name?: string | null;
    } | null>;
  };
  description?: { __typename: "EventDescription"; json: any } | null;
  image?: {
    __typename: "Asset";
    contentType?: string | null;
    description?: string | null;
    fileName?: string | null;
    height?: number | null;
    title?: string | null;
    url?: string | null;
    width?: number | null;
    contentfulMetadata: {
      __typename: "ContentfulMetadata";
      tags: Array<{
        __typename: "ContentfulTag";
        id?: string | null;
        name?: string | null;
      } | null>;
    };
    sys: {
      __typename: "Sys";
      id: string;
      firstPublishedAt?: any | null;
      publishedAt?: any | null;
      environmentId: string;
      spaceId: string;
    };
  } | null;
  location?: {
    __typename: "Location";
    lat?: number | null;
    lon?: number | null;
  } | null;
  sys: {
    __typename: "Sys";
    id: string;
    firstPublishedAt?: any | null;
    publishedAt?: any | null;
    environmentId: string;
    spaceId: string;
  };
};

export type ImageFragmentFragment = {
  __typename: "Asset";
  contentType?: string | null;
  description?: string | null;
  fileName?: string | null;
  height?: number | null;
  title?: string | null;
  url?: string | null;
  width?: number | null;
  contentfulMetadata: {
    __typename: "ContentfulMetadata";
    tags: Array<{
      __typename: "ContentfulTag";
      id?: string | null;
      name?: string | null;
    } | null>;
  };
  sys: {
    __typename: "Sys";
    id: string;
    firstPublishedAt?: any | null;
    publishedAt?: any | null;
    environmentId: string;
    spaceId: string;
  };
};

export type LocationFragmentFragment = {
  __typename: "Location";
  lat?: number | null;
  lon?: number | null;
};

export type MetadataFragmentFragment = {
  __typename: "ContentfulMetadata";
  tags: Array<{
    __typename: "ContentfulTag";
    id?: string | null;
    name?: string | null;
  } | null>;
};

export type PageFragmentFragment = {
  __typename: "Page";
  title?: string | null;
  slug?: string | null;
  body?: { __typename: "PageBody"; json: any } | null;
  contentfulMetadata: {
    __typename: "ContentfulMetadata";
    tags: Array<{
      __typename: "ContentfulTag";
      id?: string | null;
      name?: string | null;
    } | null>;
  };
  headerImage?: {
    __typename: "Asset";
    contentType?: string | null;
    description?: string | null;
    fileName?: string | null;
    height?: number | null;
    title?: string | null;
    url?: string | null;
    width?: number | null;
    contentfulMetadata: {
      __typename: "ContentfulMetadata";
      tags: Array<{
        __typename: "ContentfulTag";
        id?: string | null;
        name?: string | null;
      } | null>;
    };
    sys: {
      __typename: "Sys";
      id: string;
      firstPublishedAt?: any | null;
      publishedAt?: any | null;
      environmentId: string;
      spaceId: string;
    };
  } | null;
  sys: {
    __typename: "Sys";
    id: string;
    firstPublishedAt?: any | null;
    publishedAt?: any | null;
    environmentId: string;
    spaceId: string;
  };
};

export type PageBodyFragmentFragment = { __typename: "PageBody"; json: any };

export type SysFragmentFragment = {
  __typename: "Sys";
  id: string;
  firstPublishedAt?: any | null;
  publishedAt?: any | null;
  environmentId: string;
  spaceId: string;
};

export type TagsFragmentFragment = {
  __typename: "ContentfulTag";
  id?: string | null;
  name?: string | null;
};

export type GetAuthorsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type GetAuthorsQuery = {
  __typename?: "Query";
  authorCollection?: {
    __typename?: "AuthorCollection";
    limit: number;
    skip: number;
    total: number;
    items: Array<{
      __typename: "Author";
      description?: string | null;
      name?: string | null;
      contentfulMetadata: {
        __typename: "ContentfulMetadata";
        tags: Array<{
          __typename: "ContentfulTag";
          id?: string | null;
          name?: string | null;
        } | null>;
      };
      image?: {
        __typename: "Asset";
        contentType?: string | null;
        description?: string | null;
        fileName?: string | null;
        height?: number | null;
        title?: string | null;
        url?: string | null;
        width?: number | null;
        contentfulMetadata: {
          __typename: "ContentfulMetadata";
          tags: Array<{
            __typename: "ContentfulTag";
            id?: string | null;
            name?: string | null;
          } | null>;
        };
        sys: {
          __typename: "Sys";
          id: string;
          firstPublishedAt?: any | null;
          publishedAt?: any | null;
          environmentId: string;
          spaceId: string;
        };
      } | null;
      sys: {
        __typename: "Sys";
        id: string;
        firstPublishedAt?: any | null;
        publishedAt?: any | null;
        environmentId: string;
        spaceId: string;
      };
    } | null>;
  } | null;
};

export type GetBlogPostQueryVariables = Exact<{
  slug?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type GetBlogPostQuery = {
  __typename?: "Query";
  blogPostCollection?: {
    __typename?: "BlogPostCollection";
    items: Array<{
      __typename: "BlogPost";
      title?: string | null;
      slug?: string | null;
      datePublished?: any | null;
      body?: { __typename: "BlogPostBody"; json: any } | null;
      contentfulMetadata: {
        __typename: "ContentfulMetadata";
        tags: Array<{
          __typename: "ContentfulTag";
          id?: string | null;
          name?: string | null;
        } | null>;
      };
      sys: {
        __typename: "Sys";
        id: string;
        firstPublishedAt?: any | null;
        publishedAt?: any | null;
        environmentId: string;
        spaceId: string;
      };
    } | null>;
  } | null;
};

export type GetBlogPostsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type GetBlogPostsQuery = {
  __typename?: "Query";
  blogPostCollection?: {
    __typename?: "BlogPostCollection";
    limit: number;
    skip: number;
    total: number;
    items: Array<{
      __typename: "BlogPost";
      title?: string | null;
      slug?: string | null;
      datePublished?: any | null;
      sys: {
        __typename: "Sys";
        id: string;
        firstPublishedAt?: any | null;
        publishedAt?: any | null;
        environmentId: string;
        spaceId: string;
      };
    } | null>;
  } | null;
};

export type GetEventsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type GetEventsQuery = {
  __typename?: "Query";
  eventCollection?: {
    __typename?: "EventCollection";
    limit: number;
    skip: number;
    total: number;
    items: Array<{
      __typename: "Event";
      title?: string | null;
      startDate?: any | null;
      contentfulMetadata: {
        __typename: "ContentfulMetadata";
        tags: Array<{
          __typename: "ContentfulTag";
          id?: string | null;
          name?: string | null;
        } | null>;
      };
      description?: { __typename: "EventDescription"; json: any } | null;
      image?: {
        __typename: "Asset";
        contentType?: string | null;
        description?: string | null;
        fileName?: string | null;
        height?: number | null;
        title?: string | null;
        url?: string | null;
        width?: number | null;
        contentfulMetadata: {
          __typename: "ContentfulMetadata";
          tags: Array<{
            __typename: "ContentfulTag";
            id?: string | null;
            name?: string | null;
          } | null>;
        };
        sys: {
          __typename: "Sys";
          id: string;
          firstPublishedAt?: any | null;
          publishedAt?: any | null;
          environmentId: string;
          spaceId: string;
        };
      } | null;
      location?: {
        __typename: "Location";
        lat?: number | null;
        lon?: number | null;
      } | null;
      sys: {
        __typename: "Sys";
        id: string;
        firstPublishedAt?: any | null;
        publishedAt?: any | null;
        environmentId: string;
        spaceId: string;
      };
    } | null>;
  } | null;
};

export type GetPageQueryVariables = Exact<{
  slug?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type GetPageQuery = {
  __typename?: "Query";
  pageCollection?: {
    __typename?: "PageCollection";
    items: Array<{
      __typename: "Page";
      title?: string | null;
      slug?: string | null;
      body?: { __typename: "PageBody"; json: any } | null;
      contentfulMetadata: {
        __typename: "ContentfulMetadata";
        tags: Array<{
          __typename: "ContentfulTag";
          id?: string | null;
          name?: string | null;
        } | null>;
      };
      headerImage?: {
        __typename: "Asset";
        contentType?: string | null;
        description?: string | null;
        fileName?: string | null;
        height?: number | null;
        title?: string | null;
        url?: string | null;
        width?: number | null;
        contentfulMetadata: {
          __typename: "ContentfulMetadata";
          tags: Array<{
            __typename: "ContentfulTag";
            id?: string | null;
            name?: string | null;
          } | null>;
        };
        sys: {
          __typename: "Sys";
          id: string;
          firstPublishedAt?: any | null;
          publishedAt?: any | null;
          environmentId: string;
          spaceId: string;
        };
      } | null;
      sys: {
        __typename: "Sys";
        id: string;
        firstPublishedAt?: any | null;
        publishedAt?: any | null;
        environmentId: string;
        spaceId: string;
      };
    } | null>;
  } | null;
};

export type GetPagesQueryVariables = Exact<{
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type GetPagesQuery = {
  __typename?: "Query";
  pageCollection?: {
    __typename?: "PageCollection";
    limit: number;
    skip: number;
    items: Array<{
      __typename: "Page";
      title?: string | null;
      slug?: string | null;
      body?: { __typename: "PageBody"; json: any } | null;
      contentfulMetadata: {
        __typename: "ContentfulMetadata";
        tags: Array<{
          __typename: "ContentfulTag";
          id?: string | null;
          name?: string | null;
        } | null>;
      };
      headerImage?: {
        __typename: "Asset";
        contentType?: string | null;
        description?: string | null;
        fileName?: string | null;
        height?: number | null;
        title?: string | null;
        url?: string | null;
        width?: number | null;
        contentfulMetadata: {
          __typename: "ContentfulMetadata";
          tags: Array<{
            __typename: "ContentfulTag";
            id?: string | null;
            name?: string | null;
          } | null>;
        };
        sys: {
          __typename: "Sys";
          id: string;
          firstPublishedAt?: any | null;
          publishedAt?: any | null;
          environmentId: string;
          spaceId: string;
        };
      } | null;
      sys: {
        __typename: "Sys";
        id: string;
        firstPublishedAt?: any | null;
        publishedAt?: any | null;
        environmentId: string;
        spaceId: string;
      };
    } | null>;
  } | null;
};
