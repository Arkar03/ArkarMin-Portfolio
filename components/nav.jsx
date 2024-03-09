"use client";
import {useRef, useEffect} from "react";
import {Link as ScrollLink, animateScroll as scroll} from "react-scroll";
import {gsap, Power4, Power2, Power3, Power0} from "gsap";

export default function Nav() {
  const comp = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.fromTo(
        comp.current,
        {y: -40, opacity: 0},
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
        },
        0
      );

      return () => ctx.revert();
    }, comp);
  }, []);

  return (
    <div
      ref={comp}
      className="flex top justify-between py-4  font-merriweather font-bold text-[#777777]"
    >
      <div className="flex gap-[106px] font-sans ">
        <div className=" text-sm lg:text-[20px] my-auto lg:mt-[35px]">
          Arkar Min <span className="text-[#EA590D]">;</span>
        </div>
        {/* <div className="hidden md:flex lg:flex flex-col text-sm lg:text-[19px] align-baseline mt-0 lg:mt-4">
          <div>WebDeveloper</div>
          <div className="">FOLIO / 24 - 25</div>
        </div> */}
      </div>
      <div className=" flex gap-[106px] font-sans ">
        {/* <div className="hidden md:flex lg:flex">
          <div className="w-3 h-3 my-auto mr-4 rounded-full bg-[#e43838] blur-[1.5px] border-[#e43838] border-4 animate-pulse"></div>{" "}
          <div className=" flex-col text-sm lg:text-[19px] align-baseline lg:mt-3">
            <div>Available for</div>
            <div className="">Work</div>
          </div>
        </div> */}
        <div className=" my-auto lg:mt-4">
          {/* <ScrollLink
            to="contact"
            smooth={true}
            duration={3000}
            className=" cursor-pointer text-xs md:text-sm lg:text-[17px] border-2 border-[#777] font-light px-[7px] py-[4px] lg:px-[18px] lg:py-[8px] rounded-md hover:bg-[#EA590D] hover:text-black transition-all ease-linear duration-200"
          >
            CONTACT
          </ScrollLink> */}
          <ScrollLink
            to="contact"
            smooth={true}
            duration={3000}
            class=" cursor-pointer relative inline-flex items-center justify-start  px-[8px] py-[4px] lg:px-[24px] lg:py-[10px] overflow-hidden font-light rounded-md group"
          >
            <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-[#777] opacity-[3%]"></span>
            <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-[#777] opacity-100 group-hover:-translate-x-8"></span>
            <span class="text-xs md:text-sm lg:text-[17px] relative w-full text-left text-[#777] transition-colors duration-200 ease-in-out group-hover:text-white">
              Contact
            </span>
            <span class="absolute inset-0 border-[2px] border-[#777] rounded-md"></span>
          </ScrollLink>
        </div>
      </div>
    </div>
  );
}
