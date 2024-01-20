import React, {useEffect, useState} from "react";

const Progress = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollY = window.scrollY;

      const scrollPercent = (scrollY / (documentHeight - windowHeight)) * 100;
      setScrollPercent(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <div
      id="progress-container"
      className="w-full h-[4px] bg-none fixed top-0 left-0 right-0 z-50"
    >
      <div
        className="progress-fill h-full bg-[#EA590D] "
        style={{
          width: `${scrollPercent}%`,
        }}
      ></div>
    </div>
  );
};

export default Progress;
