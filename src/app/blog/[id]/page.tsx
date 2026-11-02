import Navbar from "@/components/Navbar";

export default function BlogPost() {
    return (
        <div className={"flex flex-col items-center min-h-full"}>
            <Navbar/>
            <div className={"flex mt-[6rem] h-[6rem] max-w-[64rem] w-3/5 drop-shadow items-center"}>
                <h1 className={"text-6xl font-bold text-foreground"}>
                    Our Blog
                </h1>
            </div>
        </div>
    )
}