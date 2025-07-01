"use client";
import { useState, useEffect } from "react";

export default function Header() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      // Format the time to indian standard
      const indianFormatedTime = now.toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });

    //   Construct the final string
    const finalString = `IND ${indianFormatedTime} - GMT+5:30`;
    setCurrentTime(finalString);
    };

    updateTime()

    const intervalId = setInterval(updateTime, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <header className="w-full max-w-[100rem] fixed top-0 z-50">
      <nav className="container flex justify-between items-center pt-8 pl-3 pr-5">
        <div className="dateAndTime font-body font-bold text-sm">{currentTime}</div>
        <div className="absolute top-9 left-1/2 transform -translate-x-1/2 -translate-y-1/2  logo font-title font-extralight text-2xl">
          <h1 className="text-[#ffffff]/55">AK0121</h1>
        </div>
        <div className="text-sm font-bold font-body text-[#d0aaea]">Menu</div>
      </nav>
    </header>
  );
}
