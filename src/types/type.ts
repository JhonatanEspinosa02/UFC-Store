
export type CategoryType = {
    id: number,
    name: string,
    image: string,
    description: string,
    price: number
}

export type categoryLink = Pick<CategoryType, 'id' | 'name'> & {
    href: string
}

export type TitleAndParagraph = {
    title: string,
    paragraph: string
}

