"use client";
import {ReactLenis, useLenis} from "@studio-freight/react-lenis";

function SmoothScroll({children}) {
  return (
    <ReactLenis
      root
      option={{
        lerp: 1,
        duration: 10000,
        smoothTouch: true,
        easing: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
export default SmoothScroll;
