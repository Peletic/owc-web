import Navbar from "@/components/Navbar";
import {BlogPost} from "@/features/blog";
import BlogEntry from "@/components/BlogEntry";

const testPost = new BlogPost({
    title: 'This is a Test Title',
    contents: 'test',
    date: Date.now(),
    description: "test desc",
    id: "111",
    thumbnail: "IMG_1501.jpeg"
});

export default function Blog() {
    return (
        <div className={"flex flex-col items-center min-h-full"}>
            <Navbar/>
            <div className={"flex mt-[6rem] h-[6rem] max-w-[64rem] w-3/5 drop-shadow items-center"}>
                <h1 className={"text-6xl font-bold text-foreground"}>
                    Our Blog
                </h1>
            </div>
            <div className={"flex flex-row flex-wrap mt-[6rem] max-w-[64rem] w-3/5 gap-[4rem] justify-start "}>
                <BlogEntry post={testPost}/>
                <BlogEntry post={testPost}/>
                <BlogEntry post={testPost}/>
                <BlogEntry post={testPost}/>
            </div>
        </div>
    )
}