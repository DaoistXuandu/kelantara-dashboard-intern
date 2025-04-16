'use client'
import Community from "@/components/Main/Community/Community";
import Header from "@/components/Main/Header/Header";
import News from "@/components/Main/News/News";
import Slider from "@/components/Main/Carousel/Slider";
import NavBar from "@/components/Navigation/Navbar";

export default function Home() {
  return (
    <div className="bg-white pb-10">
      <NavBar />
      <div className="h-16 bg-white"></div>
      <Header />
      <Slider />
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2">
          <News />
        </div>
        <div className="w-full lg:w-1/2">
          <Community />
        </div>
      </div>
    </div>
  );
}
