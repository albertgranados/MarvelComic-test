export interface ComicLibrary {
  code: number
  status: string
  copyright: string
  attributionText: string
  attributionHTML: string
  etag: string
  data: Data
}

export interface Data {
  offset: number
  limit: number
  total: number
  count: number
  results: Result[]
}

export interface Result {
  id: number
  digitalId: number
  title: string
  issueNumber: number
  variantDescription: string
  description: null
  modified: string
  isbn: string
  upc: string
  diamondCode: string
  ean: string
  issn: string
  format: Format
  pageCount: number
  textObjects: any[]
  resourceURI: string
  urls: URL[]
  series: Series
  variants: any[]
  collections: any[]
  collectedIssues: any[]
  dates: DateElement[]
  prices: Price[]
  thumbnail: Thumbnail
  images: Thumbnail[]
  creators: Characters
  characters: Characters
  stories: Characters
  events: Characters
}

export interface Characters {
  available: number
  collectionURI: string
  items: Item[]
  returned: number
}

export interface Item {
  resourceURI: string
  name: string
  role?: Role
  type?: ItemType
}

export enum Role {
  Colorist = 'colorist',
  ColoristCover = 'colorist (cover)',
  Editor = 'editor',
  Inker = 'inker',
  InkerCover = 'inker (cover)',
  Letterer = 'letterer',
  Penciler = 'penciler',
  PencilerCover = 'penciler (cover)',
  Writer = 'writer'
}

export enum ItemType {
  Cover = 'cover',
  InteriorStory = 'interiorStory'
}

export interface DateElement {
  type: DateType
  date: string
}

export enum DateType {
  DigitalPurchaseDate = 'digitalPurchaseDate',
  FocDate = 'focDate',
  OnsaleDate = 'onsaleDate',
  UnlimitedDate = 'unlimitedDate'
}

export enum Format {
  Comic = 'Comic'
}

export interface Thumbnail {
  path: string
  extension: Extension
}

export enum Extension {
  Jpg = 'jpg'
}

export interface Price {
  type: PriceType
  price: number
}

export enum PriceType {
  PrintPrice = 'printPrice'
}

export interface Series {
  resourceURI: string
  name: string
}

export interface URL {
  type: URLType
  url: string
}

export enum URLType {
  Detail = 'detail',
  Purchase = 'purchase',
  Reader = 'reader'
}
