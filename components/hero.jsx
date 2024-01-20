// "use client";
import {useRef, useEffect} from "react";
import {gsap, Power4, Power0, Power1, Power2, Power3} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default function Hero() {
  let textWrapper = useRef(null);
  const comp = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: ".heros", // Use a common trigger for both elements
          start: "top 40px",
          end: "center 45px",
          toggleActions: "restart pause reverse play",
          scrub: true,
          markers: false,
        },
      });
      t1.fromTo(
        ".hero1",
        {y: 0, opacity: 1},
        {
          y: -30,
          opacity: 0,
          duration: 2000,
          // transitionDuration: 4,
        }
      )
        .fromTo(
          ".hero2",
          {y: 0, opacity: 1},
          {
            y: -30,
            opacity: 0,
            duration: 2000,
            // transitionDuration: 4,
          }
        )
        .fromTo(
          ".hero3",
          {y: 0, opacity: 1},
          {
            y: -30,
            opacity: 0,
            duration: 2000,
            // transitionDuration: 4,
          }
        )
        // .to(
        //   ".about",
        //   {
        //     y: 100,
        //     transitionDuration:2000,
        //     // duration: 30000,
        //     // scale: 1.1,
        //     ease: Power2.easeInOut,
        //   },
        //   "+=1"
        // )
        .fromTo(
          ".quote",
          {opacity: 0, autoAlpha: 0},
          {opacity: 1, autoAlpha: 1, duration: 2000},
          "+=3"
        )
        .fromTo(
          ".akm",
          {
            opacity: 0,
            display: "none",
            filter: "blur(16px) ",
            x: 0,
          },
          {
            opacity: 1,
            display: "block",
            duration: 3000,
            filter: "blur(0px)",
            x: 20,
          },
          "+=2"
        )

        .to(".stalk-text", {
          color: "#EA590D",
          x: 20,
          duration: 4000,
          ease: Power4.easeInOut,
        });

      const t2 = gsap.timeline();
      t2.fromTo(
        ".hero1",
        {y: 80, opacity: 0},
        {
          y: 0,
          opacity: 1,
          duration: 1.4,
          // ease: Power3.easeOut,
        },
        0
      )
        .fromTo(
          ".hero2",
          {y: 80, opacity: 0},
          {
            y: 0,
            opacity: 1,
            duration: 1.4,
            // ease: Power3.easeOut,
          },
          0
        )
        .fromTo(
          ".hero3",
          {y: 80, opacity: 0},
          {y: 0, opacity: 1, duration: 1.4},
          0
        )

        // .fromTo(
        //   ".about-mobile",
        //   {y: 80, opacity: 0},
        //   {y: 0, opacity: 1, duration: 0.8},
        //   0
        // )
        .fromTo(
          // .fromTo(
          //   ".about-mobile",
          //   {y: 80, opacity: 0},
          //   {y: 0, opacity: 1, duration: 0.8},
          //   0
          // )
          ".about",
          {y: 80, opacity: 0},
          {y: 0, opacity: 1, duration: 0.4},
          0
        );

      return () => ctx.revert();
    }, comp);
  }, []);

  return (
    <div ref={comp} className="pb-[220px]">
      <div className="flex-col heros">
        <div
          className=" lg:mt-[1%] text-[10.6vw] lg:text-[11.9vw] font-bold text-[#414141] font-mina hero1"
          ref={textWrapper}
        >
          <span className="hover:text-[#808080] transition ease-in-out duration-3000">
            Hi,
          </span>{" "}
          <span className="hover:text-[#808080] transition ease-in-out duration-3000">
            I'm
          </span>{" "}
          <span className="text-[#808080]">Arkar Min</span>
          <span className="text-[#EA590D] fullstop">.</span>
        </div>
        <div className=" -mt-[15px] lg:-mt-[80px] text-[10.6vw] lg:text-[11vw] font-bold text-[#414141] font-mina hero2">
          <span className="hover:text-[#808080] transition ease-in-out duration-3000">
            I'm
          </span>{" "}
          <span className="hover:text-[#808080] transition ease-in-out duration-3000">
            a
          </span>{" "}
          <span className="hover:text-[#808080] transition ease-in-out duration-3000">
            jr.
          </span>
          <span className="hover:text-[#808080] transition ease-in-out duration-3000">
            web
          </span>{" "}
          <span className="hover:text-[#808080] transition ease-in-out duration-3000">
            Deve
          </span>
          <span className="text-[#EA590D] fullstop">-</span>
        </div>
        <div className=" -mt-[15px] lg:-mt-[80px] text-[10.6vw] lg:text-[11vw] font-bold text-[#414141] font-mina hover:text-[#808080]  hero3">
          loper<span className="text-[#EA590D]">.</span>
        </div>
        <div className="flex flex-col lg:flex-row md:flex-row  justify-between">
          <div className="  lg:stalk flex-row lg:ml-4 px-1">
            {/* <div className="flex justify-center mb-2 ">
              <img
                src="/akm.jpg"
                className=" hidden lg:block akm  bottom-0 w-[200px] "
                alt=""
              />
            </div> */}
            <p className=" stalk-text text-[#2F2F2F] font-merriweather font-bold">
              stalk me on
            </p>
            <div className="flex justify-between lg:justify-start md:gap-[60px] lg:gap-[60px] ">
              <div className="flex gap-4">
                <span class="relative inline-block group">
                  <span className="absolute inset-0 bg-[#EA590D] -bottom-4 h-1 w-1 group-hover:w-4 transition-all ease-in-out duration-10000"></span>
                  <span className="relative text-white">
                    <a
                      target="_blank"
                      href="https://github.com/Arkar03"
                      className="font-meriweather font-light text-[#777777]"
                    >
                      GH
                    </a>
                  </span>
                </span>
                <span className="relative inline-block group">
                  <span className="absolute inset-0 bg-[#EA590D] -bottom-4 h-1 w-1 group-hover:w-4 transition-all ease-in-out duration-10000"></span>
                  <span className="relative text-white">
                    <a
                      target="_blank"
                      href="https://www.facebook.com/Arkar.g20"
                      className="font-meriweather font-light text-[#777777]"
                    >
                      FB
                    </a>
                  </span>
                </span>
                <span className="relative inline-block group">
                  <span className="absolute inset-0 bg-[#EA590D] -bottom-4 h-1 w-1 group-hover:w-4 transition-all ease-in-out duration-10000"></span>
                  <span className="relative text-white">
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/arkar-min-08882a185/"
                      className="font-meriweather font-light text-[#777777]"
                    >
                      IN
                    </a>
                  </span>
                </span>
              </div>
              <div>
                <span className="relative inline-block group">
                  <span className="absolute inset-0 bg-[#EA590D] -bottom-4 h-1 w-1 group-hover:w-12 transition-all ease-in-out duration-10000"></span>
                  <span className="relative text-white">
                    <a
                      target="_blank"
                      href="/akmcv"
                      className="font-meriweather font-light text-[#777777]"
                    >
                      Download CV
                    </a>
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className=" text-[13px] lg:text-[16px] text-white relative  about  max-w-[450px] justify-center mt-12 px-12 lg:px-0 md:-mt-[10%] lg:-mt-[114px] text-justify align-bottom mr-0 lg:mr-10">
            <span className="font-caveat text-shadow-lg italic ">About </span>
            <span className="font-merriweather bg-[#111111]">
              I am a junior web developer based in Yangon, Myanmar, driven by a
              passion for problem-solving and a commitment to delivering
              high-quality code. Despite not having a computer science degree,
              my intensive self-learning has equipped me with knowledge of data
              structures and algorithms. Proficient in Laravel, I specialize in
              crafting progressive and skillable code for interactive digital
              experiences. My approach is rooted in continuous learning,
              ensuring that I stay updated with industry trends to create
              seamless and engaging web solutions
            </span>
            <img src="/quote.svg" className="absolute -top-24 -left-32 quote" />
            <img
              src="/profile.jpg"
              className=" rounded-md akm absolute lg:-left-[190px] lg:-bottom-[180px] md:-left-[100px] md:-bottom-[120px]  -bottom-[210px] left-5 w-[200px] lg:w-[245px] -z-10 "
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
