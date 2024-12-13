import Image from "next/image";
import RecommendationCar from "./components/recommendation-car";
import PopularCarSection from "./components/popular-car";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#F6F7F9] font-PlusJakartaSans flex items-start 
                       justify-between">
      <div className="flex flex-col items-start justify-between px-5 md:px-[34px] mx-auto">
        {/*Hero Section*/}

        <div
          className="flex md:flex-row md:space-x-[32px] items-center justify-center mt-8 flex-col md:space-y-0 
        space-y-6 mx-auto"
        >
          <div
            className="rounded-[10px] object-cover md:mx-0 mx-auto
          md:w-[620px] md:h-[320px] w-[310px] h-[390px] bg-blue-400 hover:scale-105 transition"
          >
            <Image
              src="/images/Ads 1.png"
              height={360}
              width={640}
              alt="Ad 1"
            />

            <div className="flex flex-col space-y-[16px] z-10 md:ml-6 text-white md:-mt-80 -mt-[148px] ml-4">
              <h2 className="text-[32px] font-semibold">
                The Best Platform <br /> for Car Rental
              </h2>
              <p className="text-[16px] font-medium">
                Ease of doing a car rental safely and <br /> reliably. Of course
                at a low price.
              </p>

              <Link href="/car-rent">
                <button
                  className="rounded space-x-2 px-5 bg-[#3563E9] text-[16px] font-medium text-white
           h-[44px] w-[120px] hover:bg-blue-800"
                >
                  Rental Car
                </button>
              </Link>
            </div>

            <Image
              src="/images/image 7.png"
              height={108}
              width={340}
              alt="car-image"
              className="z-50
              md:ml-[150px] mb-8 md:-mt-2 mt-8"
            />
          </div>

          <div
            className="rounded-[10px] object-cover md:w-[620px] md:h-[320px] 
          w-[340px] h-[400px] bg-blue-600 md:block hidden hover:scale-105 transition"
          >
            <Image
              src="/images/Ads 2.png"
              height={360}
              width={640}
              alt="Ad 2"
            />

            <div className="flex flex-col space-y-[16px] z-10 ml-6 text-white md:-mt-80 -mt-40">
              <h2 className="text-[32px] font-semibold">
                The Best Platform <br /> for Car Rental
              </h2>
              <p className="text-[16px] font-medium">
                Providing cheap car rental services <br />
                and safe and comfortable facilities.
              </p>

              <Link href="/car-rent">
                <button
                  className="rounded space-x-2 px-5 bg-[#54A6FF] text-[16px] font-medium text-white
           h-[44px] w-[120px] hover:bg-blue-300"
                >
                  Rental Car
                </button>
              </Link>
            </div>

            <Image
              src="/images/image 8.png"
              height={108}
              width={340}
              alt="car-image"
              className="z-50
              md:ml-[150px] mb-10 md:-mt-4 mt-6"
            />
          </div>
        </div>

        {/*--------------------------------------------------------------------------------------------------------*/}

        {/*--------------*/}
        <div
          className="flex flex-col md:flex-row md:items-center md:justify-center gap-4 md:mt-[68px] p-6  
        md:space-x-[34px] mb-[36px] items-start justify-center mx-auto mt-6"
        >
          {/* Pick-Up */}
          <div
            className="md:flex-1 items-start justify-between bg-white shadow-md 
          p-8 rounded-lg flex flex-col"
          >
            <div className="flex-1 items-start justify-between">
              <div className="flex space-x-3 items-center justify-start">
                <div className="rounded-full h-2 w-2 bg-[#3563E9] ring-4 ring-[#3563E9] ring-opacity-30"></div>
                <h3 className="text-[18px] font-semibold text-[#1A202C]">
                  Pick-Up
                </h3>
              </div>

              <div className="md:space-x-6 md:flex mt-4 mx-auto grid md:space-y-0 space-y-3">
                <div className="space-y-2 flex flex-col">
                  <label className="text-[16px] font-bold text-[#1A202C]">
                    Locations
                  </label>
                  <select
                    className="w-full md:w-[130px] border-0 text-[#90A3BF] font-medium
                   text-[12px] bg-transparent md:p-0 p-2 md:rounded-none rounded-md"
                  >
                    <option>Select your city</option>
                  </select>
                </div>
                <div className="mx-[24px] w-[1px] bg-[#C3D4E9] opacity-40">
                  {" "}
                </div>
                <div className="space-y-2 flex-col flex">
                  <label className="text-[16px] font-bold text-[#1A202C]">
                    Date
                  </label>
                  <select
                    className="w-full md:w-[130px] border-0 text-[#90A3BF] font-medium
                   text-[12px] bg-transparent md:p-0 p-2 md:rounded-none rounded-md"
                  >
                    <option>Select your date</option>
                  </select>
                </div>
                <div className="mx-[24px] w-[1px] bg-[#C3D4E9] opacity-40">
                  {" "}
                </div>
                <div className="space-y-2 flex-col flex">
                  <label className="text-[16px] font-bold text-[#1A202C]">
                    Time
                  </label>
                  <select
                    className="w-full md:w-[130px] border-0 text-[#90A3BF] font-medium
                   text-[12px] bg-transparent md:p-0 p-2 md:rounded-none rounded-md"
                  >
                    <option>Select your time</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Swap Button */}
          <div className=" flex items-center justify-center md:ml-0 ">
            <button
              className="bg-[#3563E9] p-4 shadow-lg hover:bg-blue-400
            items-center justify-center rounded-lg md:ml-0 ml-20"
            >
              <Image
                src="/images/Swap.png"
                height={24}
                width={24}
                alt="Swap"
                className="z-10 text-white"
              />
            </button>
          </div>

          {/* Drop-Off */}
          <div
            className="md:flex-1 items-start justify-between bg-white shadow-md
           p-8 rounded-lg flex flex-col"
          >
            <div className="flex-1 items-start justify-between">
              <div className="flex space-x-3 items-center justify-start">
                <div className="rounded-full h-2 w-2 bg-[#3563E9] ring-4 ring-[#5CAFFC] ring-opacity-30"></div>
                <h3 className="text-[18px] font-semibold text-[#1A202C]">
                  Drop-Off
                </h3>
              </div>

              <div className="md:space-x-6 md:flex mt-4 mx-auto grid md:space-y-0 space-y-3">
                <div className="space-y-2 flex flex-col">
                  <label className="text-[16px] font-bold text-[#1A202C]">
                    Locations
                  </label>
                  <select
                    className="w-full md:w-[130px] border-0 text-[#90A3BF] font-medium 
                  text-[12px] bg-transparent md:p-0 p-2 md:rounded-none rounded-md"
                  >
                    <option>Select your city</option>
                  </select>
                </div>
                <div className="mx-[24px] w-[1px] bg-[#C3D4E9] opacity-40">
                  {" "}
                </div>
                <div className="space-y-2 flex-col flex">
                  <label className="text-[16px] font-bold text-[#1A202C]">
                    Date
                  </label>
                  <select
                    className="w-full md:w-[130px] border-0 text-[#90A3BF] font-medium 
                    text-[12px] bg-transparent md:p-0 p-2 md:rounded-none rounded-md"
                  >
                    <option>Select your date</option>
                  </select>
                </div>
                <div className="mx-[24px] w-[1px] bg-[#C3D4E9] opacity-40">
                  {" "}
                </div>
                <div className="space-y-2 flex-col flex">
                  <label className="text-[16px] font-bold text-[#1A202C]">
                    Time
                  </label>
                  <select
                    className="w-full md:w-[130px] border-0 text-[#90A3BF] font-medium 
                    text-[12px] bg-transparent md:p-0 p-2 md:rounded-none rounded-md"
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
        <div className="flex items-center justify-center mx-auto">
          <PopularCarSection />
        </div>

        {/*--------------------------------------------------------------------------------------------------------*/}

        {/* Recommendation Car Section */}
        <div className="flex items-center justify-center mx-auto">
          <RecommendationCar />
        </div>
        {/*--------------------------------------------------------------------------------------------------------*/}
      
      </div>
    </main>
  );
}
