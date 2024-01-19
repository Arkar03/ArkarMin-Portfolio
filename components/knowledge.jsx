import {useRef, useEffect} from "react";
import {gsap, Power4} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

export default function Knowledge() {
  const spin_animation = {
    animation: "spin 2s linear infinite",
  };
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
          ".know1",
          {y: 30, opacity: 0},
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            // transitionDelay: 0.3,
          }
        )
        .fromTo(
          ".know2",
          {y: 30, opacity: 0},
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            // transitionDelay: 0.3,
          }
        )
        .fromTo(
          ".know3",
          {y: 30, opacity: 0},
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            // transitionDelay: 0.3,
          }
        )
        .fromTo(
          ".know4",
          {y: 30, opacity: 0},
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            // transitionDelay: 0.3,
          }
        )
        .fromTo(
          ".know5",
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
    <div ref={comp}>
      <div className="head">
        <hr className="my-24 text-[#414141]" />

        <h1 className="text-[28px] md:text-[40px] lg:text-[40px] font-mina font-bold text-left mx-[15%] md:ml-[22%] lg:ml-[22%]">
          <span className="text-[#808080]">KNOWLEDGES</span>{" "}
          <span className="text-[#EA590D]">:</span>
        </h1>
      </div>

      <div className="ml-[25%] text-lg lg:text-4xl  font-light mt-7 lg:mt-14 relative">
        <ul className="list-disc text-white marker:text-[#EA590D] text-[28px] marker:text-4xl space-y-2">
          <li className="know1">Git/Github</li>
          <li className="know2">data structures</li>
          <li className="know3">algorithms</li>
          <li className="know4">design patterns</li>
          <li className="know5">UI / UX</li>
        </ul>
      </div>
    </div>
  );
}
