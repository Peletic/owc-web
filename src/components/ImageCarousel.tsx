import {StaticImport} from "next/dist/shared/lib/get-img-props";
import clsx from "clsx";
import Image from "next/image";

export default function ImageCarousel({images, className}: { images: StaticImport[], className?: string }) {
    return (
        <div className={clsx("w-max h-full flex flex-row justify-start group", className)}>
            <div
                className={"h-full w-max flex flex-row overflow-y-clip object-contain animate-slide pause-animation group-hover:play-animation"}>
                {images.map((image, i) => (
                    <Image key={i} className={"w-auto h-full object-contain"} src={image} alt={""} quality={100} loading={"eager"}/>))}
            </div>
            <div aria-hidden={"true"}
                 className={"h-full w-max flex flex-row overflow-y-clip object-contain animate-slide pause-animation group-hover:play-animation"}>
                {images.map((image, i) => (
                    <Image key={i} className={"w-auto h-full object-contain"} src={image} alt={""} quality={100} loading={"eager"}/>))}
            </div>
        </div>
    )
}