// components/Education.tsx

import ShinyText from "../ShinyText";
// import { Link } from 'react-router-dom';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    TimelineSteps,
    TimelineStepsConnector,
    TimelineStepsContent,
    TimelineStepsDescription,
    TimelineStepsHeader,
    TimelineStepsIcon,
    TimelineStepsItem,
    TimelineStepsTime,
    TimelineStepsTitle,
} from "@/components/ui/timeline-steps"

export default function Education() {

    return (
        <section className="py-12 px-6 bg-linear-to-b from-black to-[#161921]">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-8">
                    <ShinyText
                        text="Education"
                        disabled={false}
                        speed={3}
                        className="text-4xl font-bold"
                    />
                </div>

                <div className="flex justify-center gap-14">
                    <TimelineSteps>
                        <TimelineStepsItem>
                            <TimelineStepsConnector />
                            <TimelineStepsHeader>
                                <TimelineStepsIcon className="overflow-hidden p-0">
                                    <Avatar className="size-full">
                                        <AvatarImage src="src/assets/uj-logo.png" alt="@shadcn" />
                                        <AvatarFallback>UJ</AvatarFallback>
                                    </Avatar>
                                </TimelineStepsIcon>
                                <div className="flex flex-col gap-0.5">
                                    <TimelineStepsTitle className="text-2xl text-white font-bold">
                                        {/* <ShinyText
                                            text="University of Johannesburg"
                                            disabled={false}
                                            speed={3}
                                            className="text-2xl font-bold"
                                        /> */}
                                        <h3>University of Johannesburg</h3>
                                    </TimelineStepsTitle>
                                    <TimelineStepsTime >
                                        2022 - 2025
                                    </TimelineStepsTime>
                                </div>
                            </TimelineStepsHeader>
                            <TimelineStepsContent>
                                <TimelineStepsDescription >
                                    <span className="text-gray-300 text-md">
                                        BSc in Information Technology in Computer Sciences & Informatics
                                    </span>
                                </TimelineStepsDescription>
                            </TimelineStepsContent>
                        </TimelineStepsItem>
                        <TimelineStepsItem>
                            <TimelineStepsConnector />
                            <TimelineStepsHeader>
                                <TimelineStepsIcon className="overflow-hidden p-0">
                                    <Avatar className="size-full">
                                        <AvatarImage src="src/assets/ts-logo.png" alt="@user" />
                                        <AvatarFallback>TS</AvatarFallback>
                                    </Avatar>
                                </TimelineStepsIcon>
                                <div className="flex flex-col gap-0.5">
                                    <TimelineStepsTitle className="text-2xl text-white font-bold">
                                        {/* <ShinyText
                                            text="Tsogo Secondary School"
                                            disabled={false}
                                            speed={3}
                                            className="text-2xl font-bold"
                                        /> */}
                                        <h3>Tsogo Secondary School</h3>
                                    </TimelineStepsTitle>
                                    <TimelineStepsTime>2016 - 2020</TimelineStepsTime>

                                </div>
                            </TimelineStepsHeader>
                            <TimelineStepsContent>
                                <TimelineStepsDescription >
                                    <span className="text-gray-300 mb-4 text-md">
                                        National Senior Certificate obtained with a Bachelor’s admission
                                    </span>
                                </TimelineStepsDescription>
                            </TimelineStepsContent>
                        </TimelineStepsItem>
                        {/* <TimelineStepsItem>
                            <TimelineStepsConnector />
                            <TimelineStepsHeader>
                                <TimelineStepsIcon className="overflow-hidden p-0">
                                    <Avatar className="size-full">
                                        <AvatarImage src="src/assets/logo.png" alt="@user" />
                                        <AvatarFallback>...</AvatarFallback>
                                    </Avatar>
                                </TimelineStepsIcon>
                                <div className="flex flex-col gap-0.5">
                                    <TimelineStepsTitle className=" text-white">
                                        <Link to="/education">
                                            see more...
                                        </Link>
                                    </TimelineStepsTitle>
                                    <TimelineStepsTime></TimelineStepsTime>

                                </div>
                            </TimelineStepsHeader>
                        </TimelineStepsItem> */}
                    </TimelineSteps>

                </div>
            </div>
        </section>
    );
}
