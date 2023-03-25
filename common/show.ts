export interface Show {
  id?: number
  name: string
  host: string
  img: string
  genre: string
  description: string
}

export interface DetailedShow extends Show {
  tracklist: string
  resource: string
}
