import Image from "next/image";
import { FaBell, FaRocketchat } from "react-icons/fa";

const HeroVisual = () => {
  return (
    <div className="flex justify-center items-center circular-1 border-[1px] border-[#ffead546] w-[28rem] h-[28rem] rounded-full border-t-transparent rotate-[28deg] relative">
      <Image
        src="/one.jpg"
        alt="people-image"
        width={100}
        height={100}
        className="absolute top-32 -left-2 w-10 h-10 rounded-full object-cover bg-center shadow-[0_0_20px_#ffead5] rotate-[330deg]"
      />

      <Image
        src="/five.jpg"
        alt="people-image"
        width={100}
        height={100}
        className="absolute bottom-12 left-7 w-10 h-10 rounded-full object-cover bg-center shadow-[0_0_20px_#ffead5] rotate-[330deg]"
      />

      <div className="bg-black p-3 rounded-2xl absolute bottom-0 right-24 shadow-[0_0_15px_#9072d1]">
        <FaRocketchat size={20} />
      </div>

      <div className="flex justify-center items-center circle-2 h-96 w-96 border-[1px] border-[#f1ceb87f] rounded-full border-t-transparent rotate-[120deg] relative">
        <Image
          src="/two.jpg"
          alt="people-image"
          width={100}
          height={100}
          className="absolute rotate-[200deg] top-32 -left-3 w-10 h-10 rounded-full object-cover bg-center shadow-[0_0_20px_#FF00FF]"
        />
        <div className="bg-black p-3 rounded-2xl absolute bottom-0 left-24 rotate-[200deg]
        shadow-[0_0_15px_#ff3737]">
          <FaBell size={20} />
        </div>

        <div className="flex justify-center items-center circle-3 h-80 w-80 border-[1px] border-[#9072d180] rounded-full border-t-transparent rotate-[60deg] relative">
          <Image
            src="/three.jpg"
            alt="people-image"
            width={100}
            height={100}
            className="absolute top-32 -left-4 w-10 h-10 rounded-full object-cover bg-center shadow-[0_0_20px_#3ce563] rotate-180"
          />

          <div className="flex justify-center items-center circle-4 h-52 w-52 border-[1px] border-[#7067da76] rounded-full flex-col border-t-transparent rotate-[152deg]">
            <Image
              src="/four.jpg"
              alt="people-image"
              width={100}
              height={100}
              className="absolute top-32 -left-2 w-10 h-10 rounded-full object-cover bg-center shadow-[0_0_15px_#ff3737]"
            />
            <h1 className="text-5xl">20K+</h1>
            <p className="text-[12px]">Specailists</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroVisual;
