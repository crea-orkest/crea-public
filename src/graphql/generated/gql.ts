/* eslint-disable */
import * as types from './graphql'
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  '\n  fragment author on PersonRecord {\n    id\n    name\n    role\n  }\n':
    types.AuthorFragmentDoc,
  '\n  fragment colors on ColorField {\n    alpha\n    blue\n    cssRgb\n    green\n    hex\n    red\n  }\n':
    types.ColorsFragmentDoc,
  '\n  fragment coordinates on LatLonField {\n    latitude\n    longitude\n  }\n':
    types.CoordinatesFragmentDoc,
  '\n  fragment event on ConcertRecord {\n    id\n    title\n    _seoMetaTags {\n      ...tag\n    }\n    link {\n      ...link\n    }\n    locations {\n      ...locations\n    }\n    persons {\n      ...author\n    }\n    poster {\n      ...file\n    }\n  }\n  \n  \n  \n  \n  \n':
    types.EventFragmentDoc,
  '\n  fragment file on FileField {\n    id\n    alt\n    blurhash\n    blurUpThumb\n    colors {\n      ...colors\n    }\n    copyright\n    customData\n    filename\n    focalPoint {\n      ...focalPoint\n    }\n    format\n    width\n    height\n    mimeType\n    notes\n    responsiveImage {\n      ...responsiveImage\n    }\n    size\n    smartTags\n    tags\n    title\n    url\n    video {\n      ...video\n    }\n  }\n  \n  \n  \n  \n':
    types.FileFragmentDoc,
  '\n  fragment focalPoint on focalPoint {\n    x\n    y\n  }\n':
    types.FocalPointFragmentDoc,
  '\n  fragment identifiable on RecordInterface {\n    _createdAt\n    _firstPublishedAt\n    _publishedAt\n    _updatedAt\n    id\n  }\n':
    types.IdentifiableFragmentDoc,
  '\n  fragment responsiveImage on ResponsiveImage {\n    title\n    alt\n    sizes\n    aspectRatio\n    bgColor\n    src\n    height\n    width\n    srcSet\n    webpSrcSet\n  }\n':
    types.ResponsiveImageFragmentDoc,
  '\n  fragment link on LinkRecord {\n    id\n    internalTitle\n    externalUrl\n    page {\n      slug\n    }\n  }\n':
    types.LinkFragmentDoc,
  '\n  fragment location on LocationRecord {\n    id\n    title\n    addressTitle\n    address {\n      ...coordinates\n    }\n  }\n  \n':
    types.LocationFragmentDoc,
  '\n  fragment locations on LocationItemRecord {\n    id\n    dateTime\n    location {\n      id\n    }\n  }\n':
    types.LocationsFragmentDoc,
  '\n  fragment page on PageRecord {\n    ...identifiable\n    _seoMetaTags {\n      ...tag\n    }\n    title\n    slug\n    seo {\n      ...seo\n    }\n    content {\n      ... on ConcertListRecord {\n        id\n      }\n      ... on TextBlockRecord {\n        id\n      }\n      ... on ConcertListRecord {\n        id\n      }\n    }\n  }\n  \n  \n  \n':
    types.PageFragmentDoc,
  '\n  fragment pageDetail on PageRecord {\n    id\n    ...identifiable\n    _seoMetaTags {\n      ...tag\n    }\n    title\n    slug\n    seo {\n      ...seo\n    }\n    content {\n      ... on ConcertListRecord {\n        ...identifiable\n      }\n      ... on TextBlockRecord {\n        ...identifiable\n      }\n      ... on TwoColumnRecord {\n        ...identifiable\n      }\n    }\n  }\n  \n  \n  \n':
    types.PageDetailFragmentDoc,
  '\n  fragment seo on SeoField {\n    description\n    image {\n      ...file\n    }\n    title\n    twitterCard\n  }\n  \n':
    types.SeoFragmentDoc,
  '\n  fragment tag on Tag {\n    attributes\n    content\n    tag\n  }\n':
    types.TagFragmentDoc,
  '\n  fragment video on UploadVideoField {\n    mp4Url\n    muxAssetId\n    muxPlaybackId\n    streamingUrl\n    thumbnailUrl\n  }\n':
    types.VideoFragmentDoc,
  '\n  query getAuthor($id: ItemId!) {\n    person(filter: { id: { eq: $id } }) {\n      ...author\n    }\n  }\n  \n':
    types.GetAuthorDocument,
  '\n  query getAuthors(\n    $first: IntType!\n    $skip: IntType!\n    $order: [PersonModelOrderBy]\n  ) {\n    allPeople(first: $first, skip: $skip, orderBy: $order) {\n      ...author\n    }\n  }\n  \n':
    types.GetAuthorsDocument,
  '\n  query getConcert($id: ItemId!) {\n    concert(filter: { id: { eq: $id } }) {\n      id\n      title\n      link {\n        ...identifiable\n      }\n      locations {\n        ...locations\n      }\n      persons {\n        ...author\n      }\n      poster {\n        ...file\n      }\n    }\n  }\n  \n  \n  \n  \n':
    types.GetConcertDocument,
  '\n  query getConcerts(\n    $skip: IntType!\n    $first: IntType!\n    $order: [ConcertModelOrderBy]\n  ) {\n    allConcerts(first: $first, skip: $skip, orderBy: $order) {\n      id\n      title\n      locations {\n        ...locations\n      }\n      poster {\n        ...file\n      }\n    }\n  }\n  \n  \n':
    types.GetConcertsDocument,
  '\n  query getLocation($id: ItemId) {\n    location(filter: { id: { eq: $id } }) {\n      ...location\n    }\n  }\n  \n':
    types.GetLocationDocument,
  '\n  query getLocations(\n    $first: IntType\n    $skip: IntType\n    $order: [LocationModelOrderBy]\n  ) {\n    allLocations(first: $first, skip: $skip, orderBy: $order) {\n      ...location\n    }\n  }\n  \n':
    types.GetLocationsDocument,
  '\n  query getPage($slug: String!) {\n    page(filter: { slug: { eq: $slug } }) {\n      ...pageDetail\n    }\n  }\n  \n':
    types.GetPageDocument,
  '\n  query getPages($skip: IntType, $first: IntType, $order: [PageModelOrderBy]) {\n    allPages(first: $first, skip: $skip, orderBy: $order) {\n      ...identifiable\n      title\n      slug\n    }\n  }\n  \n':
    types.GetPagesDocument,
  '\n  query GetSpaceX {\n    company {\n      ceo\n      coo\n      cto\n      cto_propulsion\n      employees\n      founded\n      founder\n      launch_sites\n      name\n      summary\n      test_sites\n      vehicles\n    }\n  }\n':
    types.GetSpaceXDocument,
}

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  fragment author on PersonRecord {\n    id\n    name\n    role\n  }\n'
): (typeof documents)['\n  fragment author on PersonRecord {\n    id\n    name\n    role\n  }\n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  fragment colors on ColorField {\n    alpha\n    blue\n    cssRgb\n    green\n    hex\n    red\n  }\n'
): (typeof documents)['\n  fragment colors on ColorField {\n    alpha\n    blue\n    cssRgb\n    green\n    hex\n    red\n  }\n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  fragment coordinates on LatLonField {\n    latitude\n    longitude\n  }\n'
): (typeof documents)['\n  fragment coordinates on LatLonField {\n    latitude\n    longitude\n  }\n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  fragment event on ConcertRecord {\n    id\n    title\n    _seoMetaTags {\n      ...tag\n    }\n    link {\n      ...link\n    }\n    locations {\n      ...locations\n    }\n    persons {\n      ...author\n    }\n    poster {\n      ...file\n    }\n  }\n  \n  \n  \n  \n  \n'
): (typeof documents)['\n  fragment event on ConcertRecord {\n    id\n    title\n    _seoMetaTags {\n      ...tag\n    }\n    link {\n      ...link\n    }\n    locations {\n      ...locations\n    }\n    persons {\n      ...author\n    }\n    poster {\n      ...file\n    }\n  }\n  \n  \n  \n  \n  \n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  fragment file on FileField {\n    id\n    alt\n    blurhash\n    blurUpThumb\n    colors {\n      ...colors\n    }\n    copyright\n    customData\n    filename\n    focalPoint {\n      ...focalPoint\n    }\n    format\n    width\n    height\n    mimeType\n    notes\n    responsiveImage {\n      ...responsiveImage\n    }\n    size\n    smartTags\n    tags\n    title\n    url\n    video {\n      ...video\n    }\n  }\n  \n  \n  \n  \n'
): (typeof documents)['\n  fragment file on FileField {\n    id\n    alt\n    blurhash\n    blurUpThumb\n    colors {\n      ...colors\n    }\n    copyright\n    customData\n    filename\n    focalPoint {\n      ...focalPoint\n    }\n    format\n    width\n    height\n    mimeType\n    notes\n    responsiveImage {\n      ...responsiveImage\n    }\n    size\n    smartTags\n    tags\n    title\n    url\n    video {\n      ...video\n    }\n  }\n  \n  \n  \n  \n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  fragment focalPoint on focalPoint {\n    x\n    y\n  }\n'
): (typeof documents)['\n  fragment focalPoint on focalPoint {\n    x\n    y\n  }\n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  fragment identifiable on RecordInterface {\n    _createdAt\n    _firstPublishedAt\n    _publishedAt\n    _updatedAt\n    id\n  }\n'
): (typeof documents)['\n  fragment identifiable on RecordInterface {\n    _createdAt\n    _firstPublishedAt\n    _publishedAt\n    _updatedAt\n    id\n  }\n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  fragment responsiveImage on ResponsiveImage {\n    title\n    alt\n    sizes\n    aspectRatio\n    bgColor\n    src\n    height\n    width\n    srcSet\n    webpSrcSet\n  }\n'
): (typeof documents)['\n  fragment responsiveImage on ResponsiveImage {\n    title\n    alt\n    sizes\n    aspectRatio\n    bgColor\n    src\n    height\n    width\n    srcSet\n    webpSrcSet\n  }\n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  fragment link on LinkRecord {\n    id\n    internalTitle\n    externalUrl\n    page {\n      slug\n    }\n  }\n'
): (typeof documents)['\n  fragment link on LinkRecord {\n    id\n    internalTitle\n    externalUrl\n    page {\n      slug\n    }\n  }\n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  fragment location on LocationRecord {\n    id\n    title\n    addressTitle\n    address {\n      ...coordinates\n    }\n  }\n  \n'
): (typeof documents)['\n  fragment location on LocationRecord {\n    id\n    title\n    addressTitle\n    address {\n      ...coordinates\n    }\n  }\n  \n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  fragment locations on LocationItemRecord {\n    id\n    dateTime\n    location {\n      id\n    }\n  }\n'
): (typeof documents)['\n  fragment locations on LocationItemRecord {\n    id\n    dateTime\n    location {\n      id\n    }\n  }\n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  fragment page on PageRecord {\n    ...identifiable\n    _seoMetaTags {\n      ...tag\n    }\n    title\n    slug\n    seo {\n      ...seo\n    }\n    content {\n      ... on ConcertListRecord {\n        id\n      }\n      ... on TextBlockRecord {\n        id\n      }\n      ... on ConcertListRecord {\n        id\n      }\n    }\n  }\n  \n  \n  \n'
): (typeof documents)['\n  fragment page on PageRecord {\n    ...identifiable\n    _seoMetaTags {\n      ...tag\n    }\n    title\n    slug\n    seo {\n      ...seo\n    }\n    content {\n      ... on ConcertListRecord {\n        id\n      }\n      ... on TextBlockRecord {\n        id\n      }\n      ... on ConcertListRecord {\n        id\n      }\n    }\n  }\n  \n  \n  \n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  fragment pageDetail on PageRecord {\n    id\n    ...identifiable\n    _seoMetaTags {\n      ...tag\n    }\n    title\n    slug\n    seo {\n      ...seo\n    }\n    content {\n      ... on ConcertListRecord {\n        ...identifiable\n      }\n      ... on TextBlockRecord {\n        ...identifiable\n      }\n      ... on TwoColumnRecord {\n        ...identifiable\n      }\n    }\n  }\n  \n  \n  \n'
): (typeof documents)['\n  fragment pageDetail on PageRecord {\n    id\n    ...identifiable\n    _seoMetaTags {\n      ...tag\n    }\n    title\n    slug\n    seo {\n      ...seo\n    }\n    content {\n      ... on ConcertListRecord {\n        ...identifiable\n      }\n      ... on TextBlockRecord {\n        ...identifiable\n      }\n      ... on TwoColumnRecord {\n        ...identifiable\n      }\n    }\n  }\n  \n  \n  \n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  fragment seo on SeoField {\n    description\n    image {\n      ...file\n    }\n    title\n    twitterCard\n  }\n  \n'
): (typeof documents)['\n  fragment seo on SeoField {\n    description\n    image {\n      ...file\n    }\n    title\n    twitterCard\n  }\n  \n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  fragment tag on Tag {\n    attributes\n    content\n    tag\n  }\n'
): (typeof documents)['\n  fragment tag on Tag {\n    attributes\n    content\n    tag\n  }\n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  fragment video on UploadVideoField {\n    mp4Url\n    muxAssetId\n    muxPlaybackId\n    streamingUrl\n    thumbnailUrl\n  }\n'
): (typeof documents)['\n  fragment video on UploadVideoField {\n    mp4Url\n    muxAssetId\n    muxPlaybackId\n    streamingUrl\n    thumbnailUrl\n  }\n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query getAuthor($id: ItemId!) {\n    person(filter: { id: { eq: $id } }) {\n      ...author\n    }\n  }\n  \n'
): (typeof documents)['\n  query getAuthor($id: ItemId!) {\n    person(filter: { id: { eq: $id } }) {\n      ...author\n    }\n  }\n  \n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query getAuthors(\n    $first: IntType!\n    $skip: IntType!\n    $order: [PersonModelOrderBy]\n  ) {\n    allPeople(first: $first, skip: $skip, orderBy: $order) {\n      ...author\n    }\n  }\n  \n'
): (typeof documents)['\n  query getAuthors(\n    $first: IntType!\n    $skip: IntType!\n    $order: [PersonModelOrderBy]\n  ) {\n    allPeople(first: $first, skip: $skip, orderBy: $order) {\n      ...author\n    }\n  }\n  \n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query getConcert($id: ItemId!) {\n    concert(filter: { id: { eq: $id } }) {\n      id\n      title\n      link {\n        ...identifiable\n      }\n      locations {\n        ...locations\n      }\n      persons {\n        ...author\n      }\n      poster {\n        ...file\n      }\n    }\n  }\n  \n  \n  \n  \n'
): (typeof documents)['\n  query getConcert($id: ItemId!) {\n    concert(filter: { id: { eq: $id } }) {\n      id\n      title\n      link {\n        ...identifiable\n      }\n      locations {\n        ...locations\n      }\n      persons {\n        ...author\n      }\n      poster {\n        ...file\n      }\n    }\n  }\n  \n  \n  \n  \n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query getConcerts(\n    $skip: IntType!\n    $first: IntType!\n    $order: [ConcertModelOrderBy]\n  ) {\n    allConcerts(first: $first, skip: $skip, orderBy: $order) {\n      id\n      title\n      locations {\n        ...locations\n      }\n      poster {\n        ...file\n      }\n    }\n  }\n  \n  \n'
): (typeof documents)['\n  query getConcerts(\n    $skip: IntType!\n    $first: IntType!\n    $order: [ConcertModelOrderBy]\n  ) {\n    allConcerts(first: $first, skip: $skip, orderBy: $order) {\n      id\n      title\n      locations {\n        ...locations\n      }\n      poster {\n        ...file\n      }\n    }\n  }\n  \n  \n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query getLocation($id: ItemId) {\n    location(filter: { id: { eq: $id } }) {\n      ...location\n    }\n  }\n  \n'
): (typeof documents)['\n  query getLocation($id: ItemId) {\n    location(filter: { id: { eq: $id } }) {\n      ...location\n    }\n  }\n  \n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query getLocations(\n    $first: IntType\n    $skip: IntType\n    $order: [LocationModelOrderBy]\n  ) {\n    allLocations(first: $first, skip: $skip, orderBy: $order) {\n      ...location\n    }\n  }\n  \n'
): (typeof documents)['\n  query getLocations(\n    $first: IntType\n    $skip: IntType\n    $order: [LocationModelOrderBy]\n  ) {\n    allLocations(first: $first, skip: $skip, orderBy: $order) {\n      ...location\n    }\n  }\n  \n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query getPage($slug: String!) {\n    page(filter: { slug: { eq: $slug } }) {\n      ...pageDetail\n    }\n  }\n  \n'
): (typeof documents)['\n  query getPage($slug: String!) {\n    page(filter: { slug: { eq: $slug } }) {\n      ...pageDetail\n    }\n  }\n  \n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query getPages($skip: IntType, $first: IntType, $order: [PageModelOrderBy]) {\n    allPages(first: $first, skip: $skip, orderBy: $order) {\n      ...identifiable\n      title\n      slug\n    }\n  }\n  \n'
): (typeof documents)['\n  query getPages($skip: IntType, $first: IntType, $order: [PageModelOrderBy]) {\n    allPages(first: $first, skip: $skip, orderBy: $order) {\n      ...identifiable\n      title\n      slug\n    }\n  }\n  \n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query GetSpaceX {\n    company {\n      ceo\n      coo\n      cto\n      cto_propulsion\n      employees\n      founded\n      founder\n      launch_sites\n      name\n      summary\n      test_sites\n      vehicles\n    }\n  }\n'
): (typeof documents)['\n  query GetSpaceX {\n    company {\n      ceo\n      coo\n      cto\n      cto_propulsion\n      employees\n      founded\n      founder\n      launch_sites\n      name\n      summary\n      test_sites\n      vehicles\n    }\n  }\n']

export function gql(source: string) {
  return (documents as any)[source] ?? {}
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never
