"use client";
import {useState, useEffect} from "react";
import {Link as ScrollLink, animateScroll as scroll} from "react-scroll";

export default function Footer() {
  const [currentTime, setCurrentTime] = useState(getFormattedTime());

  function getFormattedTime() {
    return new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZone: "Asia/Yangon",
      hour12: false,
    });
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(getFormattedTime());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="grid grid-cols-3 justify-between pb-7">
      <h1 className="font-mina text-[#808080] w-fit text-xs lg:text-md">
        Yangon / MM <span className="animate-pulse">{currentTime}</span>
      </h1>
      <div className="flex justify-center">
        <span className="relative inline-block group">
          <span className="absolute inset-0 bg-[#EA590D] -bottom-4 h-1 w-1 group-hover:w-12 transition-all ease-in-out duration-10000"></span>
          <span className="relative text-white">
            <ScrollLink
              to="top"
              smooth="true"
              duration={3000}
              className="font-meriweather font-light text-[#777777]  text-xs lg:text-md"
            >
              back to top
            </ScrollLink>
          </span>
        </span>
      </div>
      <div className="font-bold flex justify-end text-[#777777]  text-xs lg:text-md">
        Arkar Min <span className="text-[#EA590D]">;</span>
      </div>{" "}
    </div>
  );
}
