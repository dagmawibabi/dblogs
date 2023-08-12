// 'use client'
import React from "react";
import Script from "next/script";
import Blogs from "./components/blogs";
import Footer from "./components/footer";
import Header from "./components/header";
import Navigation from "./components/navigations";
import DynamicCircles from "./components/dynamicCircles";

import './globals.css';

<Script src="https://kit.fontawesome.com/15ff0af56e.js" crossOrigin="anonymous" />



export default function Home() {

  return (
    <div>
      <DynamicCircles />

      <div className="flex backdrop-blur-3xl ">

        <div className="w-full h-fit overflow-hidden pt-2 pb-4 px-5 bg-[#000000c0] opacity-95 z-40 mx-0 
            sm:pt-10
            sm:px-10
            sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto 2xl:mx-auto
            shadow-xl
          ">
          <div className="mx-auto
              w-full
              sm:w-full md:w-full lg:w-[88%] xl:w-[78%] 2xl:w-[55%] 
            ">
            <Navigation />
            <Header />
            <Blogs />
            <Footer />
          </div>
        </div>
      </div>
    </div>

  )
}
