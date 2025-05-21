export interface Category {
  id: number
  name: string
  key: string
  color: string
}

export interface OpenLesson {
  id: number
  format: string
  practical: boolean
  date: string
  time: string
}

export interface Group {
  id: number
  format: string
  start_date: string
  study_time: string
  days: number[]
}

export interface Launch {
  id: number
  name: string
  slug: string
  ads_banner: string
  categories: Category[]
  open_lessons: OpenLesson[]
  groups: Group[]
}
