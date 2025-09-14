import Image from "next/image";
import RecommendationCar from "./components/recommendation-car";
import PopularCarSection from "./components/popular-car";
import Link from "next/link";
import Navbar from "./navbar/Navbar";
import NavbarMobile from "./navbar/NavbarMobile";

export default function Home() {
  return (
    <section className="bg-[#F6F7F9] font-PlusJakartaSans relative">
      <Navbar />
      <NavbarMobile />

      <div className="flex flex-col items-center justify-center px-5 lg:px-4 mx-auto">
        {/*Hero Section*/}

        <div
          className="flex lg:flex-row lg:space-x-8 items-center justify-center mt-8 flex-col lg:space-y-0 
        space-y-6 mx-auto relative"
        >
          <div
            className="rounded-lg object-cover lg:mx-0 mx-auto relative
          lg:w-[48%] md:w-full md:h-80 lg:h-80 w-80 h-96 bg-blue-400 hover:scale-105 transition"
          >
            <Image
              src="/images/Ads 1.png"
              height={360}
              width={640}
              alt="Ad 1"
            />

            <div
              className="flex flex-col space-y-4 z-10 text-white absolute lg:top-5 lg:left-6
            top-4 left-5 "
            >
              <h2 className="text-[32px] font-semibold">
                The Best Platform <br /> for Car Rental
              </h2>
              <p className="text-base font-medium">
                Ease of doing a car rental safely and <br /> reliably. Of course
                at a low price.
              </p>

              <Link href="/car-rent">
                <button
                  className="rounded space-x-2 px-5 bg-[#3563E9] text-base font-medium text-white
           h-11 w-[120px] hover:bg-blue-800"
                >
                  Rental Car
                </button>
              </Link>
            </div>

            <div className="flex items-center justify-center mx-auto">
              <Image
                src="/images/image 7.png"
                height={118}
                width={340}
                alt="car-image"
                className="z-20 absolute lg:top-60 md:top-60 lg:my-auto lg:bottom-auto bottom-4"
              />
            </div>
          </div>

          <div
            className="rounded-lg lg:w-[48%] lg:h-80 w-80 h-96 bg-blue-600 lg:block hidden 
            hover:scale-105 transition relative"
          >
            <Image
              src="/images/Ads 2.png"
              height={360}
              width={640}
              alt="Ad 2"
            />

            <div
              className="flex flex-col space-y-4 z-10 text-white absolute lg:top-5 lg:left-6
            top-4 left-5"
            >
              <h2 className="text-[32px] font-semibold">
                The Best Platform <br /> for Car Rental
              </h2>
              <p className="text-base font-medium">
                Providing cheap car rental services <br />
                and safe and comfortable facilities.
              </p>

              <Link href="/car-rent">
                <button
                  className="rounded space-x-2 px-5 bg-[#54A6FF] text-base font-medium text-white
           h-11 w-[120px] hover:bg-blue-300"
                >
                  Rental Car
                </button>
              </Link>
            </div>

            <div className="flex items-center justify-center ">
              <Image
                src="/images/image 8.png"
                height={108}
                width={340}
                alt="car-image"
                className="z-50 absolute lg:top-56 lg:my-auto lg:bottom-auto bottom-4"
              />
            </div>
          </div>
        </div>

        {/*--------------------------------------------------------------------------------------------------------*/}

        {/*--------------*/}
        <div
          className="flex flex-col lg:flex-row lg:items-center lg:gap-x-4 lg:-space-y-0
        lg:space-x-6 mb-9 items-center justify-center mx-auto relative lg:max-w-[100%] 
        -space-y-2 md:flex-row lg:mt-16 md:mt-20 mt-6"
        >
          {/* Pick-Up */}
          <div
            className="lg:flex-1 items-start justify-between bg-white shadow-md 
           lg:p-8 p-6 rounded-lg flex flex-col relative lg:h-40 lg:w-[36rem] w-[20rem]"
          >
            <div className="flex-1 items-start justify-between">
              <div className="flex space-x-3 items-center justify-start lg:absolute lg:top-6 lg:left-8">
                <div className="rounded-full h-2 w-2 bg-[#3563E9] ring-4 ring-[#3563E9] ring-opacity-30"></div>
                <h3 className="text-lg font-semibold text-[#1A202C]">
                  Pick-Up
                </h3>
              </div>

              <div
                className="lg:space-x-4 space-x-2 flex mt-4 mx-auto
              lg:absolute lg:top-14 lg:left-8"
              >
                <div className="space-y-2 flex flex-col">
                  <label 
                  htmlFor="pickup-location-select"
                  className="text-base font-bold text-[#1A202C]">
                    Locations
                  </label>
                  <select
                    id="pickup-location-select"
                    className="w-full lg:w-[110%] border-0 text-[#90A3BF] font-medium
                   text-xs bg-transparent lg:p-0 p-2 lg:rounded-none rounded-md"
                  >
                    <option>Select your city</option>
                  </select>
                </div>
                <div className="mx-5 w-[1px] bg-[#C3D4E9] opacity-40"> </div>
                <div className="space-y-2 flex-col flex">
                  <label 
                  htmlFor="pickup-date-select"
                  className="text-base font-bold text-[#1A202C] lg:ml-0 ml-1">
                    Date
                  </label>
                  <select
                    id="pickup-date-select"
                    className="w-full lg:w-[110%] border-0 text-[#90A3BF] font-medium
                   text-xs bg-transparent lg:p-0 p-2 lg:rounded-none rounded-md"
                  >
                    <option>Select your date</option>
                  </select>
                </div>
                <div className="mx-5 w-[1px] bg-[#C3D4E9] opacity-40"> </div>
                <div className="space-y-2 flex-col flex">
                  <label 
                  htmlFor="pickup-time-select"
                  className="text-base font-bold text-[#1A202C] lg:ml-0 ml-1">
                    Time
                  </label>
                  <select
                  id="pickup-time-select"
                    className="w-full lg:w-[110%] border-0 text-[#90A3BF] font-medium
                   text-xs bg-transparent lg:p-0 p-2 lg:rounded-none rounded-md"
                  >
                    <option>Select your time</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Swap Button */}
          <div className=" flex items-center justify-center">
            <button
              className="bg-[#3563E9] p-4 shadow-lg hover:bg-blue-400
            items-center justify-center rounded-lg h-14 w-14 relative z-10"
            >
              <Image
                src="/images/Swap.png"
                height={24}
                width={24}
                alt="Swap"
                className="z-10 text-white absolute top-4"
              />
            </button>
          </div>

          {/* Drop-Off */}
          <div
            className="lg:flex-1 items-start justify-between bg-white shadow-md
           lg:p-8 p-6 rounded-lg flex flex-col relative lg:h-40 lg:w-[36rem] w-[20rem]"
          >
            <div className="flex-1 items-start justify-between">
              <div className="flex space-x-3 items-center justify-start lg:absolute lg:top-6 lg:left-8">
                <div className="rounded-full h-2 w-2 bg-[#3563E9] ring-4 ring-[#5CAFFC] ring-opacity-30"></div>
                <h3 className="text-lg font-semibold text-[#1A202C]">
                  Drop-Off
                </h3>
              </div>

              <div
                className="lg:space-x-4 space-x-2 flex mt-4 mx-auto
              lg:absolute lg:top-14 lg:left-8"
              >
                <div className="space-y-2 flex flex-col">
                  <label
                    htmlFor="dropoff-location-select"
                    className="text-base font-bold text-[#1A202C]"
                  >
                    Locations
                  </label>
                  <select
                    id="dropoff-location-select"
                    className="w-full lg:w-[110%] border-0 text-[#90A3BF] font-medium 
                    text-xs bg-transparent lg:p-0 p-2 lg:rounded-none rounded-md"
                  >
                    <option>Select your city</option>
                  </select>
                </div>
                <div className="mx-6 w-[1px] bg-[#C3D4E9] opacity-40"> </div>
                <div className="space-y-2 flex-col flex">
                  <label 
                  htmlFor="dropoff-date-select"
                  className="text-base font-bold text-[#1A202C] lg:ml-0 ml-1">
                    Date
                  </label>
                  <select
                  id="dropoff-date-select"
                    className="w-full lg:w-[110%] border-0 text-[#90A3BF] font-medium 
                    text-xs bg-transparent lg:p-0 p-2 lg:rounded-none rounded-md"
                  >
                    <option>Select your date</option>
                  </select>
                </div>
                <div className="mx-6 w-[1px] bg-[#C3D4E9] opacity-40"> </div>
                <div className="space-y-2 flex-col flex">
                  <label 
                  htmlFor="dropoff-time-select"
                  className="text-base font-bold text-[#1A202C] lg:ml-0 ml-1">
                    Time
                  </label>
                  <select
                  id="dropoff-time-select"
                    className="w-full lg:w-[110%] border-0 text-[#90A3BF] font-medium 
                    text-xs bg-transparent lg:p-0 p-2 lg:rounded-none rounded-md"
                  >
                    <option>Select your time</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*--------------------------------------------------------------------------------------------------------*/}

        {/* Popular Car Section */}
        <PopularCarSection />

        {/*--------------------------------------------------------------------------------------------------------*/}

        {/* Recommendation Car Section */}
        <RecommendationCar />
        {/*--------------------------------------------------------------------------------------------------------*/}
      </div>
    </section>
  );
}
