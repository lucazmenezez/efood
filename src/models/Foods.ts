class Foods {
  image: string
  tags?: string[]
  title: string
  reviews?: number
  description: string
  id: number

  constructor(
    image: string,
    tags: string[],
    title: string,
    reviews: number,
    description: string,
    id: number
  ) {
    this.image = image
    this.tags = tags
    this.title = title
    this.reviews = reviews
    this.description = description
    this.id = id
  }
}

export default Foods
