'use client';

import Footer from "@/app/components/footer";
import Navigation from "@/app/components/navigations";


export default function (param: any) {

    let file = "./Sin.html";

    return (
        <div className="flex bg-[#0A0A0A] ">
            <div className="bg-[#0A0A0A] w-fit blur-3xl absolute top-0 left-0 ">
                <div className="sticky top-0 m-10 w-80 h-80 bg-red-500 opacity-70 rounded-full"></div>
            </div>

            <div className="w-6/12 mx-auto h-fit overflow-scroll pt-10 pb-4 px-10 bg-[#0A0A0A] z-40">
                <Navigation />
                <div className="text-zinc-400">
                    July 12, 2024
                </div>
                <div className="text-white text-2xl font-bold">
                    {param.params.title.toString().replace(/%20/g, " ")}
                </div>
                <div className="h-screen text-white pb-96">
                    <iframe src="./Sin.html" className="h-screen text-white bg-[#0A0A0A]" width={"100%"} ></iframe>
                </div>
                <Footer />
            </div>

            <div className="bg-[#0A0A0A] w-fit blur-3xl absolute bottom-0 right-0">
                <div className=" m-10 w-80 h-80 bg-blue-500 opacity-70 rounded-full"></div>
            </div>

        </div>
    )
}