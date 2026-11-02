import NavbarPage from "@/components/NavbarPage";

export default function Navbar() {
    return (
        <div className="w-full fixed z-50 border-b flex flex-row justify-between h-[4rem] bg-background">
            <div className="flex flex-row items-center h-[4rem] px-4">
                <h1 className={"text-lg hover:cursor-default"}>Outdoor Walking Club</h1>
            </div>
            <div className="flex flex-row justify-between w-[15rem] px-4">
                <NavbarPage pageName={"Home"} href={"/"}/>
                <NavbarPage pageName={"About"} href={"/about"}/>
                <NavbarPage pageName={"Blog"} href={"/blog"}/>
                <NavbarPage pageName={"Events"} href={"/events"}/>
            </div>
        </div>
    )
}