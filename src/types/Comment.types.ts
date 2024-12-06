import {StaticImageData} from "next/image";

export type CommentType = {
    image: StaticImageData,
    name: string,
    work: string,
    date: string,
    comment: string,
}