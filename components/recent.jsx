import Image from "next/image";
import {useRef, useEffect} from "react";
import {gsap, Power4} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

export default function Recent() {
  const comp = useRef(null);
  useEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: comp.current,
          start: "top 40%",
          end: "bottom bottom",
          toggleActions: "restart pause pause pause",
          scrub: true,
          // markers: true,
        },
      });
      t1.fromTo(
        ".head",
        {y: 50, opacity: 0},
        {
          y: 0,
          opacity: 1,
          duration: 0.4,

          // transitionDelay: 0.3,
        }
      )
        .fromTo(
          ".work1",
          {y: 50, opacity: 0},
          {
            y: 0,
            opacity: 1,
            duration: 0.4,

            // transitionDelay: 0.3,
          },
          0
        )
        .fromTo(
          ".work2",
          {y: 50, opacity: 0},
          {
            y: 0,
            opacity: 1,
            duration: 0.4,

            // transitionDelay: 0.3,
          },
          "+=2"
        )
        .fromTo(
          ".work3",
          {y: 50, opacity: 0},
          {
            y: 0,
            opacity: 1,
            duration: 0.4,

            // transitionDelay: 0.3,
          },
          "+=2"
        )
        .fromTo(
          ".work4",
          {y: 50, opacity: 0},
          {
            y: 0,
            opacity: 1,
            duration: 0.4,

            // transitionDelay: 0.3,
          },
          "+=2"
        );
      return () => ctx.revert();
    }, comp);
  }, []);
  return (
    <div ref={comp}>
      <hr className="my-24 text-[#414141] head" />
      <h1 className=" head text-[28px] md:text-[40px] lg:text-[40px] font-mina font-bold text-left mx-[15%] md:ml-[22%] lg:ml-[22%]">
        <span className="text-[#808080]">Recent Works</span>{" "}
        <span className="text-[#EA590D]">:</span>
      </h1>

      <div className="work1 grid sm:grid-rows-1 md:grid-cols-2 lg:grid-cols-2 gap-0 lg:gap-[75px] h-fit mt-14">
        <div class="  lg:min-w-1/2 overflow-hidden rounded-2xl">
          <div class=" w-[280px] mx-auto lg:min-w-[630px]  overflow-hidden">
            <img
              src="/portfolio.png"
              class=" grayscale hover:grayscale-0 hover:scale-110 transition duration-500 cursor-pointer object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col space-y-5 mt-4 min-w-1/2 mx-auto px-6 lg:px-0">
          <h1 className="font-mina text-[16px] lg:text-[3vw] text-[#808080]">
            Arkar Min's Portfolio 24 - 25
          </h1>
          <p className="font-mina text-[#808080] text-sm lg:text-md">
            Portfolio build with Next.js. U
          </p>
          <div className="flex my-4 space-x-4">
            <div className="bg-[#EA590D] text-lg text-black text-mina rounded-2xl px-6 py-1">
              NEXT
            </div>
            <div className="bg-[#EA590D] text-lg text-black text-mina rounded-2xl px-6 py-1">
              REACT
            </div>
            <div className="bg-[#EA590D] text-lg text-black text-mina rounded-2xl px-6 py-1">
              Tailwind
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex gap-4">
              <img src="/github.svg" alt="github" />
              <p className="font-light font-mina text-[#808080] mt-4">
                Github Repo
              </p>
            </div>
            <img src="/line.svg" alt="line" />
            <div className="flex gap-4">
              <img src="/eye.svg" alt="github" />
              <p className="font-light font-mina text-[#808080]">
                live preview
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" work2 sm:order-last grid sm:grid-rows-1 md:grid-cols-2 lg:grid-cols-2 gap-0 lg:gap-[75px] h-fit mt-14">
        <div className="flex flex-col space-y-5  mt-4 min-w-1/2  mx-auto px-6 lg:px-0">
          <h1 className="font-mina text-[3vw] text-[#808080]">
            PKT Education Center
          </h1>
          <p className="font-mina text-[#808080]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem
          </p>
          <div className="flex my-4 space-x-4">
            <div className="bg-[#EA590D] text-lg text-black text-mina rounded-2xl px-6 py-1">
              NEXT
            </div>
            <div className="bg-[#EA590D] text-lg text-black text-mina rounded-2xl px-6 py-1">
              REACT
            </div>
            <div className="bg-[#EA590D] text-lg text-black text-mina rounded-2xl px-6 py-1">
              Tailwind
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex gap-4">
              <img src="/github.svg" alt="github" />
              <p className="font-light font-mina text-[#808080] mt-4">
                Github Repo
              </p>
            </div>
            <img src="/line.svg" alt="line" />
            <div className="flex gap-4">
              <img src="/eye.svg" alt="github" />
              <p className="font-light font-mina text-[#808080]">
                live preview
              </p>
            </div>
          </div>
        </div>
        <div class="min-w-1/2 overflow-hidden rounded-2xl lg:order-last order-first">
          <div class=" w-[280px] mx-auto lg:min-w-[630px]  overflow-hidden">
            <img
              src="/pkt.png"
              class=" grayscale hover:grayscale-0 hover:scale-110 transition duration-500 cursor-pointer object-cover"
            />
          </div>
        </div>
      </div>
      <div className="work3 grid sm:grid-rows-1 md:grid-cols-2 lg:grid-cols-2 gap-0 lg:gap-[75px] h-fit mt-14">
        <div class="  lg:min-w-1/2 overflow-hidden rounded-2xl">
          <div class=" w-[280px] mx-auto lg:min-w-[630px]  overflow-hidden">
            <img
              src="/pkt.png"
              class=" grayscale hover:grayscale-0 hover:scale-110 transition duration-500 cursor-pointer object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col space-y-5 mt-4 min-w-1/2 mx-auto px-6 lg:px-0">
          <h1 className="font-mina text-[16px] lg:text-[3vw] text-[#808080]">
            PKT Education Center
          </h1>
          <p className="font-mina text-[#808080] text-sm lg:text-md">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem
          </p>
          <div className="flex my-4 space-x-4">
            <div className="bg-[#EA590D] text-lg text-black text-mina rounded-2xl px-6 py-1">
              NEXT
            </div>
            <div className="bg-[#EA590D] text-lg text-black text-mina rounded-2xl px-6 py-1">
              REACT
            </div>
            <div className="bg-[#EA590D] text-lg text-black text-mina rounded-2xl px-6 py-1">
              Tailwind
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex gap-4">
              <img src="/github.svg" alt="github" />
              <p className="font-light font-mina text-[#808080] mt-4">
                Github Repo
              </p>
            </div>
            <img src="/line.svg" alt="line" />
            <div className="flex gap-4">
              <img src="/eye.svg" alt="github" />
              <p className="font-light font-mina text-[#808080]">
                live preview
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" work4 sm:order-last grid sm:grid-rows-1 md:grid-cols-2 lg:grid-cols-2 gap-0 lg:gap-[75px] h-fit mt-14">
        <div className="flex flex-col space-y-5  mt-4 min-w-1/2  mx-auto px-6 lg:px-0">
          <h1 className="font-mina text-[3vw] text-[#808080]">
            PKT Education Center
          </h1>
          <p className="font-mina text-[#808080]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem
          </p>
          <div className="flex my-4 space-x-4">
            <div className="bg-[#EA590D] text-lg text-black text-mina rounded-2xl px-6 py-1">
              NEXT
            </div>
            <div className="bg-[#EA590D] text-lg text-black text-mina rounded-2xl px-6 py-1">
              REACT
            </div>
            <div className="bg-[#EA590D] text-lg text-black text-mina rounded-2xl px-6 py-1">
              Tailwind
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex gap-4">
              <img src="/github.svg" alt="github" />
              <p className="font-light font-mina text-[#808080] mt-4">
                Github Repo
              </p>
            </div>
            <img src="/line.svg" alt="line" />
            <div className="flex gap-4">
              <img src="/eye.svg" alt="github" />
              <p className="font-light font-mina text-[#808080]">
                live preview
              </p>
            </div>
          </div>
        </div>
        <div class="min-w-1/2 overflow-hidden rounded-2xl lg:order-last order-first">
          <div class=" w-[280px] mx-auto lg:min-w-[630px]  overflow-hidden">
            <img
              src="/pkt.png"
              class=" grayscale hover:grayscale-0 hover:scale-110 transition duration-500 cursor-pointer object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
