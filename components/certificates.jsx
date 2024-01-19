import {useRef, useEffect} from "react";
import {gsap, Power4} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Certificates() {
  const comp = useRef(null);
  useEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: comp.current,
          start: "top 80%",
          end: "120% bottom",
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
          ".c1",
          {y: 30, opacity: 0},
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            // transitionDelay: 0.3,
          }
        )
        .fromTo(
          ".c2",
          {y: 30, opacity: 0},
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            // transitionDelay: 0.3,
          }
        )
        .fromTo(
          ".c3",
          {y: 30, opacity: 0},
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            // transitionDelay: 0.3,
          }
        )
        .fromTo(
          ".c4",
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
      <hr className="my-24 text-[#414141] head" />

      <h1 className=" head text-[30px] md:text-[40px] lg:text-[40px] font-mina font-bold text-left ml-[9%] md:ml-[22%] lg:ml-[22%]">
        <span className="text-[#808080]">CERTIFICATES</span>{" "}
        <span className="text-[#414141]">I'VE ACHIEVED</span>
        <span className="text-[#EA590D]">:</span>
      </h1>

      <div className="mt-14 w-[80%] md:w-[40%] lg:w-[55%] mx-auto ">
        <div className=" c1 flex flex-col w-full">
          <div className="flex justify-between relative group">
            <div className="font-bold text-[55px] lg:text-[120px] text-[#414141] font-mina">
              0
              <span className="group-hover:text-white ease-in duration-100">
                1
              </span>{" "}
              <span className="text-[#EA590D]">.</span>
            </div>
            <div className="font-bold inline self-center text-[16px] lg:text-[30px] align-bottom text-[#808080] lg:mt-[70px]">
              <span className="group-hover:text-white ease-in duration-100">
                I
              </span>
              <span className="group-hover:text-white ease-in duration-100">
                T
              </span>
              <span className="group-hover:text-white ease-in duration-200">
                P
              </span>
              <span className="group-hover:text-white ease-in duration-300">
                E
              </span>
              <span className="group-hover:text-white ease-in duration-400">
                C
              </span>{" "}
              <span className="group-hover:text-white ease-in duration-500">
                F
              </span>
              <span className="group-hover:text-white ease-in duration-600">
                E
              </span>
            </div>
            <img
              src="/fe.jpg"
              className="absolute hidden md:block lg:block w-[100px] lg:w-[120px] -bottom-4 -right-32 lg:-right-44 lg:bottom-4 rotate-12 opacity-0 transition-opacity duration-300 ease-in group-hover:opacity-100 grayscale"
            />
          </div>
          <div className="p-1 w-full bg-[#808080] lg:-mt-8"></div>
        </div>
        <div className=" c2 flex flex-col w-full">
          <div className="flex justify-between relative group">
            <div className="font-bold text-[55px] lg:text-[120px] text-[#414141] font-mina">
              0
              <span className="group-hover:text-white ease-in duration-100">
                2
              </span>{" "}
              <span className="text-[#EA590D] -ml-[9%]">.</span>
            </div>
            <div className="font-bold inline self-center text-[16px] lg:text-[30px] align-bottom text-[#808080] lg:mt-[70px]">
              <span className="group-hover:text-white ease-in duration-100">
                I
              </span>
              <span className="group-hover:text-white ease-in duration-100">
                T
              </span>
              <span className="group-hover:text-white ease-in duration-200">
                P
              </span>
              <span className="group-hover:text-white ease-in duration-300">
                E
              </span>
              <span className="group-hover:text-white ease-in duration-400">
                C
              </span>{" "}
              <span className="group-hover:text-white ease-in duration-500">
                I
              </span>
              <span className="group-hover:text-white ease-in duration-600">
                P
              </span>
            </div>
            <img
              src="/ip.jpg"
              className="absolute hidden md:block lg:block w-[100px] lg:w-[120px] -bottom-4 -right-32 lg:-right-44 lg:bottom-4 rotate-12 opacity-0 transition-opacity duration-300 ease-in group-hover:opacity-100 grayscale "
            />
          </div>
          <div className="p-1 w-full bg-[#808080] lg:-mt-8"></div>
        </div>
        <div className=" c3 flex flex-col w-full">
          <div className="flex justify-between relative group">
            <div className="font-bold text-[55px] lg:text-[120px] text-[#414141] font-mina">
              0
              <span className="group-hover:text-white ease-in duration-100">
                3
              </span>{" "}
              <span className="text-[#EA590D] -ml-[9%]">.</span>
            </div>
            <div className="font-bold inline text-end self-center text-[12px] lg:text-[30px] align-bottom text-[#808080] lg:mt-[70px] ">
              <span className="group-hover:text-white ease-in duration-100">
                R
              </span>
              <span className="group-hover:text-white ease-in duration-100">
                O
              </span>
              <span className="group-hover:text-white ease-in duration-200">
                C
              </span>
              <span className="group-hover:text-white ease-in duration-300">
                K
              </span>
              <span className="group-hover:text-white ease-in duration-400">
                S
              </span>
              <span className="group-hover:text-white ease-in duration-500">
                T
              </span>
              <span className="group-hover:text-white ease-in duration-600">
                A
              </span>
              <span className="group-hover:text-white ease-in duration-600">
                R
              </span>{" "}
              <span className="group-hover:text-white ease-in duration-700">
                D
              </span>
              <span className="group-hover:text-white ease-in duration-800">
                E
              </span>
              <span className="group-hover:text-white ease-in duration-900">
                V
              </span>
              <span className="group-hover:text-white ease-in duration-1000">
                E
              </span>
              <span className="group-hover:text-white ease-in duration-1000">
                L
              </span>
              <span className="group-hover:text-white ease-in duration-500">
                O
              </span>
              <span className="group-hover:text-white ease-in duration-300">
                P
              </span>
              <span className="group-hover:text-white ease-in duration-100">
                E
              </span>
              <span className="group-hover:text-white ease-in duration-1000">
                R
              </span>
            </div>
            <img
              src="/fw.jpg"
              className="absolute hidden md:block lg:block w-[100px] lg:w-[120px] -bottom-4 -right-32 lg:-right-44 lg:bottom-4 rotate-12 opacity-0 transition-opacity duration-300 ease-in group-hover:opacity-100 grayscale "
            />
          </div>
          <div className="p-1 w-full bg-[#808080] lg:-mt-8"></div>
        </div>
        <div className=" c4 flex flex-col w-full">
          <div className="flex justify-between relative group">
            <div className="font-bold text-[55px] lg:text-[120px] text-[#414141] font-mina">
              0
              <span className="group-hover:text-white ease-in duration-100">
                4
              </span>{" "}
              <span className="text-[#EA590D] -ml-[9%]">.</span>
            </div>
            <div className="font-bold inline self-center text-[16px] lg:text-[30px] align-bottom text-[#808080] lg:mt-[70px]">
              <span className="group-hover:text-white ease-in duration-100">
                J
              </span>
              <span className="group-hover:text-white ease-in duration-200">
                L
              </span>
              <span className="group-hover:text-white ease-in duration-300">
                P
              </span>
              <span className="group-hover:text-white ease-in duration-400">
                T
              </span>{" "}
              <span className="group-hover:text-white ease-in duration-500">
                N
              </span>
              <span className="group-hover:text-white ease-in duration-600">
                3
              </span>
            </div>
            <img
              src="/n3.jpg"
              className="absolute hidden md:block lg:block w-[100px] lg:w-[120px] -bottom-4 -right-32 lg:-right-44 lg:bottom-4 rotate-12 opacity-0 transition-opacity duration-300 ease-in group-hover:opacity-100 grayscale "
            />
          </div>
          <div className="p-1 w-full bg-[#808080] lg:-mt-8"></div>
        </div>
      </div>
    </div>
  );
}
