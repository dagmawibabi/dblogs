'use client'
import React, { useRef, useEffect } from "react";
import Script from "next/script";
import Blogs from "./components/blogs";
import Footer from "./components/footer";
import Header from "./components/header";
import Navigation from "./components/navigations";
import DynamicCircles from "./components/dynamicCircles";

<Script src="https://kit.fontawesome.com/15ff0af56e.js" crossOrigin="anonymous" />



export default function Home() {

  return (
    <div>
      <DynamicCircles />

      <div className="flex backdrop-blur-3xl ">

        <div className="w-full h-fit overflow-hidden pt-2 pb-4 px-5 bg-[#000000c0] opacity-80 z-40 mx-0 
        sm:pt-10
        sm:px-10
        sm:w-6/12 lg:w-6/12 xl:w-6/12 
        sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto
        shadow-xl
      ">
          <Navigation />
          <Header />
          <Blogs />
          <Footer />
        </div>
      </div>
    </div>

  )
}
