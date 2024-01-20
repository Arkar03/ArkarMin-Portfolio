import React from "react";
import {useRef, useEffect} from "react";
import {gsap, Power4, Power0, Power1, Power2, Power3} from "gsap";

const Loading = () => {
  const comp = useRef(null);

  // useEffect(() => {
  //   let ctx = gsap.context(() => {
  //     const t1 = gsap.timeline();
  //     t1.fromTo(
  //       comp.current,
  //       {
  //         y: -60,
  //         opacity: 0,
  //       },
  //       {
  //         y: 0,
  //         opacity: 1,
  //         duration: 0.6,
  //         ease: Power2.easeIn,
  //       }
  //     );

  //     return () => ctx.revert();
  //   }, comp);
  // }, []);

  return (
    <div
      ref={comp}
      className="flex justify-center items-center h-screen w-full bg-[#000000]"
    >
      <div className="flex space-x-3">
        <div className="font-mina self-center text-lg text-white">LOADING</div>
        <div class="spinner-box ">
          <div class="configure-border-1">
            <div class="configure-core"></div>
          </div>
          <div class="configure-border-2">
            <div class="configure-core"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
