import { ReactNode } from "react"
import Image from 'next/image';

type SvgBtnProps = {
    children: ReactNode;
    bgColorClass: string
}

export function SvgBtn({ children, bgColorClass }: SvgBtnProps) {
    return (
        <button className={`h-12 w-12 flex justify-center items-center focus:outline-none rounded-half bg-gray-700 ${bgColorClass} group hover:rounded-2xl transition-rounded_colors`}>{children}</button>
    )
}

type ImgBtnProps = {
    imgPath: string;
}

export function ImgBtn({ imgPath }: ImgBtnProps) {
    return (
        <button className={`h-12 w-12 flex justify-center items-center relative overflow-hidden focus:outline-none rounded-half ${/*bgColorClass*/ ''} group hover:rounded-2xl transition-rounded_colors`}>
            <Image src={imgPath} layout="fill" />
        </button>
    )
}