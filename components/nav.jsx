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
        <div className="hidden md:flex lg:flex flex-col text-sm lg:text-[19px] align-baseline mt-0 lg:mt-4">
          <div>WebDeveloper</div>
          <div className="">FOLIO / 24 - 25</div>
        </div>
      </div>
      <div className=" flex gap-[106px] font-sans ">
        <div className="hidden md:flex lg:flex">
          <div className="w-3 h-3 my-auto mr-4 rounded-full bg-[#38E449] blur-[1.5px] border-[#38E449] border-4 animate-pulse"></div>{" "}
          {/* hover:blur-[0.5px] transition-all duration-150 */}
          <div className=" flex-col text-sm lg:text-[19px] align-baseline lg:mt-3">
            <div>Available for</div>
            <div className="">Work</div>
          </div>
        </div>
        <div className=" my-auto lg:mt-4">
          <ScrollLink
            to="contact"
            smooth={true}
            duration={3000}
            className=" text-xs md:text-sm lg:text-[17px] border-2 border-[#777] font-light px-[7px] py-[4px] lg:px-[18px] lg:py-[8px] rounded-md hover:bg-[#EA590D] hover:text-black transition-all ease-linear duration-200"
          >
            CONTACT
          </ScrollLink>
        </div>
      </div>
    </div>
  );
}
