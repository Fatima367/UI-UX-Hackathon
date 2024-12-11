import Image from "next/image";
import RecommendationCar from "./components/recommendation-car";
import PopularCarSection from "./components/popular-car";

export default function Home() {
  return (
    <main
      className="bg-[#F6F7F9] w-screen font-PlusJakartaSans flex items-start 
    justify-between mx-auto"
    >
      <div className="flex flex-col items-start justify-between px-5 md:px-[34px]">
        {/*Hero Section*/}

        <div
          className="flex md:flex-row md:space-x-[32px] items-center justify-center mt-8 flex-col md:space-y-0 
        space-y-6 mx-auto"
        >
          <div className="rounded-[10px] object-cover md:w-[620px] md:h-[320px] w-[340px] h-[400px] bg-blue-400">
            <Image
              src="/images/Ads 1.png"
              height={360}
              width={640}
              alt="Ad 1"
            />

            <div className="flex flex-col space-y-[16px] z-10 ml-6 text-white md:-mt-80 -mt-40">
              <h2 className="text-[32px] font-semibold">
                The Best Platform <br /> for Car Rental
              </h2>
              <p className="text-[16px] font-medium">
                Ease of doing a car rental safely and <br /> reliably. Of course
                at a low price.
              </p>

              <button
                className="rounded space-x-2 px-5 bg-[#3563E9] text-[16px] font-medium text-white
           h-[44px] w-[120px]"
              >
                Rental Car
              </button>
            </div>

            <Image
              src="/images/image 7.png"
              height={108}
              width={340}
              alt="car-image"
              className="z-50
              md:ml-[150px] mb-8 md:-mt-2 mt-6"
            />
          </div>

          <div
            className="rounded-[10px] object-cover md:w-[620px] md:h-[320px] 
          w-[340px] h-[400px] bg-blue-600 md:block hidden"
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

              <button
                className="rounded space-x-2 px-5 bg-[#54A6FF] text-[16px] font-medium text-white
           h-[44px] w-[120px]"
              >
                Rental Car
              </button>
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
          className="flex flex-col md:flex-row md:items-center md:justify-center gap-4 mt-[68px] p-6  
        md:space-x-[34px] mb-[36px] items-start justify-center mx-auto"
        >
          {/* Pick-Up */}
          <div
            className="md:flex-1 items-start justify-between bg-white shadow-md 
          p-7 rounded-lg flex flex-col"
          >
            <div className="flex space-x-2 items-center justify-center">
              <div className="rounded-full h-2 w-2 bg-[#3563E9] ring-4 ring-[#3563E9] ring-opacity-30"></div>
              <h3 className="text-lg font-medium">Pick-Up</h3>
            </div>

            <div className="md:flex grid-cols-3 px-[48px] md:space-x-6 mt-4 -mx-14 space-y-4">
              <div className="space-y-2">
                <label className="text-[16px] font-bold text-[#1A202C]">
                  Locations
                </label>
                <select className="w-full border rounded-md p-2 px-2">
                  <option className="text-[#90A3BF] font-medium text-[12px]">
                    Select your city
                  </option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[16px] font-bold text-[#1A202C]">
                  Date
                </label>
                <select className="w-full border rounded-md p-2 px-2">
                  <option className="text-[#90A3BF] font-medium text-[12px]">
                    Select your date
                  </option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[16px] font-bold text-[#1A202C]">
                  Time
                </label>
                <select className="w-full border rounded-md p-2 px-2">
                  <option className="text-[#90A3BF] font-medium text-[12px]">
                    Select your time
                  </option>
                </select>
              </div>
            </div>
          </div>

          {/* Swap Button */}
          <div className=" flex items-center justify-center md:ml-0 ml-8">
            <button
              className="bg-[#3563E9] p-4 shadow-lg hover:bg-blue-600
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
           p-7 rounded-lg flex flex-col"
          >
            <div className="flex space-x-2 items-center justify-center">
              <div className="rounded-full h-2 w-2 bg-[#3563E9] ring-4 ring-[#3563E9] ring-opacity-30"></div>
              <h3 className="text-lg font-medium">Drop-Off</h3>
            </div>

            <div className="md:flex grid-cols-3 px-[48px] md:space-x-6 mt-4 -mx-14 space-y-4">
              <div className="space-y-2">
                <label className="text-[16px] font-bold text-[#1A202C]">
                  Locations
                </label>
                <select className="w-full border rounded-md p-2 px-2">
                  <option className="text-[#90A3BF] font-medium text-[12px]">
                    Select your city
                  </option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[16px] font-bold text-[#1A202C]">
                  Date
                </label>
                <select className="w-full border rounded-md p-2 px-2">
                  <option className="text-[#90A3BF] font-medium text-[12px]">
                    Select your date
                  </option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[16px] font-bold text-[#1A202C]">
                  Time
                </label>
                <select className="w-full border rounded-md p-2 px-2">
                  <option className="text-[#90A3BF] font-medium text-[12px]">
                    Select your time
                  </option>
                </select>
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
