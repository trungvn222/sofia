import IProductGallery from './IProductGallery';

export default interface IProduct {
    id: number,
    title: string,
    slug: string,
    thumbUrl: string,
    cats: Array<number>,
    featured: boolean,
    gallery:Array<IProductGallery> | [],
    content: string
}