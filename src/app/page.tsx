import Navbar from "@/components/Navbar";
import homeBg from "@/images/IMG_1506.jpeg"
import img1 from "@/images/IMG_1501.jpeg"
import img2 from "@/images/IMG_1511.jpeg"
import img3 from "@/images/IMG_1513.jpeg"
import img4 from "@/images/IMG_1518.jpeg"
import img5 from "@/images/IMG_1532.jpeg"
import ImageCarousel from "@/components/ImageCarousel";



export default function Home() {
    return (
        <div className={"flex flex-col items-center"}>
            <Navbar/>
            <div className={"flex-col mt-[6rem]"}>
                <div className={"h-[36rem] w-full grid grid-cols-1 grid-rows-1"}>
                    <div className={"w-full flex text-[4rem] items-center justify-center row-start-1 col-start-1 z-10 text-gray-100 bg-black/20 pointer-events-none text-center"}>
                        <span>Outdoor Walking Club</span>
                    </div>
                    <div className={"h-[36rem] w-full object-cover row-start-1 col-start-1 justify-center flex items-center border-2 rounded overflow-clip"}>
                        <ImageCarousel images={[homeBg, img1, img2, img3, img4, img5]} className={""}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
