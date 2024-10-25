import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="container py-[4rem] primary-bg-color">
      <div className="col-[center-start/center-end] flex md:flex-row flex-col items-center justify-between mb-[1rem]">
        <div className="flex sm:justify-start justify-center md:mb-0 mb-[1rem]">
          <Link href="/">
            <img
              className="lg:w-[12rem] md:w-[10rem] w-[10rem]"
              src="solar-pro-logo-white.png"
              alt="solar pro logo"
            />
          </Link>
        </div>
        <div className="text-white flex sm:flex-row flex-col sm:space-x-2 sm:justify-end items-center text-center sm:space-y-0">
          <div className="flex space-x-2 sm:mb-0 mb-[1rem]">
            <span>call us:</span>
            <Link
              className="secondary-font-color hover:text-white"
              href="tel:4049878976"
            >
              404-987-8976
            </Link>
          </div>
          <span className="sm:block hidden">|</span>
          <Link
            className="secondary-font-color hover:text-white"
            href="mailto:office@usasolarpro.com"
          >
            office@usasolarpro.com
          </Link>
        </div>
      </div>
      <div className="col-[center-start/center-end] items-center flex sm:flex-row flex-col md:justify-end justify-center space-x-4 sm:space-y-0 space-y-4">
        <Link
          className="text-sm secondary-font-color hover:text-white transform transition duration-200 hover:scale-110"
          href="/privacypolicy"
        >
          Privacy Policy
        </Link>
        <Link
          className="text-sm secondary-font-color hover:text-white transform transition duration-200 hover:scale-110"
          href="/aboutus"
        >
          About Us
        </Link>
        <Link
          className="text-sm secondary-font-color hover:text-white transform transition duration-200 hover:scale-110"
          href="contact"
        >
          Contact Us
        </Link>
      </div>
      <hr className="col-[center-start/center-end] gray-bg-color my-[1rem]" />
      <div className="col-[center-start/center-end] flex sm:flex-row items-center flex-col-reverse sm:justify-between">
        <div className="flex items-center sm:justify-start justify-center">
          <p className="text-xs text-white">copy right @ Solar Pro USA 2021.</p>
        </div>
        <div className="flex items-center sm:justify-end justify-center sm:mb-0 mb-[2rem]">
          <p className="text-sm text-white">Follow us</p>
          <Link
            target="_blank"
            href="https://www.facebook.com/solar.pro.16?mibextid=ZbWKwL"
          >
            <img
              className="w-6 mx-2 transform transition duration-200 hover:scale-110"
              src="footer/facebook.svg"
              alt="facebook"
            />
          </Link>
          <Link target="_blank" href="https://www.youtube.com/@usasolarpro">
            <img
              className="w-6 mx-2 transform transition duration-200 hover:scale-110"
              src="footer/youtube.svg"
              alt="twitter"
            />
          </Link>
          <Link
            target="_blank"
            href="https://instagram.com/usasolarpro?igshid=ZDdkNTZiNTM="
          >
            <img
              className="w-6 mx-2 transform transition duration-200 hover:scale-110"
              src="footer/instagram.svg"
              alt="instagram"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};
