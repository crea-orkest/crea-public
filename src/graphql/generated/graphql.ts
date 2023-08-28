/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never }
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never
    }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  /** Represents `true` or `false` values. */
  BooleanType: { input: boolean; output: boolean }
  CustomData: { input: Record<string, string>; output: Record<string, string> }
  Date: { input: string; output: string }
  /** A ISO 8601 compliant datetime value */
  DateTime: { input: string; output: string }
  /** Represents signed double-precision fractional values as specified by [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). */
  FloatType: { input: number; output: number }
  /** Represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  IntType: { input: number; output: number }
  ItemId: { input: string; output: string }
  JsonField: { input: unknown; output: unknown }
  MetaTagAttributes: {
    input: Record<string, string>
    output: Record<string, string>
  }
  ObjectID: { input: any; output: any }
  UploadId: { input: string; output: string }
  timestamptz: { input: any; output: any }
  uuid: { input: any; output: any }
}

export type Address = {
  __typename?: 'Address'
  address?: Maybe<Scalars['String']['output']>
  city?: Maybe<Scalars['String']['output']>
  state?: Maybe<Scalars['String']['output']>
}

/** Specifies how to filter Boolean fields */
export type BooleanFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['BooleanType']['input']>
}

export type Capsule = {
  __typename?: 'Capsule'
  /** @deprecated This is not available in the REST API after MongoDB has been deprecated */
  dragon?: Maybe<Dragon>
  id?: Maybe<Scalars['ID']['output']>
  landings?: Maybe<Scalars['Int']['output']>
  missions?: Maybe<Array<Maybe<CapsuleMission>>>
  original_launch?: Maybe<Scalars['Date']['output']>
  reuse_count?: Maybe<Scalars['Int']['output']>
  status?: Maybe<Scalars['String']['output']>
  type?: Maybe<Scalars['String']['output']>
}

export type CapsuleMission = {
  __typename?: 'CapsuleMission'
  flight?: Maybe<Scalars['Int']['output']>
  name?: Maybe<Scalars['String']['output']>
}

export type CapsulesFind = {
  id?: InputMaybe<Scalars['ID']['input']>
  landings?: InputMaybe<Scalars['Int']['input']>
  mission?: InputMaybe<Scalars['String']['input']>
  original_launch?: InputMaybe<Scalars['Date']['input']>
  reuse_count?: InputMaybe<Scalars['Int']['input']>
  status?: InputMaybe<Scalars['String']['input']>
  type?: InputMaybe<Scalars['String']['input']>
}

export type CollectionMetadata = {
  __typename?: 'CollectionMetadata'
  count: Scalars['IntType']['output']
}

export enum ColorBucketType {
  Black = 'black',
  Blue = 'blue',
  Brown = 'brown',
  Cyan = 'cyan',
  Green = 'green',
  Grey = 'grey',
  Orange = 'orange',
  Pink = 'pink',
  Purple = 'purple',
  Red = 'red',
  White = 'white',
  Yellow = 'yellow',
}

export type ColorField = {
  __typename?: 'ColorField'
  alpha: Scalars['IntType']['output']
  blue: Scalars['IntType']['output']
  cssRgb: Scalars['String']['output']
  green: Scalars['IntType']['output']
  hex: Scalars['String']['output']
  red: Scalars['IntType']['output']
}

/** Block of type Concert lijst (concert_list) */
export type ConcertListRecord = RecordInterface & {
  __typename?: 'ConcertListRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  id: Scalars['ItemId']['output']
  pinnedConcerts: Array<ConcertRecord>
  showAllConcerts?: Maybe<Scalars['BooleanType']['output']>
}

/** Block of type Concert lijst (concert_list) */
export type ConcertListRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export type ConcertModelContentField = TextBlockRecord | TwoColumnRecord

export type ConcertModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ConcertModelFilter>>>
  OR?: InputMaybe<Array<InputMaybe<ConcertModelFilter>>>
  _createdAt?: InputMaybe<CreatedAtFilter>
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>
  _isValid?: InputMaybe<BooleanFilter>
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>
  _publishedAt?: InputMaybe<PublishedAtFilter>
  _status?: InputMaybe<StatusFilter>
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>
  _updatedAt?: InputMaybe<UpdatedAtFilter>
  id?: InputMaybe<ItemIdFilter>
  link?: InputMaybe<LinkFilter>
  persons?: InputMaybe<LinksFilter>
  poster?: InputMaybe<FileFilter>
  title?: InputMaybe<StringFilter>
}

export enum ConcertModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

/** Record of type Concerten (concert) */
export type ConcertRecord = RecordInterface & {
  __typename?: 'ConcertRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  content: Array<ConcertModelContentField>
  id: Scalars['ItemId']['output']
  link?: Maybe<LinkRecord>
  locations: Array<LocationItemRecord>
  persons: Array<PersonRecord>
  poster?: Maybe<FileField>
  title: Scalars['String']['output']
}

/** Record of type Concerten (concert) */
export type ConcertRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export type Core = {
  __typename?: 'Core'
  asds_attempts?: Maybe<Scalars['Int']['output']>
  asds_landings?: Maybe<Scalars['Int']['output']>
  block?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['ID']['output']>
  missions?: Maybe<Array<Maybe<CapsuleMission>>>
  original_launch?: Maybe<Scalars['Date']['output']>
  reuse_count?: Maybe<Scalars['Int']['output']>
  rtls_attempts?: Maybe<Scalars['Int']['output']>
  rtls_landings?: Maybe<Scalars['Int']['output']>
  status?: Maybe<Scalars['String']['output']>
  water_landing?: Maybe<Scalars['Boolean']['output']>
}

export type CoreMission = {
  __typename?: 'CoreMission'
  flight?: Maybe<Scalars['Int']['output']>
  name?: Maybe<Scalars['String']['output']>
}

export type CoresFind = {
  asds_attempts?: InputMaybe<Scalars['Int']['input']>
  asds_landings?: InputMaybe<Scalars['Int']['input']>
  block?: InputMaybe<Scalars['Int']['input']>
  id?: InputMaybe<Scalars['String']['input']>
  missions?: InputMaybe<Scalars['String']['input']>
  original_launch?: InputMaybe<Scalars['Date']['input']>
  reuse_count?: InputMaybe<Scalars['Int']['input']>
  rtls_attempts?: InputMaybe<Scalars['Int']['input']>
  rtls_landings?: InputMaybe<Scalars['Int']['input']>
  status?: InputMaybe<Scalars['String']['input']>
  water_landing?: InputMaybe<Scalars['Boolean']['input']>
}

/** Specifies how to filter by creation datetime */
export type CreatedAtFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars['DateTime']['input']>
}

export type Distance = {
  __typename?: 'Distance'
  feet?: Maybe<Scalars['Float']['output']>
  meters?: Maybe<Scalars['Float']['output']>
}

export type Dragon = {
  __typename?: 'Dragon'
  active?: Maybe<Scalars['Boolean']['output']>
  crew_capacity?: Maybe<Scalars['Int']['output']>
  description?: Maybe<Scalars['String']['output']>
  diameter?: Maybe<Distance>
  dry_mass_kg?: Maybe<Scalars['Int']['output']>
  dry_mass_lb?: Maybe<Scalars['Int']['output']>
  first_flight?: Maybe<Scalars['String']['output']>
  heat_shield?: Maybe<DragonHeatShield>
  height_w_trunk?: Maybe<Distance>
  id?: Maybe<Scalars['ID']['output']>
  launch_payload_mass?: Maybe<Mass>
  launch_payload_vol?: Maybe<Volume>
  name?: Maybe<Scalars['String']['output']>
  orbit_duration_yr?: Maybe<Scalars['Int']['output']>
  pressurized_capsule?: Maybe<DragonPressurizedCapsule>
  return_payload_mass?: Maybe<Mass>
  return_payload_vol?: Maybe<Volume>
  sidewall_angle_deg?: Maybe<Scalars['Float']['output']>
  thrusters?: Maybe<Array<Maybe<DragonThrust>>>
  trunk?: Maybe<DragonTrunk>
  type?: Maybe<Scalars['String']['output']>
  wikipedia?: Maybe<Scalars['String']['output']>
}

export type DragonHeatShield = {
  __typename?: 'DragonHeatShield'
  dev_partner?: Maybe<Scalars['String']['output']>
  material?: Maybe<Scalars['String']['output']>
  size_meters?: Maybe<Scalars['Float']['output']>
  temp_degrees?: Maybe<Scalars['Int']['output']>
}

export type DragonPressurizedCapsule = {
  __typename?: 'DragonPressurizedCapsule'
  payload_volume?: Maybe<Volume>
}

export type DragonThrust = {
  __typename?: 'DragonThrust'
  amount?: Maybe<Scalars['Int']['output']>
  fuel_1?: Maybe<Scalars['String']['output']>
  fuel_2?: Maybe<Scalars['String']['output']>
  pods?: Maybe<Scalars['Int']['output']>
  thrust?: Maybe<Force>
  type?: Maybe<Scalars['String']['output']>
}

export type DragonTrunk = {
  __typename?: 'DragonTrunk'
  cargo?: Maybe<DragonTrunkCargo>
  trunk_volume?: Maybe<Volume>
}

export type DragonTrunkCargo = {
  __typename?: 'DragonTrunkCargo'
  solar_array?: Maybe<Scalars['Int']['output']>
  unpressurized_cargo?: Maybe<Scalars['Boolean']['output']>
}

export enum FaviconType {
  AppleTouchIcon = 'appleTouchIcon',
  Icon = 'icon',
  MsApplication = 'msApplication',
}

export type FileField = FileFieldInterface & {
  __typename?: 'FileField'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _updatedAt: Scalars['DateTime']['output']
  alt?: Maybe<Scalars['String']['output']>
  author?: Maybe<Scalars['String']['output']>
  basename: Scalars['String']['output']
  blurUpThumb?: Maybe<Scalars['String']['output']>
  blurhash?: Maybe<Scalars['String']['output']>
  colors: Array<ColorField>
  copyright?: Maybe<Scalars['String']['output']>
  customData: Scalars['CustomData']['output']
  exifInfo: Scalars['CustomData']['output']
  filename: Scalars['String']['output']
  focalPoint?: Maybe<FocalPoint>
  format: Scalars['String']['output']
  height?: Maybe<Scalars['IntType']['output']>
  id: Scalars['UploadId']['output']
  md5: Scalars['String']['output']
  mimeType: Scalars['String']['output']
  notes?: Maybe<Scalars['String']['output']>
  responsiveImage?: Maybe<ResponsiveImage>
  size: Scalars['IntType']['output']
  smartTags: Array<Scalars['String']['output']>
  tags: Array<Scalars['String']['output']>
  thumbhash?: Maybe<Scalars['String']['output']>
  title?: Maybe<Scalars['String']['output']>
  url: Scalars['String']['output']
  video?: Maybe<UploadVideoField>
  width?: Maybe<Scalars['IntType']['output']>
}

export type FileFieldAltArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export type FileFieldBlurUpThumbArgs = {
  imgixParams?: InputMaybe<ImgixParams>
  punch?: Scalars['Float']['input']
  quality?: Scalars['Int']['input']
  size?: Scalars['Int']['input']
}

export type FileFieldCustomDataArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export type FileFieldFocalPointArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export type FileFieldResponsiveImageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  imgixParams?: InputMaybe<ImgixParams>
  locale?: InputMaybe<SiteLocale>
  sizes?: InputMaybe<Scalars['String']['input']>
}

export type FileFieldTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export type FileFieldUrlArgs = {
  imgixParams?: InputMaybe<ImgixParams>
}

export type FileFieldInterface = {
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _updatedAt: Scalars['DateTime']['output']
  alt?: Maybe<Scalars['String']['output']>
  author?: Maybe<Scalars['String']['output']>
  basename: Scalars['String']['output']
  blurUpThumb?: Maybe<Scalars['String']['output']>
  blurhash?: Maybe<Scalars['String']['output']>
  colors: Array<ColorField>
  copyright?: Maybe<Scalars['String']['output']>
  customData: Scalars['CustomData']['output']
  exifInfo: Scalars['CustomData']['output']
  filename: Scalars['String']['output']
  focalPoint?: Maybe<FocalPoint>
  format: Scalars['String']['output']
  height?: Maybe<Scalars['IntType']['output']>
  id: Scalars['UploadId']['output']
  md5: Scalars['String']['output']
  mimeType: Scalars['String']['output']
  notes?: Maybe<Scalars['String']['output']>
  responsiveImage?: Maybe<ResponsiveImage>
  size: Scalars['IntType']['output']
  smartTags: Array<Scalars['String']['output']>
  tags: Array<Scalars['String']['output']>
  thumbhash?: Maybe<Scalars['String']['output']>
  title?: Maybe<Scalars['String']['output']>
  url: Scalars['String']['output']
  video?: Maybe<UploadVideoField>
  width?: Maybe<Scalars['IntType']['output']>
}

export type FileFieldInterfaceAltArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export type FileFieldInterfaceBlurUpThumbArgs = {
  imgixParams?: InputMaybe<ImgixParams>
  punch?: Scalars['Float']['input']
  quality?: Scalars['Int']['input']
  size?: Scalars['Int']['input']
}

export type FileFieldInterfaceCustomDataArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export type FileFieldInterfaceFocalPointArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export type FileFieldInterfaceResponsiveImageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  imgixParams?: InputMaybe<ImgixParams>
  locale?: InputMaybe<SiteLocale>
  sizes?: InputMaybe<Scalars['String']['input']>
}

export type FileFieldInterfaceTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export type FileFieldInterfaceUrlArgs = {
  imgixParams?: InputMaybe<ImgixParams>
}

/** Specifies how to filter Single-file/image fields */
export type FileFilter = {
  /** Search for records with an exact match. The specified value must be an Upload ID */
  eq?: InputMaybe<Scalars['UploadId']['input']>
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>
  /** Filter records that have one of the specified uploads */
  in?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>
  /** Exclude records with an exact match. The specified value must be an Upload ID */
  neq?: InputMaybe<Scalars['UploadId']['input']>
  /** Filter records that do not have one of the specified uploads */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>
}

export type Force = {
  __typename?: 'Force'
  kN?: Maybe<Scalars['Float']['output']>
  lbf?: Maybe<Scalars['Float']['output']>
}

export type GeneralModelMenuField = MenuItemRecord | SubmenuItemRecord

/** Record of type Algemene info (general) */
export type GeneralRecord = RecordInterface & {
  __typename?: 'GeneralRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  id: Scalars['ItemId']['output']
  logo: FileField
  menu: Array<GeneralModelMenuField>
  title: Scalars['String']['output']
}

/** Record of type Algemene info (general) */
export type GeneralRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export type GlobalSeoField = {
  __typename?: 'GlobalSeoField'
  facebookPageUrl?: Maybe<Scalars['String']['output']>
  fallbackSeo?: Maybe<SeoField>
  siteName?: Maybe<Scalars['String']['output']>
  titleSuffix?: Maybe<Scalars['String']['output']>
  twitterAccount?: Maybe<Scalars['String']['output']>
}

export type HistoriesResult = {
  __typename?: 'HistoriesResult'
  data?: Maybe<Array<Maybe<History>>>
  result?: Maybe<Result>
}

export type History = {
  __typename?: 'History'
  details?: Maybe<Scalars['String']['output']>
  event_date_unix?: Maybe<Scalars['Date']['output']>
  event_date_utc?: Maybe<Scalars['Date']['output']>
  flight?: Maybe<Launch>
  id?: Maybe<Scalars['ID']['output']>
  links?: Maybe<Link>
  title?: Maybe<Scalars['String']['output']>
}

export type HistoryFind = {
  end?: InputMaybe<Scalars['Date']['input']>
  flight_number?: InputMaybe<Scalars['Int']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  start?: InputMaybe<Scalars['Date']['input']>
}

/** Block of type Afbeelding (image) */
export type ImageRecord = RecordInterface & {
  __typename?: 'ImageRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  id: Scalars['ItemId']['output']
  item?: Maybe<MediaItemRecord>
}

/** Block of type Afbeelding (image) */
export type ImageRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export type ImgixParams = {
  /**
   * Aspect Ratio
   *
   * Specifies an aspect ratio to maintain when resizing and cropping the image
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/ar)
   */
  ar?: InputMaybe<Scalars['String']['input']>
  /**
   * Automatic
   *
   * Applies automatic enhancements to images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/auto)
   */
  auto?: InputMaybe<Array<ImgixParamsAuto>>
  /**
   * Background Color
   *
   * Colors the background of padded and partially-transparent images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/bg)
   */
  bg?: InputMaybe<Scalars['String']['input']>
  /**
   * Background Removal
   *
   * Removes background from image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background-removal/bg-remove)
   */
  bgRemove?: InputMaybe<Scalars['BooleanType']['input']>
  /**
   * Blend
   *
   * Specifies the location of the blend image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend)
   */
  blend?: InputMaybe<Scalars['String']['input']>
  /**
   * Blend Align
   *
   * Changes the blend alignment relative to the parent image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-align)
   */
  blendAlign?: InputMaybe<Array<ImgixParamsBlendAlign>>
  /**
   * Blend Alpha
   *
   * Changes the alpha of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-alpha)
   */
  blendAlpha?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Blend Color
   *
   * Specifies a color to use when applying the blend.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-color)
   */
  blendColor?: InputMaybe<Scalars['String']['input']>
  /**
   * Blend Crop
   *
   * Specifies the type of crop for blend images.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-crop)
   */
  blendCrop?: InputMaybe<Array<ImgixParamsBlendCrop>>
  /**
   * Blend Fit
   *
   * Specifies the fit mode for blend images.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-fit)
   */
  blendFit?: InputMaybe<ImgixParamsBlendFit>
  /**
   * Blend Height
   *
   * Adjusts the height of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-h)
   */
  blendH?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Blend Mode
   *
   * Sets the blend mode for a blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-mode)
   */
  blendMode?: InputMaybe<ImgixParamsBlendMode>
  /**
   * Blend Padding
   *
   * Applies padding to the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-pad)
   */
  blendPad?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Blend Size
   *
   * Adjusts the size of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-size)
   */
  blendSize?: InputMaybe<ImgixParamsBlendSize>
  /**
   * Blend Width
   *
   * Adjusts the width of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-w)
   */
  blendW?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Blend X Position
   *
   * Adjusts the x-offset of the blend image relative to its parent.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-x)
   */
  blendX?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Blend Y Position
   *
   * Adjusts the y-offset of the blend image relative to its parent.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-y)
   */
  blendY?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Gaussian Blur
   *
   * Applies a gaussian blur to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/blur)
   */
  blur?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Border Size & Color
   *
   * Applies a border to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border)
   */
  border?: InputMaybe<Scalars['String']['input']>
  /**
   * Border Bottom
   *
   * Sets bottom border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-bottom)
   */
  borderBottom?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Border Left
   *
   * Sets left border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-left)
   */
  borderLeft?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Outer Border Radius
   *
   * Sets the outer radius of the image's border in pixels.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-radius)
   */
  borderRadius?: InputMaybe<Scalars['String']['input']>
  /**
   * Inner Border Radius
   *
   * Sets the inner radius of the image's border in pixels.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-radius-inner)
   */
  borderRadiusInner?: InputMaybe<Scalars['String']['input']>
  /**
   * Border Right
   *
   * Sets right border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-right)
   */
  borderRight?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Border Top
   *
   * Sets top border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-top)
   */
  borderTop?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Brightness
   *
   * Adjusts the brightness of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/bri)
   */
  bri?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Client Hints
   *
   * Sets one or more Client-Hints headers
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/ch)
   */
  ch?: InputMaybe<Array<ImgixParamsCh>>
  /**
   * Chroma Subsampling
   *
   * Specifies the output chroma subsampling rate.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/chromasub)
   */
  chromasub?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Color Quantization
   *
   * Limits the number of unique colors in an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/colorquant)
   */
  colorquant?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Palette Color Count
   *
   * Specifies how many colors to include in a palette-extraction response.
   *
   * Depends on: `palette`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/colors)
   */
  colors?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Contrast
   *
   * Adjusts the contrast of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/con)
   */
  con?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Mask Corner Radius
   *
   * Specifies the radius value for a rounded corner mask.
   *
   * Depends on: `mask=corners`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask/corner-radius)
   */
  cornerRadius?: InputMaybe<Scalars['String']['input']>
  /**
   * Crop Mode
   *
   * Specifies how to crop an image.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/crop)
   */
  crop?: InputMaybe<Array<ImgixParamsCrop>>
  /**
   * Color Space
   *
   * Specifies the color space of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/cs)
   */
  cs?: InputMaybe<ImgixParamsCs>
  /**
   * Download
   *
   * Forces a URL to use send-file in its response.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/dl)
   */
  dl?: InputMaybe<Scalars['String']['input']>
  /**
   * Dots Per Inch
   *
   * Sets the DPI value in the EXIF header.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/dpi)
   */
  dpi?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Device Pixel Ratio
   *
   * Adjusts the device-pixel ratio of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/dpr)
   */
  dpr?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Duotone
   *
   * Applies a duotone effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/duotone)
   */
  duotone?: InputMaybe<Scalars['String']['input']>
  /**
   * Duotone Alpha
   *
   * Changes the alpha of the duotone effect atop the source image.
   *
   * Depends on: `duotone`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/duotone-alpha)
   */
  duotoneAlpha?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Exposure
   *
   * Adjusts the exposure of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/exp)
   */
  exp?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Url Expiration Timestamp
   *
   * A Unix timestamp specifying a UTC time. Requests made to this URL after that time will output a 404 status code.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/expires)
   */
  expires?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Face Index
   *
   * Selects a face to crop to.
   *
   * Depends on: `fit=facearea`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/faceindex)
   */
  faceindex?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Face Padding
   *
   * Adjusts padding around a selected face.
   *
   * Depends on: `fit=facearea`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/facepad)
   */
  facepad?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Json Face Data
   *
   * Specifies that face data should be included in output when combined with `fm=json`.
   *
   * Depends on: `fm=json`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/faces)
   */
  faces?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Fill Mode
   *
   * Determines how to fill in additional space created by the fit setting
   *
   * Depends on: `fit`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill)
   */
  fill?: InputMaybe<ImgixParamsFill>
  /**
   * Fill Color
   *
   * Sets the fill color for images with additional space created by the fit setting
   *
   * Depends on: `fill=solid`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-color)
   */
  fillColor?: InputMaybe<Scalars['String']['input']>
  /**
   * Resize Fit Mode
   *
   * Specifies how to map the source image to the output image dimensions.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/fit)
   */
  fit?: InputMaybe<ImgixParamsFit>
  /**
   * Flip Axis
   *
   * Flips an image on a specified axis.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/flip)
   */
  flip?: InputMaybe<ImgixParamsFlip>
  /**
   * Output Format
   *
   * Changes the format of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/fm)
   */
  fm?: InputMaybe<ImgixParamsFm>
  /**
   * Focal Point Debug
   *
   * Displays crosshairs identifying the location of the set focal point
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-debug)
   */
  fpDebug?: InputMaybe<Scalars['BooleanType']['input']>
  /**
   * Focal Point X Position
   *
   * Sets the relative horizontal value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-x)
   */
  fpX?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Focal Point Y Position
   *
   * Sets the relative vertical value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-y)
   */
  fpY?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Focal Point Zoom
   *
   * Sets the relative zoom value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-z)
   */
  fpZ?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Frames Per Second
   *
   * Specifies the framerate of the generated image.
   */
  fps?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Frame Selection
   *
   * Specifies the frame of an animated image to use.
   */
  frame?: InputMaybe<Scalars['String']['input']>
  /**
   * Gamma
   *
   * Adjusts the gamma of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/gam)
   */
  gam?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Animated Gif Quality
   *
   * Depends on: `fm=gif`
   */
  gifQ?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Grid Colors
   *
   * Sets grid colors for the transparency checkerboard grid.
   *
   * Depends on: `transparency`
   */
  gridColors?: InputMaybe<Scalars['String']['input']>
  /**
   * Grid Size
   *
   * Sets grid size for the transparency checkerboard grid.
   *
   * Depends on: `transparency`
   */
  gridSize?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Image Height
   *
   * Adjusts the height of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/h)
   */
  h?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Highlight
   *
   * Adjusts the highlights of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/high)
   */
  high?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Halftone
   *
   * Applies a half-tone effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/htn)
   */
  htn?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Hue Shift
   *
   * Adjusts the hue of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/hue)
   */
  hue?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Frame Interval
   *
   * Displays every Nth frame starting with the first frame.
   */
  interval?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Invert
   *
   * Inverts the colors on the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/invert)
   */
  invert?: InputMaybe<Scalars['BooleanType']['input']>
  /**
   * Iptc Passthrough
   *
   * Determine if IPTC data should be passed for JPEG images.
   */
  iptc?: InputMaybe<ImgixParamsIptc>
  /**
   * Animation Loop Count
   *
   * Specifies the number of times an animated image should repeat. A value of 0 means infinite looping.
   */
  loop?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Lossless Compression
   *
   * Specifies that the output image should be a lossless variant.
   *
   * Depends on: `fm=webp`, `fm=jxr`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/lossless)
   */
  lossless?: InputMaybe<Scalars['BooleanType']['input']>
  /**
   * Watermark Image Url
   *
   * Specifies the location of the watermark image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark)
   */
  mark?: InputMaybe<Scalars['String']['input']>
  /**
   * Watermark Alignment Mode
   *
   * Changes the watermark alignment relative to the parent image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-align)
   */
  markAlign?: InputMaybe<Array<ImgixParamsMarkAlign>>
  /**
   * Watermark Alpha
   *
   * Changes the alpha of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-alpha)
   */
  markAlpha?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Watermark Base Url
   *
   * Changes base URL of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-base)
   */
  markBase?: InputMaybe<Scalars['String']['input']>
  /**
   * Watermark Fit Mode
   *
   * Specifies the fit mode for watermark images.
   *
   * Depends on: `mark`, `markw`, `markh`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-fit)
   */
  markFit?: InputMaybe<ImgixParamsMarkFit>
  /**
   * Watermark Height
   *
   * Adjusts the height of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-h)
   */
  markH?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Watermark Padding
   *
   * Applies padding to the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-pad)
   */
  markPad?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Watermark Rotation
   *
   * Rotates a watermark or tiled watermarks by a specified number of degrees.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-rot)
   */
  markRot?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Watermark Scale
   *
   * Adjusts the scale of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-scale)
   */
  markScale?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Watermark Tile
   *
   * Adds tiled watermark.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-tile)
   */
  markTile?: InputMaybe<ImgixParamsMarkTile>
  /**
   * Watermark Width
   *
   * Adjusts the width of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-w)
   */
  markW?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Watermark X Position
   *
   * Adjusts the x-offset of the watermark image relative to its parent.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-x)
   */
  markX?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Watermark Y Position
   *
   * Adjusts the y-offset of the watermark image relative to its parent.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-y)
   */
  markY?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Mask Type
   *
   * Defines the type of mask and specifies the URL if that type is selected.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask)
   */
  mask?: InputMaybe<Scalars['String']['input']>
  /**
   * Mask Background Color
   *
   * Colors the background of the transparent mask area of images
   *
   * Depends on: `mask`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask/mask-bg)
   */
  maskBg?: InputMaybe<Scalars['String']['input']>
  /**
   * Maximum Height
   *
   * Specifies the maximum height of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/max-height)
   */
  maxH?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Maximum Width
   *
   * Specifies the maximum width of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/max-width)
   */
  maxW?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Minimum Height
   *
   * Specifies the minimum height of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/min-height)
   */
  minH?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Minimum Width
   *
   * Specifies the minimum width of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/min-width)
   */
  minW?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Monochrome
   *
   * Applies a monochrome effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/monochrome)
   */
  monochrome?: InputMaybe<Scalars['String']['input']>
  /**
   * Noise Reduction Bound
   *
   * Reduces the noise in an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/noise-reduction/nr)
   */
  nr?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Noise Reduction Sharpen
   *
   * Provides a threshold by which to sharpen an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/noise-reduction/nrs)
   */
  nrs?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Orientation
   *
   * Changes the image orientation.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/orient)
   */
  orient?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Padding
   *
   * Pads an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad)
   */
  pad?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Padding Bottom
   *
   * Sets bottom padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-bottom)
   */
  padBottom?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Padding Left
   *
   * Sets left padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-left)
   */
  padLeft?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Padding Right
   *
   * Sets right padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-right)
   */
  padRight?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Padding Top
   *
   * Sets top padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-top)
   */
  padTop?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Pdf Page Number
   *
   * Selects a page from a PDF for display.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/pdf/page)
   */
  page?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Color Palette Extraction
   *
   * Specifies an output format for palette-extraction.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/palette)
   */
  palette?: InputMaybe<ImgixParamsPalette>
  /**
   * Pdf Annotation
   *
   * Enables or disables PDF annotation.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/pdf/pdf-annotation)
   */
  pdfAnnotation?: InputMaybe<Scalars['BooleanType']['input']>
  /**
   * Css Prefix
   *
   * Specifies a CSS prefix for all classes in palette-extraction.
   *
   * Depends on: `palette=css`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/prefix)
   */
  prefix?: InputMaybe<Scalars['String']['input']>
  /**
   * Pixellate
   *
   * Applies a pixelation effect to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/px)
   */
  px?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Output Quality
   *
   * Adjusts the quality of an output image.
   *
   * Depends on: `fm=jpg`, `fm=pjpg`, `fm=webp`, `fm=jxr`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/q)
   */
  q?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Source Rectangle Region
   *
   * Crops an image to a specified rectangle.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/rect)
   */
  rect?: InputMaybe<Scalars['String']['input']>
  /**
   * Reverse
   *
   * Reverses the frame order on the source animation.
   */
  reverse?: InputMaybe<Scalars['BooleanType']['input']>
  /**
   * Rotation
   *
   * Rotates an image by a specified number of degrees.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/rot)
   */
  rot?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Saturation
   *
   * Adjusts the saturation of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/sat)
   */
  sat?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Sepia Tone
   *
   * Applies a sepia effect to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/sepia)
   */
  sepia?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Shadow
   *
   * Adjusts the highlights of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/shad)
   */
  shad?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Sharpen
   *
   * Adjusts the sharpness of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/sharp)
   */
  sharp?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Frame Skip
   *
   * Skips every Nth frame starting with the first frame.
   */
  skip?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Transparency
   *
   * Adds checkerboard behind images which support transparency.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/transparency)
   */
  transparency?: InputMaybe<ImgixParamsTransparency>
  /**
   * Trim Image
   *
   * Trims the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim)
   */
  trim?: InputMaybe<ImgixParamsTrim>
  /**
   * Trim Color
   *
   * Specifies a trim color on a trim operation.
   *
   * Depends on: `trim=color`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-color)
   */
  trimColor?: InputMaybe<Scalars['String']['input']>
  /**
   * Trim Mean Difference
   *
   * Specifies the mean difference on a trim operation.
   *
   * Depends on: `trim=auto`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-md)
   */
  trimMd?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Trim Padding
   *
   * Pads the area of the source image before trimming.
   *
   * Depends on: `trim`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-pad)
   */
  trimPad?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Trim Standard Deviation
   *
   * Specifies the standard deviation on a trim operation.
   *
   * Depends on: `trim=auto`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-sd)
   */
  trimSd?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Trim Tolerance
   *
   * Specifies the tolerance on a trim operation.
   *
   * Depends on: `trim=color`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-tol)
   */
  trimTol?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Text String
   *
   * Sets the text string to render.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt)
   */
  txt?: InputMaybe<Scalars['String']['input']>
  /**
   * Text Align
   *
   * Sets the vertical and horizontal alignment of rendered text relative to the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-align)
   */
  txtAlign?: InputMaybe<Array<ImgixParamsTxtAlign>>
  /**
   * Text Clipping Mode
   *
   * Sets the clipping properties of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-clip)
   */
  txtClip?: InputMaybe<Array<ImgixParamsTxtClip>>
  /**
   * Text Color
   *
   * Specifies the color of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-color)
   */
  txtColor?: InputMaybe<Scalars['String']['input']>
  /**
   * Text Fit Mode
   *
   * Specifies the fit approach for rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-fit)
   */
  txtFit?: InputMaybe<ImgixParamsTxtFit>
  /**
   * Text Font
   *
   * Selects a font for rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-font)
   */
  txtFont?: InputMaybe<Scalars['String']['input']>
  /**
   * Text Leading
   *
   * Sets the leading (line spacing) for rendered text. Only works on the multi-line text endpoint.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/typesetting/txt-lead)
   */
  txtLead?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Text Ligatures
   *
   * Controls the level of ligature substitution
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-lig)
   */
  txtLig?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Text Outline
   *
   * Outlines the rendered text with a specified color.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-line)
   */
  txtLine?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Text Outline Color
   *
   * Specifies a text outline color.
   *
   * Depends on: `txt`, `txtline`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-line-color)
   */
  txtLineColor?: InputMaybe<Scalars['String']['input']>
  /**
   * Text Padding
   *
   * Specifies the padding (in device-independent pixels) between a textbox and the edges of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-pad)
   */
  txtPad?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Text Shadow
   *
   * Applies a shadow to rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-shad)
   */
  txtShad?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Text Font Size
   *
   * Sets the font size of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-size)
   */
  txtSize?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Text Tracking
   *
   * Sets the tracking (letter spacing) for rendered text. Only works on the multi-line text endpoint.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/typesetting/txt-track)
   */
  txtTrack?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Text Width
   *
   * Sets the width of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-width)
   */
  txtWidth?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Text X Position
   *
   * Sets the horizontal (x) position of the text in pixels relative to the left edge of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-x)
   */
  txtX?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Text Y Position
   *
   * Sets the vertical (y) position of the text in pixels relative to the top edge of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-y)
   */
  txtY?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Unsharp Mask
   *
   * Sharpens the source image using an unsharp mask.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/usm)
   */
  usm?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Unsharp Mask Radius
   *
   * Specifies the radius for an unsharp mask operation.
   *
   * Depends on: `usm`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/usmrad)
   */
  usmrad?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Vibrance
   *
   * Adjusts the vibrance of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/vib)
   */
  vib?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Image Width
   *
   * Adjusts the width of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/w)
   */
  w?: InputMaybe<Scalars['FloatType']['input']>
}

export enum ImgixParamsAuto {
  Compress = 'compress',
  Enhance = 'enhance',
  Format = 'format',
  Redeye = 'redeye',
}

export enum ImgixParamsBlendAlign {
  Bottom = 'bottom',
  Center = 'center',
  Left = 'left',
  Middle = 'middle',
  Right = 'right',
  Top = 'top',
}

export enum ImgixParamsBlendCrop {
  Bottom = 'bottom',
  Faces = 'faces',
  Left = 'left',
  Right = 'right',
  Top = 'top',
}

export enum ImgixParamsBlendFit {
  Clamp = 'clamp',
  Clip = 'clip',
  Crop = 'crop',
  Max = 'max',
  Scale = 'scale',
}

export enum ImgixParamsBlendMode {
  Burn = 'burn',
  Color = 'color',
  Darken = 'darken',
  Difference = 'difference',
  Dodge = 'dodge',
  Exclusion = 'exclusion',
  Hardlight = 'hardlight',
  Hue = 'hue',
  Lighten = 'lighten',
  Luminosity = 'luminosity',
  Multiply = 'multiply',
  Normal = 'normal',
  Overlay = 'overlay',
  Saturation = 'saturation',
  Screen = 'screen',
  Softlight = 'softlight',
}

export enum ImgixParamsBlendSize {
  Inherit = 'inherit',
}

export enum ImgixParamsCh {
  Dpr = 'dpr',
  SaveData = 'saveData',
  Width = 'width',
}

export enum ImgixParamsCrop {
  Bottom = 'bottom',
  Edges = 'edges',
  Entropy = 'entropy',
  Faces = 'faces',
  Focalpoint = 'focalpoint',
  Left = 'left',
  Right = 'right',
  Top = 'top',
}

export enum ImgixParamsCs {
  Adobergb1998 = 'adobergb1998',
  Srgb = 'srgb',
  Strip = 'strip',
  Tinysrgb = 'tinysrgb',
}

export enum ImgixParamsFill {
  Blur = 'blur',
  Solid = 'solid',
}

export enum ImgixParamsFit {
  Clamp = 'clamp',
  Clip = 'clip',
  Crop = 'crop',
  Facearea = 'facearea',
  Fill = 'fill',
  Fillmax = 'fillmax',
  Max = 'max',
  Min = 'min',
  Scale = 'scale',
}

export enum ImgixParamsFlip {
  H = 'h',
  Hv = 'hv',
  V = 'v',
}

export enum ImgixParamsFm {
  Avif = 'avif',
  Blurhash = 'blurhash',
  Gif = 'gif',
  Jp2 = 'jp2',
  Jpg = 'jpg',
  Json = 'json',
  Jxr = 'jxr',
  Mp4 = 'mp4',
  Pjpg = 'pjpg',
  Png = 'png',
  Png8 = 'png8',
  Png32 = 'png32',
  Webm = 'webm',
  Webp = 'webp',
}

export enum ImgixParamsIptc {
  Allow = 'allow',
  Block = 'block',
}

export enum ImgixParamsMarkAlign {
  Bottom = 'bottom',
  Center = 'center',
  Left = 'left',
  Middle = 'middle',
  Right = 'right',
  Top = 'top',
}

export enum ImgixParamsMarkFit {
  Clip = 'clip',
  Crop = 'crop',
  Fill = 'fill',
  Max = 'max',
  Scale = 'scale',
}

export enum ImgixParamsMarkTile {
  Grid = 'grid',
}

export enum ImgixParamsPalette {
  Css = 'css',
  Json = 'json',
}

export enum ImgixParamsTransparency {
  Grid = 'grid',
}

export enum ImgixParamsTrim {
  Auto = 'auto',
  Color = 'color',
}

export enum ImgixParamsTxtAlign {
  Bottom = 'bottom',
  Center = 'center',
  Left = 'left',
  Middle = 'middle',
  Right = 'right',
  Top = 'top',
}

export enum ImgixParamsTxtClip {
  Ellipsis = 'ellipsis',
  End = 'end',
  Middle = 'middle',
  Start = 'start',
}

export enum ImgixParamsTxtFit {
  Max = 'max',
}

/** Specifies how to filter by usage */
export type InUseFilter = {
  /** Search uploads that are currently used by some record or not */
  eq?: InputMaybe<Scalars['BooleanType']['input']>
}

export type Info = {
  __typename?: 'Info'
  ceo?: Maybe<Scalars['String']['output']>
  coo?: Maybe<Scalars['String']['output']>
  cto?: Maybe<Scalars['String']['output']>
  cto_propulsion?: Maybe<Scalars['String']['output']>
  employees?: Maybe<Scalars['Int']['output']>
  founded?: Maybe<Scalars['Int']['output']>
  founder?: Maybe<Scalars['String']['output']>
  headquarters?: Maybe<Address>
  launch_sites?: Maybe<Scalars['Int']['output']>
  links?: Maybe<InfoLinks>
  name?: Maybe<Scalars['String']['output']>
  summary?: Maybe<Scalars['String']['output']>
  test_sites?: Maybe<Scalars['Int']['output']>
  valuation?: Maybe<Scalars['Float']['output']>
  vehicles?: Maybe<Scalars['Int']['output']>
}

export type InfoLinks = {
  __typename?: 'InfoLinks'
  elon_twitter?: Maybe<Scalars['String']['output']>
  flickr?: Maybe<Scalars['String']['output']>
  twitter?: Maybe<Scalars['String']['output']>
  website?: Maybe<Scalars['String']['output']>
}

/** Specifies how to filter by ID */
export type ItemIdFilter = {
  /** Search the record with the specified ID */
  eq?: InputMaybe<Scalars['ItemId']['input']>
  /** Search records with the specified IDs */
  in?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>
  /** Exclude the record with the specified ID */
  neq?: InputMaybe<Scalars['ItemId']['input']>
  /** Search records that do not have the specified IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>
}

export enum ItemStatus {
  Draft = 'draft',
  Published = 'published',
  Updated = 'updated',
}

export type Landpad = {
  __typename?: 'Landpad'
  attempted_landings?: Maybe<Scalars['String']['output']>
  details?: Maybe<Scalars['String']['output']>
  full_name?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['ID']['output']>
  landing_type?: Maybe<Scalars['String']['output']>
  location?: Maybe<Location>
  status?: Maybe<Scalars['String']['output']>
  successful_landings?: Maybe<Scalars['String']['output']>
  wikipedia?: Maybe<Scalars['String']['output']>
}

export type LatLonField = {
  __typename?: 'LatLonField'
  latitude: Scalars['FloatType']['output']
  longitude: Scalars['FloatType']['output']
}

/** Specifies how to filter Geolocation fields */
export type LatLonFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>
  /** Filter records within the specified radius in meters */
  near?: InputMaybe<LatLonNearFilter>
}

export type LatLonNearFilter = {
  latitude: Scalars['FloatType']['input']
  longitude: Scalars['FloatType']['input']
  radius: Scalars['FloatType']['input']
}

export type Launch = {
  __typename?: 'Launch'
  details?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['ID']['output']>
  is_tentative?: Maybe<Scalars['Boolean']['output']>
  launch_date_local?: Maybe<Scalars['Date']['output']>
  launch_date_unix?: Maybe<Scalars['Date']['output']>
  launch_date_utc?: Maybe<Scalars['Date']['output']>
  launch_site?: Maybe<LaunchSite>
  launch_success?: Maybe<Scalars['Boolean']['output']>
  launch_year?: Maybe<Scalars['String']['output']>
  links?: Maybe<LaunchLinks>
  mission_id?: Maybe<Array<Maybe<Scalars['String']['output']>>>
  mission_name?: Maybe<Scalars['String']['output']>
  rocket?: Maybe<LaunchRocket>
  ships?: Maybe<Array<Maybe<Ship>>>
  static_fire_date_unix?: Maybe<Scalars['Date']['output']>
  static_fire_date_utc?: Maybe<Scalars['Date']['output']>
  telemetry?: Maybe<LaunchTelemetry>
  tentative_max_precision?: Maybe<Scalars['String']['output']>
  upcoming?: Maybe<Scalars['Boolean']['output']>
}

export type LaunchFind = {
  apoapsis_km?: InputMaybe<Scalars['Float']['input']>
  block?: InputMaybe<Scalars['Int']['input']>
  cap_serial?: InputMaybe<Scalars['String']['input']>
  capsule_reuse?: InputMaybe<Scalars['String']['input']>
  core_flight?: InputMaybe<Scalars['Int']['input']>
  core_reuse?: InputMaybe<Scalars['String']['input']>
  core_serial?: InputMaybe<Scalars['String']['input']>
  customer?: InputMaybe<Scalars['String']['input']>
  eccentricity?: InputMaybe<Scalars['Float']['input']>
  end?: InputMaybe<Scalars['Date']['input']>
  epoch?: InputMaybe<Scalars['Date']['input']>
  fairings_recovered?: InputMaybe<Scalars['String']['input']>
  fairings_recovery_attempt?: InputMaybe<Scalars['String']['input']>
  fairings_reuse?: InputMaybe<Scalars['String']['input']>
  fairings_reused?: InputMaybe<Scalars['String']['input']>
  fairings_ship?: InputMaybe<Scalars['String']['input']>
  gridfins?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  inclination_deg?: InputMaybe<Scalars['Float']['input']>
  land_success?: InputMaybe<Scalars['String']['input']>
  landing_intent?: InputMaybe<Scalars['String']['input']>
  landing_type?: InputMaybe<Scalars['String']['input']>
  landing_vehicle?: InputMaybe<Scalars['String']['input']>
  launch_date_local?: InputMaybe<Scalars['Date']['input']>
  launch_date_utc?: InputMaybe<Scalars['Date']['input']>
  launch_success?: InputMaybe<Scalars['String']['input']>
  launch_year?: InputMaybe<Scalars['String']['input']>
  legs?: InputMaybe<Scalars['String']['input']>
  lifespan_years?: InputMaybe<Scalars['Float']['input']>
  longitude?: InputMaybe<Scalars['Float']['input']>
  manufacturer?: InputMaybe<Scalars['String']['input']>
  mean_motion?: InputMaybe<Scalars['Float']['input']>
  mission_id?: InputMaybe<Scalars['String']['input']>
  mission_name?: InputMaybe<Scalars['String']['input']>
  nationality?: InputMaybe<Scalars['String']['input']>
  norad_id?: InputMaybe<Scalars['Int']['input']>
  orbit?: InputMaybe<Scalars['String']['input']>
  payload_id?: InputMaybe<Scalars['String']['input']>
  payload_type?: InputMaybe<Scalars['String']['input']>
  periapsis_km?: InputMaybe<Scalars['Float']['input']>
  period_min?: InputMaybe<Scalars['Float']['input']>
  raan?: InputMaybe<Scalars['Float']['input']>
  reference_system?: InputMaybe<Scalars['String']['input']>
  regime?: InputMaybe<Scalars['String']['input']>
  reused?: InputMaybe<Scalars['String']['input']>
  rocket_id?: InputMaybe<Scalars['String']['input']>
  rocket_name?: InputMaybe<Scalars['String']['input']>
  rocket_type?: InputMaybe<Scalars['String']['input']>
  second_stage_block?: InputMaybe<Scalars['String']['input']>
  semi_major_axis_km?: InputMaybe<Scalars['Float']['input']>
  ship?: InputMaybe<Scalars['String']['input']>
  side_core1_reuse?: InputMaybe<Scalars['String']['input']>
  side_core2_reuse?: InputMaybe<Scalars['String']['input']>
  site_id?: InputMaybe<Scalars['String']['input']>
  site_name?: InputMaybe<Scalars['String']['input']>
  site_name_long?: InputMaybe<Scalars['String']['input']>
  start?: InputMaybe<Scalars['Date']['input']>
  tbd?: InputMaybe<Scalars['String']['input']>
  tentative?: InputMaybe<Scalars['String']['input']>
  tentative_max_precision?: InputMaybe<Scalars['String']['input']>
}

export type LaunchLinks = {
  __typename?: 'LaunchLinks'
  article_link?: Maybe<Scalars['String']['output']>
  flickr_images?: Maybe<Array<Maybe<Scalars['String']['output']>>>
  mission_patch?: Maybe<Scalars['String']['output']>
  mission_patch_small?: Maybe<Scalars['String']['output']>
  presskit?: Maybe<Scalars['String']['output']>
  reddit_campaign?: Maybe<Scalars['String']['output']>
  reddit_launch?: Maybe<Scalars['String']['output']>
  reddit_media?: Maybe<Scalars['String']['output']>
  reddit_recovery?: Maybe<Scalars['String']['output']>
  video_link?: Maybe<Scalars['String']['output']>
  wikipedia?: Maybe<Scalars['String']['output']>
}

export type LaunchRocket = {
  __typename?: 'LaunchRocket'
  fairings?: Maybe<LaunchRocketFairings>
  first_stage?: Maybe<LaunchRocketFirstStage>
  rocket?: Maybe<Rocket>
  rocket_name?: Maybe<Scalars['String']['output']>
  rocket_type?: Maybe<Scalars['String']['output']>
  second_stage?: Maybe<LaunchRocketSecondStage>
}

export type LaunchRocketFairings = {
  __typename?: 'LaunchRocketFairings'
  recovered?: Maybe<Scalars['Boolean']['output']>
  recovery_attempt?: Maybe<Scalars['Boolean']['output']>
  reused?: Maybe<Scalars['Boolean']['output']>
  ship?: Maybe<Scalars['String']['output']>
}

export type LaunchRocketFirstStage = {
  __typename?: 'LaunchRocketFirstStage'
  cores?: Maybe<Array<Maybe<LaunchRocketFirstStageCore>>>
}

export type LaunchRocketFirstStageCore = {
  __typename?: 'LaunchRocketFirstStageCore'
  block?: Maybe<Scalars['Int']['output']>
  core?: Maybe<Core>
  flight?: Maybe<Scalars['Int']['output']>
  gridfins?: Maybe<Scalars['Boolean']['output']>
  land_success?: Maybe<Scalars['Boolean']['output']>
  landing_intent?: Maybe<Scalars['Boolean']['output']>
  landing_type?: Maybe<Scalars['String']['output']>
  landing_vehicle?: Maybe<Scalars['String']['output']>
  legs?: Maybe<Scalars['Boolean']['output']>
  reused?: Maybe<Scalars['Boolean']['output']>
}

export type LaunchRocketSecondStage = {
  __typename?: 'LaunchRocketSecondStage'
  block?: Maybe<Scalars['Int']['output']>
  payloads?: Maybe<Array<Maybe<Payload>>>
}

export type LaunchSite = {
  __typename?: 'LaunchSite'
  site_id?: Maybe<Scalars['String']['output']>
  site_name?: Maybe<Scalars['String']['output']>
  site_name_long?: Maybe<Scalars['String']['output']>
}

export type LaunchTelemetry = {
  __typename?: 'LaunchTelemetry'
  flight_club?: Maybe<Scalars['String']['output']>
}

export type LaunchesPastResult = {
  __typename?: 'LaunchesPastResult'
  data?: Maybe<Array<Maybe<Launch>>>
  result?: Maybe<Result>
}

export type Launchpad = {
  __typename?: 'Launchpad'
  attempted_launches?: Maybe<Scalars['Int']['output']>
  details?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['ID']['output']>
  location?: Maybe<Location>
  name?: Maybe<Scalars['String']['output']>
  status?: Maybe<Scalars['String']['output']>
  successful_launches?: Maybe<Scalars['Int']['output']>
  vehicles_launched?: Maybe<Array<Maybe<Rocket>>>
  wikipedia?: Maybe<Scalars['String']['output']>
}

export type Link = {
  __typename?: 'Link'
  article?: Maybe<Scalars['String']['output']>
  reddit?: Maybe<Scalars['String']['output']>
  wikipedia?: Maybe<Scalars['String']['output']>
}

/** Specifies how to filter Single-link fields */
export type LinkFilter = {
  /** Search for records with an exact match. The specified value must be a Record ID */
  eq?: InputMaybe<Scalars['ItemId']['input']>
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>
  /** Filter records linked to one of the specified records */
  in?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>
  /** Exclude records with an exact match. The specified value must be a Record ID */
  neq?: InputMaybe<Scalars['ItemId']['input']>
  /** Filter records not linked to one of the specified records */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>
}

export type LinkModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<LinkModelFilter>>>
  OR?: InputMaybe<Array<InputMaybe<LinkModelFilter>>>
  _createdAt?: InputMaybe<CreatedAtFilter>
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>
  _isValid?: InputMaybe<BooleanFilter>
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>
  _publishedAt?: InputMaybe<PublishedAtFilter>
  _status?: InputMaybe<StatusFilter>
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>
  _updatedAt?: InputMaybe<UpdatedAtFilter>
  externalUrl?: InputMaybe<StringFilter>
  id?: InputMaybe<ItemIdFilter>
  internalTitle?: InputMaybe<StringFilter>
  page?: InputMaybe<LinkFilter>
}

export enum LinkModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  ExternalUrlAsc = 'externalUrl_ASC',
  ExternalUrlDesc = 'externalUrl_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
}

/** Record of type Links (link) */
export type LinkRecord = RecordInterface & {
  __typename?: 'LinkRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  externalUrl?: Maybe<Scalars['String']['output']>
  id: Scalars['ItemId']['output']
  internalTitle: Scalars['String']['output']
  page?: Maybe<PageRecord>
}

/** Record of type Links (link) */
export type LinkRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Specifies how to filter Multiple-links fields */
export type LinksFilter = {
  /** Filter records linked to all of the specified records. The specified values must be Record IDs */
  allIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>
  /** Filter records linked to at least one of the specified records. The specified values must be Record IDs */
  anyIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>
  /** Search for records with an exact match. The specified values must be Record IDs */
  eq?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>
  /** Filter records not linked to any of the specified records. The specified values must be Record IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>
}

export type Location = {
  __typename?: 'Location'
  latitude?: Maybe<Scalars['Float']['output']>
  longitude?: Maybe<Scalars['Float']['output']>
  name?: Maybe<Scalars['String']['output']>
  region?: Maybe<Scalars['String']['output']>
}

/** Block of type Locatie item (location_item) */
export type LocationItemRecord = RecordInterface & {
  __typename?: 'LocationItemRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  dateTime: Scalars['DateTime']['output']
  id: Scalars['ItemId']['output']
  location?: Maybe<LocationRecord>
}

/** Block of type Locatie item (location_item) */
export type LocationItemRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export type LocationModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<LocationModelFilter>>>
  OR?: InputMaybe<Array<InputMaybe<LocationModelFilter>>>
  _createdAt?: InputMaybe<CreatedAtFilter>
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>
  _isValid?: InputMaybe<BooleanFilter>
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>
  _publishedAt?: InputMaybe<PublishedAtFilter>
  _status?: InputMaybe<StatusFilter>
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>
  _updatedAt?: InputMaybe<UpdatedAtFilter>
  address?: InputMaybe<LatLonFilter>
  addressTitle?: InputMaybe<StringFilter>
  id?: InputMaybe<ItemIdFilter>
  title?: InputMaybe<StringFilter>
}

export enum LocationModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  AddressTitleAsc = 'addressTitle_ASC',
  AddressTitleDesc = 'addressTitle_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

/** Record of type Locaties (location) */
export type LocationRecord = RecordInterface & {
  __typename?: 'LocationRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  address?: Maybe<LatLonField>
  addressTitle: Scalars['String']['output']
  id: Scalars['ItemId']['output']
  title: Scalars['String']['output']
}

/** Record of type Locaties (location) */
export type LocationRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export type Mass = {
  __typename?: 'Mass'
  kg?: Maybe<Scalars['Int']['output']>
  lb?: Maybe<Scalars['Int']['output']>
}

export type MediaItemModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<MediaItemModelFilter>>>
  OR?: InputMaybe<Array<InputMaybe<MediaItemModelFilter>>>
  _createdAt?: InputMaybe<CreatedAtFilter>
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>
  _isValid?: InputMaybe<BooleanFilter>
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>
  _publishedAt?: InputMaybe<PublishedAtFilter>
  _status?: InputMaybe<StatusFilter>
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>
  _updatedAt?: InputMaybe<UpdatedAtFilter>
  id?: InputMaybe<ItemIdFilter>
  item?: InputMaybe<FileFilter>
  itemUrl?: InputMaybe<StringFilter>
  title?: InputMaybe<StringFilter>
}

export enum MediaItemModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ItemUrlAsc = 'itemUrl_ASC',
  ItemUrlDesc = 'itemUrl_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

/** Record of type Media item (media_item) */
export type MediaItemRecord = RecordInterface & {
  __typename?: 'MediaItemRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  id: Scalars['ItemId']['output']
  item?: Maybe<FileField>
  itemUrl?: Maybe<Scalars['String']['output']>
  title: Scalars['String']['output']
}

/** Record of type Media item (media_item) */
export type MediaItemRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Block of type Menu item (menu_item) */
export type MenuItemRecord = RecordInterface & {
  __typename?: 'MenuItemRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  id: Scalars['ItemId']['output']
  label: Scalars['String']['output']
  link?: Maybe<PageRecord>
}

/** Block of type Menu item (menu_item) */
export type MenuItemRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export type Mission = {
  __typename?: 'Mission'
  description?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['ID']['output']>
  manufacturers?: Maybe<Array<Maybe<Scalars['String']['output']>>>
  name?: Maybe<Scalars['String']['output']>
  payloads?: Maybe<Array<Maybe<Payload>>>
  twitter?: Maybe<Scalars['String']['output']>
  website?: Maybe<Scalars['String']['output']>
  wikipedia?: Maybe<Scalars['String']['output']>
}

export type MissionResult = {
  __typename?: 'MissionResult'
  data?: Maybe<Array<Maybe<Mission>>>
  result?: Maybe<Result>
}

export type MissionsFind = {
  id?: InputMaybe<Scalars['ID']['input']>
  manufacturer?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  payload_id?: InputMaybe<Scalars['String']['input']>
}

export type Mutation = {
  __typename?: 'Mutation'
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>
}

export type MutationDelete_UsersArgs = {
  where: Users_Bool_Exp
}

export type MutationInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>
  on_conflict?: InputMaybe<Users_On_Conflict>
}

export type MutationUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>
  where: Users_Bool_Exp
}

export enum MuxThumbnailFormatType {
  Gif = 'gif',
  Jpg = 'jpg',
  Png = 'png',
}

/** Specifies how to filter by image orientation */
export type OrientationFilter = {
  /** Search uploads with the specified orientation */
  eq?: InputMaybe<UploadOrientation>
  /** Exclude uploads with the specified orientation */
  neq?: InputMaybe<UploadOrientation>
}

export type PageModelContentField =
  | ConcertListRecord
  | TextBlockRecord
  | TwoColumnRecord

export type PageModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageModelFilter>>>
  OR?: InputMaybe<Array<InputMaybe<PageModelFilter>>>
  _createdAt?: InputMaybe<CreatedAtFilter>
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>
  _isValid?: InputMaybe<BooleanFilter>
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>
  _publishedAt?: InputMaybe<PublishedAtFilter>
  _status?: InputMaybe<StatusFilter>
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>
  _updatedAt?: InputMaybe<UpdatedAtFilter>
  id?: InputMaybe<ItemIdFilter>
  seo?: InputMaybe<SeoFilter>
  slug?: InputMaybe<SlugFilter>
  title?: InputMaybe<StringFilter>
}

export enum PageModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

/** Record of type Pagina's (page) */
export type PageRecord = RecordInterface & {
  __typename?: 'PageRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  content: Array<PageModelContentField>
  id: Scalars['ItemId']['output']
  seo?: Maybe<SeoField>
  slug: Scalars['String']['output']
  title: Scalars['String']['output']
}

/** Record of type Pagina's (page) */
export type PageRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export type Payload = {
  __typename?: 'Payload'
  customers?: Maybe<Array<Maybe<Scalars['String']['output']>>>
  id?: Maybe<Scalars['ID']['output']>
  manufacturer?: Maybe<Scalars['String']['output']>
  nationality?: Maybe<Scalars['String']['output']>
  norad_id?: Maybe<Array<Maybe<Scalars['Int']['output']>>>
  orbit?: Maybe<Scalars['String']['output']>
  orbit_params?: Maybe<PayloadOrbitParams>
  payload_mass_kg?: Maybe<Scalars['Float']['output']>
  payload_mass_lbs?: Maybe<Scalars['Float']['output']>
  payload_type?: Maybe<Scalars['String']['output']>
  reused?: Maybe<Scalars['Boolean']['output']>
}

export type PayloadOrbitParams = {
  __typename?: 'PayloadOrbitParams'
  apoapsis_km?: Maybe<Scalars['Float']['output']>
  arg_of_pericenter?: Maybe<Scalars['Float']['output']>
  eccentricity?: Maybe<Scalars['Float']['output']>
  epoch?: Maybe<Scalars['Date']['output']>
  inclination_deg?: Maybe<Scalars['Float']['output']>
  lifespan_years?: Maybe<Scalars['Float']['output']>
  longitude?: Maybe<Scalars['Float']['output']>
  mean_anomaly?: Maybe<Scalars['Float']['output']>
  mean_motion?: Maybe<Scalars['Float']['output']>
  periapsis_km?: Maybe<Scalars['Float']['output']>
  period_min?: Maybe<Scalars['Float']['output']>
  raan?: Maybe<Scalars['Float']['output']>
  reference_system?: Maybe<Scalars['String']['output']>
  regime?: Maybe<Scalars['String']['output']>
  semi_major_axis_km?: Maybe<Scalars['Float']['output']>
}

export type PayloadsFind = {
  apoapsis_km?: InputMaybe<Scalars['Float']['input']>
  customer?: InputMaybe<Scalars['String']['input']>
  eccentricity?: InputMaybe<Scalars['Float']['input']>
  epoch?: InputMaybe<Scalars['Date']['input']>
  inclination_deg?: InputMaybe<Scalars['Float']['input']>
  lifespan_years?: InputMaybe<Scalars['Float']['input']>
  longitude?: InputMaybe<Scalars['Float']['input']>
  manufacturer?: InputMaybe<Scalars['String']['input']>
  mean_motion?: InputMaybe<Scalars['Float']['input']>
  nationality?: InputMaybe<Scalars['String']['input']>
  norad_id?: InputMaybe<Scalars['Int']['input']>
  orbit?: InputMaybe<Scalars['String']['input']>
  payload_id?: InputMaybe<Scalars['ID']['input']>
  payload_type?: InputMaybe<Scalars['String']['input']>
  periapsis_km?: InputMaybe<Scalars['Float']['input']>
  period_min?: InputMaybe<Scalars['Float']['input']>
  raan?: InputMaybe<Scalars['Float']['input']>
  reference_system?: InputMaybe<Scalars['String']['input']>
  regime?: InputMaybe<Scalars['String']['input']>
  reused?: InputMaybe<Scalars['Boolean']['input']>
  semi_major_axis_km?: InputMaybe<Scalars['Float']['input']>
}

export type PersonModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<PersonModelFilter>>>
  OR?: InputMaybe<Array<InputMaybe<PersonModelFilter>>>
  _createdAt?: InputMaybe<CreatedAtFilter>
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>
  _isValid?: InputMaybe<BooleanFilter>
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>
  _publishedAt?: InputMaybe<PublishedAtFilter>
  _status?: InputMaybe<StatusFilter>
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>
  _updatedAt?: InputMaybe<UpdatedAtFilter>
  id?: InputMaybe<ItemIdFilter>
  name?: InputMaybe<StringFilter>
  role?: InputMaybe<StringFilter>
}

export enum PersonModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  RoleAsc = 'role_ASC',
  RoleDesc = 'role_DESC',
}

/** Record of type Personen (person) */
export type PersonRecord = RecordInterface & {
  __typename?: 'PersonRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  id: Scalars['ItemId']['output']
  name: Scalars['String']['output']
  role: Scalars['String']['output']
}

/** Record of type Personen (person) */
export type PersonRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Specifies how to filter by publication datetime */
export type PublishedAtFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars['DateTime']['input']>
}

/** The query root for this schema */
export type Query = {
  __typename?: 'Query'
  /** Returns meta information regarding a record collection */
  _allConcertsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allLinksMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allLocationsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allMediaItemsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allPagesMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allPeopleMeta: CollectionMetadata
  /** Returns meta information regarding an assets collection */
  _allUploadsMeta: CollectionMetadata
  /** Returns the single instance record */
  _site: Site
  /** Returns a collection of records */
  allConcerts: Array<ConcertRecord>
  /** Returns a collection of records */
  allLinks: Array<LinkRecord>
  /** Returns a collection of records */
  allLocations: Array<LocationRecord>
  /** Returns a collection of records */
  allMediaItems: Array<MediaItemRecord>
  /** Returns a collection of records */
  allPages: Array<PageRecord>
  /** Returns a collection of records */
  allPeople: Array<PersonRecord>
  /** Returns a collection of assets */
  allUploads: Array<FileField>
  capsule?: Maybe<Capsule>
  capsules?: Maybe<Array<Maybe<Capsule>>>
  capsulesPast?: Maybe<Array<Maybe<Capsule>>>
  capsulesUpcoming?: Maybe<Array<Maybe<Capsule>>>
  company?: Maybe<Info>
  /** Returns a specific record */
  concert?: Maybe<ConcertRecord>
  core?: Maybe<Core>
  cores?: Maybe<Array<Maybe<Core>>>
  coresPast?: Maybe<Array<Maybe<Core>>>
  coresUpcoming?: Maybe<Array<Maybe<Core>>>
  dragon?: Maybe<Dragon>
  dragons?: Maybe<Array<Maybe<Dragon>>>
  /** Returns the single instance record */
  general?: Maybe<GeneralRecord>
  histories?: Maybe<Array<Maybe<History>>>
  historiesResult?: Maybe<HistoriesResult>
  history?: Maybe<History>
  landpad?: Maybe<Landpad>
  landpads?: Maybe<Array<Maybe<Landpad>>>
  launch?: Maybe<Launch>
  launchLatest?: Maybe<Launch>
  launchNext?: Maybe<Launch>
  launches?: Maybe<Array<Maybe<Launch>>>
  launchesPast?: Maybe<Array<Maybe<Launch>>>
  launchesPastResult?: Maybe<LaunchesPastResult>
  launchesUpcoming?: Maybe<Array<Maybe<Launch>>>
  launchpad?: Maybe<Launchpad>
  launchpads?: Maybe<Array<Maybe<Launchpad>>>
  /** Returns a specific record */
  link?: Maybe<LinkRecord>
  /** Returns a specific record */
  location?: Maybe<LocationRecord>
  /** Returns a specific record */
  mediaItem?: Maybe<MediaItemRecord>
  /** @deprecated Mission is not available on REST API after MongoDB deprecation */
  mission?: Maybe<Mission>
  /** @deprecated Mission is not available on REST API after MongoDB deprecation */
  missions?: Maybe<Array<Maybe<Mission>>>
  /** @deprecated Mission is not available on REST API after MongoDB deprecation */
  missionsResult?: Maybe<MissionResult>
  /** Returns a specific record */
  page?: Maybe<PageRecord>
  payload?: Maybe<Payload>
  payloads?: Maybe<Array<Maybe<Payload>>>
  /** Returns a specific record */
  person?: Maybe<PersonRecord>
  roadster?: Maybe<Roadster>
  rocket?: Maybe<Rocket>
  rockets?: Maybe<Array<Maybe<Rocket>>>
  rocketsResult?: Maybe<RocketsResult>
  ship?: Maybe<Ship>
  ships?: Maybe<Array<Maybe<Ship>>>
  shipsResult?: Maybe<ShipsResult>
  /** Returns a specific asset */
  upload?: Maybe<FileField>
  /** fetch data from the table: "users" */
  users: Array<Users>
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>
}

/** The query root for this schema */
export type Query_AllConcertsMetaArgs = {
  filter?: InputMaybe<ConcertModelFilter>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export type Query_AllLinksMetaArgs = {
  filter?: InputMaybe<LinkModelFilter>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export type Query_AllLocationsMetaArgs = {
  filter?: InputMaybe<LocationModelFilter>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export type Query_AllMediaItemsMetaArgs = {
  filter?: InputMaybe<MediaItemModelFilter>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export type Query_AllPagesMetaArgs = {
  filter?: InputMaybe<PageModelFilter>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export type Query_AllPeopleMetaArgs = {
  filter?: InputMaybe<PersonModelFilter>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export type Query_AllUploadsMetaArgs = {
  filter?: InputMaybe<UploadFilter>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export type Query_SiteArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export type QueryAllConcertsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<ConcertModelFilter>
  first?: InputMaybe<Scalars['IntType']['input']>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<ConcertModelOrderBy>>>
  skip?: InputMaybe<Scalars['IntType']['input']>
}

/** The query root for this schema */
export type QueryAllLinksArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<LinkModelFilter>
  first?: InputMaybe<Scalars['IntType']['input']>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<LinkModelOrderBy>>>
  skip?: InputMaybe<Scalars['IntType']['input']>
}

/** The query root for this schema */
export type QueryAllLocationsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<LocationModelFilter>
  first?: InputMaybe<Scalars['IntType']['input']>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<LocationModelOrderBy>>>
  skip?: InputMaybe<Scalars['IntType']['input']>
}

/** The query root for this schema */
export type QueryAllMediaItemsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<MediaItemModelFilter>
  first?: InputMaybe<Scalars['IntType']['input']>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<MediaItemModelOrderBy>>>
  skip?: InputMaybe<Scalars['IntType']['input']>
}

/** The query root for this schema */
export type QueryAllPagesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<PageModelFilter>
  first?: InputMaybe<Scalars['IntType']['input']>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<PageModelOrderBy>>>
  skip?: InputMaybe<Scalars['IntType']['input']>
}

/** The query root for this schema */
export type QueryAllPeopleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<PersonModelFilter>
  first?: InputMaybe<Scalars['IntType']['input']>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<PersonModelOrderBy>>>
  skip?: InputMaybe<Scalars['IntType']['input']>
}

/** The query root for this schema */
export type QueryAllUploadsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<UploadFilter>
  first?: InputMaybe<Scalars['IntType']['input']>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<UploadOrderBy>>>
  skip?: InputMaybe<Scalars['IntType']['input']>
}

/** The query root for this schema */
export type QueryCapsuleArgs = {
  id: Scalars['ID']['input']
}

/** The query root for this schema */
export type QueryCapsulesArgs = {
  find?: InputMaybe<CapsulesFind>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Scalars['String']['input']>
}

/** The query root for this schema */
export type QueryCapsulesPastArgs = {
  find?: InputMaybe<CapsulesFind>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Scalars['String']['input']>
}

/** The query root for this schema */
export type QueryCapsulesUpcomingArgs = {
  find?: InputMaybe<CapsulesFind>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Scalars['String']['input']>
}

/** The query root for this schema */
export type QueryConcertArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<ConcertModelFilter>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<ConcertModelOrderBy>>>
}

/** The query root for this schema */
export type QueryCoreArgs = {
  id: Scalars['ID']['input']
}

/** The query root for this schema */
export type QueryCoresArgs = {
  find?: InputMaybe<CoresFind>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Scalars['String']['input']>
}

/** The query root for this schema */
export type QueryCoresPastArgs = {
  find?: InputMaybe<CoresFind>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Scalars['String']['input']>
}

/** The query root for this schema */
export type QueryCoresUpcomingArgs = {
  find?: InputMaybe<CoresFind>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Scalars['String']['input']>
}

/** The query root for this schema */
export type QueryDragonArgs = {
  id: Scalars['ID']['input']
}

/** The query root for this schema */
export type QueryDragonsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
}

/** The query root for this schema */
export type QueryGeneralArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export type QueryHistoriesArgs = {
  find?: InputMaybe<HistoryFind>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Scalars['String']['input']>
}

/** The query root for this schema */
export type QueryHistoriesResultArgs = {
  find?: InputMaybe<HistoryFind>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Scalars['String']['input']>
}

/** The query root for this schema */
export type QueryHistoryArgs = {
  id: Scalars['ID']['input']
}

/** The query root for this schema */
export type QueryLandpadArgs = {
  id: Scalars['ID']['input']
}

/** The query root for this schema */
export type QueryLandpadsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
}

/** The query root for this schema */
export type QueryLaunchArgs = {
  id: Scalars['ID']['input']
}

/** The query root for this schema */
export type QueryLaunchLatestArgs = {
  offset?: InputMaybe<Scalars['Int']['input']>
}

/** The query root for this schema */
export type QueryLaunchNextArgs = {
  offset?: InputMaybe<Scalars['Int']['input']>
}

/** The query root for this schema */
export type QueryLaunchesArgs = {
  find?: InputMaybe<LaunchFind>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Scalars['String']['input']>
}

/** The query root for this schema */
export type QueryLaunchesPastArgs = {
  find?: InputMaybe<LaunchFind>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Scalars['String']['input']>
}

/** The query root for this schema */
export type QueryLaunchesPastResultArgs = {
  find?: InputMaybe<LaunchFind>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Scalars['String']['input']>
}

/** The query root for this schema */
export type QueryLaunchesUpcomingArgs = {
  find?: InputMaybe<LaunchFind>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Scalars['String']['input']>
}

/** The query root for this schema */
export type QueryLaunchpadArgs = {
  id: Scalars['ID']['input']
}

/** The query root for this schema */
export type QueryLaunchpadsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
}

/** The query root for this schema */
export type QueryLinkArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<LinkModelFilter>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<LinkModelOrderBy>>>
}

/** The query root for this schema */
export type QueryLocationArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<LocationModelFilter>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<LocationModelOrderBy>>>
}

/** The query root for this schema */
export type QueryMediaItemArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<MediaItemModelFilter>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<MediaItemModelOrderBy>>>
}

/** The query root for this schema */
export type QueryMissionArgs = {
  id: Scalars['ID']['input']
}

/** The query root for this schema */
export type QueryMissionsArgs = {
  find?: InputMaybe<MissionsFind>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
}

/** The query root for this schema */
export type QueryMissionsResultArgs = {
  find?: InputMaybe<MissionsFind>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
}

/** The query root for this schema */
export type QueryPageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<PageModelFilter>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<PageModelOrderBy>>>
}

/** The query root for this schema */
export type QueryPayloadArgs = {
  id: Scalars['ID']['input']
}

/** The query root for this schema */
export type QueryPayloadsArgs = {
  find?: InputMaybe<PayloadsFind>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Scalars['String']['input']>
}

/** The query root for this schema */
export type QueryPersonArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<PersonModelFilter>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<PersonModelOrderBy>>>
}

/** The query root for this schema */
export type QueryRocketArgs = {
  id: Scalars['ID']['input']
}

/** The query root for this schema */
export type QueryRocketsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
}

/** The query root for this schema */
export type QueryRocketsResultArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
}

/** The query root for this schema */
export type QueryShipArgs = {
  id: Scalars['ID']['input']
}

/** The query root for this schema */
export type QueryShipsArgs = {
  find?: InputMaybe<ShipsFind>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Scalars['String']['input']>
}

/** The query root for this schema */
export type QueryShipsResultArgs = {
  find?: InputMaybe<ShipsFind>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Scalars['String']['input']>
}

/** The query root for this schema */
export type QueryUploadArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<UploadFilter>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<UploadOrderBy>>>
}

/** The query root for this schema */
export type QueryUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Users_Order_By>>
  where?: InputMaybe<Users_Bool_Exp>
}

/** The query root for this schema */
export type QueryUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Users_Order_By>>
  where?: InputMaybe<Users_Bool_Exp>
}

/** The query root for this schema */
export type QueryUsers_By_PkArgs = {
  id: Scalars['uuid']['input']
}

export type RecordInterface = {
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  id: Scalars['ItemId']['output']
}

export type RecordInterface_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Specifies how to filter by upload type */
export type ResolutionFilter = {
  /** Search uploads with the specified resolution */
  eq?: InputMaybe<ResolutionType>
  /** Search uploads with the specified resolutions */
  in?: InputMaybe<Array<InputMaybe<ResolutionType>>>
  /** Exclude uploads with the specified resolution */
  neq?: InputMaybe<ResolutionType>
  /** Search uploads without the specified resolutions */
  notIn?: InputMaybe<Array<InputMaybe<ResolutionType>>>
}

export enum ResolutionType {
  Icon = 'icon',
  Large = 'large',
  Medium = 'medium',
  Small = 'small',
}

export type ResponsiveImage = {
  __typename?: 'ResponsiveImage'
  alt?: Maybe<Scalars['String']['output']>
  aspectRatio: Scalars['FloatType']['output']
  base64?: Maybe<Scalars['String']['output']>
  bgColor?: Maybe<Scalars['String']['output']>
  height: Scalars['IntType']['output']
  sizes: Scalars['String']['output']
  src: Scalars['String']['output']
  srcSet: Scalars['String']['output']
  title?: Maybe<Scalars['String']['output']>
  webpSrcSet: Scalars['String']['output']
  width: Scalars['IntType']['output']
}

export type Result = {
  __typename?: 'Result'
  totalCount?: Maybe<Scalars['Int']['output']>
}

export type Roadster = {
  __typename?: 'Roadster'
  apoapsis_au?: Maybe<Scalars['Float']['output']>
  details?: Maybe<Scalars['String']['output']>
  earth_distance_km?: Maybe<Scalars['Float']['output']>
  earth_distance_mi?: Maybe<Scalars['Float']['output']>
  eccentricity?: Maybe<Scalars['Float']['output']>
  epoch_jd?: Maybe<Scalars['Float']['output']>
  inclination?: Maybe<Scalars['Float']['output']>
  launch_date_unix?: Maybe<Scalars['Date']['output']>
  launch_date_utc?: Maybe<Scalars['Date']['output']>
  launch_mass_kg?: Maybe<Scalars['Int']['output']>
  launch_mass_lbs?: Maybe<Scalars['Int']['output']>
  longitude?: Maybe<Scalars['Float']['output']>
  mars_distance_km?: Maybe<Scalars['Float']['output']>
  mars_distance_mi?: Maybe<Scalars['Float']['output']>
  name?: Maybe<Scalars['String']['output']>
  norad_id?: Maybe<Scalars['Int']['output']>
  orbit_type?: Maybe<Scalars['Float']['output']>
  periapsis_arg?: Maybe<Scalars['Float']['output']>
  periapsis_au?: Maybe<Scalars['Float']['output']>
  period_days?: Maybe<Scalars['Float']['output']>
  semi_major_axis_au?: Maybe<Scalars['Float']['output']>
  speed_kph?: Maybe<Scalars['Float']['output']>
  speed_mph?: Maybe<Scalars['Float']['output']>
  wikipedia?: Maybe<Scalars['String']['output']>
}

export type Rocket = {
  __typename?: 'Rocket'
  active?: Maybe<Scalars['Boolean']['output']>
  boosters?: Maybe<Scalars['Int']['output']>
  company?: Maybe<Scalars['String']['output']>
  cost_per_launch?: Maybe<Scalars['Int']['output']>
  country?: Maybe<Scalars['String']['output']>
  description?: Maybe<Scalars['String']['output']>
  diameter?: Maybe<Distance>
  engines?: Maybe<RocketEngines>
  first_flight?: Maybe<Scalars['Date']['output']>
  first_stage?: Maybe<RocketFirstStage>
  height?: Maybe<Distance>
  id?: Maybe<Scalars['ID']['output']>
  landing_legs?: Maybe<RocketLandingLegs>
  mass?: Maybe<Mass>
  name?: Maybe<Scalars['String']['output']>
  payload_weights?: Maybe<Array<Maybe<RocketPayloadWeight>>>
  second_stage?: Maybe<RocketSecondStage>
  stages?: Maybe<Scalars['Int']['output']>
  success_rate_pct?: Maybe<Scalars['Int']['output']>
  type?: Maybe<Scalars['String']['output']>
  wikipedia?: Maybe<Scalars['String']['output']>
}

export type RocketEngines = {
  __typename?: 'RocketEngines'
  engine_loss_max?: Maybe<Scalars['String']['output']>
  layout?: Maybe<Scalars['String']['output']>
  number?: Maybe<Scalars['Int']['output']>
  propellant_1?: Maybe<Scalars['String']['output']>
  propellant_2?: Maybe<Scalars['String']['output']>
  thrust_sea_level?: Maybe<Force>
  thrust_to_weight?: Maybe<Scalars['Float']['output']>
  thrust_vacuum?: Maybe<Force>
  type?: Maybe<Scalars['String']['output']>
  version?: Maybe<Scalars['String']['output']>
}

export type RocketFirstStage = {
  __typename?: 'RocketFirstStage'
  burn_time_sec?: Maybe<Scalars['Int']['output']>
  engines?: Maybe<Scalars['Int']['output']>
  fuel_amount_tons?: Maybe<Scalars['Float']['output']>
  reusable?: Maybe<Scalars['Boolean']['output']>
  thrust_sea_level?: Maybe<Force>
  thrust_vacuum?: Maybe<Force>
}

export type RocketLandingLegs = {
  __typename?: 'RocketLandingLegs'
  material?: Maybe<Scalars['String']['output']>
  number?: Maybe<Scalars['Int']['output']>
}

export type RocketPayloadWeight = {
  __typename?: 'RocketPayloadWeight'
  id?: Maybe<Scalars['String']['output']>
  kg?: Maybe<Scalars['Int']['output']>
  lb?: Maybe<Scalars['Int']['output']>
  name?: Maybe<Scalars['String']['output']>
}

export type RocketSecondStage = {
  __typename?: 'RocketSecondStage'
  burn_time_sec?: Maybe<Scalars['Int']['output']>
  engines?: Maybe<Scalars['Int']['output']>
  fuel_amount_tons?: Maybe<Scalars['Float']['output']>
  payloads?: Maybe<RocketSecondStagePayloads>
  thrust?: Maybe<Force>
}

export type RocketSecondStagePayloadCompositeFairing = {
  __typename?: 'RocketSecondStagePayloadCompositeFairing'
  diameter?: Maybe<Distance>
  height?: Maybe<Distance>
}

export type RocketSecondStagePayloads = {
  __typename?: 'RocketSecondStagePayloads'
  composite_fairing?: Maybe<RocketSecondStagePayloadCompositeFairing>
  option_1?: Maybe<Scalars['String']['output']>
}

export type RocketsResult = {
  __typename?: 'RocketsResult'
  data?: Maybe<Array<Maybe<Rocket>>>
  result?: Maybe<Result>
}

export type SeoField = {
  __typename?: 'SeoField'
  description?: Maybe<Scalars['String']['output']>
  image?: Maybe<FileField>
  title?: Maybe<Scalars['String']['output']>
  twitterCard?: Maybe<Scalars['String']['output']>
}

/** Specifies how to filter SEO meta tags fields */
export type SeoFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>
}

export type Ship = {
  __typename?: 'Ship'
  abs?: Maybe<Scalars['Int']['output']>
  active?: Maybe<Scalars['Boolean']['output']>
  attempted_landings?: Maybe<Scalars['Int']['output']>
  class?: Maybe<Scalars['Int']['output']>
  course_deg?: Maybe<Scalars['Int']['output']>
  home_port?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['ID']['output']>
  image?: Maybe<Scalars['String']['output']>
  imo?: Maybe<Scalars['Int']['output']>
  missions?: Maybe<Array<Maybe<ShipMission>>>
  mmsi?: Maybe<Scalars['Int']['output']>
  model?: Maybe<Scalars['String']['output']>
  name?: Maybe<Scalars['String']['output']>
  position?: Maybe<ShipLocation>
  roles?: Maybe<Array<Maybe<Scalars['String']['output']>>>
  speed_kn?: Maybe<Scalars['Float']['output']>
  status?: Maybe<Scalars['String']['output']>
  successful_landings?: Maybe<Scalars['Int']['output']>
  type?: Maybe<Scalars['String']['output']>
  url?: Maybe<Scalars['String']['output']>
  weight_kg?: Maybe<Scalars['Int']['output']>
  weight_lbs?: Maybe<Scalars['Int']['output']>
  year_built?: Maybe<Scalars['Int']['output']>
}

export type ShipLocation = {
  __typename?: 'ShipLocation'
  latitude?: Maybe<Scalars['Float']['output']>
  longitude?: Maybe<Scalars['Float']['output']>
}

export type ShipMission = {
  __typename?: 'ShipMission'
  flight?: Maybe<Scalars['String']['output']>
  name?: Maybe<Scalars['String']['output']>
}

export type ShipsFind = {
  abs?: InputMaybe<Scalars['Int']['input']>
  active?: InputMaybe<Scalars['Boolean']['input']>
  attempted_landings?: InputMaybe<Scalars['Int']['input']>
  class?: InputMaybe<Scalars['Int']['input']>
  course_deg?: InputMaybe<Scalars['Int']['input']>
  home_port?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  imo?: InputMaybe<Scalars['Int']['input']>
  latitude?: InputMaybe<Scalars['Float']['input']>
  longitude?: InputMaybe<Scalars['Float']['input']>
  mission?: InputMaybe<Scalars['String']['input']>
  mmsi?: InputMaybe<Scalars['Int']['input']>
  model?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  role?: InputMaybe<Scalars['String']['input']>
  speed_kn?: InputMaybe<Scalars['Int']['input']>
  status?: InputMaybe<Scalars['String']['input']>
  successful_landings?: InputMaybe<Scalars['Int']['input']>
  type?: InputMaybe<Scalars['String']['input']>
  weight_kg?: InputMaybe<Scalars['Int']['input']>
  weight_lbs?: InputMaybe<Scalars['Int']['input']>
  year_built?: InputMaybe<Scalars['Int']['input']>
}

export type ShipsResult = {
  __typename?: 'ShipsResult'
  data?: Maybe<Array<Maybe<Ship>>>
  result?: Maybe<Result>
}

export type Site = {
  __typename?: 'Site'
  favicon?: Maybe<FileField>
  faviconMetaTags: Array<Tag>
  globalSeo?: Maybe<GlobalSeoField>
  locales: Array<SiteLocale>
}

export type SiteFaviconMetaTagsArgs = {
  variants?: InputMaybe<Array<InputMaybe<FaviconType>>>
}

export type SiteGlobalSeoArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export enum SiteLocale {
  En = 'en',
  NlNl = 'nl_NL',
}

/** Specifies how to filter Slug fields */
export type SlugFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['String']['input']>
  /** Filter records that have one of the specified slugs */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['String']['input']>
  /** Filter records that do have one of the specified slugs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

/** Specifies how to filter by status */
export type StatusFilter = {
  /** Search the record with the specified status */
  eq?: InputMaybe<ItemStatus>
  /** Search records with the specified statuses */
  in?: InputMaybe<Array<InputMaybe<ItemStatus>>>
  /** Exclude the record with the specified status */
  neq?: InputMaybe<ItemStatus>
  /** Search records without the specified statuses */
  notIn?: InputMaybe<Array<InputMaybe<ItemStatus>>>
}

/** Specifies how to filter Single-line string fields */
export type StringFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['String']['input']>
  /** Filter records with the specified field defined (i.e. with any value) or not [DEPRECATED] */
  exists?: InputMaybe<Scalars['BooleanType']['input']>
  /** Filter records that equal one of the specified values */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Filter records with the specified field set as blank (null or empty string) */
  isBlank?: InputMaybe<Scalars['BooleanType']['input']>
  /** Filter records with the specified field present (neither null, nor empty string) */
  isPresent?: InputMaybe<Scalars['BooleanType']['input']>
  /** Filter records based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['String']['input']>
  /** Filter records that do not equal one of the specified values */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Exclude records based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
}

export type StringMatchesFilter = {
  caseSensitive?: InputMaybe<Scalars['BooleanType']['input']>
  pattern: Scalars['String']['input']
  regexp?: InputMaybe<Scalars['BooleanType']['input']>
}

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>
  _gt?: InputMaybe<Scalars['String']['input']>
  _gte?: InputMaybe<Scalars['String']['input']>
  _ilike?: InputMaybe<Scalars['String']['input']>
  _in?: InputMaybe<Array<Scalars['String']['input']>>
  _is_null?: InputMaybe<Scalars['Boolean']['input']>
  _like?: InputMaybe<Scalars['String']['input']>
  _lt?: InputMaybe<Scalars['String']['input']>
  _lte?: InputMaybe<Scalars['String']['input']>
  _neq?: InputMaybe<Scalars['String']['input']>
  _nilike?: InputMaybe<Scalars['String']['input']>
  _nin?: InputMaybe<Array<Scalars['String']['input']>>
  _nlike?: InputMaybe<Scalars['String']['input']>
  _nsimilar?: InputMaybe<Scalars['String']['input']>
  _similar?: InputMaybe<Scalars['String']['input']>
}

/** Block of type Submenu item (submenu_item) */
export type SubmenuItemRecord = RecordInterface & {
  __typename?: 'SubmenuItemRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  id: Scalars['ItemId']['output']
  label: Scalars['String']['output']
  menu: Array<MenuItemRecord>
}

/** Block of type Submenu item (submenu_item) */
export type SubmenuItemRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export type Subscription = {
  __typename?: 'Subscription'
  /** fetch data from the table: "users" */
  users: Array<Users>
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>
}

export type SubscriptionUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Users_Order_By>>
  where?: InputMaybe<Users_Bool_Exp>
}

export type SubscriptionUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Users_Order_By>>
  where?: InputMaybe<Users_Bool_Exp>
}

export type SubscriptionUsers_By_PkArgs = {
  id: Scalars['uuid']['input']
}

export type Tag = {
  __typename?: 'Tag'
  attributes?: Maybe<Scalars['MetaTagAttributes']['output']>
  content?: Maybe<Scalars['String']['output']>
  tag: Scalars['String']['output']
}

export type TextBlockModelContentBlocksField =
  | ConcertListRecord
  | ImageRecord
  | VideoRecord

export type TextBlockModelContentField = {
  __typename?: 'TextBlockModelContentField'
  blocks: Array<TextBlockModelContentBlocksField>
  links: Array<PageRecord>
  value: Scalars['JsonField']['output']
}

/** Block of type Tekst blok (text_block) */
export type TextBlockRecord = RecordInterface & {
  __typename?: 'TextBlockRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  content?: Maybe<TextBlockModelContentField>
  id: Scalars['ItemId']['output']
}

/** Block of type Tekst blok (text_block) */
export type TextBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export type TwoColumnModelLeftContentBlocksField =
  | ConcertListRecord
  | ImageRecord
  | VideoRecord

export type TwoColumnModelLeftContentField = {
  __typename?: 'TwoColumnModelLeftContentField'
  blocks: Array<TwoColumnModelLeftContentBlocksField>
  links: Array<PageRecord>
  value: Scalars['JsonField']['output']
}

export type TwoColumnModelRightContentBlocksField =
  | ConcertListRecord
  | ImageRecord
  | VideoRecord

export type TwoColumnModelRightContentField = {
  __typename?: 'TwoColumnModelRightContentField'
  blocks: Array<TwoColumnModelRightContentBlocksField>
  links: Array<PageRecord>
  value: Scalars['JsonField']['output']
}

/** Block of type Two kolommen tekst blok (two_column) */
export type TwoColumnRecord = RecordInterface & {
  __typename?: 'TwoColumnRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  id: Scalars['ItemId']['output']
  leftContent?: Maybe<TwoColumnModelLeftContentField>
  rightContent?: Maybe<TwoColumnModelRightContentField>
}

/** Block of type Two kolommen tekst blok (two_column) */
export type TwoColumnRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Specifies how to filter by upload type */
export type TypeFilter = {
  /** Search uploads with the specified type */
  eq?: InputMaybe<UploadType>
  /** Search uploads with the specified types */
  in?: InputMaybe<Array<InputMaybe<UploadType>>>
  /** Exclude uploads with the specified type */
  neq?: InputMaybe<UploadType>
  /** Search uploads without the specified types */
  notIn?: InputMaybe<Array<InputMaybe<UploadType>>>
}

/** Specifies how to filter by update datetime */
export type UpdatedAtFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars['DateTime']['input']>
}

/** Specifies how to filter by default alt */
export type UploadAltFilter = {
  /** Search the uploads with the specified alt */
  eq?: InputMaybe<Scalars['String']['input']>
  /** Filter uploads with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>
  /** Search uploads with the specified values as default alt */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude the uploads with the specified alt */
  neq?: InputMaybe<Scalars['String']['input']>
  /** Search uploads that do not have the specified values as default alt */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
}

/** Specifies how to filter by auhtor */
export type UploadAuthorFilter = {
  /** Filter uploads with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
}

/** Specifies how to filter by basename */
export type UploadBasenameFilter = {
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
}

/** Specifies how to filter by colors */
export type UploadColorsFilter = {
  /** Filter uploads that have all of the specified colors */
  allIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>
  /** Filter uploads that have at least one of the specified colors */
  anyIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>
  /** Filter uploads that have the specified colors */
  contains?: InputMaybe<ColorBucketType>
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Array<InputMaybe<ColorBucketType>>>
  /** Filter uploads that do not have any of the specified colors */
  notIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>
}

/** Specifies how to filter by copyright */
export type UploadCopyrightFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
}

/** Specifies how to filter by creation datetime */
export type UploadCreatedAtFilter = {
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter uploads with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter uploads with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter uploads with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter uploads with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Exclude uploads with an exact match */
  neq?: InputMaybe<Scalars['DateTime']['input']>
}

/** Specifies how to filter by filename */
export type UploadFilenameFilter = {
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
}

export type UploadFilter = {
  AND?: InputMaybe<Array<InputMaybe<UploadFilter>>>
  OR?: InputMaybe<Array<InputMaybe<UploadFilter>>>
  _createdAt?: InputMaybe<UploadCreatedAtFilter>
  _updatedAt?: InputMaybe<UploadUpdatedAtFilter>
  alt?: InputMaybe<UploadAltFilter>
  author?: InputMaybe<UploadAuthorFilter>
  basename?: InputMaybe<UploadBasenameFilter>
  colors?: InputMaybe<UploadColorsFilter>
  copyright?: InputMaybe<UploadCopyrightFilter>
  filename?: InputMaybe<UploadFilenameFilter>
  format?: InputMaybe<UploadFormatFilter>
  height?: InputMaybe<UploadHeightFilter>
  id?: InputMaybe<UploadIdFilter>
  inUse?: InputMaybe<InUseFilter>
  md5?: InputMaybe<UploadMd5Filter>
  mimeType?: InputMaybe<UploadMimeTypeFilter>
  notes?: InputMaybe<UploadNotesFilter>
  orientation?: InputMaybe<OrientationFilter>
  resolution?: InputMaybe<ResolutionFilter>
  size?: InputMaybe<UploadSizeFilter>
  smartTags?: InputMaybe<UploadTagsFilter>
  tags?: InputMaybe<UploadTagsFilter>
  title?: InputMaybe<UploadTitleFilter>
  type?: InputMaybe<TypeFilter>
  width?: InputMaybe<UploadWidthFilter>
}

/** Specifies how to filter by format */
export type UploadFormatFilter = {
  /** Search the asset with the specified format */
  eq?: InputMaybe<Scalars['String']['input']>
  /** Search assets with the specified formats */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Exclude the asset with the specified format */
  neq?: InputMaybe<Scalars['String']['input']>
  /** Search assets that do not have the specified formats */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

/** Specifies how to filter by height */
export type UploadHeightFilter = {
  /** Search assets with the specified height */
  eq?: InputMaybe<Scalars['IntType']['input']>
  /** Search all assets larger than the specified height */
  gt?: InputMaybe<Scalars['IntType']['input']>
  /** Search all assets larger or equal to the specified height */
  gte?: InputMaybe<Scalars['IntType']['input']>
  /** Search all assets smaller than the specified height */
  lt?: InputMaybe<Scalars['IntType']['input']>
  /** Search all assets larger or equal to the specified height */
  lte?: InputMaybe<Scalars['IntType']['input']>
  /** Search assets that do not have the specified height */
  neq?: InputMaybe<Scalars['IntType']['input']>
}

/** Specifies how to filter by ID */
export type UploadIdFilter = {
  /** Search the asset with the specified ID */
  eq?: InputMaybe<Scalars['UploadId']['input']>
  /** Search assets with the specified IDs */
  in?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>
  /** Exclude the asset with the specified ID */
  neq?: InputMaybe<Scalars['UploadId']['input']>
  /** Search assets that do not have the specified IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>
}

/** Specifies how to filter by MD5 */
export type UploadMd5Filter = {
  /** Search the asset with the specified MD5 */
  eq?: InputMaybe<Scalars['String']['input']>
  /** Search assets with the specified MD5s */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Exclude the asset with the specified MD5 */
  neq?: InputMaybe<Scalars['String']['input']>
  /** Search assets that do not have the specified MD5s */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

/** Specifies how to filter by mime type */
export type UploadMimeTypeFilter = {
  /** Search the asset with the specified mime type */
  eq?: InputMaybe<Scalars['String']['input']>
  /** Search assets with the specified mime types */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude the asset with the specified mime type */
  neq?: InputMaybe<Scalars['String']['input']>
  /** Search assets that do not have the specified mime types */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
}

/** Specifies how to filter by notes */
export type UploadNotesFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
}

export enum UploadOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  BasenameAsc = 'basename_ASC',
  BasenameDesc = 'basename_DESC',
  FilenameAsc = 'filename_ASC',
  FilenameDesc = 'filename_DESC',
  FormatAsc = 'format_ASC',
  FormatDesc = 'format_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  ResolutionAsc = 'resolution_ASC',
  ResolutionDesc = 'resolution_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
}

export enum UploadOrientation {
  Landscape = 'landscape',
  Portrait = 'portrait',
  Square = 'square',
}

/** Specifies how to filter by size */
export type UploadSizeFilter = {
  /** Search assets with the specified size (in bytes) */
  eq?: InputMaybe<Scalars['IntType']['input']>
  /** Search all assets larger than the specified size (in bytes) */
  gt?: InputMaybe<Scalars['IntType']['input']>
  /** Search all assets larger or equal to the specified size (in bytes) */
  gte?: InputMaybe<Scalars['IntType']['input']>
  /** Search all assets smaller than the specified size (in bytes) */
  lt?: InputMaybe<Scalars['IntType']['input']>
  /** Search all assets larger or equal to the specified size (in bytes) */
  lte?: InputMaybe<Scalars['IntType']['input']>
  /** Search assets that do not have the specified size (in bytes) */
  neq?: InputMaybe<Scalars['IntType']['input']>
}

/** Specifies how to filter by tags */
export type UploadTagsFilter = {
  /** Filter uploads linked to all of the specified tags */
  allIn?: InputMaybe<Array<Scalars['String']['input']>>
  /** Filter uploads linked to at least one of the specified tags */
  anyIn?: InputMaybe<Array<Scalars['String']['input']>>
  /** Filter uploads linked to the specified tag */
  contains?: InputMaybe<Scalars['String']['input']>
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Array<Scalars['String']['input']>>
  /** Filter uploads not linked to any of the specified tags */
  notIn?: InputMaybe<Array<Scalars['String']['input']>>
}

/** Specifies how to filter by default title */
export type UploadTitleFilter = {
  /** Search the asset with the specified title */
  eq?: InputMaybe<Scalars['String']['input']>
  /** Filter assets with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>
  /** Search assets with the specified as default title */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude the asset with the specified title */
  neq?: InputMaybe<Scalars['String']['input']>
  /** Search assets that do not have the specified as default title */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
}

export enum UploadType {
  Archive = 'archive',
  Audio = 'audio',
  Image = 'image',
  Pdfdocument = 'pdfdocument',
  Presentation = 'presentation',
  Richtext = 'richtext',
  Spreadsheet = 'spreadsheet',
  Video = 'video',
}

/** Specifies how to filter by update datetime */
export type UploadUpdatedAtFilter = {
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter uploads with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter uploads with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter uploads with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter uploads with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Exclude uploads with an exact match */
  neq?: InputMaybe<Scalars['DateTime']['input']>
}

export type UploadVideoField = {
  __typename?: 'UploadVideoField'
  duration?: Maybe<Scalars['Int']['output']>
  framerate?: Maybe<Scalars['Int']['output']>
  mp4Url?: Maybe<Scalars['String']['output']>
  muxAssetId: Scalars['String']['output']
  muxPlaybackId: Scalars['String']['output']
  streamingUrl: Scalars['String']['output']
  thumbnailUrl: Scalars['String']['output']
}

export type UploadVideoFieldMp4UrlArgs = {
  exactRes?: InputMaybe<VideoMp4Res>
  res?: InputMaybe<VideoMp4Res>
}

export type UploadVideoFieldThumbnailUrlArgs = {
  format?: InputMaybe<MuxThumbnailFormatType>
}

/** Specifies how to filter by width */
export type UploadWidthFilter = {
  /** Search assets with the specified width */
  eq?: InputMaybe<Scalars['IntType']['input']>
  /** Search all assets larger than the specified width */
  gt?: InputMaybe<Scalars['IntType']['input']>
  /** Search all assets larger or equal to the specified width */
  gte?: InputMaybe<Scalars['IntType']['input']>
  /** Search all assets smaller than the specified width */
  lt?: InputMaybe<Scalars['IntType']['input']>
  /** Search all assets larger or equal to the specified width */
  lte?: InputMaybe<Scalars['IntType']['input']>
  /** Search assets that do not have the specified width */
  neq?: InputMaybe<Scalars['IntType']['input']>
}

export type VideoField = {
  __typename?: 'VideoField'
  height: Scalars['IntType']['output']
  provider: Scalars['String']['output']
  providerUid: Scalars['String']['output']
  thumbnailUrl: Scalars['String']['output']
  title: Scalars['String']['output']
  url: Scalars['String']['output']
  width: Scalars['IntType']['output']
}

export enum VideoMp4Res {
  High = 'high',
  Low = 'low',
  Medium = 'medium',
}

/** Block of type Video (video) */
export type VideoRecord = RecordInterface & {
  __typename?: 'VideoRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  id: Scalars['ItemId']['output']
  media: VideoField
  thumbnail?: Maybe<MediaItemRecord>
  title: Scalars['String']['output']
}

/** Block of type Video (video) */
export type VideoRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export type Volume = {
  __typename?: 'Volume'
  cubic_feet?: Maybe<Scalars['Int']['output']>
  cubic_meters?: Maybe<Scalars['Int']['output']>
}

/** conflict action */
export enum Conflict_Action {
  /** ignore the insert on this row */
  Ignore = 'ignore',
  /** update the row with the given values */
  Update = 'update',
}

export type FocalPoint = {
  __typename?: 'focalPoint'
  x: Scalars['FloatType']['output']
  y: Scalars['FloatType']['output']
}

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last',
}

/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>
  _gt?: InputMaybe<Scalars['timestamptz']['input']>
  _gte?: InputMaybe<Scalars['timestamptz']['input']>
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>
  _is_null?: InputMaybe<Scalars['Boolean']['input']>
  _lt?: InputMaybe<Scalars['timestamptz']['input']>
  _lte?: InputMaybe<Scalars['timestamptz']['input']>
  _neq?: InputMaybe<Scalars['timestamptz']['input']>
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>
}

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users'
  id: Scalars['uuid']['output']
  name?: Maybe<Scalars['String']['output']>
  rocket?: Maybe<Scalars['String']['output']>
  timestamp: Scalars['timestamptz']['output']
  twitter?: Maybe<Scalars['String']['output']>
}

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate'
  aggregate?: Maybe<Users_Aggregate_Fields>
  nodes: Array<Users>
}

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields'
  count?: Maybe<Scalars['Int']['output']>
  max?: Maybe<Users_Max_Fields>
  min?: Maybe<Users_Min_Fields>
}

/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** order by aggregate values of table "users" */
export type Users_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Users_Max_Order_By>
  min?: InputMaybe<Users_Min_Order_By>
}

/** input type for inserting array relation for remote table "users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>
  on_conflict?: InputMaybe<Users_On_Conflict>
}

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Users_Bool_Exp>>>
  _not?: InputMaybe<Users_Bool_Exp>
  _or?: InputMaybe<Array<InputMaybe<Users_Bool_Exp>>>
  id?: InputMaybe<Uuid_Comparison_Exp>
  name?: InputMaybe<String_Comparison_Exp>
  rocket?: InputMaybe<String_Comparison_Exp>
  timestamp?: InputMaybe<Timestamptz_Comparison_Exp>
  twitter?: InputMaybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  Constraint = 'constraint',
  Key = 'key',
  Or = 'or',
  Primary = 'primary',
  Unique = 'unique',
  UsersPkey = 'users_pkey',
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  rocket?: InputMaybe<Scalars['String']['input']>
  timestamp?: InputMaybe<Scalars['timestamptz']['input']>
  twitter?: InputMaybe<Scalars['String']['input']>
}

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields'
  name?: Maybe<Scalars['String']['output']>
  rocket?: Maybe<Scalars['String']['output']>
  timestamp?: Maybe<Scalars['timestamptz']['output']>
  twitter?: Maybe<Scalars['String']['output']>
}

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
  name?: InputMaybe<Order_By>
  rocket?: InputMaybe<Order_By>
  timestamp?: InputMaybe<Order_By>
  twitter?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields'
  name?: Maybe<Scalars['String']['output']>
  rocket?: Maybe<Scalars['String']['output']>
  timestamp?: Maybe<Scalars['timestamptz']['output']>
  twitter?: Maybe<Scalars['String']['output']>
}

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
  name?: InputMaybe<Order_By>
  rocket?: InputMaybe<Order_By>
  timestamp?: InputMaybe<Order_By>
  twitter?: InputMaybe<Order_By>
}

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']['output']
  /** data of the affected rows by the mutation */
  returning: Array<Users>
}

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input
  on_conflict?: InputMaybe<Users_On_Conflict>
}

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint
  update_columns: Array<Users_Update_Column>
}

/** ordering options when selecting data from "users" */
export type Users_Order_By = {
  id?: InputMaybe<Order_By>
  name?: InputMaybe<Order_By>
  rocket?: InputMaybe<Order_By>
  timestamp?: InputMaybe<Order_By>
  twitter?: InputMaybe<Order_By>
}

/** select columns of table "users" */
export enum Users_Select_Column {
  Column = 'column',
  Id = 'id',
  Name = 'name',
  Rocket = 'rocket',
  Timestamp = 'timestamp',
  Twitter = 'twitter',
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  rocket?: InputMaybe<Scalars['String']['input']>
  timestamp?: InputMaybe<Scalars['timestamptz']['input']>
  twitter?: InputMaybe<Scalars['String']['input']>
}

/** update columns of table "users" */
export enum Users_Update_Column {
  Column = 'column',
  Id = 'id',
  Name = 'name',
  Rocket = 'rocket',
  Timestamp = 'timestamp',
  Twitter = 'twitter',
}

/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>
  _gt?: InputMaybe<Scalars['uuid']['input']>
  _gte?: InputMaybe<Scalars['uuid']['input']>
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>
  _is_null?: InputMaybe<Scalars['Boolean']['input']>
  _lt?: InputMaybe<Scalars['uuid']['input']>
  _lte?: InputMaybe<Scalars['uuid']['input']>
  _neq?: InputMaybe<Scalars['uuid']['input']>
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>
}

export type AuthorFragment = {
  __typename?: 'PersonRecord'
  id: string
  name: string
  role: string
}

export type ColorsFragment = {
  __typename?: 'ColorField'
  alpha: number
  blue: number
  cssRgb: string
  green: number
  hex: string
  red: number
}

export type CoordinatesFragment = {
  __typename?: 'LatLonField'
  latitude: number
  longitude: number
}

export type EventFragment = {
  __typename?: 'ConcertRecord'
  title: string
  _createdAt: string
  _firstPublishedAt?: string | null
  _publishedAt?: string | null
  _updatedAt: string
  id: string
  _seoMetaTags: Array<{
    __typename?: 'Tag'
    attributes?: Record<string, string> | null
    content?: string | null
    tag: string
  }>
  link?: {
    __typename?: 'LinkRecord'
    id: string
    internalTitle: string
    externalUrl?: string | null
    page?: { __typename?: 'PageRecord'; slug: string; title: string } | null
  } | null
  persons: Array<{
    __typename?: 'PersonRecord'
    id: string
    name: string
    role: string
  }>
  locations: Array<{
    __typename?: 'LocationItemRecord'
    id: string
    dateTime: string
    location?: { __typename?: 'LocationRecord'; id: string } | null
  }>
  poster?: {
    __typename?: 'FileField'
    id: string
    alt?: string | null
    width?: number | null
    height?: number | null
    title?: string | null
    url: string
    colors: Array<{
      __typename?: 'ColorField'
      alpha: number
      blue: number
      cssRgb: string
      green: number
      hex: string
      red: number
    }>
    focalPoint?: { __typename?: 'focalPoint'; x: number; y: number } | null
    responsiveImage?: {
      __typename?: 'ResponsiveImage'
      title?: string | null
      alt?: string | null
      sizes: string
      aspectRatio: number
      bgColor?: string | null
      src: string
      height: number
      width: number
    } | null
    video?: {
      __typename?: 'UploadVideoField'
      mp4Url?: string | null
      muxAssetId: string
      muxPlaybackId: string
      streamingUrl: string
      thumbnailUrl: string
    } | null
  } | null
}

export type EventMetadataFragment = {
  __typename?: 'ConcertRecord'
  title: string
  _createdAt: string
  _firstPublishedAt?: string | null
  _publishedAt?: string | null
  _updatedAt: string
  id: string
  locations: Array<{
    __typename?: 'LocationItemRecord'
    id: string
    dateTime: string
    location?: { __typename?: 'LocationRecord'; id: string } | null
  }>
  poster?: {
    __typename?: 'FileField'
    id: string
    alt?: string | null
    width?: number | null
    height?: number | null
    title?: string | null
    url: string
    colors: Array<{
      __typename?: 'ColorField'
      alpha: number
      blue: number
      cssRgb: string
      green: number
      hex: string
      red: number
    }>
    focalPoint?: { __typename?: 'focalPoint'; x: number; y: number } | null
    responsiveImage?: {
      __typename?: 'ResponsiveImage'
      title?: string | null
      alt?: string | null
      sizes: string
      aspectRatio: number
      bgColor?: string | null
      src: string
      height: number
      width: number
    } | null
    video?: {
      __typename?: 'UploadVideoField'
      mp4Url?: string | null
      muxAssetId: string
      muxPlaybackId: string
      streamingUrl: string
      thumbnailUrl: string
    } | null
  } | null
}

export type EventsFragment = {
  __typename?: 'ConcertListRecord'
  showAllConcerts?: boolean | null
  _createdAt: string
  _firstPublishedAt?: string | null
  _publishedAt?: string | null
  _updatedAt: string
  id: string
  pinnedConcerts: Array<{
    __typename?: 'ConcertRecord'
    title: string
    _createdAt: string
    _firstPublishedAt?: string | null
    _publishedAt?: string | null
    _updatedAt: string
    id: string
    _seoMetaTags: Array<{
      __typename?: 'Tag'
      attributes?: Record<string, string> | null
      content?: string | null
      tag: string
    }>
    link?: {
      __typename?: 'LinkRecord'
      id: string
      internalTitle: string
      externalUrl?: string | null
      page?: { __typename?: 'PageRecord'; slug: string; title: string } | null
    } | null
    persons: Array<{
      __typename?: 'PersonRecord'
      id: string
      name: string
      role: string
    }>
    locations: Array<{
      __typename?: 'LocationItemRecord'
      id: string
      dateTime: string
      location?: { __typename?: 'LocationRecord'; id: string } | null
    }>
    poster?: {
      __typename?: 'FileField'
      id: string
      alt?: string | null
      width?: number | null
      height?: number | null
      title?: string | null
      url: string
      colors: Array<{
        __typename?: 'ColorField'
        alpha: number
        blue: number
        cssRgb: string
        green: number
        hex: string
        red: number
      }>
      focalPoint?: { __typename?: 'focalPoint'; x: number; y: number } | null
      responsiveImage?: {
        __typename?: 'ResponsiveImage'
        title?: string | null
        alt?: string | null
        sizes: string
        aspectRatio: number
        bgColor?: string | null
        src: string
        height: number
        width: number
      } | null
      video?: {
        __typename?: 'UploadVideoField'
        mp4Url?: string | null
        muxAssetId: string
        muxPlaybackId: string
        streamingUrl: string
        thumbnailUrl: string
      } | null
    } | null
  }>
}

export type FileFragment = {
  __typename?: 'FileField'
  id: string
  alt?: string | null
  width?: number | null
  height?: number | null
  title?: string | null
  url: string
  colors: Array<{
    __typename?: 'ColorField'
    alpha: number
    blue: number
    cssRgb: string
    green: number
    hex: string
    red: number
  }>
  focalPoint?: { __typename?: 'focalPoint'; x: number; y: number } | null
  responsiveImage?: {
    __typename?: 'ResponsiveImage'
    title?: string | null
    alt?: string | null
    sizes: string
    aspectRatio: number
    bgColor?: string | null
    src: string
    height: number
    width: number
  } | null
  video?: {
    __typename?: 'UploadVideoField'
    mp4Url?: string | null
    muxAssetId: string
    muxPlaybackId: string
    streamingUrl: string
    thumbnailUrl: string
  } | null
}

export type FocalPointFragment = {
  __typename?: 'focalPoint'
  x: number
  y: number
}

export type GeneralInfoFragment = {
  __typename?: 'GeneralRecord'
  id: string
  title: string
  menu: Array<
    | {
        __typename?: 'MenuItemRecord'
        id: string
        label: string
        link?: { __typename?: 'PageRecord'; slug: string; title: string } | null
      }
    | {
        __typename?: 'SubmenuItemRecord'
        id: string
        label: string
        menu: Array<{
          __typename?: 'MenuItemRecord'
          id: string
          label: string
          link?: {
            __typename?: 'PageRecord'
            slug: string
            title: string
          } | null
        }>
      }
  >
  logo: {
    __typename?: 'FileField'
    id: string
    alt?: string | null
    width?: number | null
    height?: number | null
    title?: string | null
    url: string
    colors: Array<{
      __typename?: 'ColorField'
      alpha: number
      blue: number
      cssRgb: string
      green: number
      hex: string
      red: number
    }>
    focalPoint?: { __typename?: 'focalPoint'; x: number; y: number } | null
    responsiveImage?: {
      __typename?: 'ResponsiveImage'
      title?: string | null
      alt?: string | null
      sizes: string
      aspectRatio: number
      bgColor?: string | null
      src: string
      height: number
      width: number
    } | null
    video?: {
      __typename?: 'UploadVideoField'
      mp4Url?: string | null
      muxAssetId: string
      muxPlaybackId: string
      streamingUrl: string
      thumbnailUrl: string
    } | null
  }
}

type Identifiable_ConcertListRecord_Fragment = {
  __typename?: 'ConcertListRecord'
  _createdAt: string
  _firstPublishedAt?: string | null
  _publishedAt?: string | null
  _updatedAt: string
  id: string
}

type Identifiable_ConcertRecord_Fragment = {
  __typename?: 'ConcertRecord'
  _createdAt: string
  _firstPublishedAt?: string | null
  _publishedAt?: string | null
  _updatedAt: string
  id: string
}

type Identifiable_GeneralRecord_Fragment = {
  __typename?: 'GeneralRecord'
  _createdAt: string
  _firstPublishedAt?: string | null
  _publishedAt?: string | null
  _updatedAt: string
  id: string
}

type Identifiable_ImageRecord_Fragment = {
  __typename?: 'ImageRecord'
  _createdAt: string
  _firstPublishedAt?: string | null
  _publishedAt?: string | null
  _updatedAt: string
  id: string
}

type Identifiable_LinkRecord_Fragment = {
  __typename?: 'LinkRecord'
  _createdAt: string
  _firstPublishedAt?: string | null
  _publishedAt?: string | null
  _updatedAt: string
  id: string
}

type Identifiable_LocationItemRecord_Fragment = {
  __typename?: 'LocationItemRecord'
  _createdAt: string
  _firstPublishedAt?: string | null
  _publishedAt?: string | null
  _updatedAt: string
  id: string
}

type Identifiable_LocationRecord_Fragment = {
  __typename?: 'LocationRecord'
  _createdAt: string
  _firstPublishedAt?: string | null
  _publishedAt?: string | null
  _updatedAt: string
  id: string
}

type Identifiable_MediaItemRecord_Fragment = {
  __typename?: 'MediaItemRecord'
  _createdAt: string
  _firstPublishedAt?: string | null
  _publishedAt?: string | null
  _updatedAt: string
  id: string
}

type Identifiable_MenuItemRecord_Fragment = {
  __typename?: 'MenuItemRecord'
  _createdAt: string
  _firstPublishedAt?: string | null
  _publishedAt?: string | null
  _updatedAt: string
  id: string
}

type Identifiable_PageRecord_Fragment = {
  __typename?: 'PageRecord'
  _createdAt: string
  _firstPublishedAt?: string | null
  _publishedAt?: string | null
  _updatedAt: string
  id: string
}

type Identifiable_PersonRecord_Fragment = {
  __typename?: 'PersonRecord'
  _createdAt: string
  _firstPublishedAt?: string | null
  _publishedAt?: string | null
  _updatedAt: string
  id: string
}

type Identifiable_SubmenuItemRecord_Fragment = {
  __typename?: 'SubmenuItemRecord'
  _createdAt: string
  _firstPublishedAt?: string | null
  _publishedAt?: string | null
  _updatedAt: string
  id: string
}

type Identifiable_TextBlockRecord_Fragment = {
  __typename?: 'TextBlockRecord'
  _createdAt: string
  _firstPublishedAt?: string | null
  _publishedAt?: string | null
  _updatedAt: string
  id: string
}

type Identifiable_TwoColumnRecord_Fragment = {
  __typename?: 'TwoColumnRecord'
  _createdAt: string
  _firstPublishedAt?: string | null
  _publishedAt?: string | null
  _updatedAt: string
  id: string
}

type Identifiable_VideoRecord_Fragment = {
  __typename?: 'VideoRecord'
  _createdAt: string
  _firstPublishedAt?: string | null
  _publishedAt?: string | null
  _updatedAt: string
  id: string
}

export type IdentifiableFragment =
  | Identifiable_ConcertListRecord_Fragment
  | Identifiable_ConcertRecord_Fragment
  | Identifiable_GeneralRecord_Fragment
  | Identifiable_ImageRecord_Fragment
  | Identifiable_LinkRecord_Fragment
  | Identifiable_LocationItemRecord_Fragment
  | Identifiable_LocationRecord_Fragment
  | Identifiable_MediaItemRecord_Fragment
  | Identifiable_MenuItemRecord_Fragment
  | Identifiable_PageRecord_Fragment
  | Identifiable_PersonRecord_Fragment
  | Identifiable_SubmenuItemRecord_Fragment
  | Identifiable_TextBlockRecord_Fragment
  | Identifiable_TwoColumnRecord_Fragment
  | Identifiable_VideoRecord_Fragment

export type ResponsiveImageFragment = {
  __typename?: 'ResponsiveImage'
  title?: string | null
  alt?: string | null
  sizes: string
  aspectRatio: number
  bgColor?: string | null
  src: string
  height: number
  width: number
}

export type ImageFragment = {
  __typename?: 'ImageRecord'
  id: string
  item?: {
    __typename?: 'MediaItemRecord'
    id: string
    itemUrl?: string | null
    title: string
    item?: {
      __typename?: 'FileField'
      id: string
      alt?: string | null
      width?: number | null
      height?: number | null
      title?: string | null
      url: string
      colors: Array<{
        __typename?: 'ColorField'
        alpha: number
        blue: number
        cssRgb: string
        green: number
        hex: string
        red: number
      }>
      focalPoint?: { __typename?: 'focalPoint'; x: number; y: number } | null
      responsiveImage?: {
        __typename?: 'ResponsiveImage'
        title?: string | null
        alt?: string | null
        sizes: string
        aspectRatio: number
        bgColor?: string | null
        src: string
        height: number
        width: number
      } | null
      video?: {
        __typename?: 'UploadVideoField'
        mp4Url?: string | null
        muxAssetId: string
        muxPlaybackId: string
        streamingUrl: string
        thumbnailUrl: string
      } | null
    } | null
  } | null
}

export type MediaItemFragment = {
  __typename?: 'MediaItemRecord'
  id: string
  title: string
  itemUrl?: string | null
  item?: {
    __typename?: 'FileField'
    id: string
    alt?: string | null
    width?: number | null
    height?: number | null
    title?: string | null
    url: string
    colors: Array<{
      __typename?: 'ColorField'
      alpha: number
      blue: number
      cssRgb: string
      green: number
      hex: string
      red: number
    }>
    focalPoint?: { __typename?: 'focalPoint'; x: number; y: number } | null
    responsiveImage?: {
      __typename?: 'ResponsiveImage'
      title?: string | null
      alt?: string | null
      sizes: string
      aspectRatio: number
      bgColor?: string | null
      src: string
      height: number
      width: number
    } | null
    video?: {
      __typename?: 'UploadVideoField'
      mp4Url?: string | null
      muxAssetId: string
      muxPlaybackId: string
      streamingUrl: string
      thumbnailUrl: string
    } | null
  } | null
}

export type LinkFragment = {
  __typename?: 'LinkRecord'
  id: string
  internalTitle: string
  externalUrl?: string | null
  page?: { __typename?: 'PageRecord'; slug: string; title: string } | null
}

export type LocationFragment = {
  __typename?: 'LocationRecord'
  id: string
  title: string
  addressTitle: string
  address?: {
    __typename?: 'LatLonField'
    latitude: number
    longitude: number
  } | null
}

export type LocationsFragment = {
  __typename?: 'LocationItemRecord'
  id: string
  dateTime: string
  location?: { __typename?: 'LocationRecord'; id: string } | null
}

export type MenuItemFragment = {
  __typename?: 'MenuItemRecord'
  id: string
  label: string
  link?: { __typename?: 'PageRecord'; slug: string; title: string } | null
}

export type PageFragment = {
  __typename?: 'PageRecord'
  title: string
  slug: string
  _createdAt: string
  _firstPublishedAt?: string | null
  _publishedAt?: string | null
  _updatedAt: string
  id: string
  _seoMetaTags: Array<{
    __typename?: 'Tag'
    attributes?: Record<string, string> | null
    content?: string | null
    tag: string
  }>
  seo?: {
    __typename?: 'SeoField'
    description?: string | null
    title?: string | null
    twitterCard?: string | null
    image?: {
      __typename?: 'FileField'
      id: string
      alt?: string | null
      width?: number | null
      height?: number | null
      title?: string | null
      url: string
      colors: Array<{
        __typename?: 'ColorField'
        alpha: number
        blue: number
        cssRgb: string
        green: number
        hex: string
        red: number
      }>
      focalPoint?: { __typename?: 'focalPoint'; x: number; y: number } | null
      responsiveImage?: {
        __typename?: 'ResponsiveImage'
        title?: string | null
        alt?: string | null
        sizes: string
        aspectRatio: number
        bgColor?: string | null
        src: string
        height: number
        width: number
      } | null
      video?: {
        __typename?: 'UploadVideoField'
        mp4Url?: string | null
        muxAssetId: string
        muxPlaybackId: string
        streamingUrl: string
        thumbnailUrl: string
      } | null
    } | null
  } | null
  content: Array<
    | { __typename?: 'ConcertListRecord'; id: string }
    | { __typename?: 'TextBlockRecord'; id: string }
    | { __typename?: 'TwoColumnRecord' }
  >
}

export type PageDetailFragment = {
  __typename?: 'PageRecord'
  id: string
  title: string
  slug: string
  _createdAt: string
  _firstPublishedAt?: string | null
  _publishedAt?: string | null
  _updatedAt: string
  _seoMetaTags: Array<{
    __typename?: 'Tag'
    attributes?: Record<string, string> | null
    content?: string | null
    tag: string
  }>
  seo?: {
    __typename?: 'SeoField'
    description?: string | null
    title?: string | null
    twitterCard?: string | null
    image?: {
      __typename?: 'FileField'
      id: string
      alt?: string | null
      width?: number | null
      height?: number | null
      title?: string | null
      url: string
      colors: Array<{
        __typename?: 'ColorField'
        alpha: number
        blue: number
        cssRgb: string
        green: number
        hex: string
        red: number
      }>
      focalPoint?: { __typename?: 'focalPoint'; x: number; y: number } | null
      responsiveImage?: {
        __typename?: 'ResponsiveImage'
        title?: string | null
        alt?: string | null
        sizes: string
        aspectRatio: number
        bgColor?: string | null
        src: string
        height: number
        width: number
      } | null
      video?: {
        __typename?: 'UploadVideoField'
        mp4Url?: string | null
        muxAssetId: string
        muxPlaybackId: string
        streamingUrl: string
        thumbnailUrl: string
      } | null
    } | null
  } | null
  content: Array<
    | {
        __typename?: 'ConcertListRecord'
        showAllConcerts?: boolean | null
        _createdAt: string
        _firstPublishedAt?: string | null
        _publishedAt?: string | null
        _updatedAt: string
        id: string
        pinnedConcerts: Array<{
          __typename?: 'ConcertRecord'
          title: string
          _createdAt: string
          _firstPublishedAt?: string | null
          _publishedAt?: string | null
          _updatedAt: string
          id: string
          _seoMetaTags: Array<{
            __typename?: 'Tag'
            attributes?: Record<string, string> | null
            content?: string | null
            tag: string
          }>
          link?: {
            __typename?: 'LinkRecord'
            id: string
            internalTitle: string
            externalUrl?: string | null
            page?: {
              __typename?: 'PageRecord'
              slug: string
              title: string
            } | null
          } | null
          persons: Array<{
            __typename?: 'PersonRecord'
            id: string
            name: string
            role: string
          }>
          locations: Array<{
            __typename?: 'LocationItemRecord'
            id: string
            dateTime: string
            location?: { __typename?: 'LocationRecord'; id: string } | null
          }>
          poster?: {
            __typename?: 'FileField'
            id: string
            alt?: string | null
            width?: number | null
            height?: number | null
            title?: string | null
            url: string
            colors: Array<{
              __typename?: 'ColorField'
              alpha: number
              blue: number
              cssRgb: string
              green: number
              hex: string
              red: number
            }>
            focalPoint?: {
              __typename?: 'focalPoint'
              x: number
              y: number
            } | null
            responsiveImage?: {
              __typename?: 'ResponsiveImage'
              title?: string | null
              alt?: string | null
              sizes: string
              aspectRatio: number
              bgColor?: string | null
              src: string
              height: number
              width: number
            } | null
            video?: {
              __typename?: 'UploadVideoField'
              mp4Url?: string | null
              muxAssetId: string
              muxPlaybackId: string
              streamingUrl: string
              thumbnailUrl: string
            } | null
          } | null
        }>
      }
    | {
        __typename?: 'TextBlockRecord'
        _createdAt: string
        _firstPublishedAt?: string | null
        _publishedAt?: string | null
        _updatedAt: string
        id: string
        content?: {
          __typename?: 'TextBlockModelContentField'
          blocks: Array<
            | {
                __typename?: 'ConcertListRecord'
                showAllConcerts?: boolean | null
                _createdAt: string
                _firstPublishedAt?: string | null
                _publishedAt?: string | null
                _updatedAt: string
                id: string
                pinnedConcerts: Array<{
                  __typename?: 'ConcertRecord'
                  title: string
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                  _seoMetaTags: Array<{
                    __typename?: 'Tag'
                    attributes?: Record<string, string> | null
                    content?: string | null
                    tag: string
                  }>
                  link?: {
                    __typename?: 'LinkRecord'
                    id: string
                    internalTitle: string
                    externalUrl?: string | null
                    page?: {
                      __typename?: 'PageRecord'
                      slug: string
                      title: string
                    } | null
                  } | null
                  persons: Array<{
                    __typename?: 'PersonRecord'
                    id: string
                    name: string
                    role: string
                  }>
                  locations: Array<{
                    __typename?: 'LocationItemRecord'
                    id: string
                    dateTime: string
                    location?: {
                      __typename?: 'LocationRecord'
                      id: string
                    } | null
                  }>
                  poster?: {
                    __typename?: 'FileField'
                    id: string
                    alt?: string | null
                    width?: number | null
                    height?: number | null
                    title?: string | null
                    url: string
                    colors: Array<{
                      __typename?: 'ColorField'
                      alpha: number
                      blue: number
                      cssRgb: string
                      green: number
                      hex: string
                      red: number
                    }>
                    focalPoint?: {
                      __typename?: 'focalPoint'
                      x: number
                      y: number
                    } | null
                    responsiveImage?: {
                      __typename?: 'ResponsiveImage'
                      title?: string | null
                      alt?: string | null
                      sizes: string
                      aspectRatio: number
                      bgColor?: string | null
                      src: string
                      height: number
                      width: number
                    } | null
                    video?: {
                      __typename?: 'UploadVideoField'
                      mp4Url?: string | null
                      muxAssetId: string
                      muxPlaybackId: string
                      streamingUrl: string
                      thumbnailUrl: string
                    } | null
                  } | null
                }>
              }
            | {
                __typename?: 'ImageRecord'
                id: string
                item?: {
                  __typename?: 'MediaItemRecord'
                  id: string
                  itemUrl?: string | null
                  title: string
                  item?: {
                    __typename?: 'FileField'
                    id: string
                    alt?: string | null
                    width?: number | null
                    height?: number | null
                    title?: string | null
                    url: string
                    colors: Array<{
                      __typename?: 'ColorField'
                      alpha: number
                      blue: number
                      cssRgb: string
                      green: number
                      hex: string
                      red: number
                    }>
                    focalPoint?: {
                      __typename?: 'focalPoint'
                      x: number
                      y: number
                    } | null
                    responsiveImage?: {
                      __typename?: 'ResponsiveImage'
                      title?: string | null
                      alt?: string | null
                      sizes: string
                      aspectRatio: number
                      bgColor?: string | null
                      src: string
                      height: number
                      width: number
                    } | null
                    video?: {
                      __typename?: 'UploadVideoField'
                      mp4Url?: string | null
                      muxAssetId: string
                      muxPlaybackId: string
                      streamingUrl: string
                      thumbnailUrl: string
                    } | null
                  } | null
                } | null
              }
            | {
                __typename?: 'VideoRecord'
                id: string
                title: string
                media: {
                  __typename?: 'VideoField'
                  height: number
                  provider: string
                  providerUid: string
                  thumbnailUrl: string
                  title: string
                  url: string
                  width: number
                }
                thumbnail?: {
                  __typename?: 'MediaItemRecord'
                  id: string
                  title: string
                  itemUrl?: string | null
                  item?: {
                    __typename?: 'FileField'
                    id: string
                    alt?: string | null
                    width?: number | null
                    height?: number | null
                    title?: string | null
                    url: string
                    colors: Array<{
                      __typename?: 'ColorField'
                      alpha: number
                      blue: number
                      cssRgb: string
                      green: number
                      hex: string
                      red: number
                    }>
                    focalPoint?: {
                      __typename?: 'focalPoint'
                      x: number
                      y: number
                    } | null
                    responsiveImage?: {
                      __typename?: 'ResponsiveImage'
                      title?: string | null
                      alt?: string | null
                      sizes: string
                      aspectRatio: number
                      bgColor?: string | null
                      src: string
                      height: number
                      width: number
                    } | null
                    video?: {
                      __typename?: 'UploadVideoField'
                      mp4Url?: string | null
                      muxAssetId: string
                      muxPlaybackId: string
                      streamingUrl: string
                      thumbnailUrl: string
                    } | null
                  } | null
                } | null
              }
          >
        } | null
      }
    | {
        __typename?: 'TwoColumnRecord'
        _createdAt: string
        _firstPublishedAt?: string | null
        _publishedAt?: string | null
        _updatedAt: string
        id: string
        leftContent?: {
          __typename?: 'TwoColumnModelLeftContentField'
          blocks: Array<
            | {
                __typename?: 'ConcertListRecord'
                showAllConcerts?: boolean | null
                _createdAt: string
                _firstPublishedAt?: string | null
                _publishedAt?: string | null
                _updatedAt: string
                id: string
                pinnedConcerts: Array<{
                  __typename?: 'ConcertRecord'
                  title: string
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                  _seoMetaTags: Array<{
                    __typename?: 'Tag'
                    attributes?: Record<string, string> | null
                    content?: string | null
                    tag: string
                  }>
                  link?: {
                    __typename?: 'LinkRecord'
                    id: string
                    internalTitle: string
                    externalUrl?: string | null
                    page?: {
                      __typename?: 'PageRecord'
                      slug: string
                      title: string
                    } | null
                  } | null
                  persons: Array<{
                    __typename?: 'PersonRecord'
                    id: string
                    name: string
                    role: string
                  }>
                  locations: Array<{
                    __typename?: 'LocationItemRecord'
                    id: string
                    dateTime: string
                    location?: {
                      __typename?: 'LocationRecord'
                      id: string
                    } | null
                  }>
                  poster?: {
                    __typename?: 'FileField'
                    id: string
                    alt?: string | null
                    width?: number | null
                    height?: number | null
                    title?: string | null
                    url: string
                    colors: Array<{
                      __typename?: 'ColorField'
                      alpha: number
                      blue: number
                      cssRgb: string
                      green: number
                      hex: string
                      red: number
                    }>
                    focalPoint?: {
                      __typename?: 'focalPoint'
                      x: number
                      y: number
                    } | null
                    responsiveImage?: {
                      __typename?: 'ResponsiveImage'
                      title?: string | null
                      alt?: string | null
                      sizes: string
                      aspectRatio: number
                      bgColor?: string | null
                      src: string
                      height: number
                      width: number
                    } | null
                    video?: {
                      __typename?: 'UploadVideoField'
                      mp4Url?: string | null
                      muxAssetId: string
                      muxPlaybackId: string
                      streamingUrl: string
                      thumbnailUrl: string
                    } | null
                  } | null
                }>
              }
            | {
                __typename?: 'ImageRecord'
                id: string
                item?: {
                  __typename?: 'MediaItemRecord'
                  id: string
                  itemUrl?: string | null
                  title: string
                  item?: {
                    __typename?: 'FileField'
                    id: string
                    alt?: string | null
                    width?: number | null
                    height?: number | null
                    title?: string | null
                    url: string
                    colors: Array<{
                      __typename?: 'ColorField'
                      alpha: number
                      blue: number
                      cssRgb: string
                      green: number
                      hex: string
                      red: number
                    }>
                    focalPoint?: {
                      __typename?: 'focalPoint'
                      x: number
                      y: number
                    } | null
                    responsiveImage?: {
                      __typename?: 'ResponsiveImage'
                      title?: string | null
                      alt?: string | null
                      sizes: string
                      aspectRatio: number
                      bgColor?: string | null
                      src: string
                      height: number
                      width: number
                    } | null
                    video?: {
                      __typename?: 'UploadVideoField'
                      mp4Url?: string | null
                      muxAssetId: string
                      muxPlaybackId: string
                      streamingUrl: string
                      thumbnailUrl: string
                    } | null
                  } | null
                } | null
              }
            | {
                __typename?: 'VideoRecord'
                id: string
                title: string
                media: {
                  __typename?: 'VideoField'
                  height: number
                  provider: string
                  providerUid: string
                  thumbnailUrl: string
                  title: string
                  url: string
                  width: number
                }
                thumbnail?: {
                  __typename?: 'MediaItemRecord'
                  id: string
                  title: string
                  itemUrl?: string | null
                  item?: {
                    __typename?: 'FileField'
                    id: string
                    alt?: string | null
                    width?: number | null
                    height?: number | null
                    title?: string | null
                    url: string
                    colors: Array<{
                      __typename?: 'ColorField'
                      alpha: number
                      blue: number
                      cssRgb: string
                      green: number
                      hex: string
                      red: number
                    }>
                    focalPoint?: {
                      __typename?: 'focalPoint'
                      x: number
                      y: number
                    } | null
                    responsiveImage?: {
                      __typename?: 'ResponsiveImage'
                      title?: string | null
                      alt?: string | null
                      sizes: string
                      aspectRatio: number
                      bgColor?: string | null
                      src: string
                      height: number
                      width: number
                    } | null
                    video?: {
                      __typename?: 'UploadVideoField'
                      mp4Url?: string | null
                      muxAssetId: string
                      muxPlaybackId: string
                      streamingUrl: string
                      thumbnailUrl: string
                    } | null
                  } | null
                } | null
              }
          >
        } | null
        rightContent?: {
          __typename?: 'TwoColumnModelRightContentField'
          blocks: Array<
            | {
                __typename?: 'ConcertListRecord'
                showAllConcerts?: boolean | null
                _createdAt: string
                _firstPublishedAt?: string | null
                _publishedAt?: string | null
                _updatedAt: string
                id: string
                pinnedConcerts: Array<{
                  __typename?: 'ConcertRecord'
                  title: string
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                  _seoMetaTags: Array<{
                    __typename?: 'Tag'
                    attributes?: Record<string, string> | null
                    content?: string | null
                    tag: string
                  }>
                  link?: {
                    __typename?: 'LinkRecord'
                    id: string
                    internalTitle: string
                    externalUrl?: string | null
                    page?: {
                      __typename?: 'PageRecord'
                      slug: string
                      title: string
                    } | null
                  } | null
                  persons: Array<{
                    __typename?: 'PersonRecord'
                    id: string
                    name: string
                    role: string
                  }>
                  locations: Array<{
                    __typename?: 'LocationItemRecord'
                    id: string
                    dateTime: string
                    location?: {
                      __typename?: 'LocationRecord'
                      id: string
                    } | null
                  }>
                  poster?: {
                    __typename?: 'FileField'
                    id: string
                    alt?: string | null
                    width?: number | null
                    height?: number | null
                    title?: string | null
                    url: string
                    colors: Array<{
                      __typename?: 'ColorField'
                      alpha: number
                      blue: number
                      cssRgb: string
                      green: number
                      hex: string
                      red: number
                    }>
                    focalPoint?: {
                      __typename?: 'focalPoint'
                      x: number
                      y: number
                    } | null
                    responsiveImage?: {
                      __typename?: 'ResponsiveImage'
                      title?: string | null
                      alt?: string | null
                      sizes: string
                      aspectRatio: number
                      bgColor?: string | null
                      src: string
                      height: number
                      width: number
                    } | null
                    video?: {
                      __typename?: 'UploadVideoField'
                      mp4Url?: string | null
                      muxAssetId: string
                      muxPlaybackId: string
                      streamingUrl: string
                      thumbnailUrl: string
                    } | null
                  } | null
                }>
              }
            | {
                __typename?: 'ImageRecord'
                id: string
                item?: {
                  __typename?: 'MediaItemRecord'
                  id: string
                  itemUrl?: string | null
                  title: string
                  item?: {
                    __typename?: 'FileField'
                    id: string
                    alt?: string | null
                    width?: number | null
                    height?: number | null
                    title?: string | null
                    url: string
                    colors: Array<{
                      __typename?: 'ColorField'
                      alpha: number
                      blue: number
                      cssRgb: string
                      green: number
                      hex: string
                      red: number
                    }>
                    focalPoint?: {
                      __typename?: 'focalPoint'
                      x: number
                      y: number
                    } | null
                    responsiveImage?: {
                      __typename?: 'ResponsiveImage'
                      title?: string | null
                      alt?: string | null
                      sizes: string
                      aspectRatio: number
                      bgColor?: string | null
                      src: string
                      height: number
                      width: number
                    } | null
                    video?: {
                      __typename?: 'UploadVideoField'
                      mp4Url?: string | null
                      muxAssetId: string
                      muxPlaybackId: string
                      streamingUrl: string
                      thumbnailUrl: string
                    } | null
                  } | null
                } | null
              }
            | {
                __typename?: 'VideoRecord'
                id: string
                title: string
                media: {
                  __typename?: 'VideoField'
                  height: number
                  provider: string
                  providerUid: string
                  thumbnailUrl: string
                  title: string
                  url: string
                  width: number
                }
                thumbnail?: {
                  __typename?: 'MediaItemRecord'
                  id: string
                  title: string
                  itemUrl?: string | null
                  item?: {
                    __typename?: 'FileField'
                    id: string
                    alt?: string | null
                    width?: number | null
                    height?: number | null
                    title?: string | null
                    url: string
                    colors: Array<{
                      __typename?: 'ColorField'
                      alpha: number
                      blue: number
                      cssRgb: string
                      green: number
                      hex: string
                      red: number
                    }>
                    focalPoint?: {
                      __typename?: 'focalPoint'
                      x: number
                      y: number
                    } | null
                    responsiveImage?: {
                      __typename?: 'ResponsiveImage'
                      title?: string | null
                      alt?: string | null
                      sizes: string
                      aspectRatio: number
                      bgColor?: string | null
                      src: string
                      height: number
                      width: number
                    } | null
                    video?: {
                      __typename?: 'UploadVideoField'
                      mp4Url?: string | null
                      muxAssetId: string
                      muxPlaybackId: string
                      streamingUrl: string
                      thumbnailUrl: string
                    } | null
                  } | null
                } | null
              }
          >
        } | null
      }
  >
}

export type PageLinkFragment = {
  __typename?: 'PageRecord'
  slug: string
  title: string
}

export type SeoFragment = {
  __typename?: 'SeoField'
  description?: string | null
  title?: string | null
  twitterCard?: string | null
  image?: {
    __typename?: 'FileField'
    id: string
    alt?: string | null
    width?: number | null
    height?: number | null
    title?: string | null
    url: string
    colors: Array<{
      __typename?: 'ColorField'
      alpha: number
      blue: number
      cssRgb: string
      green: number
      hex: string
      red: number
    }>
    focalPoint?: { __typename?: 'focalPoint'; x: number; y: number } | null
    responsiveImage?: {
      __typename?: 'ResponsiveImage'
      title?: string | null
      alt?: string | null
      sizes: string
      aspectRatio: number
      bgColor?: string | null
      src: string
      height: number
      width: number
    } | null
    video?: {
      __typename?: 'UploadVideoField'
      mp4Url?: string | null
      muxAssetId: string
      muxPlaybackId: string
      streamingUrl: string
      thumbnailUrl: string
    } | null
  } | null
}

export type SeoSettingsFragment = {
  __typename?: 'GlobalSeoField'
  facebookPageUrl?: string | null
  siteName?: string | null
  titleSuffix?: string | null
  twitterAccount?: string | null
  fallbackSeo?: {
    __typename?: 'SeoField'
    description?: string | null
    title?: string | null
    twitterCard?: string | null
    image?: {
      __typename?: 'FileField'
      id: string
      alt?: string | null
      width?: number | null
      height?: number | null
      title?: string | null
      url: string
      colors: Array<{
        __typename?: 'ColorField'
        alpha: number
        blue: number
        cssRgb: string
        green: number
        hex: string
        red: number
      }>
      focalPoint?: { __typename?: 'focalPoint'; x: number; y: number } | null
      responsiveImage?: {
        __typename?: 'ResponsiveImage'
        title?: string | null
        alt?: string | null
        sizes: string
        aspectRatio: number
        bgColor?: string | null
        src: string
        height: number
        width: number
      } | null
      video?: {
        __typename?: 'UploadVideoField'
        mp4Url?: string | null
        muxAssetId: string
        muxPlaybackId: string
        streamingUrl: string
        thumbnailUrl: string
      } | null
    } | null
  } | null
}

export type SubmenuItemFragment = {
  __typename?: 'SubmenuItemRecord'
  id: string
  label: string
  menu: Array<{
    __typename?: 'MenuItemRecord'
    id: string
    label: string
    link?: { __typename?: 'PageRecord'; slug: string; title: string } | null
  }>
}

export type TagFragment = {
  __typename?: 'Tag'
  attributes?: Record<string, string> | null
  content?: string | null
  tag: string
}

export type TextBlockFragment = {
  __typename?: 'TextBlockModelContentField'
  blocks: Array<
    | {
        __typename?: 'ConcertListRecord'
        showAllConcerts?: boolean | null
        _createdAt: string
        _firstPublishedAt?: string | null
        _publishedAt?: string | null
        _updatedAt: string
        id: string
        pinnedConcerts: Array<{
          __typename?: 'ConcertRecord'
          title: string
          _createdAt: string
          _firstPublishedAt?: string | null
          _publishedAt?: string | null
          _updatedAt: string
          id: string
          _seoMetaTags: Array<{
            __typename?: 'Tag'
            attributes?: Record<string, string> | null
            content?: string | null
            tag: string
          }>
          link?: {
            __typename?: 'LinkRecord'
            id: string
            internalTitle: string
            externalUrl?: string | null
            page?: {
              __typename?: 'PageRecord'
              slug: string
              title: string
            } | null
          } | null
          persons: Array<{
            __typename?: 'PersonRecord'
            id: string
            name: string
            role: string
          }>
          locations: Array<{
            __typename?: 'LocationItemRecord'
            id: string
            dateTime: string
            location?: { __typename?: 'LocationRecord'; id: string } | null
          }>
          poster?: {
            __typename?: 'FileField'
            id: string
            alt?: string | null
            width?: number | null
            height?: number | null
            title?: string | null
            url: string
            colors: Array<{
              __typename?: 'ColorField'
              alpha: number
              blue: number
              cssRgb: string
              green: number
              hex: string
              red: number
            }>
            focalPoint?: {
              __typename?: 'focalPoint'
              x: number
              y: number
            } | null
            responsiveImage?: {
              __typename?: 'ResponsiveImage'
              title?: string | null
              alt?: string | null
              sizes: string
              aspectRatio: number
              bgColor?: string | null
              src: string
              height: number
              width: number
            } | null
            video?: {
              __typename?: 'UploadVideoField'
              mp4Url?: string | null
              muxAssetId: string
              muxPlaybackId: string
              streamingUrl: string
              thumbnailUrl: string
            } | null
          } | null
        }>
      }
    | {
        __typename?: 'ImageRecord'
        id: string
        item?: {
          __typename?: 'MediaItemRecord'
          id: string
          itemUrl?: string | null
          title: string
          item?: {
            __typename?: 'FileField'
            id: string
            alt?: string | null
            width?: number | null
            height?: number | null
            title?: string | null
            url: string
            colors: Array<{
              __typename?: 'ColorField'
              alpha: number
              blue: number
              cssRgb: string
              green: number
              hex: string
              red: number
            }>
            focalPoint?: {
              __typename?: 'focalPoint'
              x: number
              y: number
            } | null
            responsiveImage?: {
              __typename?: 'ResponsiveImage'
              title?: string | null
              alt?: string | null
              sizes: string
              aspectRatio: number
              bgColor?: string | null
              src: string
              height: number
              width: number
            } | null
            video?: {
              __typename?: 'UploadVideoField'
              mp4Url?: string | null
              muxAssetId: string
              muxPlaybackId: string
              streamingUrl: string
              thumbnailUrl: string
            } | null
          } | null
        } | null
      }
    | {
        __typename?: 'VideoRecord'
        id: string
        title: string
        media: {
          __typename?: 'VideoField'
          height: number
          provider: string
          providerUid: string
          thumbnailUrl: string
          title: string
          url: string
          width: number
        }
        thumbnail?: {
          __typename?: 'MediaItemRecord'
          id: string
          title: string
          itemUrl?: string | null
          item?: {
            __typename?: 'FileField'
            id: string
            alt?: string | null
            width?: number | null
            height?: number | null
            title?: string | null
            url: string
            colors: Array<{
              __typename?: 'ColorField'
              alpha: number
              blue: number
              cssRgb: string
              green: number
              hex: string
              red: number
            }>
            focalPoint?: {
              __typename?: 'focalPoint'
              x: number
              y: number
            } | null
            responsiveImage?: {
              __typename?: 'ResponsiveImage'
              title?: string | null
              alt?: string | null
              sizes: string
              aspectRatio: number
              bgColor?: string | null
              src: string
              height: number
              width: number
            } | null
            video?: {
              __typename?: 'UploadVideoField'
              mp4Url?: string | null
              muxAssetId: string
              muxPlaybackId: string
              streamingUrl: string
              thumbnailUrl: string
            } | null
          } | null
        } | null
      }
  >
}

export type LeftContentFragment = {
  __typename?: 'TwoColumnModelLeftContentField'
  blocks: Array<
    | {
        __typename?: 'ConcertListRecord'
        showAllConcerts?: boolean | null
        _createdAt: string
        _firstPublishedAt?: string | null
        _publishedAt?: string | null
        _updatedAt: string
        id: string
        pinnedConcerts: Array<{
          __typename?: 'ConcertRecord'
          title: string
          _createdAt: string
          _firstPublishedAt?: string | null
          _publishedAt?: string | null
          _updatedAt: string
          id: string
          _seoMetaTags: Array<{
            __typename?: 'Tag'
            attributes?: Record<string, string> | null
            content?: string | null
            tag: string
          }>
          link?: {
            __typename?: 'LinkRecord'
            id: string
            internalTitle: string
            externalUrl?: string | null
            page?: {
              __typename?: 'PageRecord'
              slug: string
              title: string
            } | null
          } | null
          persons: Array<{
            __typename?: 'PersonRecord'
            id: string
            name: string
            role: string
          }>
          locations: Array<{
            __typename?: 'LocationItemRecord'
            id: string
            dateTime: string
            location?: { __typename?: 'LocationRecord'; id: string } | null
          }>
          poster?: {
            __typename?: 'FileField'
            id: string
            alt?: string | null
            width?: number | null
            height?: number | null
            title?: string | null
            url: string
            colors: Array<{
              __typename?: 'ColorField'
              alpha: number
              blue: number
              cssRgb: string
              green: number
              hex: string
              red: number
            }>
            focalPoint?: {
              __typename?: 'focalPoint'
              x: number
              y: number
            } | null
            responsiveImage?: {
              __typename?: 'ResponsiveImage'
              title?: string | null
              alt?: string | null
              sizes: string
              aspectRatio: number
              bgColor?: string | null
              src: string
              height: number
              width: number
            } | null
            video?: {
              __typename?: 'UploadVideoField'
              mp4Url?: string | null
              muxAssetId: string
              muxPlaybackId: string
              streamingUrl: string
              thumbnailUrl: string
            } | null
          } | null
        }>
      }
    | {
        __typename?: 'ImageRecord'
        id: string
        item?: {
          __typename?: 'MediaItemRecord'
          id: string
          itemUrl?: string | null
          title: string
          item?: {
            __typename?: 'FileField'
            id: string
            alt?: string | null
            width?: number | null
            height?: number | null
            title?: string | null
            url: string
            colors: Array<{
              __typename?: 'ColorField'
              alpha: number
              blue: number
              cssRgb: string
              green: number
              hex: string
              red: number
            }>
            focalPoint?: {
              __typename?: 'focalPoint'
              x: number
              y: number
            } | null
            responsiveImage?: {
              __typename?: 'ResponsiveImage'
              title?: string | null
              alt?: string | null
              sizes: string
              aspectRatio: number
              bgColor?: string | null
              src: string
              height: number
              width: number
            } | null
            video?: {
              __typename?: 'UploadVideoField'
              mp4Url?: string | null
              muxAssetId: string
              muxPlaybackId: string
              streamingUrl: string
              thumbnailUrl: string
            } | null
          } | null
        } | null
      }
    | {
        __typename?: 'VideoRecord'
        id: string
        title: string
        media: {
          __typename?: 'VideoField'
          height: number
          provider: string
          providerUid: string
          thumbnailUrl: string
          title: string
          url: string
          width: number
        }
        thumbnail?: {
          __typename?: 'MediaItemRecord'
          id: string
          title: string
          itemUrl?: string | null
          item?: {
            __typename?: 'FileField'
            id: string
            alt?: string | null
            width?: number | null
            height?: number | null
            title?: string | null
            url: string
            colors: Array<{
              __typename?: 'ColorField'
              alpha: number
              blue: number
              cssRgb: string
              green: number
              hex: string
              red: number
            }>
            focalPoint?: {
              __typename?: 'focalPoint'
              x: number
              y: number
            } | null
            responsiveImage?: {
              __typename?: 'ResponsiveImage'
              title?: string | null
              alt?: string | null
              sizes: string
              aspectRatio: number
              bgColor?: string | null
              src: string
              height: number
              width: number
            } | null
            video?: {
              __typename?: 'UploadVideoField'
              mp4Url?: string | null
              muxAssetId: string
              muxPlaybackId: string
              streamingUrl: string
              thumbnailUrl: string
            } | null
          } | null
        } | null
      }
  >
}

export type RightContentFragment = {
  __typename?: 'TwoColumnModelRightContentField'
  blocks: Array<
    | {
        __typename?: 'ConcertListRecord'
        showAllConcerts?: boolean | null
        _createdAt: string
        _firstPublishedAt?: string | null
        _publishedAt?: string | null
        _updatedAt: string
        id: string
        pinnedConcerts: Array<{
          __typename?: 'ConcertRecord'
          title: string
          _createdAt: string
          _firstPublishedAt?: string | null
          _publishedAt?: string | null
          _updatedAt: string
          id: string
          _seoMetaTags: Array<{
            __typename?: 'Tag'
            attributes?: Record<string, string> | null
            content?: string | null
            tag: string
          }>
          link?: {
            __typename?: 'LinkRecord'
            id: string
            internalTitle: string
            externalUrl?: string | null
            page?: {
              __typename?: 'PageRecord'
              slug: string
              title: string
            } | null
          } | null
          persons: Array<{
            __typename?: 'PersonRecord'
            id: string
            name: string
            role: string
          }>
          locations: Array<{
            __typename?: 'LocationItemRecord'
            id: string
            dateTime: string
            location?: { __typename?: 'LocationRecord'; id: string } | null
          }>
          poster?: {
            __typename?: 'FileField'
            id: string
            alt?: string | null
            width?: number | null
            height?: number | null
            title?: string | null
            url: string
            colors: Array<{
              __typename?: 'ColorField'
              alpha: number
              blue: number
              cssRgb: string
              green: number
              hex: string
              red: number
            }>
            focalPoint?: {
              __typename?: 'focalPoint'
              x: number
              y: number
            } | null
            responsiveImage?: {
              __typename?: 'ResponsiveImage'
              title?: string | null
              alt?: string | null
              sizes: string
              aspectRatio: number
              bgColor?: string | null
              src: string
              height: number
              width: number
            } | null
            video?: {
              __typename?: 'UploadVideoField'
              mp4Url?: string | null
              muxAssetId: string
              muxPlaybackId: string
              streamingUrl: string
              thumbnailUrl: string
            } | null
          } | null
        }>
      }
    | {
        __typename?: 'ImageRecord'
        id: string
        item?: {
          __typename?: 'MediaItemRecord'
          id: string
          itemUrl?: string | null
          title: string
          item?: {
            __typename?: 'FileField'
            id: string
            alt?: string | null
            width?: number | null
            height?: number | null
            title?: string | null
            url: string
            colors: Array<{
              __typename?: 'ColorField'
              alpha: number
              blue: number
              cssRgb: string
              green: number
              hex: string
              red: number
            }>
            focalPoint?: {
              __typename?: 'focalPoint'
              x: number
              y: number
            } | null
            responsiveImage?: {
              __typename?: 'ResponsiveImage'
              title?: string | null
              alt?: string | null
              sizes: string
              aspectRatio: number
              bgColor?: string | null
              src: string
              height: number
              width: number
            } | null
            video?: {
              __typename?: 'UploadVideoField'
              mp4Url?: string | null
              muxAssetId: string
              muxPlaybackId: string
              streamingUrl: string
              thumbnailUrl: string
            } | null
          } | null
        } | null
      }
    | {
        __typename?: 'VideoRecord'
        id: string
        title: string
        media: {
          __typename?: 'VideoField'
          height: number
          provider: string
          providerUid: string
          thumbnailUrl: string
          title: string
          url: string
          width: number
        }
        thumbnail?: {
          __typename?: 'MediaItemRecord'
          id: string
          title: string
          itemUrl?: string | null
          item?: {
            __typename?: 'FileField'
            id: string
            alt?: string | null
            width?: number | null
            height?: number | null
            title?: string | null
            url: string
            colors: Array<{
              __typename?: 'ColorField'
              alpha: number
              blue: number
              cssRgb: string
              green: number
              hex: string
              red: number
            }>
            focalPoint?: {
              __typename?: 'focalPoint'
              x: number
              y: number
            } | null
            responsiveImage?: {
              __typename?: 'ResponsiveImage'
              title?: string | null
              alt?: string | null
              sizes: string
              aspectRatio: number
              bgColor?: string | null
              src: string
              height: number
              width: number
            } | null
            video?: {
              __typename?: 'UploadVideoField'
              mp4Url?: string | null
              muxAssetId: string
              muxPlaybackId: string
              streamingUrl: string
              thumbnailUrl: string
            } | null
          } | null
        } | null
      }
  >
}

export type VideoUploadFragment = {
  __typename?: 'UploadVideoField'
  mp4Url?: string | null
  muxAssetId: string
  muxPlaybackId: string
  streamingUrl: string
  thumbnailUrl: string
}

export type VideoRecordFragment = {
  __typename?: 'VideoRecord'
  id: string
  title: string
  media: {
    __typename?: 'VideoField'
    height: number
    provider: string
    providerUid: string
    thumbnailUrl: string
    title: string
    url: string
    width: number
  }
  thumbnail?: {
    __typename?: 'MediaItemRecord'
    id: string
    title: string
    itemUrl?: string | null
    item?: {
      __typename?: 'FileField'
      id: string
      alt?: string | null
      width?: number | null
      height?: number | null
      title?: string | null
      url: string
      colors: Array<{
        __typename?: 'ColorField'
        alpha: number
        blue: number
        cssRgb: string
        green: number
        hex: string
        red: number
      }>
      focalPoint?: { __typename?: 'focalPoint'; x: number; y: number } | null
      responsiveImage?: {
        __typename?: 'ResponsiveImage'
        title?: string | null
        alt?: string | null
        sizes: string
        aspectRatio: number
        bgColor?: string | null
        src: string
        height: number
        width: number
      } | null
      video?: {
        __typename?: 'UploadVideoField'
        mp4Url?: string | null
        muxAssetId: string
        muxPlaybackId: string
        streamingUrl: string
        thumbnailUrl: string
      } | null
    } | null
  } | null
}

export type VideoFieldFragment = {
  __typename?: 'VideoField'
  height: number
  provider: string
  providerUid: string
  thumbnailUrl: string
  title: string
  url: string
  width: number
}

export type GetAuthorQueryVariables = Exact<{
  id: Scalars['ItemId']['input']
}>

export type GetAuthorQuery = {
  __typename?: 'Query'
  person?: {
    __typename?: 'PersonRecord'
    id: string
    name: string
    role: string
  } | null
}

export type GetAuthorsQueryVariables = Exact<{
  first: Scalars['IntType']['input']
  skip: Scalars['IntType']['input']
  order?: InputMaybe<
    Array<InputMaybe<PersonModelOrderBy>> | InputMaybe<PersonModelOrderBy>
  >
}>

export type GetAuthorsQuery = {
  __typename?: 'Query'
  allPeople: Array<{
    __typename?: 'PersonRecord'
    id: string
    name: string
    role: string
  }>
}

export type GetConcertQueryVariables = Exact<{
  id: Scalars['ItemId']['input']
}>

export type GetConcertQuery = {
  __typename?: 'Query'
  concert?: {
    __typename?: 'ConcertRecord'
    id: string
    title: string
    link?: {
      __typename?: 'LinkRecord'
      _createdAt: string
      _firstPublishedAt?: string | null
      _publishedAt?: string | null
      _updatedAt: string
      id: string
    } | null
    locations: Array<{
      __typename?: 'LocationItemRecord'
      id: string
      dateTime: string
      location?: { __typename?: 'LocationRecord'; id: string } | null
    }>
    persons: Array<{
      __typename?: 'PersonRecord'
      id: string
      name: string
      role: string
    }>
    poster?: {
      __typename?: 'FileField'
      id: string
      alt?: string | null
      width?: number | null
      height?: number | null
      title?: string | null
      url: string
      colors: Array<{
        __typename?: 'ColorField'
        alpha: number
        blue: number
        cssRgb: string
        green: number
        hex: string
        red: number
      }>
      focalPoint?: { __typename?: 'focalPoint'; x: number; y: number } | null
      responsiveImage?: {
        __typename?: 'ResponsiveImage'
        title?: string | null
        alt?: string | null
        sizes: string
        aspectRatio: number
        bgColor?: string | null
        src: string
        height: number
        width: number
      } | null
      video?: {
        __typename?: 'UploadVideoField'
        mp4Url?: string | null
        muxAssetId: string
        muxPlaybackId: string
        streamingUrl: string
        thumbnailUrl: string
      } | null
    } | null
  } | null
}

export type GetConcertsQueryVariables = Exact<{
  skip: Scalars['IntType']['input']
  first: Scalars['IntType']['input']
  order?: InputMaybe<
    Array<InputMaybe<ConcertModelOrderBy>> | InputMaybe<ConcertModelOrderBy>
  >
}>

export type GetConcertsQuery = {
  __typename?: 'Query'
  allConcerts: Array<{
    __typename?: 'ConcertRecord'
    title: string
    _createdAt: string
    _firstPublishedAt?: string | null
    _publishedAt?: string | null
    _updatedAt: string
    id: string
    locations: Array<{
      __typename?: 'LocationItemRecord'
      id: string
      dateTime: string
      location?: { __typename?: 'LocationRecord'; id: string } | null
    }>
    poster?: {
      __typename?: 'FileField'
      id: string
      alt?: string | null
      width?: number | null
      height?: number | null
      title?: string | null
      url: string
      colors: Array<{
        __typename?: 'ColorField'
        alpha: number
        blue: number
        cssRgb: string
        green: number
        hex: string
        red: number
      }>
      focalPoint?: { __typename?: 'focalPoint'; x: number; y: number } | null
      responsiveImage?: {
        __typename?: 'ResponsiveImage'
        title?: string | null
        alt?: string | null
        sizes: string
        aspectRatio: number
        bgColor?: string | null
        src: string
        height: number
        width: number
      } | null
      video?: {
        __typename?: 'UploadVideoField'
        mp4Url?: string | null
        muxAssetId: string
        muxPlaybackId: string
        streamingUrl: string
        thumbnailUrl: string
      } | null
    } | null
  }>
}

export type GetGeneralInfoQueryVariables = Exact<{ [key: string]: never }>

export type GetGeneralInfoQuery = {
  __typename?: 'Query'
  general?: {
    __typename?: 'GeneralRecord'
    id: string
    title: string
    menu: Array<
      | {
          __typename?: 'MenuItemRecord'
          id: string
          label: string
          link?: {
            __typename?: 'PageRecord'
            slug: string
            title: string
          } | null
        }
      | {
          __typename?: 'SubmenuItemRecord'
          id: string
          label: string
          menu: Array<{
            __typename?: 'MenuItemRecord'
            id: string
            label: string
            link?: {
              __typename?: 'PageRecord'
              slug: string
              title: string
            } | null
          }>
        }
    >
    logo: {
      __typename?: 'FileField'
      id: string
      alt?: string | null
      width?: number | null
      height?: number | null
      title?: string | null
      url: string
      colors: Array<{
        __typename?: 'ColorField'
        alpha: number
        blue: number
        cssRgb: string
        green: number
        hex: string
        red: number
      }>
      focalPoint?: { __typename?: 'focalPoint'; x: number; y: number } | null
      responsiveImage?: {
        __typename?: 'ResponsiveImage'
        title?: string | null
        alt?: string | null
        sizes: string
        aspectRatio: number
        bgColor?: string | null
        src: string
        height: number
        width: number
      } | null
      video?: {
        __typename?: 'UploadVideoField'
        mp4Url?: string | null
        muxAssetId: string
        muxPlaybackId: string
        streamingUrl: string
        thumbnailUrl: string
      } | null
    }
  } | null
}

export type GetLocationQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ItemId']['input']>
}>

export type GetLocationQuery = {
  __typename?: 'Query'
  location?: {
    __typename?: 'LocationRecord'
    id: string
    title: string
    addressTitle: string
    address?: {
      __typename?: 'LatLonField'
      latitude: number
      longitude: number
    } | null
  } | null
}

export type GetLocationsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['IntType']['input']>
  skip?: InputMaybe<Scalars['IntType']['input']>
  order?: InputMaybe<
    Array<InputMaybe<LocationModelOrderBy>> | InputMaybe<LocationModelOrderBy>
  >
}>

export type GetLocationsQuery = {
  __typename?: 'Query'
  allLocations: Array<{
    __typename?: 'LocationRecord'
    id: string
    title: string
    addressTitle: string
    address?: {
      __typename?: 'LatLonField'
      latitude: number
      longitude: number
    } | null
  }>
}

export type GetPageQueryVariables = Exact<{
  slug: Scalars['String']['input']
}>

export type GetPageQuery = {
  __typename?: 'Query'
  page?: {
    __typename?: 'PageRecord'
    id: string
    title: string
    slug: string
    _createdAt: string
    _firstPublishedAt?: string | null
    _publishedAt?: string | null
    _updatedAt: string
    _seoMetaTags: Array<{
      __typename?: 'Tag'
      attributes?: Record<string, string> | null
      content?: string | null
      tag: string
    }>
    seo?: {
      __typename?: 'SeoField'
      description?: string | null
      title?: string | null
      twitterCard?: string | null
      image?: {
        __typename?: 'FileField'
        id: string
        alt?: string | null
        width?: number | null
        height?: number | null
        title?: string | null
        url: string
        colors: Array<{
          __typename?: 'ColorField'
          alpha: number
          blue: number
          cssRgb: string
          green: number
          hex: string
          red: number
        }>
        focalPoint?: { __typename?: 'focalPoint'; x: number; y: number } | null
        responsiveImage?: {
          __typename?: 'ResponsiveImage'
          title?: string | null
          alt?: string | null
          sizes: string
          aspectRatio: number
          bgColor?: string | null
          src: string
          height: number
          width: number
        } | null
        video?: {
          __typename?: 'UploadVideoField'
          mp4Url?: string | null
          muxAssetId: string
          muxPlaybackId: string
          streamingUrl: string
          thumbnailUrl: string
        } | null
      } | null
    } | null
    content: Array<
      | {
          __typename?: 'ConcertListRecord'
          showAllConcerts?: boolean | null
          _createdAt: string
          _firstPublishedAt?: string | null
          _publishedAt?: string | null
          _updatedAt: string
          id: string
          pinnedConcerts: Array<{
            __typename?: 'ConcertRecord'
            title: string
            _createdAt: string
            _firstPublishedAt?: string | null
            _publishedAt?: string | null
            _updatedAt: string
            id: string
            _seoMetaTags: Array<{
              __typename?: 'Tag'
              attributes?: Record<string, string> | null
              content?: string | null
              tag: string
            }>
            link?: {
              __typename?: 'LinkRecord'
              id: string
              internalTitle: string
              externalUrl?: string | null
              page?: {
                __typename?: 'PageRecord'
                slug: string
                title: string
              } | null
            } | null
            persons: Array<{
              __typename?: 'PersonRecord'
              id: string
              name: string
              role: string
            }>
            locations: Array<{
              __typename?: 'LocationItemRecord'
              id: string
              dateTime: string
              location?: { __typename?: 'LocationRecord'; id: string } | null
            }>
            poster?: {
              __typename?: 'FileField'
              id: string
              alt?: string | null
              width?: number | null
              height?: number | null
              title?: string | null
              url: string
              colors: Array<{
                __typename?: 'ColorField'
                alpha: number
                blue: number
                cssRgb: string
                green: number
                hex: string
                red: number
              }>
              focalPoint?: {
                __typename?: 'focalPoint'
                x: number
                y: number
              } | null
              responsiveImage?: {
                __typename?: 'ResponsiveImage'
                title?: string | null
                alt?: string | null
                sizes: string
                aspectRatio: number
                bgColor?: string | null
                src: string
                height: number
                width: number
              } | null
              video?: {
                __typename?: 'UploadVideoField'
                mp4Url?: string | null
                muxAssetId: string
                muxPlaybackId: string
                streamingUrl: string
                thumbnailUrl: string
              } | null
            } | null
          }>
        }
      | {
          __typename?: 'TextBlockRecord'
          _createdAt: string
          _firstPublishedAt?: string | null
          _publishedAt?: string | null
          _updatedAt: string
          id: string
          content?: {
            __typename?: 'TextBlockModelContentField'
            blocks: Array<
              | {
                  __typename?: 'ConcertListRecord'
                  showAllConcerts?: boolean | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                  pinnedConcerts: Array<{
                    __typename?: 'ConcertRecord'
                    title: string
                    _createdAt: string
                    _firstPublishedAt?: string | null
                    _publishedAt?: string | null
                    _updatedAt: string
                    id: string
                    _seoMetaTags: Array<{
                      __typename?: 'Tag'
                      attributes?: Record<string, string> | null
                      content?: string | null
                      tag: string
                    }>
                    link?: {
                      __typename?: 'LinkRecord'
                      id: string
                      internalTitle: string
                      externalUrl?: string | null
                      page?: {
                        __typename?: 'PageRecord'
                        slug: string
                        title: string
                      } | null
                    } | null
                    persons: Array<{
                      __typename?: 'PersonRecord'
                      id: string
                      name: string
                      role: string
                    }>
                    locations: Array<{
                      __typename?: 'LocationItemRecord'
                      id: string
                      dateTime: string
                      location?: {
                        __typename?: 'LocationRecord'
                        id: string
                      } | null
                    }>
                    poster?: {
                      __typename?: 'FileField'
                      id: string
                      alt?: string | null
                      width?: number | null
                      height?: number | null
                      title?: string | null
                      url: string
                      colors: Array<{
                        __typename?: 'ColorField'
                        alpha: number
                        blue: number
                        cssRgb: string
                        green: number
                        hex: string
                        red: number
                      }>
                      focalPoint?: {
                        __typename?: 'focalPoint'
                        x: number
                        y: number
                      } | null
                      responsiveImage?: {
                        __typename?: 'ResponsiveImage'
                        title?: string | null
                        alt?: string | null
                        sizes: string
                        aspectRatio: number
                        bgColor?: string | null
                        src: string
                        height: number
                        width: number
                      } | null
                      video?: {
                        __typename?: 'UploadVideoField'
                        mp4Url?: string | null
                        muxAssetId: string
                        muxPlaybackId: string
                        streamingUrl: string
                        thumbnailUrl: string
                      } | null
                    } | null
                  }>
                }
              | {
                  __typename?: 'ImageRecord'
                  id: string
                  item?: {
                    __typename?: 'MediaItemRecord'
                    id: string
                    itemUrl?: string | null
                    title: string
                    item?: {
                      __typename?: 'FileField'
                      id: string
                      alt?: string | null
                      width?: number | null
                      height?: number | null
                      title?: string | null
                      url: string
                      colors: Array<{
                        __typename?: 'ColorField'
                        alpha: number
                        blue: number
                        cssRgb: string
                        green: number
                        hex: string
                        red: number
                      }>
                      focalPoint?: {
                        __typename?: 'focalPoint'
                        x: number
                        y: number
                      } | null
                      responsiveImage?: {
                        __typename?: 'ResponsiveImage'
                        title?: string | null
                        alt?: string | null
                        sizes: string
                        aspectRatio: number
                        bgColor?: string | null
                        src: string
                        height: number
                        width: number
                      } | null
                      video?: {
                        __typename?: 'UploadVideoField'
                        mp4Url?: string | null
                        muxAssetId: string
                        muxPlaybackId: string
                        streamingUrl: string
                        thumbnailUrl: string
                      } | null
                    } | null
                  } | null
                }
              | {
                  __typename?: 'VideoRecord'
                  id: string
                  title: string
                  media: {
                    __typename?: 'VideoField'
                    height: number
                    provider: string
                    providerUid: string
                    thumbnailUrl: string
                    title: string
                    url: string
                    width: number
                  }
                  thumbnail?: {
                    __typename?: 'MediaItemRecord'
                    id: string
                    title: string
                    itemUrl?: string | null
                    item?: {
                      __typename?: 'FileField'
                      id: string
                      alt?: string | null
                      width?: number | null
                      height?: number | null
                      title?: string | null
                      url: string
                      colors: Array<{
                        __typename?: 'ColorField'
                        alpha: number
                        blue: number
                        cssRgb: string
                        green: number
                        hex: string
                        red: number
                      }>
                      focalPoint?: {
                        __typename?: 'focalPoint'
                        x: number
                        y: number
                      } | null
                      responsiveImage?: {
                        __typename?: 'ResponsiveImage'
                        title?: string | null
                        alt?: string | null
                        sizes: string
                        aspectRatio: number
                        bgColor?: string | null
                        src: string
                        height: number
                        width: number
                      } | null
                      video?: {
                        __typename?: 'UploadVideoField'
                        mp4Url?: string | null
                        muxAssetId: string
                        muxPlaybackId: string
                        streamingUrl: string
                        thumbnailUrl: string
                      } | null
                    } | null
                  } | null
                }
            >
          } | null
        }
      | {
          __typename?: 'TwoColumnRecord'
          _createdAt: string
          _firstPublishedAt?: string | null
          _publishedAt?: string | null
          _updatedAt: string
          id: string
          leftContent?: {
            __typename?: 'TwoColumnModelLeftContentField'
            blocks: Array<
              | {
                  __typename?: 'ConcertListRecord'
                  showAllConcerts?: boolean | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                  pinnedConcerts: Array<{
                    __typename?: 'ConcertRecord'
                    title: string
                    _createdAt: string
                    _firstPublishedAt?: string | null
                    _publishedAt?: string | null
                    _updatedAt: string
                    id: string
                    _seoMetaTags: Array<{
                      __typename?: 'Tag'
                      attributes?: Record<string, string> | null
                      content?: string | null
                      tag: string
                    }>
                    link?: {
                      __typename?: 'LinkRecord'
                      id: string
                      internalTitle: string
                      externalUrl?: string | null
                      page?: {
                        __typename?: 'PageRecord'
                        slug: string
                        title: string
                      } | null
                    } | null
                    persons: Array<{
                      __typename?: 'PersonRecord'
                      id: string
                      name: string
                      role: string
                    }>
                    locations: Array<{
                      __typename?: 'LocationItemRecord'
                      id: string
                      dateTime: string
                      location?: {
                        __typename?: 'LocationRecord'
                        id: string
                      } | null
                    }>
                    poster?: {
                      __typename?: 'FileField'
                      id: string
                      alt?: string | null
                      width?: number | null
                      height?: number | null
                      title?: string | null
                      url: string
                      colors: Array<{
                        __typename?: 'ColorField'
                        alpha: number
                        blue: number
                        cssRgb: string
                        green: number
                        hex: string
                        red: number
                      }>
                      focalPoint?: {
                        __typename?: 'focalPoint'
                        x: number
                        y: number
                      } | null
                      responsiveImage?: {
                        __typename?: 'ResponsiveImage'
                        title?: string | null
                        alt?: string | null
                        sizes: string
                        aspectRatio: number
                        bgColor?: string | null
                        src: string
                        height: number
                        width: number
                      } | null
                      video?: {
                        __typename?: 'UploadVideoField'
                        mp4Url?: string | null
                        muxAssetId: string
                        muxPlaybackId: string
                        streamingUrl: string
                        thumbnailUrl: string
                      } | null
                    } | null
                  }>
                }
              | {
                  __typename?: 'ImageRecord'
                  id: string
                  item?: {
                    __typename?: 'MediaItemRecord'
                    id: string
                    itemUrl?: string | null
                    title: string
                    item?: {
                      __typename?: 'FileField'
                      id: string
                      alt?: string | null
                      width?: number | null
                      height?: number | null
                      title?: string | null
                      url: string
                      colors: Array<{
                        __typename?: 'ColorField'
                        alpha: number
                        blue: number
                        cssRgb: string
                        green: number
                        hex: string
                        red: number
                      }>
                      focalPoint?: {
                        __typename?: 'focalPoint'
                        x: number
                        y: number
                      } | null
                      responsiveImage?: {
                        __typename?: 'ResponsiveImage'
                        title?: string | null
                        alt?: string | null
                        sizes: string
                        aspectRatio: number
                        bgColor?: string | null
                        src: string
                        height: number
                        width: number
                      } | null
                      video?: {
                        __typename?: 'UploadVideoField'
                        mp4Url?: string | null
                        muxAssetId: string
                        muxPlaybackId: string
                        streamingUrl: string
                        thumbnailUrl: string
                      } | null
                    } | null
                  } | null
                }
              | {
                  __typename?: 'VideoRecord'
                  id: string
                  title: string
                  media: {
                    __typename?: 'VideoField'
                    height: number
                    provider: string
                    providerUid: string
                    thumbnailUrl: string
                    title: string
                    url: string
                    width: number
                  }
                  thumbnail?: {
                    __typename?: 'MediaItemRecord'
                    id: string
                    title: string
                    itemUrl?: string | null
                    item?: {
                      __typename?: 'FileField'
                      id: string
                      alt?: string | null
                      width?: number | null
                      height?: number | null
                      title?: string | null
                      url: string
                      colors: Array<{
                        __typename?: 'ColorField'
                        alpha: number
                        blue: number
                        cssRgb: string
                        green: number
                        hex: string
                        red: number
                      }>
                      focalPoint?: {
                        __typename?: 'focalPoint'
                        x: number
                        y: number
                      } | null
                      responsiveImage?: {
                        __typename?: 'ResponsiveImage'
                        title?: string | null
                        alt?: string | null
                        sizes: string
                        aspectRatio: number
                        bgColor?: string | null
                        src: string
                        height: number
                        width: number
                      } | null
                      video?: {
                        __typename?: 'UploadVideoField'
                        mp4Url?: string | null
                        muxAssetId: string
                        muxPlaybackId: string
                        streamingUrl: string
                        thumbnailUrl: string
                      } | null
                    } | null
                  } | null
                }
            >
          } | null
          rightContent?: {
            __typename?: 'TwoColumnModelRightContentField'
            blocks: Array<
              | {
                  __typename?: 'ConcertListRecord'
                  showAllConcerts?: boolean | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                  pinnedConcerts: Array<{
                    __typename?: 'ConcertRecord'
                    title: string
                    _createdAt: string
                    _firstPublishedAt?: string | null
                    _publishedAt?: string | null
                    _updatedAt: string
                    id: string
                    _seoMetaTags: Array<{
                      __typename?: 'Tag'
                      attributes?: Record<string, string> | null
                      content?: string | null
                      tag: string
                    }>
                    link?: {
                      __typename?: 'LinkRecord'
                      id: string
                      internalTitle: string
                      externalUrl?: string | null
                      page?: {
                        __typename?: 'PageRecord'
                        slug: string
                        title: string
                      } | null
                    } | null
                    persons: Array<{
                      __typename?: 'PersonRecord'
                      id: string
                      name: string
                      role: string
                    }>
                    locations: Array<{
                      __typename?: 'LocationItemRecord'
                      id: string
                      dateTime: string
                      location?: {
                        __typename?: 'LocationRecord'
                        id: string
                      } | null
                    }>
                    poster?: {
                      __typename?: 'FileField'
                      id: string
                      alt?: string | null
                      width?: number | null
                      height?: number | null
                      title?: string | null
                      url: string
                      colors: Array<{
                        __typename?: 'ColorField'
                        alpha: number
                        blue: number
                        cssRgb: string
                        green: number
                        hex: string
                        red: number
                      }>
                      focalPoint?: {
                        __typename?: 'focalPoint'
                        x: number
                        y: number
                      } | null
                      responsiveImage?: {
                        __typename?: 'ResponsiveImage'
                        title?: string | null
                        alt?: string | null
                        sizes: string
                        aspectRatio: number
                        bgColor?: string | null
                        src: string
                        height: number
                        width: number
                      } | null
                      video?: {
                        __typename?: 'UploadVideoField'
                        mp4Url?: string | null
                        muxAssetId: string
                        muxPlaybackId: string
                        streamingUrl: string
                        thumbnailUrl: string
                      } | null
                    } | null
                  }>
                }
              | {
                  __typename?: 'ImageRecord'
                  id: string
                  item?: {
                    __typename?: 'MediaItemRecord'
                    id: string
                    itemUrl?: string | null
                    title: string
                    item?: {
                      __typename?: 'FileField'
                      id: string
                      alt?: string | null
                      width?: number | null
                      height?: number | null
                      title?: string | null
                      url: string
                      colors: Array<{
                        __typename?: 'ColorField'
                        alpha: number
                        blue: number
                        cssRgb: string
                        green: number
                        hex: string
                        red: number
                      }>
                      focalPoint?: {
                        __typename?: 'focalPoint'
                        x: number
                        y: number
                      } | null
                      responsiveImage?: {
                        __typename?: 'ResponsiveImage'
                        title?: string | null
                        alt?: string | null
                        sizes: string
                        aspectRatio: number
                        bgColor?: string | null
                        src: string
                        height: number
                        width: number
                      } | null
                      video?: {
                        __typename?: 'UploadVideoField'
                        mp4Url?: string | null
                        muxAssetId: string
                        muxPlaybackId: string
                        streamingUrl: string
                        thumbnailUrl: string
                      } | null
                    } | null
                  } | null
                }
              | {
                  __typename?: 'VideoRecord'
                  id: string
                  title: string
                  media: {
                    __typename?: 'VideoField'
                    height: number
                    provider: string
                    providerUid: string
                    thumbnailUrl: string
                    title: string
                    url: string
                    width: number
                  }
                  thumbnail?: {
                    __typename?: 'MediaItemRecord'
                    id: string
                    title: string
                    itemUrl?: string | null
                    item?: {
                      __typename?: 'FileField'
                      id: string
                      alt?: string | null
                      width?: number | null
                      height?: number | null
                      title?: string | null
                      url: string
                      colors: Array<{
                        __typename?: 'ColorField'
                        alpha: number
                        blue: number
                        cssRgb: string
                        green: number
                        hex: string
                        red: number
                      }>
                      focalPoint?: {
                        __typename?: 'focalPoint'
                        x: number
                        y: number
                      } | null
                      responsiveImage?: {
                        __typename?: 'ResponsiveImage'
                        title?: string | null
                        alt?: string | null
                        sizes: string
                        aspectRatio: number
                        bgColor?: string | null
                        src: string
                        height: number
                        width: number
                      } | null
                      video?: {
                        __typename?: 'UploadVideoField'
                        mp4Url?: string | null
                        muxAssetId: string
                        muxPlaybackId: string
                        streamingUrl: string
                        thumbnailUrl: string
                      } | null
                    } | null
                  } | null
                }
            >
          } | null
        }
    >
  } | null
}

export type GetPagesQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['IntType']['input']>
  first?: InputMaybe<Scalars['IntType']['input']>
  order?: InputMaybe<
    Array<InputMaybe<PageModelOrderBy>> | InputMaybe<PageModelOrderBy>
  >
}>

export type GetPagesQuery = {
  __typename?: 'Query'
  allPages: Array<{
    __typename?: 'PageRecord'
    title: string
    slug: string
    _createdAt: string
    _firstPublishedAt?: string | null
    _publishedAt?: string | null
    _updatedAt: string
    id: string
  }>
}

export type GetSiteInfoQueryVariables = Exact<{ [key: string]: never }>

export type GetSiteInfoQuery = {
  __typename?: 'Query'
  _site: {
    __typename?: 'Site'
    locales: Array<SiteLocale>
    globalSeo?: {
      __typename?: 'GlobalSeoField'
      facebookPageUrl?: string | null
      siteName?: string | null
      titleSuffix?: string | null
      twitterAccount?: string | null
      fallbackSeo?: {
        __typename?: 'SeoField'
        description?: string | null
        title?: string | null
        twitterCard?: string | null
        image?: {
          __typename?: 'FileField'
          id: string
          alt?: string | null
          width?: number | null
          height?: number | null
          title?: string | null
          url: string
          colors: Array<{
            __typename?: 'ColorField'
            alpha: number
            blue: number
            cssRgb: string
            green: number
            hex: string
            red: number
          }>
          focalPoint?: {
            __typename?: 'focalPoint'
            x: number
            y: number
          } | null
          responsiveImage?: {
            __typename?: 'ResponsiveImage'
            title?: string | null
            alt?: string | null
            sizes: string
            aspectRatio: number
            bgColor?: string | null
            src: string
            height: number
            width: number
          } | null
          video?: {
            __typename?: 'UploadVideoField'
            mp4Url?: string | null
            muxAssetId: string
            muxPlaybackId: string
            streamingUrl: string
            thumbnailUrl: string
          } | null
        } | null
      } | null
    } | null
  }
}

export type GetSpaceXQueryVariables = Exact<{ [key: string]: never }>

export type GetSpaceXQuery = {
  __typename?: 'Query'
  company?: {
    __typename?: 'Info'
    ceo?: string | null
    coo?: string | null
    cto?: string | null
    cto_propulsion?: string | null
    employees?: number | null
    founded?: number | null
    founder?: string | null
    launch_sites?: number | null
    name?: string | null
    summary?: string | null
    test_sites?: number | null
    vehicles?: number | null
  } | null
}

export const PageLinkFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageLink' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PageLinkFragment, unknown>
export const MenuItemFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'menuItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'MenuItemRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'label' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'link' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'pageLink' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageLink' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<MenuItemFragment, unknown>
export const SubmenuItemFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'submenuItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'SubmenuItemRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'label' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'menu' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'menuItem' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageLink' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'menuItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'MenuItemRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'label' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'link' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'pageLink' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SubmenuItemFragment, unknown>
export const ColorsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'colors' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ColorField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'alpha' } },
          { kind: 'Field', name: { kind: 'Name', value: 'blue' } },
          { kind: 'Field', name: { kind: 'Name', value: 'cssRgb' } },
          { kind: 'Field', name: { kind: 'Name', value: 'green' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hex' } },
          { kind: 'Field', name: { kind: 'Name', value: 'red' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ColorsFragment, unknown>
export const FocalPointFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'focalPoint' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'focalPoint' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'x' } },
          { kind: 'Field', name: { kind: 'Name', value: 'y' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FocalPointFragment, unknown>
export const ResponsiveImageFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'responsiveImage' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ResponsiveImage' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sizes' } },
          { kind: 'Field', name: { kind: 'Name', value: 'aspectRatio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bgColor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'src' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ResponsiveImageFragment, unknown>
export const VideoUploadFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'videoUpload' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UploadVideoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'mp4Url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxAssetId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxPlaybackId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streamingUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnailUrl' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<VideoUploadFragment, unknown>
export const FileFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'file' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'colors' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'colors' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'focalPoint' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'focalPoint' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'responsiveImage' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'responsiveImage' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'video' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'videoUpload' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'colors' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ColorField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'alpha' } },
          { kind: 'Field', name: { kind: 'Name', value: 'blue' } },
          { kind: 'Field', name: { kind: 'Name', value: 'cssRgb' } },
          { kind: 'Field', name: { kind: 'Name', value: 'green' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hex' } },
          { kind: 'Field', name: { kind: 'Name', value: 'red' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'focalPoint' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'focalPoint' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'x' } },
          { kind: 'Field', name: { kind: 'Name', value: 'y' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'responsiveImage' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ResponsiveImage' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sizes' } },
          { kind: 'Field', name: { kind: 'Name', value: 'aspectRatio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bgColor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'src' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'videoUpload' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UploadVideoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'mp4Url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxAssetId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxPlaybackId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streamingUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnailUrl' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FileFragment, unknown>
export const GeneralInfoFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'generalInfo' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'GeneralRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'menu' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'MenuItemRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'menuItem' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'SubmenuItemRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'submenuItem' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'logo' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'file' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageLink' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'menuItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'MenuItemRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'label' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'link' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'pageLink' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'colors' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ColorField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'alpha' } },
          { kind: 'Field', name: { kind: 'Name', value: 'blue' } },
          { kind: 'Field', name: { kind: 'Name', value: 'cssRgb' } },
          { kind: 'Field', name: { kind: 'Name', value: 'green' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hex' } },
          { kind: 'Field', name: { kind: 'Name', value: 'red' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'focalPoint' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'focalPoint' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'x' } },
          { kind: 'Field', name: { kind: 'Name', value: 'y' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'responsiveImage' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ResponsiveImage' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sizes' } },
          { kind: 'Field', name: { kind: 'Name', value: 'aspectRatio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bgColor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'src' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'videoUpload' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UploadVideoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'mp4Url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxAssetId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxPlaybackId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streamingUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnailUrl' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'submenuItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'SubmenuItemRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'label' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'menu' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'menuItem' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'file' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'colors' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'colors' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'focalPoint' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'focalPoint' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'responsiveImage' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'responsiveImage' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'video' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'videoUpload' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GeneralInfoFragment, unknown>
export const CoordinatesFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'coordinates' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'LatLonField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'latitude' } },
          { kind: 'Field', name: { kind: 'Name', value: 'longitude' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CoordinatesFragment, unknown>
export const LocationFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'location' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'LocationRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'addressTitle' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'address' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'coordinates' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'coordinates' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'LatLonField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'latitude' } },
          { kind: 'Field', name: { kind: 'Name', value: 'longitude' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<LocationFragment, unknown>
export const IdentifiableFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'identifiable' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'RecordInterface' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '_createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_firstPublishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<IdentifiableFragment, unknown>
export const TagFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'tag' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Tag' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'attributes' } },
          { kind: 'Field', name: { kind: 'Name', value: 'content' } },
          { kind: 'Field', name: { kind: 'Name', value: 'tag' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<TagFragment, unknown>
export const SeoFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'seo' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'SeoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'image' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'file' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'twitterCard' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'colors' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ColorField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'alpha' } },
          { kind: 'Field', name: { kind: 'Name', value: 'blue' } },
          { kind: 'Field', name: { kind: 'Name', value: 'cssRgb' } },
          { kind: 'Field', name: { kind: 'Name', value: 'green' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hex' } },
          { kind: 'Field', name: { kind: 'Name', value: 'red' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'focalPoint' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'focalPoint' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'x' } },
          { kind: 'Field', name: { kind: 'Name', value: 'y' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'responsiveImage' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ResponsiveImage' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sizes' } },
          { kind: 'Field', name: { kind: 'Name', value: 'aspectRatio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bgColor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'src' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'videoUpload' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UploadVideoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'mp4Url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxAssetId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxPlaybackId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streamingUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnailUrl' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'file' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'colors' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'colors' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'focalPoint' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'focalPoint' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'responsiveImage' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'responsiveImage' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'video' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'videoUpload' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SeoFragment, unknown>
export const PageFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'page' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: '_seoMetaTags' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'tag' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'seo' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'seo' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'content' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertListRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'TextBlockRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertListRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'colors' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ColorField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'alpha' } },
          { kind: 'Field', name: { kind: 'Name', value: 'blue' } },
          { kind: 'Field', name: { kind: 'Name', value: 'cssRgb' } },
          { kind: 'Field', name: { kind: 'Name', value: 'green' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hex' } },
          { kind: 'Field', name: { kind: 'Name', value: 'red' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'focalPoint' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'focalPoint' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'x' } },
          { kind: 'Field', name: { kind: 'Name', value: 'y' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'responsiveImage' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ResponsiveImage' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sizes' } },
          { kind: 'Field', name: { kind: 'Name', value: 'aspectRatio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bgColor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'src' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'videoUpload' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UploadVideoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'mp4Url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxAssetId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxPlaybackId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streamingUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnailUrl' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'file' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'colors' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'colors' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'focalPoint' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'focalPoint' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'responsiveImage' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'responsiveImage' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'video' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'videoUpload' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'identifiable' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'RecordInterface' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '_createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_firstPublishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'tag' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Tag' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'attributes' } },
          { kind: 'Field', name: { kind: 'Name', value: 'content' } },
          { kind: 'Field', name: { kind: 'Name', value: 'tag' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'seo' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'SeoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'image' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'file' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'twitterCard' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PageFragment, unknown>
export const LocationsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'locations' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'LocationItemRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dateTime' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'location' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<LocationsFragment, unknown>
export const EventMetadataFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'eventMetadata' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ConcertRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'locations' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'locations' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'poster' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'file' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'colors' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ColorField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'alpha' } },
          { kind: 'Field', name: { kind: 'Name', value: 'blue' } },
          { kind: 'Field', name: { kind: 'Name', value: 'cssRgb' } },
          { kind: 'Field', name: { kind: 'Name', value: 'green' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hex' } },
          { kind: 'Field', name: { kind: 'Name', value: 'red' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'focalPoint' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'focalPoint' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'x' } },
          { kind: 'Field', name: { kind: 'Name', value: 'y' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'responsiveImage' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ResponsiveImage' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sizes' } },
          { kind: 'Field', name: { kind: 'Name', value: 'aspectRatio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bgColor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'src' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'videoUpload' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UploadVideoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'mp4Url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxAssetId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxPlaybackId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streamingUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnailUrl' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'identifiable' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'RecordInterface' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '_createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_firstPublishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'locations' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'LocationItemRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dateTime' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'location' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'file' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'colors' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'colors' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'focalPoint' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'focalPoint' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'responsiveImage' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'responsiveImage' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'video' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'videoUpload' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<EventMetadataFragment, unknown>
export const LinkFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'link' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'LinkRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'internalTitle' } },
          { kind: 'Field', name: { kind: 'Name', value: 'externalUrl' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'page' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'pageLink' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageLink' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<LinkFragment, unknown>
export const AuthorFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'author' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PersonRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'role' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AuthorFragment, unknown>
export const EventFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'event' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ConcertRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'eventMetadata' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: '_seoMetaTags' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'tag' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'link' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'link' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'persons' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'author' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'identifiable' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'RecordInterface' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '_createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_firstPublishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'locations' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'LocationItemRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dateTime' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'location' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'colors' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ColorField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'alpha' } },
          { kind: 'Field', name: { kind: 'Name', value: 'blue' } },
          { kind: 'Field', name: { kind: 'Name', value: 'cssRgb' } },
          { kind: 'Field', name: { kind: 'Name', value: 'green' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hex' } },
          { kind: 'Field', name: { kind: 'Name', value: 'red' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'focalPoint' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'focalPoint' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'x' } },
          { kind: 'Field', name: { kind: 'Name', value: 'y' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'responsiveImage' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ResponsiveImage' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sizes' } },
          { kind: 'Field', name: { kind: 'Name', value: 'aspectRatio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bgColor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'src' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'videoUpload' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UploadVideoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'mp4Url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxAssetId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxPlaybackId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streamingUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnailUrl' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'file' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'colors' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'colors' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'focalPoint' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'focalPoint' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'responsiveImage' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'responsiveImage' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'video' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'videoUpload' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageLink' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'eventMetadata' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ConcertRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'locations' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'locations' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'poster' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'file' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'tag' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Tag' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'attributes' } },
          { kind: 'Field', name: { kind: 'Name', value: 'content' } },
          { kind: 'Field', name: { kind: 'Name', value: 'tag' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'link' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'LinkRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'internalTitle' } },
          { kind: 'Field', name: { kind: 'Name', value: 'externalUrl' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'page' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'pageLink' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'author' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PersonRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'role' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<EventFragment, unknown>
export const EventsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'events' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ConcertListRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'pinnedConcerts' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'event' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'showAllConcerts' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'identifiable' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'RecordInterface' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '_createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_firstPublishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'locations' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'LocationItemRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dateTime' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'location' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'colors' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ColorField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'alpha' } },
          { kind: 'Field', name: { kind: 'Name', value: 'blue' } },
          { kind: 'Field', name: { kind: 'Name', value: 'cssRgb' } },
          { kind: 'Field', name: { kind: 'Name', value: 'green' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hex' } },
          { kind: 'Field', name: { kind: 'Name', value: 'red' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'focalPoint' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'focalPoint' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'x' } },
          { kind: 'Field', name: { kind: 'Name', value: 'y' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'responsiveImage' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ResponsiveImage' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sizes' } },
          { kind: 'Field', name: { kind: 'Name', value: 'aspectRatio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bgColor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'src' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'videoUpload' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UploadVideoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'mp4Url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxAssetId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxPlaybackId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streamingUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnailUrl' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'file' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'colors' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'colors' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'focalPoint' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'focalPoint' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'responsiveImage' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'responsiveImage' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'video' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'videoUpload' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'eventMetadata' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ConcertRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'locations' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'locations' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'poster' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'file' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'tag' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Tag' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'attributes' } },
          { kind: 'Field', name: { kind: 'Name', value: 'content' } },
          { kind: 'Field', name: { kind: 'Name', value: 'tag' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageLink' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'link' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'LinkRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'internalTitle' } },
          { kind: 'Field', name: { kind: 'Name', value: 'externalUrl' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'page' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'pageLink' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'author' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PersonRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'role' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'event' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ConcertRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'eventMetadata' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: '_seoMetaTags' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'tag' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'link' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'link' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'persons' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'author' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<EventsFragment, unknown>
export const ImageFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'image' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ImageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'item' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'item' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'file' },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'itemUrl' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'colors' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ColorField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'alpha' } },
          { kind: 'Field', name: { kind: 'Name', value: 'blue' } },
          { kind: 'Field', name: { kind: 'Name', value: 'cssRgb' } },
          { kind: 'Field', name: { kind: 'Name', value: 'green' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hex' } },
          { kind: 'Field', name: { kind: 'Name', value: 'red' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'focalPoint' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'focalPoint' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'x' } },
          { kind: 'Field', name: { kind: 'Name', value: 'y' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'responsiveImage' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ResponsiveImage' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sizes' } },
          { kind: 'Field', name: { kind: 'Name', value: 'aspectRatio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bgColor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'src' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'videoUpload' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UploadVideoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'mp4Url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxAssetId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxPlaybackId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streamingUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnailUrl' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'file' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'colors' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'colors' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'focalPoint' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'focalPoint' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'responsiveImage' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'responsiveImage' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'video' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'videoUpload' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ImageFragment, unknown>
export const VideoFieldFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'videoField' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'VideoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'provider' } },
          { kind: 'Field', name: { kind: 'Name', value: 'providerUid' } },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnailUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<VideoFieldFragment, unknown>
export const MediaItemFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'mediaItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'MediaItemRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'item' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'file' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'itemUrl' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'colors' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ColorField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'alpha' } },
          { kind: 'Field', name: { kind: 'Name', value: 'blue' } },
          { kind: 'Field', name: { kind: 'Name', value: 'cssRgb' } },
          { kind: 'Field', name: { kind: 'Name', value: 'green' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hex' } },
          { kind: 'Field', name: { kind: 'Name', value: 'red' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'focalPoint' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'focalPoint' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'x' } },
          { kind: 'Field', name: { kind: 'Name', value: 'y' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'responsiveImage' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ResponsiveImage' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sizes' } },
          { kind: 'Field', name: { kind: 'Name', value: 'aspectRatio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bgColor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'src' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'videoUpload' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UploadVideoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'mp4Url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxAssetId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxPlaybackId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streamingUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnailUrl' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'file' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'colors' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'colors' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'focalPoint' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'focalPoint' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'responsiveImage' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'responsiveImage' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'video' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'videoUpload' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<MediaItemFragment, unknown>
export const VideoRecordFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'videoRecord' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'VideoRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'media' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'videoField' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'thumbnail' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'mediaItem' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'colors' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ColorField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'alpha' } },
          { kind: 'Field', name: { kind: 'Name', value: 'blue' } },
          { kind: 'Field', name: { kind: 'Name', value: 'cssRgb' } },
          { kind: 'Field', name: { kind: 'Name', value: 'green' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hex' } },
          { kind: 'Field', name: { kind: 'Name', value: 'red' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'focalPoint' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'focalPoint' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'x' } },
          { kind: 'Field', name: { kind: 'Name', value: 'y' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'responsiveImage' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ResponsiveImage' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sizes' } },
          { kind: 'Field', name: { kind: 'Name', value: 'aspectRatio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bgColor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'src' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'videoUpload' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UploadVideoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'mp4Url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxAssetId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxPlaybackId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streamingUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnailUrl' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'file' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'colors' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'colors' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'focalPoint' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'focalPoint' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'responsiveImage' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'responsiveImage' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'video' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'videoUpload' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'videoField' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'VideoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'provider' } },
          { kind: 'Field', name: { kind: 'Name', value: 'providerUid' } },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnailUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'mediaItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'MediaItemRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'item' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'file' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'itemUrl' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<VideoRecordFragment, unknown>
export const TextBlockFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'textBlock' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TextBlockModelContentField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'blocks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertListRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'events' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ImageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'image' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'VideoRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'videoRecord' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'identifiable' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'RecordInterface' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '_createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_firstPublishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'locations' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'LocationItemRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dateTime' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'location' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'colors' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ColorField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'alpha' } },
          { kind: 'Field', name: { kind: 'Name', value: 'blue' } },
          { kind: 'Field', name: { kind: 'Name', value: 'cssRgb' } },
          { kind: 'Field', name: { kind: 'Name', value: 'green' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hex' } },
          { kind: 'Field', name: { kind: 'Name', value: 'red' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'focalPoint' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'focalPoint' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'x' } },
          { kind: 'Field', name: { kind: 'Name', value: 'y' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'responsiveImage' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ResponsiveImage' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sizes' } },
          { kind: 'Field', name: { kind: 'Name', value: 'aspectRatio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bgColor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'src' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'videoUpload' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UploadVideoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'mp4Url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxAssetId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxPlaybackId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streamingUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnailUrl' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'file' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'colors' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'colors' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'focalPoint' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'focalPoint' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'responsiveImage' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'responsiveImage' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'video' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'videoUpload' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'eventMetadata' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ConcertRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'locations' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'locations' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'poster' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'file' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'tag' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Tag' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'attributes' } },
          { kind: 'Field', name: { kind: 'Name', value: 'content' } },
          { kind: 'Field', name: { kind: 'Name', value: 'tag' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageLink' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'link' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'LinkRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'internalTitle' } },
          { kind: 'Field', name: { kind: 'Name', value: 'externalUrl' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'page' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'pageLink' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'author' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PersonRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'role' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'event' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ConcertRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'eventMetadata' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: '_seoMetaTags' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'tag' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'link' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'link' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'persons' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'author' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'videoField' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'VideoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'provider' } },
          { kind: 'Field', name: { kind: 'Name', value: 'providerUid' } },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnailUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'mediaItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'MediaItemRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'item' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'file' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'itemUrl' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'events' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ConcertListRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'pinnedConcerts' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'event' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'showAllConcerts' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'image' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ImageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'item' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'item' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'file' },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'itemUrl' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'videoRecord' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'VideoRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'media' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'videoField' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'thumbnail' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'mediaItem' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<TextBlockFragment, unknown>
export const LeftContentFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'leftContent' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TwoColumnModelLeftContentField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'blocks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertListRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'events' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ImageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'image' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'VideoRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'videoRecord' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'identifiable' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'RecordInterface' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '_createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_firstPublishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'locations' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'LocationItemRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dateTime' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'location' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'colors' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ColorField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'alpha' } },
          { kind: 'Field', name: { kind: 'Name', value: 'blue' } },
          { kind: 'Field', name: { kind: 'Name', value: 'cssRgb' } },
          { kind: 'Field', name: { kind: 'Name', value: 'green' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hex' } },
          { kind: 'Field', name: { kind: 'Name', value: 'red' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'focalPoint' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'focalPoint' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'x' } },
          { kind: 'Field', name: { kind: 'Name', value: 'y' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'responsiveImage' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ResponsiveImage' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sizes' } },
          { kind: 'Field', name: { kind: 'Name', value: 'aspectRatio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bgColor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'src' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'videoUpload' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UploadVideoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'mp4Url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxAssetId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxPlaybackId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streamingUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnailUrl' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'file' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'colors' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'colors' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'focalPoint' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'focalPoint' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'responsiveImage' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'responsiveImage' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'video' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'videoUpload' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'eventMetadata' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ConcertRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'locations' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'locations' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'poster' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'file' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'tag' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Tag' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'attributes' } },
          { kind: 'Field', name: { kind: 'Name', value: 'content' } },
          { kind: 'Field', name: { kind: 'Name', value: 'tag' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageLink' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'link' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'LinkRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'internalTitle' } },
          { kind: 'Field', name: { kind: 'Name', value: 'externalUrl' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'page' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'pageLink' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'author' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PersonRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'role' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'event' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ConcertRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'eventMetadata' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: '_seoMetaTags' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'tag' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'link' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'link' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'persons' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'author' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'videoField' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'VideoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'provider' } },
          { kind: 'Field', name: { kind: 'Name', value: 'providerUid' } },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnailUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'mediaItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'MediaItemRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'item' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'file' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'itemUrl' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'events' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ConcertListRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'pinnedConcerts' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'event' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'showAllConcerts' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'image' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ImageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'item' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'item' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'file' },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'itemUrl' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'videoRecord' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'VideoRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'media' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'videoField' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'thumbnail' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'mediaItem' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<LeftContentFragment, unknown>
export const RightContentFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'rightContent' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TwoColumnModelRightContentField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'blocks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertListRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'events' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ImageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'image' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'VideoRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'videoRecord' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'identifiable' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'RecordInterface' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '_createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_firstPublishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'locations' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'LocationItemRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dateTime' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'location' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'colors' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ColorField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'alpha' } },
          { kind: 'Field', name: { kind: 'Name', value: 'blue' } },
          { kind: 'Field', name: { kind: 'Name', value: 'cssRgb' } },
          { kind: 'Field', name: { kind: 'Name', value: 'green' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hex' } },
          { kind: 'Field', name: { kind: 'Name', value: 'red' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'focalPoint' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'focalPoint' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'x' } },
          { kind: 'Field', name: { kind: 'Name', value: 'y' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'responsiveImage' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ResponsiveImage' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sizes' } },
          { kind: 'Field', name: { kind: 'Name', value: 'aspectRatio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bgColor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'src' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'videoUpload' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UploadVideoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'mp4Url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxAssetId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxPlaybackId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streamingUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnailUrl' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'file' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'colors' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'colors' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'focalPoint' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'focalPoint' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'responsiveImage' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'responsiveImage' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'video' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'videoUpload' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'eventMetadata' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ConcertRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'locations' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'locations' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'poster' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'file' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'tag' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Tag' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'attributes' } },
          { kind: 'Field', name: { kind: 'Name', value: 'content' } },
          { kind: 'Field', name: { kind: 'Name', value: 'tag' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageLink' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'link' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'LinkRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'internalTitle' } },
          { kind: 'Field', name: { kind: 'Name', value: 'externalUrl' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'page' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'pageLink' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'author' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PersonRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'role' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'event' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ConcertRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'eventMetadata' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: '_seoMetaTags' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'tag' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'link' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'link' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'persons' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'author' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'videoField' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'VideoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'provider' } },
          { kind: 'Field', name: { kind: 'Name', value: 'providerUid' } },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnailUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'mediaItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'MediaItemRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'item' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'file' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'itemUrl' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'events' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ConcertListRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'pinnedConcerts' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'event' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'showAllConcerts' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'image' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ImageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'item' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'item' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'file' },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'itemUrl' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'videoRecord' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'VideoRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'media' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'videoField' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'thumbnail' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'mediaItem' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<RightContentFragment, unknown>
export const PageDetailFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageDetail' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: '_seoMetaTags' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'tag' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'seo' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'seo' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'content' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertListRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'events' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'TextBlockRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'identifiable' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'content' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'textBlock' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'TwoColumnRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'identifiable' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'leftContent' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'leftContent' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'rightContent' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'rightContent' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'colors' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ColorField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'alpha' } },
          { kind: 'Field', name: { kind: 'Name', value: 'blue' } },
          { kind: 'Field', name: { kind: 'Name', value: 'cssRgb' } },
          { kind: 'Field', name: { kind: 'Name', value: 'green' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hex' } },
          { kind: 'Field', name: { kind: 'Name', value: 'red' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'focalPoint' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'focalPoint' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'x' } },
          { kind: 'Field', name: { kind: 'Name', value: 'y' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'responsiveImage' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ResponsiveImage' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sizes' } },
          { kind: 'Field', name: { kind: 'Name', value: 'aspectRatio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bgColor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'src' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'videoUpload' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UploadVideoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'mp4Url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxAssetId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxPlaybackId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streamingUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnailUrl' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'file' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'colors' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'colors' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'focalPoint' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'focalPoint' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'responsiveImage' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'responsiveImage' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'video' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'videoUpload' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'identifiable' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'RecordInterface' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '_createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_firstPublishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'locations' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'LocationItemRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dateTime' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'location' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'eventMetadata' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ConcertRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'locations' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'locations' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'poster' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'file' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'tag' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Tag' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'attributes' } },
          { kind: 'Field', name: { kind: 'Name', value: 'content' } },
          { kind: 'Field', name: { kind: 'Name', value: 'tag' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageLink' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'link' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'LinkRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'internalTitle' } },
          { kind: 'Field', name: { kind: 'Name', value: 'externalUrl' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'page' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'pageLink' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'author' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PersonRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'role' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'event' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ConcertRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'eventMetadata' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: '_seoMetaTags' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'tag' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'link' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'link' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'persons' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'author' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'events' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ConcertListRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'pinnedConcerts' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'event' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'showAllConcerts' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'image' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ImageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'item' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'item' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'file' },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'itemUrl' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'videoField' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'VideoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'provider' } },
          { kind: 'Field', name: { kind: 'Name', value: 'providerUid' } },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnailUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'mediaItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'MediaItemRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'item' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'file' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'itemUrl' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'videoRecord' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'VideoRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'media' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'videoField' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'thumbnail' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'mediaItem' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'seo' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'SeoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'image' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'file' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'twitterCard' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'textBlock' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TextBlockModelContentField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'blocks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertListRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'events' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ImageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'image' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'VideoRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'videoRecord' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'leftContent' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TwoColumnModelLeftContentField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'blocks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertListRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'events' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ImageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'image' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'VideoRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'videoRecord' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'rightContent' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TwoColumnModelRightContentField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'blocks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertListRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'events' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ImageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'image' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'VideoRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'videoRecord' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PageDetailFragment, unknown>
export const SeoSettingsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'seoSettings' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'GlobalSeoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'facebookPageUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'siteName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'titleSuffix' } },
          { kind: 'Field', name: { kind: 'Name', value: 'twitterAccount' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'fallbackSeo' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'seo' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'colors' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ColorField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'alpha' } },
          { kind: 'Field', name: { kind: 'Name', value: 'blue' } },
          { kind: 'Field', name: { kind: 'Name', value: 'cssRgb' } },
          { kind: 'Field', name: { kind: 'Name', value: 'green' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hex' } },
          { kind: 'Field', name: { kind: 'Name', value: 'red' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'focalPoint' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'focalPoint' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'x' } },
          { kind: 'Field', name: { kind: 'Name', value: 'y' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'responsiveImage' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ResponsiveImage' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sizes' } },
          { kind: 'Field', name: { kind: 'Name', value: 'aspectRatio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bgColor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'src' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'videoUpload' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UploadVideoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'mp4Url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxAssetId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxPlaybackId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streamingUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnailUrl' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'file' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'colors' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'colors' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'focalPoint' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'focalPoint' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'responsiveImage' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'responsiveImage' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'video' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'videoUpload' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'seo' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'SeoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'image' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'file' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'twitterCard' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SeoSettingsFragment, unknown>
export const GetAuthorDocument = {
  __meta__: { hash: '69626f7356ee243d0a13a9401b5f6cf5612460c0' },
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getAuthor' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ItemId' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'person' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'id' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'eq' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'id' },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'author' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'author' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PersonRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'role' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetAuthorQuery, GetAuthorQueryVariables>
export const GetAuthorsDocument = {
  __meta__: { hash: '7be73ead65e34e702ae1a288a1c5a6ce402d81b9' },
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getAuthors' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'first' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'IntType' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'skip' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'IntType' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'order' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'PersonModelOrderBy' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'allPeople' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'first' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'first' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'skip' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'skip' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'order' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'author' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'author' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PersonRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'role' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetAuthorsQuery, GetAuthorsQueryVariables>
export const GetConcertDocument = {
  __meta__: { hash: '0a46cd4e1416269864390ba6fbadc874c7b6a85b' },
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getConcert' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ItemId' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'concert' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'id' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'eq' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'id' },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'link' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'identifiable' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'locations' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'locations' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'persons' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'author' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'poster' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'file' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'colors' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ColorField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'alpha' } },
          { kind: 'Field', name: { kind: 'Name', value: 'blue' } },
          { kind: 'Field', name: { kind: 'Name', value: 'cssRgb' } },
          { kind: 'Field', name: { kind: 'Name', value: 'green' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hex' } },
          { kind: 'Field', name: { kind: 'Name', value: 'red' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'focalPoint' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'focalPoint' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'x' } },
          { kind: 'Field', name: { kind: 'Name', value: 'y' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'responsiveImage' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ResponsiveImage' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sizes' } },
          { kind: 'Field', name: { kind: 'Name', value: 'aspectRatio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bgColor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'src' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'videoUpload' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UploadVideoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'mp4Url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxAssetId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxPlaybackId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streamingUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnailUrl' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'identifiable' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'RecordInterface' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '_createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_firstPublishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'locations' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'LocationItemRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dateTime' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'location' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'author' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PersonRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'role' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'file' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'colors' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'colors' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'focalPoint' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'focalPoint' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'responsiveImage' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'responsiveImage' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'video' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'videoUpload' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetConcertQuery, GetConcertQueryVariables>
export const GetConcertsDocument = {
  __meta__: { hash: '2c6decb9d9a79f7fe26fdc80852b4064666f5697' },
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getConcerts' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'skip' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'IntType' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'first' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'IntType' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'order' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ConcertModelOrderBy' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'allConcerts' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'first' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'first' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'skip' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'skip' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'order' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'eventMetadata' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'identifiable' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'RecordInterface' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '_createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_firstPublishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'locations' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'LocationItemRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dateTime' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'location' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'colors' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ColorField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'alpha' } },
          { kind: 'Field', name: { kind: 'Name', value: 'blue' } },
          { kind: 'Field', name: { kind: 'Name', value: 'cssRgb' } },
          { kind: 'Field', name: { kind: 'Name', value: 'green' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hex' } },
          { kind: 'Field', name: { kind: 'Name', value: 'red' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'focalPoint' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'focalPoint' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'x' } },
          { kind: 'Field', name: { kind: 'Name', value: 'y' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'responsiveImage' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ResponsiveImage' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sizes' } },
          { kind: 'Field', name: { kind: 'Name', value: 'aspectRatio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bgColor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'src' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'videoUpload' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UploadVideoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'mp4Url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxAssetId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxPlaybackId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streamingUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnailUrl' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'file' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'colors' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'colors' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'focalPoint' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'focalPoint' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'responsiveImage' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'responsiveImage' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'video' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'videoUpload' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'eventMetadata' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ConcertRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'locations' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'locations' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'poster' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'file' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetConcertsQuery, GetConcertsQueryVariables>
export const GetGeneralInfoDocument = {
  __meta__: { hash: 'b3bf80e413036ba0e4f097f5dc3fc4fbdb3b44c5' },
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getGeneralInfo' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'general' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'generalInfo' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageLink' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'menuItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'MenuItemRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'label' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'link' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'pageLink' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'submenuItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'SubmenuItemRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'label' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'menu' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'menuItem' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'colors' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ColorField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'alpha' } },
          { kind: 'Field', name: { kind: 'Name', value: 'blue' } },
          { kind: 'Field', name: { kind: 'Name', value: 'cssRgb' } },
          { kind: 'Field', name: { kind: 'Name', value: 'green' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hex' } },
          { kind: 'Field', name: { kind: 'Name', value: 'red' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'focalPoint' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'focalPoint' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'x' } },
          { kind: 'Field', name: { kind: 'Name', value: 'y' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'responsiveImage' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ResponsiveImage' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sizes' } },
          { kind: 'Field', name: { kind: 'Name', value: 'aspectRatio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bgColor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'src' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'videoUpload' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UploadVideoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'mp4Url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxAssetId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxPlaybackId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streamingUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnailUrl' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'file' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'colors' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'colors' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'focalPoint' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'focalPoint' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'responsiveImage' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'responsiveImage' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'video' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'videoUpload' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'generalInfo' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'GeneralRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'menu' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'MenuItemRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'menuItem' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'SubmenuItemRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'submenuItem' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'logo' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'file' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetGeneralInfoQuery, GetGeneralInfoQueryVariables>
export const GetLocationDocument = {
  __meta__: { hash: '2988170369bdd85ab11bab2716b98046fd98ab77' },
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getLocation' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'ItemId' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'location' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'id' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'eq' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'id' },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'location' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'coordinates' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'LatLonField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'latitude' } },
          { kind: 'Field', name: { kind: 'Name', value: 'longitude' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'location' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'LocationRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'addressTitle' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'address' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'coordinates' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetLocationQuery, GetLocationQueryVariables>
export const GetLocationsDocument = {
  __meta__: { hash: 'a59c400e602ddb912052c3ea8dea546d27cc8bca' },
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getLocations' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'first' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'IntType' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'skip' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'IntType' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'order' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'LocationModelOrderBy' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'allLocations' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'first' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'first' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'skip' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'skip' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'order' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'location' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'coordinates' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'LatLonField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'latitude' } },
          { kind: 'Field', name: { kind: 'Name', value: 'longitude' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'location' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'LocationRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'addressTitle' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'address' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'coordinates' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetLocationsQuery, GetLocationsQueryVariables>
export const GetPageDocument = {
  __meta__: { hash: '087dea3784773a36661978581686a05aee2f04a7' },
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getPage' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'slug' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'page' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'slug' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'eq' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'slug' },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'pageDetail' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'identifiable' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'RecordInterface' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '_createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_firstPublishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'tag' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Tag' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'attributes' } },
          { kind: 'Field', name: { kind: 'Name', value: 'content' } },
          { kind: 'Field', name: { kind: 'Name', value: 'tag' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'colors' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ColorField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'alpha' } },
          { kind: 'Field', name: { kind: 'Name', value: 'blue' } },
          { kind: 'Field', name: { kind: 'Name', value: 'cssRgb' } },
          { kind: 'Field', name: { kind: 'Name', value: 'green' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hex' } },
          { kind: 'Field', name: { kind: 'Name', value: 'red' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'focalPoint' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'focalPoint' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'x' } },
          { kind: 'Field', name: { kind: 'Name', value: 'y' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'responsiveImage' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ResponsiveImage' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sizes' } },
          { kind: 'Field', name: { kind: 'Name', value: 'aspectRatio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bgColor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'src' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'videoUpload' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UploadVideoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'mp4Url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxAssetId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxPlaybackId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streamingUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnailUrl' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'file' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'colors' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'colors' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'focalPoint' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'focalPoint' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'responsiveImage' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'responsiveImage' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'video' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'videoUpload' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'seo' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'SeoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'image' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'file' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'twitterCard' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'locations' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'LocationItemRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dateTime' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'location' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'eventMetadata' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ConcertRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'locations' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'locations' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'poster' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'file' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageLink' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'link' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'LinkRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'internalTitle' } },
          { kind: 'Field', name: { kind: 'Name', value: 'externalUrl' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'page' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'pageLink' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'author' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PersonRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'role' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'event' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ConcertRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'eventMetadata' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: '_seoMetaTags' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'tag' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'link' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'link' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'persons' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'author' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'events' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ConcertListRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'pinnedConcerts' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'event' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'showAllConcerts' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'image' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ImageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'item' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'item' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'file' },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'itemUrl' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'videoField' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'VideoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'provider' } },
          { kind: 'Field', name: { kind: 'Name', value: 'providerUid' } },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnailUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'mediaItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'MediaItemRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'item' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'file' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'itemUrl' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'videoRecord' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'VideoRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'media' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'videoField' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'thumbnail' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'mediaItem' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'textBlock' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TextBlockModelContentField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'blocks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertListRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'events' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ImageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'image' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'VideoRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'videoRecord' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'leftContent' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TwoColumnModelLeftContentField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'blocks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertListRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'events' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ImageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'image' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'VideoRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'videoRecord' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'rightContent' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TwoColumnModelRightContentField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'blocks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertListRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'events' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ImageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'image' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'VideoRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'videoRecord' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageDetail' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: '_seoMetaTags' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'tag' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'seo' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'seo' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'content' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertListRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'events' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'TextBlockRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'identifiable' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'content' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'textBlock' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'TwoColumnRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'identifiable' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'leftContent' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'leftContent' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'rightContent' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'rightContent' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetPageQuery, GetPageQueryVariables>
export const GetPagesDocument = {
  __meta__: { hash: '1a418a36e7f75a4e1fcacabf13dcf550aae1b882' },
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getPages' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'skip' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'IntType' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'first' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'IntType' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'order' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'PageModelOrderBy' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'allPages' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'first' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'first' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'skip' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'skip' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'order' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'identifiable' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'identifiable' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'RecordInterface' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '_createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_firstPublishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetPagesQuery, GetPagesQueryVariables>
export const GetSiteInfoDocument = {
  __meta__: { hash: 'f08f6fd3eded3e49d9be4a4d01fa6fad3a406f43' },
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getSiteInfo' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: '_site' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'locales' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'globalSeo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'seoSettings' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'colors' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ColorField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'alpha' } },
          { kind: 'Field', name: { kind: 'Name', value: 'blue' } },
          { kind: 'Field', name: { kind: 'Name', value: 'cssRgb' } },
          { kind: 'Field', name: { kind: 'Name', value: 'green' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hex' } },
          { kind: 'Field', name: { kind: 'Name', value: 'red' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'focalPoint' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'focalPoint' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'x' } },
          { kind: 'Field', name: { kind: 'Name', value: 'y' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'responsiveImage' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ResponsiveImage' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sizes' } },
          { kind: 'Field', name: { kind: 'Name', value: 'aspectRatio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bgColor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'src' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'videoUpload' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UploadVideoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'mp4Url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxAssetId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxPlaybackId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streamingUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnailUrl' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'file' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'colors' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'colors' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'focalPoint' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'focalPoint' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'responsiveImage' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'responsiveImage' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'video' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'videoUpload' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'seo' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'SeoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'image' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'file' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'twitterCard' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'seoSettings' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'GlobalSeoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'facebookPageUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'siteName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'titleSuffix' } },
          { kind: 'Field', name: { kind: 'Name', value: 'twitterAccount' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'fallbackSeo' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'seo' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetSiteInfoQuery, GetSiteInfoQueryVariables>
export const GetSpaceXDocument = {
  __meta__: { hash: '90781f287233fb210a4c249f4617c608228ba25f' },
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetSpaceX' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'company' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'ceo' } },
                { kind: 'Field', name: { kind: 'Name', value: 'coo' } },
                { kind: 'Field', name: { kind: 'Name', value: 'cto' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'cto_propulsion' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'employees' } },
                { kind: 'Field', name: { kind: 'Name', value: 'founded' } },
                { kind: 'Field', name: { kind: 'Name', value: 'founder' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'launch_sites' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'summary' } },
                { kind: 'Field', name: { kind: 'Name', value: 'test_sites' } },
                { kind: 'Field', name: { kind: 'Name', value: 'vehicles' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetSpaceXQuery, GetSpaceXQueryVariables>
