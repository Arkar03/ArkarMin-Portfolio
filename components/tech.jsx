import {useRef, useEffect} from "react";
import {gsap, Power4} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Tech() {
  let textWrapper = useRef(null);
  const comp = useRef(null);
  useEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: comp.current,
          start: "20% 80%",
          end: "130% bottom",
          toggleActions: "restart reverse restart reverse",
          scrub: true,
          // markers: true,
        },
      });
      t1.fromTo(
        ".head",
        {y: 30, opacity: 0},
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          // transitionDelay: 0.3,
        }
      )
        .fromTo(
          ".skill1",
          {y: 30, opacity: 0},
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            // transitionDelay: 0.3,
          },
          0
        )
        .fromTo(
          ".skill2",
          {y: 30, opacity: 0},
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            // transitionDelay: 0.3,
          },
          0
        )
        .fromTo(
          ".skill3",
          {y: 30, opacity: 0},
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            // transitionDelay: 0.3,
          }
        )
        .fromTo(
          ".skill4",
          {y: 30, opacity: 0},
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            // transitionDelay: 0.3,
          }
        )
        .fromTo(
          ".skill5",
          {y: 30, opacity: 0},
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            // transitionDelay: 0.3,
          }
        )
        .fromTo(
          ".skill6",
          {y: 30, opacity: 0},
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            // transitionDelay: 0.3,
          }
        )
        .fromTo(
          ".skill7",
          {y: 30, opacity: 0},
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            // transitionDelay: 0.3,
          }
        )
        .fromTo(
          ".skill8",
          {y: 30, opacity: 0},
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            // transitionDelay: 0.3,
          }
        )
        .fromTo(
          ".skill9",
          {y: 30, opacity: 0},
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            // transitionDelay: 0.3,
          }
        )
        .fromTo(
          ".skill10",
          {y: 30, opacity: 0},
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            // transitionDelay: 0.3,
          }
        )
        .fromTo(
          ".skill11",
          {y: 30, opacity: 0},
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            // transitionDelay: 0.3,
          }
        );
      return () => ctx.revert();
    }, comp);
  }, []);
  return (
    <div ref={comp} className="techs">
      <div className="head">
        <hr className="mt-7 mb-14 text-[#414141] " />

        <h1 className=" text-[30px] md:text-[40px] lg:text-[40px] font-mina font-bold text-left mx-[15%] md:ml-[22%] lg:ml-[22%]">
          <span className="text-[#808080]">TECHS</span>{" "}
          <span className="text-[#414141]">I'M PROFICIENT AT</span>
          <span className="text-[#EA580C]">:</span>
        </h1>
      </div>

      <div className="ml-[25%] text-lg lg:text-4xl  font-light mt-7 lg:mt-14 relative">
        <ul className="list-disc text-white marker:text-[#EA580C] text-[28px] marker:text-4xl space-y-2">
          <li className="skill1">HTML</li>
          <li className="skill2">CSS</li>
          <li className="skill3">laravel</li>
          <li className="ml-9 skill4">livewire</li>
          <li className="ml-9 skill5">next</li>
          <li className="ml-9 skill6">react</li>
          <li className="ml-9 skill7">express</li>
          <li className="ml-9 skill8">typescript</li>
          <li className="ml-9 skill9">node</li>
          <li className="skill10">DBMS</li>
          <li className="ml-9 skill11">MySql, MongoDB</li>
        </ul>
      </div>
    </div>
  );
}
