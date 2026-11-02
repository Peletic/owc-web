import {BlogPost} from "@/features/blog";
import clsx from "clsx";
import Image from "next/image";

export default function BlogEntry({post, className}: { post: BlogPost, className?: string }) {
    const date = new Date(post.date)
    const href = `/blog/${post.id}`
    return (
        <div className={clsx(className, "w-[16rem] h-[26rem] flex flex-col bg-foreground justify-between rounded outline")}>
            <a className={"w-[16rem] h-[16rem] border-b"} href={href}>
                <Image src={`/${post.thumbnail}`} alt={""} width={300} height={300} className={"h-full w-auto object-cover rounded-t"} />
            </a>
            <div
                className={"w-[16rem] h-[10rem] bg-background text-lg flex flex-col items-start px-[1rem] py-[1rem] gap-2"}>
                <div className={"w-max h-max bg-foreground/40 p-[0.5rem] rounded text-sm hover:cursor-default"}>
                    <span>{`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`}</span>
                </div>
                <div className={"w-[14rem] h-max"}>
                    <a href={href}>{post.title}</a>
                </div>
                <div className={"w-[14rem] h-max text-sm hover:cursor-default"}>
                    <span>{post.description}</span>
                </div>
                <div>

                </div>
            </div>

        </div>
    )
}