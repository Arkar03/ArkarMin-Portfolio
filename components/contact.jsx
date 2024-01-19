"use client";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useRef, useEffect} from "react";
import {gsap, Power4} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {Link as ScrollLink, animateScroll as scroll} from "react-scroll";

export default function Contact() {
  const textRef = useRef();
  const phRef = useRef();
  const comp = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: comp.current,
          start: "20% 80%",
          // end: "120% bottom",
          toggleActions: "restart reverse restart reverse",
          scrub: false,
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
      ).fromTo(
        ".contact",
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

  const copyTextToClipboard = () => {
    if (textRef.current.innerText === "arkarmin.mi@gmail.com") {
      const textToCopy = textRef.current.innerText;
      const tempTextarea = document.createElement("textarea");
      tempTextarea.value = textToCopy;

      document.body.appendChild(tempTextarea);
      tempTextarea.select();
      tempTextarea.setSelectionRange(0, 99999);

      document.execCommand("copy");
      document.body.removeChild(tempTextarea);
      console.log(textRef.current.innerText);
    }
  };
  const copyPhoneToClipboard = () => {
    // console.log(phRef.current.innerText)
    if (phRef.current.innerText === "+959890168605") {
      const textToCopy = phRef.current.innerText;
      const tempTextarea = document.createElement("textarea");
      tempTextarea.value = textToCopy;

      document.body.appendChild(tempTextarea);
      tempTextarea.select();
      tempTextarea.setSelectionRange(0, 99999);

      document.execCommand("copy");
      document.body.removeChild(tempTextarea);
      console.log(phRef.current.innerText);
    }
  };
  const notify = () =>
    toast.success("Copied to Clipboard", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  
  return (
    <div id="contact" ref={comp} className="pt-12 ">
      <hr id="contact" className="my-14 text-[#414141] head" />

      <h1
        id="contact-section"
        className="head text-[6vw] py-[100px] font-mina font-bold text-left flex justify-center"
      >
        <ScrollLink
          to="email"
          smooth={'ture'}
          duration={800}
          className="text-[#808080] hover:text-[#EA590D] transition-all ease-in-out duration-200"
        >
          TRYIN<span className="text-[#EA590D]">'</span> TO CONTACT ME{" "}
          <span className="text-[#EA590D]">?</span>
        </ScrollLink>
      </h1>
      <hr id="email" className=" contact my-14 text-[#414141]" />
      <div className=" contact flex flex-col py-12 group relative w-fit mx-auto">
        <a
          ref={textRef}
          href="mailto: arkarmin.mi@gmail.com?subject=Let's work together!!!"
          className="font-mina text-[3.5vw] text-[#808080] group-hover:text-[#EA590D] transition-all ease-in-out duration-200 cursor-pointer"
        >
          arkarmin.mi@gmail.com
        </a>
        <button
          onClick={() => {
            copyTextToClipboard();
            notify();
          }}
          className=" text-white hidden group-hover:block hover:bg-[#EA590D] transition-all ease-in-out duration-200  hover:text-black  absolute bottom-0 left-[17%] md:left-[35%] lg:left-[35%] text-[9px] lg:text-[17px] font-mina  border-2 border-[#777] px-[9px] py-[4px] lg:px-[18px] lg:py-[8px] rounded-md "
        >
          Click to Copy
        </button>
      </div>
      <hr className=" contact my-14 text-[#414141]" />
      <div className=" contact flex flex-col mx-auto w-fit relative py-12 group">
        <div
          ref={phRef}
          className="font-mina text-[3.5vw] text-[#808080] group-hover:text-[#EA590D] transition-all ease-in-out duration-200 cursor-pointer"
        >
          +959890168605
        </div>
        <button
          onClick={() => {
            copyPhoneToClipboard();
            notify();
          }}
          className=" text-white group-hover:block hidden absolute hover:bg-[#EA590D] transition-all ease-in-out duration-200 bottom-0 left-[17%] md:left-[35%] lg:left-[35%] text-[9px] lg:text-[17px]  hover:text-black w-fit mx-auto font-mina  border-2 border-[#777] px-[9px] py-[4px] lg:px-[18px] lg:py-[8px] rounded-md "
        >
          Click to Copy
        </button>
      </div>
      <hr className="mt-7 mb-7 text-[#414141] " />
    </div>
  );
}
