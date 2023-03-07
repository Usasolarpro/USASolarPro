import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setisMobile] = useState(false);

  useEffect(() => {
    //check if is loading on desktop or mobile
    const details = navigator.userAgent;
    const regexp =
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i;
    setisMobile(regexp.test(details));
    if (!isMobile) {
      videoRef?.current?.play();
    }
  }, [isMobile]);

  return (
    <header className="col-[full-start/full-end] flex justify-start items-center h-screen relative overflow-hidden custom-img-gradient">
      <div className="sm:w-[30rem] xl:ml-[12rem] md:ml-[6rem] md:px-0 px-[2rem]">
        <h1 className="text-5xl font-bold primary-font-color">
          The time for <span className="secondary-font-color">solar</span> is
          now
        </h1>
        <p className="py-5 text-xl font-normal primary-font-color">
          Here at Solar Pro, we thrive on providing innovative solutions to our
          customers
        </p>
        <div className="transform transition duration-200 hover:scale-110 hover:translate-x-5">
          <Link
            href="contact"
            className="px-8 py-2 secondary-bg-color text-white rounded-md transform transition duration-200 hover:scale-110 hover:translate-x-5"
          >
            Get a Quote
          </Link>
        </div>
      </div>
      {!isMobile ? (
        <video
          className="video absolute object-cover h-full z-[-1]"
          muted
          loop
          ref={videoRef}
        >
          <source src="hero/hero-mp4.mp4" type="video/mp4" />
          <source src="hero/hero-webm.webm" type="video/webm" />
        </video>
      ) : (
        <Image
          className="object-cover z-[-1]"
          src="https://images.unsplash.com/flagged/photo-1566838634698-48b165cb0a9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="Solar Energy House"
          priority
          fill
        />
      )}
    </header>
  );
};
