'use client';

import { useEffect, useState } from "react";
import configJSON from "../../public/config.json";
import axios from 'axios';

export default function Footer() {
    let date = new Date();
    let humanReadableDate = date.toDateString();

    // Get and Set Visitor Count 
    const [visitorCount, setVisitorCount] = useState(0);
    async function getVisitorCount() {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0'); 
        const day = String(currentDate.getDate() + 1).padStart(2, '0');
        const formattedDate = `${year}-${month}-${day}`;    
        let visitorCountResult = await axios({
            method: 'get',
            url: `https://api.loglib.io/v1/insight?apiKey=${configJSON.loglibapikey}&startDate=2023-08-10&endDate=${formattedDate}&timeZone=Africa/Addis_Ababa`,
            withCredentials: false,
        });
        setVisitorCount(visitorCountResult.data.insight.totalPageViews.current);
    }
    getVisitorCount();



    return (
        <div className="justify-center text-zinc-600 text-center text-sm ">
            <span className="text-zinc-500 text-base hover:text-zinc-400
            sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-lg 
            "> 
                This blog has been visited <span className="text-zinc-400 hover:text-zinc-300"> {visitorCount} </span> times. 🖤 
            </span>
            <br />
            {humanReadableDate} &copy; {configJSON.footer.toString()}
        </div>
    )
}