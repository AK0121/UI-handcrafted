import Header from "@/components/Header.js";
import HeroVisual from "@/components/HeroVisual";
import { FaAngleRight, FaBell, FaImage, FaLock, FaMap, FaRocketchat } from "react-icons/fa";

export default function Home() {
  return (
    <div className="h-[100vh] w-full bg-[linear-gradient(132deg,#ffead5,#f1ceb8,#9072d1,#47418e,#121930,#060917,#060911)] pb-12">
      <Header />
      <main className="container w-10/12 mx-auto px-10 flex justify-between items-center h-full">
        <div className="text-content w-1/2 flex flex-col gap-7 mt-10">
        <div>
          <h1 className="text-6xl flex text-black flex-col">
            <span>Unlock Top</span>
            <span>Marketing Talent</span>
            <span>You Thought Was</span>
            <span>Out of Reach - </span>
          </h1>
          <h1 className="text-6xl flex flex-col">
            <span>Now Just One</span>
            <span>Click Away!</span>
          </h1>
          </div>
          <button className="bg-black cursor-pointer px-6 py-2 w-52 justify-center rounded-full flex items-center gap-3.5">Start Project <FaAngleRight /></button>
        </div>
        <div className="image-content w-1/2">
          <HeroVisual />
        </div>
      </main>
        <div className="brand-names flex justify-around items-center text-gray-200">
          <div className="flex items-center gap-2">
            <FaBell size={20} />
            <h3 className="text-lg font-bold tracking-widest">Aivisit</h3>
          </div>
          <div className="flex items-center gap-2">
            <FaRocketchat size={20} />
            <h3 className="text-lg font-bold tracking-widest">NapPan</h3>
          </div>
          <div className="flex items-center gap-2">
            <FaImage size={20} />
            <h3 className="text-lg font-bold tracking-widest">TryThis</h3>
          </div>
          <div className="flex items-center gap-2">
            <FaLock size={20} />
            <h3 className="text-lg font-bold tracking-widest">KnockKnock</h3>
          </div>
          <div className="flex items-center gap-2">
            <FaMap size={20} />
            <h3 className="text-lg font-bold tracking-widest">Zooma</h3>
          </div>
        </div>
    </div>
  );
}
