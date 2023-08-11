// 'use client'

import Script from "next/script";
import Blogs from "./components/blogs";
import Footer from "./components/footer";
import Header from "./components/header";
import Navigation from "./components/navigations";
<Script src="https://kit.fontawesome.com/15ff0af56e.js" crossOrigin="anonymous" />

export default function Home() {
  return (
    <div className="flex bg-[#0A0A0A] ">
      <div className="
        bg-[#0A0A0A] blur-3xl absolute top-0 left-0 w-fit hidden 
          sm:w-fit md:w-fit lg:w-fit xl:w-fit
          sm:hidden md:hidden lg:block xl:block
        ">
        <div className="sticky top-0 m-10 w-80 h-80 bg-red-500 opacity-70 rounded-full"></div>
      </div>

      <div className="w-full h-fit overflow-hidden pt-2 pb-4 px-5 bg-[#0A0A0A] z-40 mx-0 
        sm:pt-10
        sm:px-10
        sm:w-full lg:w-6/12 xl:w-6/12 
        sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto
      ">
        <Navigation />
        <Header />
        <Blogs />
        <Footer />
      </div>

      <div className="
        bg-[#0A0A0A] blur-3xl absolute bottom-0 right-0 w-fit hidden 
        sm:hidden md:hidden lg:block xl:block
      ">
        <div className=" m-10 w-80 h-80 bg-blue-500 opacity-70 rounded-full"></div>
      </div>

    </div>
  )
}
