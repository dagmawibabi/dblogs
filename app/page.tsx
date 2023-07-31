import Blogs from "./components/blogs";
import Footer from "./components/footer";
import Header from "./components/header";
import Navigation from "./components/navigations";
<script src="https://kit.fontawesome.com/15ff0af56e.js" crossOrigin="anonymous"></script>

export default function Home() {
  return (
    <div className="flex bg-[#0A0A0A] ">
      <div className="bg-[#0A0A0A] w-fit blur-3xl absolute top-0 left-0 ">
        <div className="sticky top-0 m-10 w-96 h-96 bg-red-500 opacity-70 rounded-full"></div>
      </div>

      <div className="w-6/12 mx-auto h-fit pt-10 pb-4 px-10 bg-[#0A0A0A]">
        <Navigation />
        <Header />
        <Blogs />
        <Footer />
      </div>

      <div className="bg-[#0A0A0A] w-fit blur-3xl absolute bottom-0 right-0">
        <div className=" m-10 w-96 h-96 bg-blue-500 opacity-70 rounded-full"></div>
      </div>

    </div>
  )
}
