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
              class=" grayscale rounded-xl hover:grayscale-0 hover:scale-110 transition duration-500 cursor-pointer object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col space-y-5 mt-4 min-w-1/2 mx-auto px-6 lg:px-0">
          <h1 className="font-mina text-[16px] lg:text-[3vw] text-[#808080]">
            Arkar Min's Portfolio 24 - 25
          </h1>
          <p className="font-mina text-[#808080] text-sm lg:text-md">
            I crafted a dynamic portfolio leveraging the power of Next.js,
            seamlessly blending a sleek frontend with Tailwind CSS for a
            polished aesthetic. To elevate the user experience, I incorporated
            Lenis animations and harnessed the fluidity of GSAP for captivating
            motion effects. This fusion of cutting-edge technologies results in
            a visually stunning and engaging showcase of my work.
          </p>
          <div className="flex flex-wrap my-4 space-x-4 ">
            <div className="bg-[#EA590D] text-sm text-black text-mina rounded-2xl my-2 px-6 py-1">
              NEXT
            </div>
            <div className="bg-[#EA590D] text-sm text-black text-mina rounded-2xl my-2 px-6 py-1">
              Node
            </div>
            <div className="bg-[#EA590D] text-sm text-black text-mina rounded-2xl my-2 px-6 py-1">
              REACT
            </div>
            <div className="bg-[#EA590D] text-sm text-black text-mina rounded-2xl my-2 px-6 py-1">
              Tailwind
            </div>
            <div className="bg-[#EA590D] text-sm text-black text-mina rounded-2xl my-2 px-6 py-1">
              Lenis
            </div>
            <div className="bg-[#EA590D] text-sm text-black text-mina rounded-2xl my-2 px-6 py-1">
              GSAP
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex gap-4">
              <img src="/github.svg" alt="github" />
              <a
                target="__blank"
                href="https://github.com/Arkar03/ArkarMin-Portfolio"
                className="font-light font-mina text-[#808080] mt-4"
              >
                Github Repo
              </a>
            </div>
            <img src="/line.svg" alt="line" />
            <a target="__blank" href="https://arkarmin.vercel.app/" className="flex gap-4">
              <img src="/eye.svg" alt="github" />
              <p className="font-light font-mina text-[#808080]">
                live preview
              </p>
            </a>
          </div>
        </div>
      </div>

      <div className=" work2 sm:order-last grid sm:grid-rows-1 md:grid-cols-2 lg:grid-cols-2 gap-0 lg:gap-[75px] h-fit mt-14">
        <div className="flex flex-col space-y-5  mt-4 min-w-1/2  mx-auto px-6 lg:px-0">
          <h1 className="font-mina text-[16px] lg:text-[3vw] text-[#808080]">
            PKT Education Center (frontend)
          </h1>
          <p className="font-mina text-[#808080]">
            Portfolio website for a school, seamlessly developed with Next.js
            and adorned with the artistry of Tailwind CSS. The design, a
            testament to elegance and functionality, comes alive as it
            dynamically fetches and elegantly showcases data from the backend.
            This harmonious blend of technology and design ensures a seamless
            user experience, inviting visitors to explore the school's offerings
            in a visually captivating and informative manner.
          </p>
          <div className="flex flex-wrap my-4 space-x-4">
            <div className="bg-[#EA590D] my-2 text-sm text-black text-mina rounded-2xl px-6 py-1">
              NEXT
            </div>
            <div className="bg-[#EA590D] my-2 text-sm text-black text-mina rounded-2xl px-6 py-1">
              REACT
            </div>
            <div className="bg-[#EA590D] my-2 text-sm text-black text-mina rounded-2xl px-6 py-1">
              Tailwind
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex gap-4 cursor-not-allowed">
              <img src="/github.svg" alt="github" />
              <p className="font-light font-mina text-[#808080] mt-4">
                Github Repo
              </p>
            </div>
            <img src="/line.svg" alt="line" />
            <a
              target="__blank"
              href="http://pkt-educenter.com/"
              className="flex gap-4"
            >
              <img src="/eye.svg" alt="github" />
              <p className="font-light font-mina text-[#808080]">
                live preview
              </p>
            </a>
          </div>
        </div>
        <div class="min-w-1/2 overflow-hidden rounded-2xl lg:order-last order-first">
          <div class=" w-[280px] mx-auto lg:min-w-[630px]  overflow-hidden">
            <img
              src="/pkt.png"
              class="rounded-xl grayscale hover:grayscale-0 hover:scale-110 transition duration-500 cursor-pointer object-cover"
            />
          </div>
        </div>
      </div>
      <div className="work3 grid sm:grid-rows-1 md:grid-cols-2 lg:grid-cols-2 gap-0 lg:gap-[75px] h-fit mt-14">
        <div class="  lg:min-w-1/2 overflow-hidden rounded-2xl">
          <div class=" w-[280px] mx-auto lg:min-w-[630px]  overflow-hidden">
            <img
              src="/pkt_back.png"
              class=" grayscale rounded-xl hover:grayscale-0 hover:scale-110 transition duration-500 cursor-pointer object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col space-y-5 mt-4 min-w-1/2 mx-auto px-6 lg:px-0">
          <h1 className="font-mina text-[16px] lg:text-[3vw] text-[#808080]">
            PKT Education Center (Backend)
          </h1>
          <p className="font-mina text-[#808080] text-sm lg:text-md">
            Organizational Management Application, also known as the "school
            management" system, designed to streamline various tasks within an
            organization. This all-encompassing solution is meticulously crafted
            with the dynamic duo of Livewire and Laravel, ensuring efficiency
            and responsiveness. The user interface is adorned with the
            simplicity and elegance of Tailwind CSS, providing a clean and
            intuitive design for seamless navigation and enhanced user
            experience.
          </p>
          <div className="flex flex-wrap my-4 space-x-4 ">
            <div className="bg-[#EA590D] my-2 text-sm text-black text-mina rounded-2xl px-6 py-1">
              Laravel
            </div>
            <div className="bg-[#EA590D] my-2 text-sm text-black text-mina rounded-2xl px-6 py-1">
              PHP
            </div>
            <div className="bg-[#EA590D] my-2 text-sm text-black text-mina rounded-2xl px-6 py-1">
              Livewire
            </div>
            <div className="bg-[#EA590D] my-2 text-sm text-black text-mina rounded-2xl px-6 py-1">
              Tailwind
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex gap-4 cursor-not-allowed">
              <img src="/github.svg" alt="github" />
              <div className="font-light font-mina text-[#808080] mt-4">
                Github Repo
              </div>
            </div>
            <img src="/line.svg" alt="line" />
            <a
              target="__blank"
              href="http://admin.pkt-educenter.com/login"
              className="flex gap-4"
            >
              <img src="/eye.svg" alt="" />
              <p className="font-light font-mina text-[#808080]">
                live preview
              </p>
            </a>
          </div>
        </div>
      </div>
      <div className=" work4 sm:order-last grid sm:grid-rows-1 md:grid-cols-2 lg:grid-cols-2 gap-0 lg:gap-[75px] h-fit mt-14">
        <div className="flex flex-col space-y-5  mt-4 min-w-1/2  mx-auto px-6 lg:px-0">
          <h1 className="font-mina text-[16px] lg:text-[3vw] text-[#808080]">
            Movie App
          </h1>
          <p className="font-mina text-[#808080]">
            Movie App project, where Laravel serves as the robust backbone and
            Tailwind CSS as the frontend design library. The dynamic frontend,
            powered by Tailwind CSS, Livewire, and Alpine JS, orchestrates
            seamless user experiences. Behind the scenes, our backend seamlessly
            integrates with themoviedb.org API to fetch movie data, enabling the
            app to execute CRUD operations, authentication, and a watchlist
            system.
          </p>
          <div className="flex flex-wrap my-4 space-x-4">
            <div className="bg-[#EA590D] text-sm text-black text-mina my-2 rounded-2xl px-6 py-1">
              Laravel
            </div>
            <div className="bg-[#EA590D] text-sm text-black text-mina my-2 rounded-2xl px-6 py-1">
              php
            </div>
            <div className="bg-[#EA590D] text-sm text-black text-mina my-2 rounded-2xl px-6 py-1">
              Livewire
            </div>
            <div className="bg-[#EA590D] text-sm text-black text-mina my-2 rounded-2xl px-6 py-1">
              Alpine.js
            </div>
            <div className="bg-[#EA590D] text-sm text-black text-mina my-2 rounded-2xl px-6 py-1">
              Tailwind
            </div>
          </div>
          <div className="flex gap-4">
            <a
              target="__blank"
              href="https://github.com/Arkar03/Movie-App-Laravel"
              className="flex gap-4"
            >
              <img src="/github.svg" alt="github" />
              <p className="font-light font-mina text-[#808080] mt-4">
                Github Repo
              </p>
            </a>
            <img src="/line.svg" alt="line" />
            <div className="flex gap-4 cursor-not-allowed">
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
              src="/movie.png"
              class="rounded-xl grayscale hover:grayscale-0 hover:scale-110 transition duration-500 cursor-pointer object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
