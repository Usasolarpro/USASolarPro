import Head from "next/head";
import { HeroServices } from "../components/HeroServices";
import Link from "next/link";
import { CallToAction } from "../components/CallToAction";
import { VideoSection } from "../components/VideoSection";

const solarSystems = () => {
  return (
    <div className="container">
      <Head>
        <title>USA Solar Pro - Premium Solar Systems</title>
        <meta
          name="description"
          content="Experience the ultimate in solar energy technology and performance with our premium solar systems. Our team of experts will design and install a high-quality system that maximizes your energy production and savings. Trust us to provide a reliable and efficient energy solution that enhances your home or business and demonstrates your commitment to sustainability."
        />
      </Head>

      {/* Hero Services */}

      <section className="col-[full-start/full-end]">
        <HeroServices
          imageUrl="https://images.unsplash.com/flagged/photo-1566838616631-f2618f74a6a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
          heading="Premium"
          headingColor="Solar Systems"
          message="Solar Pro offers the highest efficiency and affordability traditional solar panels. Our professionalism and experience qualify us to offer the highest warranty in the market which goes up to 25 years on your critical components.
          We pair your premium solar panels with the elite manufacturers of micro-inverters, DC optimizers, and string inverters to convert the sunlight on your solar panels into CLEAN energy."
        />
      </section>

      {/* boucher section */}

      <section className="col-[full-start/full-end] container what-you-get-wave bg-no-repeat bg-cover">
        <div className="md:col-[center-start/center-end] col-[full-start/full-end] px-[2rem] primary-font-color py-[4rem]">
          <div className="flex flex-col space-y-4">
            <div>
              <p className="font-bold">Beauty</p>
              <p>
                Apollo Tile II is designed to match the profile of flat concrete
                tiles, visually blending into your roof for a look that a
                standard rack-mounted system cannot match. A black solar
                laminate with a custom colored frame, it perfectly complements a
                variety of earth-toned tile colors.
              </p>
            </div>
            <div>
              <p className="font-bold">Efficiency</p>
              <p>
                14 high-efficiency monocrystalline silicon solar cells provide a
                power rating of 63 watts per solar shingle.
              </p>
            </div>
            <div>
              <p className="font-bold">Simple to Install</p>
              <p>
                No need to find rafters or flash penetrations in the roofing
                system. Solar shingles are installed directly into the roof
                sheathing using standard deck screws. Fastening points are
                covered by subsequent solar shingles, the same way that asphalt
                shingles are installed.
              </p>
            </div>
            <div>
              <p className="font-bold">Wind Resistant</p>
              <p>
                The Apollo Tile II system can be installed in any wind zone,
                including Florida's high velocity hurricane zone.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="col-[full-start/full-end] md:col-[center-start/center-end] w-full">
        <CallToAction
          header="We can help you calculate"
          headerColor="financing!"
          button={true}
        />
      </div>

      {/* What Includes */}

      <section className="col-[full-start/full-end] container whats-included-wave bg-no-repeat bg-cover pb-[2rem]">
        <div className="col-[full-start/full-end] md:col-[center-start/center-end]">
          <div className="flex flex-col lg:m-[8rem] mx-[2rem] mt-[4rem] space-y-[1rem] primary-font-color shadow-xl rounded-md md:p-[4rem] p-[2rem] bg-white">
            <p className="secondary-font-color text-xl font-bold uppercase text-center pb-[2rem]">
              What's included
            </p>
            <div className="flex justify-between font-bold sm:text-base text-sm">
              <p className="sm:max-w-[100%] max-w-[12rem]">
                PREMIUM SOLAR SYSTEMS WARRANTY
              </p>
              <p className="md:mr-[2rem]">COVERAGE</p>
            </div>
            <hr className="col-[center-start/center-end] row-start-3 gray-bg-color my-[2rem]" />
            <div className="flex justify-between sm:text-base text-sm">
              <p className="sm:max-w-[100%] max-w-[12rem]">
                Solar Module Power Output
              </p>
              <p className="md:mr-[3rem]">25 Years</p>
            </div>
            <hr className="col-[center-start/center-end] row-start-3 gray-bg-color my-[2rem]" />
            <div className="flex justify-between sm:text-base text-sm">
              <p className="sm:max-w-[100%] max-w-[12rem]">
                Microinverters and DC Optimizers
              </p>
              <p className="md:mr-[3rem]">25 years</p>
            </div>
            <hr className="col-[center-start/center-end] row-start-3 gray-bg-color my-[2rem]" />
            <div className="flex justify-between sm:text-base text-sm">
              <p className="sm:max-w-[100%] max-w-[12rem]">Mounting System</p>
              <p className="md:mr-[3rem]">25 Years</p>
            </div>
            <hr className="col-[center-start/center-end] row-start-3 gray-bg-color my-[2rem]" />
            <div className="flex justify-between sm:text-base text-sm">
              <p className="sm:max-w-[100%] max-w-[12rem]">Flashing</p>
              <p className="md:mr-[3rem]">25 Years</p>
            </div>
            <hr className="col-[center-start/center-end] row-start-3 gray-bg-color my-[2rem]" />
            <div className="flex justify-between sm:text-base text-sm">
              <p className="sm:max-w-[100%] max-w-[12rem]">
                DC Optimized Inverter
              </p>
              <p className="md:mr-[3rem]">12 Years</p>
            </div>
            <hr className="col-[center-start/center-end] row-start-3 gray-bg-color my-[2rem]" />
            <div className="flex justify-between sm:text-base text-sm pb-[2rem]">
              <p className="sm:max-w-[100%] max-w-[12rem]">
                Master Solar Installer
              </p>
              <p className="md:mr-[3rem]">25 Years</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}

      <section className="col-[full-start/full-end] container relative">
        <div className="absolute gray-bg-color px-[15rem] lg:py-[18rem] rounded-l-lg right-0 top-[10%]" />
        <div className="absolute dots px-[10rem] lg:py-[18rem] right-0 top-[9.5%] bg-no-repeat bg-center" />
        <div className="col-[full-start/full-end] md:col-[center-start/center-end] py-[5rem] lg:py-[10rem] z-10">
          <VideoSection />
        </div>
      </section>
    </div>
  );
};

export default solarSystems;
