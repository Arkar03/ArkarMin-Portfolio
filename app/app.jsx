"use client";
import Certificates from "@/components/certificates";
import Recent from "@/components/recent";
import Nav from "@/components/nav";
import Hero from "@/components/hero";
import Tech from "@/components/tech";
import Knowledge from "@/components/knowledge";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import {useEffect, useRef, useState} from "react";

export default function App() {
  const [preloader, setPreloader] = useState(false);
  const [timer, setTimer] = useState(4);

  const id = useRef(null);

  const clear = () => {
    window.clearInterval(id.current);
    setPreloader(false);
  };

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer(timer => timer - 1);
    }, 1000);
  }, []);

  // useLocoScroll(!preloader);
  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);
  return (
    <>
      {preloader ? (
        <div>loading</div>
      ) : (
        <div
          id="nav"
          className="bg-[#111111] px-[16px] lg:px-[40px] overflow-hidden max-w-full"
        >
          <Nav />
          <Hero />
          <div className="my-24"></div>
          <Tech />
          <Knowledge />
          <Certificates />
          <Recent />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}
