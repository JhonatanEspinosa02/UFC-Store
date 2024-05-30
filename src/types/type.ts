
export type CategoryType = {
    id: number,
    name: string,
    image: string,
    description: string,
    price: number
}

export type categoryLink = Pick<CategoryType, 'name'> & {
    href: string
}

