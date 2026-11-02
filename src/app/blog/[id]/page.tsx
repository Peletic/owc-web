'use server'
import Navbar from "@/components/Navbar";
import * as fs from "node:fs";
import path from "node:path";
import {BlogPost} from "@/features/blog";

export default async function Post({params}: { params: Promise<{ id: string }> }) {
    const {id} = await params
    const data = BlogPost.from(JSON.parse(fs.readFileSync(path.join(process.cwd(), "blog", `${id}.json`)).toString()));

    return (
        <div className={"flex flex-col items-center min-h-full"}>
            <Navbar/>
            <div className={"flex mt-[6rem] h-[6rem] max-w-[64rem] w-3/5 drop-shadow items-center"}>
                <h1 className={"text-6xl font-bold text-foreground"}>
                    {data.title}
                </h1>
            </div>
        </div>
    )
}