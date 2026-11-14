'use server'
import Navbar from "@/components/Navbar";
import fs from "node:fs";
import {EventDetails, EVENTS_DIR_PATH} from "@/features";
import path from "node:path";

const events = fs.readdirSync(EVENTS_DIR_PATH).map((filename: string) => EventDetails.from(JSON.parse(fs.readFileSync(path.join(EVENTS_DIR_PATH, filename)).toString())));

export default async function Events() {
    return (
        <div className={"flex flex-col items-center min-h-full"}>
            <Navbar/>
            <div className={"flex-col mt-[6rem]"}>
                <div>
                    <h1>Events</h1>
                </div>
                <div>
                     <div>
                         <span>Upcoming Events</span>
                     </div>
                    <div>

                    </div>
                </div>
                <div>
                     <div>
                         <span>Previous Events</span>
                     </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}