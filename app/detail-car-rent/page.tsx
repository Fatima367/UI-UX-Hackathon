"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { MouseEvent, useState } from "react";

const DetailCarRent = () => {
  const [progress, setProgress] = useState(70);

  const increaseProgress = (e: MouseEvent<HTMLDivElement>) => {
    setProgress((prev) => Math.min(prev + 10, 100));
  };

  const decreaseProgress = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation(); // Prevent triggering the parent click
    setProgress((prev) => Math.max(prev - 10, 0));
  };

  const [isFav1, setIsFav1] = useState(false); // Card 1
  const [isFav2, setIsFav2] = useState(true); // Card 2
  const [isFav3, setIsFav3] = useState(true); // Card 3
  const [isFav4, setIsFav4] = useState(true); // Card 3
  const [isFav5, setIsFav5] = useState(false); // Card 3
  const [isFav6, setIsFav6] = useState(true); // Card 3

  return (
    <div className="bg-[#F6F7F9]">
      <div className="flex flex-col items-center justify-center bg-[#F6F7F9]">
        <div className="flex">
          {/*Left*/}
          <div
            className="lg:ml-0 lg:flex lg:flex-col lg:visible hidden lg:h-[2016px] bg-white
         lg:w-[310px]"
          >
            <div className="flex flex-col space-y-4 mr-4 mt-10 ml-8">
              <p className="text-[#90A3BF] text-base">T Y P E</p>
              <p className="text-xl font-medium">
                <Checkbox className="mr-2" checked /> Sport{" "}
                <span className="ml-2 text-[#90A3BF] text-base">(10)</span>
              </p>
              <p className="text-xl font-medium">
                <Checkbox className="mr-2" checked /> SUV{" "}
                <span className="ml-2 text-[#90A3BF] text-base">(12)</span>
              </p>
              <p className="text-xl font-medium">
                <Checkbox className="mr-2" /> MPV{" "}
                <span className="ml-2 text-[#90A3BF] text-base">(16)</span>
              </p>
              <p className="text-xl font-medium">
                <Checkbox className="mr-2" /> Sedan{" "}
                <span className="ml-2 text-[#90A3BF] text-base">(20)</span>
              </p>
              <p className="text-xl font-medium">
                <Checkbox className="mr-2" /> Cope{" "}
                <span className="ml-2 text-[#90A3BF] text-base">(14)</span>
              </p>
              <p className="text-xl font-medium">
                <Checkbox className="mr-2" /> Hatchback{" "}
                <span className="ml-2 text-[#90A3BF] text-base">(14)</span>
              </p>
            </div>

            <div className="flex flex-col space-y-4 mr-4 mt-14 ml-8">
              <p className="text-[#90A3BF] text-base">C A P A C I T Y</p>
              <p className="text-xl font-medium">
                <Checkbox className="mr-2" checked /> 2 Person{" "}
                <span className="ml-2 text-[#90A3BF] text-base">(10)</span>
              </p>
              <p className="text-xl font-medium">
                <Checkbox className="mr-2" /> 4 Person{" "}
                <span className="ml-2 text-[#90A3BF] text-base">(14)</span>
              </p>
              <p className="text-xl font-medium">
                <Checkbox className="mr-2" /> 6 Person{" "}
                <span className="ml-2 text-[#90A3BF] text-base">(12)</span>
              </p>
              <p className="text-xl font-medium">
                <Checkbox className="mr-2" checked /> 8 Person{" "}
                <span className="ml-2 text-[#90A3BF] text-base">(16)</span>
              </p>
            </div>

            <div className="flex flex-col space-y-4 mr-4 mt-14 ml-8">
              <p className="text-[#90A3BF] text-base">P R I C E</p>

              {/* Progress bar */}
              <div
                className="relative w-full h-2 bg-gray-300 rounded overflow-hidden
            hover:cursor-pointer"
                onClick={increaseProgress}
              >
                <div
                  className="h-full bg-blue-500 transition-all duration-300"
                  style={{ width: `${progress}%` }}
                ></div>

                <div
                  className="absolute -right-2 w-4 h-4 bg-blue-500 rounded-full ring-4
                 ring-white z-50 top-0 "
                  style={{ left: `${progress}%` }}
                  onClick={decreaseProgress}
                ></div>
              </div>

              <p className="text-xl font-medium text-[#596780]">
                Max. $100.00
              </p>
            </div>
          </div>

          {/*Right*/}
          <div className="flex flex-col items-start justify-between mx-auto mb-8">
            <div
              className="flex lg:flex-row flex-col lg:space-x-8 space-y-5 lg:mx-[32px]
        lg:items-start lg:justify-between items-center justify-center mx-auto"
            >
              {/*Left Side*/}
              <div className="flex flex-col my-[24px] lg:w-[492px]">
                <div
                  className="rounded-lg object-cover lg:w-[492px] lg:h-[360px] w-[310px] 
           h-[420px] bg-blue-600 lg:mx-0 mx-auto"
                >
                  <Image
                    src="/images/View.png"
                    height={360}
                    width={492}
                    alt="Bg image"
                  />

                  <div
                    className="flex flex-col space-y-4 z-10 ml-6 text-white 
            lg:-mt-[340px] -mt-52"
                  >
                    <h2 className="text-[32px] font-semibold text-left">
                      Sports car with the best <br /> design and acceleration
                    </h2>
                    <p className="text-base font-medium text-left">
                      Safety and comfort while driving a <br />
                      futuristic and elegant sports car
                    </p>
                  </div>

                  <Image
                    src="/images/image 8.png"
                    height={120}
                    width={380}
                    alt="car-image"
                    className="z-50
              lg:mx-auto mb-10 lg:mt-8 mt-6"
                  />
                </div>

                <div
                  className="lg:flex-row flex lg:space-x-[24px] space-y-5 items-center 
          justify-center mx-auto space-x-3"
                >
                  <div
                    className="rounded-[8px] flex items-center justify-center
            ring-2 ring-[#3563E9] ring-offset-[#F6F7F9]
            lg:flex-row flex-col mt-6 relative lg:h-[124px] lg:w-[148px] h-16 w-24"
                  >
                    <Image
                      src="/images/View.png"
                      height={108}
                      width={132}
                      alt="car"
                      className="rounded-lg lg:h-[108px] lg:w-[132px] h-14 w-[88px]"
                    />

                    <Image
                      src="/images/image 8.png"
                      height={36}
                      width={116}
                      alt="car"
                      className="z-50 rounded-none mx-auto absolute  lg:h-[36px] lg:w-[116px] h-[26px] w-20"
                    />
                  </div>

                  <Image
                    src="/images/View 2.png"
                    height={124}
                    width={148}
                    alt="car-interior"
                    className="rounded-lg lg:h-[124px] lg:w-[148px] h-16 w-24"
                  />

                  <Image
                    src="/images/View 3.png"
                    height={124}
                    width={148}
                    alt="car-interior"
                    className="rounded-lg lg:h-[124px] lg:w-[148px] h-16 w-24"
                  />
                </div>
              </div>

              {/*Right Side*/}
              <div
                className="lg:w-[492px] lg:h-[508px] bg-white rounded-lg my-[24px]
              lg:mx-0 mx-auto w-80 h-[660px]"
              >
                <div className="relative">
                  <div className="flex flex-col space-y-2 p-6">
                    <h2 className="text-[32px] font-bold text-left">
                      Nissan GT - R
                    </h2>
                    <div className="flex space-x-2 items-start justify-start">
                      <Image
                        src="/images/Four Star.png"
                        height={20}
                        width={108}
                        alt="ratings"
                      />
                      <p className="text-[#596780] text-sm font-medium">
                        440+ Reviewer
                      </p>
                    </div>
                  </div>

                  <div className="hidden lg:flex items-end justify-end absolute lg:ml-[445px] -mt-[105px]">
                    <Image
                      src="/images/Like.png"
                      height={24}
                      width={24}
                      alt="favourite"
                    />
                  </div>
                </div>

                <div className="mx-6 mt-8 flex items-start justify-between">
                  <p className="text-[#596780] text-lg text-left">
                    NISMO has become the embodiment of Nissan's outstanding
                    performance, inspired by the most unforgiving proving
                    ground, the "race track".
                  </p>
                </div>

                <div
                  className="mt-8 lg:mx-6 mx-6 lg:flex lg:space-x-[44px] 
                items-start justify-between grid lg:space-y-0 space-y-5"
                >
                  <div className="flex flex-col space-y-4">
                    <div className="lg:space-x-4 space-x-28 flex">
                      <p className="text-[#90A3BF] text-lg text-left">
                        Type Car
                      </p>
                      <p className="text-[#596780] text-lg text-right">
                        Sport
                      </p>
                    </div>
                    <div className="lg:space-x-4 space-x-28 flex">
                      <p className="text-[#90A3BF] text-lg text-left">
                        Steering
                      </p>
                      <p className="text-[#596780] text-lg text-right">
                        Manual
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-4">
                    <div className="lg:space-x-4 space-x-28 flex">
                      <p className="text-[#90A3BF] text-lg text-left">
                        Capacity
                      </p>
                      <p className="text-[#596780] text-lg text-right">
                        2 Person
                      </p>
                    </div>
                    <div className="lg:space-x-4 space-x-28 flex">
                      <p className="text-[#90A3BF] text-lg text-left">
                        Gasoline
                      </p>
                      <p className="text-[#596780] text-lg text-right">
                        70L
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex mt-16 mx-6 mb-[24px] items-stretch justify-between">
                  <div className="flex flex-col font-bold text-[#1A202C]">
                    <div className="lg:text-[28px] text-[24px] font-bold">
                      $80.00/{" "}
                      <span className="lg:text-base text-sm text-[#90A3BF]">
                        days
                      </span>
                    </div>
                    <div className="mt-1 text-base text-[#90A3BF] line-through">
                      $100.00
                    </div>
                  </div>

                  <Link href="/payment">
                    <button
                      className="lg:px-5 px-[14px] py-3 mt-1 text-base font-medium text-center space-x-[8px]
                     text-white bg-[#3563E9] hover:bg-blue-800 rounded lg:h-14 lg:w-[140px]
                     w-[110px]"
                    >
                      Rent Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/*Reviews*/}
            <div
              className="bg-white lg:w-[1016px] lg:h-[452px] mx-auto rounded-lg
            p-6 w-80 h-auto lg:mt-0 mt-6"
            >
              <div className="space-x-[12px] flex">
                <p className="text-xl font-semibold text-[#1A202C]">
                  Reviews
                </p>
                <button
                  className="px-5 space-x-[8px] rounded text-white bg-[#3563E9]
                    text-sm font-bold"
                >
                  13
                </button>
              </div>

              {/*Review 1*/}
              <div className="flex mt-[33px] items-start">
                <Image
                  src="/images/Image.png"
                  height={56}
                  width={56}
                  alt="Profile-Image"
                  className="lg:w-[56px] lg:h-14 h-[46px] w-[46px]"
                />

                <div className="flex flex-col lg:ml-[16px] ml-[14px]">
                  <div className="flex items-stretch justify-between">
                    <div className="flex flex-col space-y-[8px] text-left">
                      <p className="lg:text-xl text-lg font-bold text-[#1A202C]">
                        Alex Stanton
                      </p>
                      <p className="text-sm text-[#90A3BF] font-medium">
                        CEO at Bukalapak
                      </p>
                    </div>

                    <div
                      className="flex flex-col space-y-[8px] text-right lg:ml-0 lg:mt-0
                    mt-1 "
                    >
                      <p className="lg:text-sm text-[13px] text-[#90A3BF] font-medium">
                        21 July 2022
                      </p>
                      <Image
                        src="/images/Four Star.png"
                        height={20}
                        width={108}
                        alt="ratings"
                        className="lg:w-[108px] lg:h-[20px] w-[70px] h-[15px]"
                      />
                    </div>
                  </div>

                  <div className="mt-[12px]">
                    <p className="text-left lg:text-[13.5px] text-[#596780] text-[11px]">
                      We are very happy with the service from the MORENT App.
                      Morent has a low price and also a large variety of cars
                      with good and comfortable
                      <br />
                      facilities. In addition, the service provided by the
                      officers is also very friendly and very polite.
                    </p>
                  </div>
                </div>
              </div>

              {/*Review 2*/}
              <div className="flex mt-6 items-start">
                <Image
                  src="/images/Profile.png"
                  height={56}
                  width={56}
                  alt="Profile-Image"
                  className="lg:w-[56px] lg:h-14 h-[46px] w-[46px]"
                />

                <div className="flex flex-col lg:ml-[16px] ml-[14px]">
                  <div className="flex items-stretch justify-between">
                    <div className="flex flex-col space-y-[8px] text-left">
                      <p className="lg:text-xl text-lg font-bold text-[#1A202C]">
                        Skylar Dias
                      </p>
                      <p className="text-sm text-[#90A3BF] font-medium">
                        CEO at Amazon
                      </p>
                    </div>

                    <div className="flex flex-col space-y-[8px] text-right">
                      <p className="lg:text-sm text-xs text-[#90A3BF] font-medium">
                        20 July 2022
                      </p>
                      <Image
                        src="/images/Four Star.png"
                        height={20}
                        width={108}
                        alt="ratings"
                        className="lg:w-[108px] lg:h-[20px] w-[70px] h-[15px]"
                      />
                    </div>
                  </div>

                  <div className="mt-[12px]">
                    <p className="text-left lg:text-sm text-xs text-[#596780]">
                      We are greatly helped by the services of the MORENT
                      Application. Morent has low prices and also a wide variety
                      of cars with good and <br />
                      comfortable facilities. In addition, the service provided
                      by the officers is also very friendly and very polite.
                    </p>
                  </div>
                </div>
              </div>

              <div className=" flex items-center justify-center mx-auto">
                <button
                  className="mt-6 rounded px-5 space-x-[8px] h-[44px]
                text-base font-medium text-[#90A3BF] flex items-center justify-center"
                >
                  Show All <ChevronDown className="h-4 w-4 ml-2" />
                </button>
              </div>
            </div>

            {/*Recent Car Section*/}
            <div className="flex flex-col mx-auto space-y-4 mt-8">
              <div className="flex items-stretch justify-between">
                <p className="text-base font-semibold text-[#90A3BF]">
                  Recent Car
                </p>
                <p className="text-base font-semibold text-[#3563E9]">
                  View All
                </p>
              </div>

              {/*Car Cards*/}
              <div
                className="grid grid-cols-4 lg:flex lg:space-x-8 overflow-x-auto w-[300px] 
              lg:w-auto lg:overflow-hidden lg:gap-0 gap-[330px]"
              >
                <div
                  className="bg-white rounded-lg flex flex-col
                w-[304px] h-[388px] py-6 px-6"
                >
                  <div className="flex space-x-[104px] items-start">
                    <div className="flex flex-col text-left space-y-1">
                      <p className="font-bold text-xl text-[#1A202C]">
                        Koenigsegg
                      </p>
                      <p className="font-bold text-sm text-[#90A3BF]">
                        Sport
                      </p>
                    </div>

                    <Image
                      src={isFav1 ? "/images/Like2.png" : "/images/Like.png"}
                      height={24}
                      width={24}
                      alt="Favourite"
                      className="cursor-pointer"
                      onClick={() => setIsFav1(!isFav1)}
                    />
                  </div>

                  <Image
                    src="/images/image 7.png"
                    width={232}
                    height={72}
                    alt="car-image"
                    className="mt-16"
                  />

                  <div className="flex space-x-4 mt-16 items-center justify-center">
                    <div className="flex space-x-[6px] items-center justify-center">
                      <Image
                        height={24}
                        width={24}
                        src="/images/gas-station.png"
                        alt="Gas-Station"
                      />
                      <p className="text-[#90A3BF] text-sm font-medium">
                        90L
                      </p>
                    </div>
                    <div className="flex space-x-[6px] items-center justify-center">
                      <Image
                        height={24}
                        width={24}
                        src="/images/manual.png"
                        alt="Mode"
                      />
                      <p className="text-[#90A3BF] text-sm font-medium">
                        Manual
                      </p>
                    </div>
                    <div className="flex space-x-[6px] items-center justify-center">
                      <Image
                        height={24}
                        width={24}
                        src="/images/profile-2user.png"
                        alt="2users-profile"
                      />
                      <p className="text-[#90A3BF] text-sm font-medium">
                        2 People
                      </p>
                    </div>
                  </div>

                  <div
                    className="flex items-stretch 
                        justify-between mt-6 mb-6"
                  >
                    <div className="flex flex-col font-bold text-[#1A202C]">
                      <div className="text-xl font-bold">
                        $99.00/{" "}
                        <span className="text-sm text-[#90A3BF]">day</span>
                      </div>
                    </div>

                    <Link href="/car-rent">
                      <button
                        className="px-5 py-3 mt-1 text-base font-medium text-center space-x-[8px]
                     text-white bg-[#3563E9] hover:bg-blue-800 rounded min-h-11 w-[116px]"
                      >
                        Rent Now
                      </button>
                    </Link>
                  </div>
                </div>

                <div
                  className="bg-white rounded-lg flex flex-col
                w-[304px] h-[388px] py-6 px-6"
                >
                  <div className="flex space-x-[104px] items-start">
                    <div className="flex flex-col text-left space-y-1">
                      <p className="font-bold text-xl text-[#1A202C]">
                        Nissan GT -R
                      </p>
                      <p className="font-bold text-sm text-[#90A3BF]">
                        Sport
                      </p>
                    </div>

                    <Image
                      src={isFav2 ? "/images/Like2.png" : "/images/Like.png"}
                      height={24}
                      width={24}
                      alt="Favourite"
                      className="cursor-pointer"
                      onClick={() => setIsFav2(!isFav2)}
                    />
                  </div>

                  <Image
                    src="/images/image 8.png"
                    width={204}
                    height={64}
                    alt="car-image"
                    className="mt-[68px] mx-auto"
                  />

                  <div className="flex space-x-4 mt-[68px] items-center justify-center">
                    <div className="flex space-x-[6px] items-center justify-center">
                      <Image
                        height={24}
                        width={24}
                        src="/images/gas-station.png"
                        alt="Gas-Station"
                      />
                      <p className="text-[#90A3BF] text-sm font-medium">
                        80L
                      </p>
                    </div>
                    <div className="flex space-x-[6px] items-center justify-center">
                      <Image
                        height={24}
                        width={24}
                        src="/images/manual.png"
                        alt="Mode"
                      />
                      <p className="text-[#90A3BF] text-sm font-medium">
                        Manual
                      </p>
                    </div>
                    <div className="flex space-x-[6px] items-center justify-center">
                      <Image
                        height={24}
                        width={24}
                        src="/images/profile-2user.png"
                        alt="2users-profile"
                      />
                      <p className="text-[#90A3BF] text-sm font-medium">
                        2 People
                      </p>
                    </div>
                  </div>

                  <div
                    className="flex items-stretch 
                        justify-between mt-[20px] mb-6"
                  >
                    <div className="flex flex-col  font-bold text-[#1A202C]">
                      <div className="text-xl font-bold">
                        $80.00/{" "}
                        <span className="text-sm text-[#90A3BF]">day</span>
                      </div>
                      <div className="mt-1 text-sm text-[#90A3BF] line-through">
                        $100.00
                      </div>
                    </div>

                    <Link href="/car-rent">
                      <button
                        className="px-5 py-3 mt-1 text-base font-medium text-center space-x-[8px]
                     text-white bg-[#3563E9] hover:bg-blue-800 rounded min-h-11 w-[116px]"
                      >
                        Rent Now
                      </button>
                    </Link>
                  </div>
                </div>

                <div
                  className="bg-white rounded-lg flex flex-col
                w-[304px] h-[388px] py-6 px-6"
                >
                  <div className="flex space-x-[104px] items-start">
                    <div className="flex flex-col text-left space-y-1">
                      <p className="font-bold text-xl text-[#1A202C]">
                        Rolls-Royce
                      </p>
                      <p className="font-bold text-sm text-[#90A3BF]">
                        Sport
                      </p>
                    </div>

                    <Image
                      src={isFav3 ? "/images/Like2.png" : "/images/Like.png"}
                      height={24}
                      width={24}
                      alt="Favourite"
                      className="cursor-pointer"
                      onClick={() => setIsFav3(!isFav3)}
                    />
                  </div>

                  <Image
                    src="/images/Car (1).png"
                    width={220}
                    height={68}
                    alt="car-image"
                    className="mt-16 mx-auto"
                  />

                  <div className="flex space-x-4 mt-[68px] items-center justify-center">
                    <div className="flex space-x-[6px] items-center justify-center">
                      <Image
                        height={24}
                        width={24}
                        src="/images/gas-station.png"
                        alt="Gas-Station"
                      />
                      <p className="text-[#90A3BF] text-sm font-medium">
                        70L
                      </p>
                    </div>
                    <div className="flex space-x-[6px] items-center justify-center">
                      <Image
                        height={24}
                        width={24}
                        src="/images/manual.png"
                        alt="Mode"
                      />
                      <p className="text-[#90A3BF] text-sm font-medium">
                        Manual
                      </p>
                    </div>
                    <div className="flex space-x-[6px] items-center justify-center">
                      <Image
                        height={24}
                        width={24}
                        src="/images/profile-2user.png"
                        alt="2users-profile"
                      />
                      <p className="text-[#90A3BF] text-sm font-medium">
                        4 People
                      </p>
                    </div>
                  </div>

                  <div
                    className="flex items-stretch 
                        justify-between mt-6 mb-6"
                  >
                    <div className="flex flex-col font-bold text-[#1A202C]">
                      <div className="text-xl font-bold">
                        $97.00/{" "}
                        <span className="text-sm text-[#90A3BF]">day</span>
                      </div>
                    </div>

                    <Link href="/car-rent">
                      <button
                        className="px-5 py-3 mt-1 text-base font-medium text-center space-x-[8px]
                     text-white bg-[#3563E9] hover:bg-blue-800 rounded min-h-11 w-[116px]"
                      >
                        Rent Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/*Recommended Car Section*/}
            <div className="flex flex-col mx-auto space-y-4 mt-8">
              <div className="flex items-stretch justify-between">
                <p className="text-base font-semibold text-[#90A3BF]">
                  Recomendation Car
                </p>
                <p className="text-base font-semibold text-[#3563E9]">
                  View All
                </p>
              </div>

              {/*Car Cards*/}
              <div className="flex space-x-8 overflow-x-auto w-80 lg:w-auto lg:overflow-hidden">
                <div
                  className="flex flex-col sm:p-6 bg-white rounded-xl min-w-[280px] 
        lg:w-[304px] max-w-[304px] mx-auto relative shadow-sm p-6"
                >
                  <Image
                    src={isFav4 ? "/images/Like2.png" : "/images/Like.png"}
                    height={24}
                    width={24}
                    alt="Favourite"
                    className="cursor-pointer absolute mt-0 lg:ml-60 ml-56 z-10"
                    onClick={() => setIsFav4(!isFav4)}
                  />
                  <div className="flex gap-5 justify-between">
                    <div className="flex flex-col">
                      <div className="font-bold text-xl text-[#1A202C]">
                        All New Rush
                      </div>
                      <p className="mt-1 font-semibold text-sm text-[#90A3BF]">
                        SUV
                      </p>
                    </div>
                  </div>
                  <Image
                    width={224}
                    height={100}
                    src="/images/Car3.png"
                    alt="All New Rush"
                    className="self-center mt-16 max-lg:mt-10"
                  />
                  <div className="flex lg:gap-4 gap-1.5 items-start mt-16 text-sm font-medium text-[#90A3BF] max-lg:mt-10">
                    <div className="flex gap-1.5 items-start">
                      <Image
                        height={24}
                        width={24}
                        src="/images/gas-station.png"
                        alt="Gas-Station"
                      />
                      <div className="w-7">70L</div>
                    </div>
                    <div className="flex gap-1 items-start">
                      <Image
                        height={24}
                        width={24}
                        src="/images/manual.png"
                        alt="Mode"
                      />
                      <div className="w-12">Manual</div>
                    </div>
                    <div className="flex gap-1.5 items-start">
                      <Image
                        height={24}
                        width={24}
                        src="/images/profile-2user.png"
                        alt="2users-profile"
                      />
                      <div className="w-[60px]">6 People</div>
                    </div>
                  </div>
                  <div className="flex gap-3 mt-8 w-full">
                    <div className="flex flex-col font-bold text-[#1A202C]">
                      <div className="text-xl">
                        $72.00/{" "}
                        <span className="text-sm text-[#90A3BF]">day</span>
                      </div>
                      <div className="mt-1 text-sm text-[#90A3BF] line-through">
                        $80.00
                      </div>
                    </div>

                    <Link href="/car-rent">
                      <button
                        className="gap-2 px-6 py-3 mt-1 text-base font-medium text-center
                 text-white bg-[#3563E9] hover:bg-blue-800 rounded min-h-[10px] w-32"
                      >
                        Rent Now
                      </button>
                    </Link>
                  </div>
                </div>

                <div
                  className="flex flex-col p-6 sm:p-6 bg-white rounded-xl min-w-[280px] 
        lg:w-[304px] max-w-[304px] mx-auto relative shadow-sm"
                >
                  <Image
                    src={isFav5 ? "/images/Like2.png" : "/images/Like.png"}
                    height={24}
                    width={24}
                    alt="Favourite"
                    className="cursor-pointer absolute mt-0 lg:ml-60 ml-56 z-10"
                    onClick={() => setIsFav5(!isFav5)}
                  />
                  <div className="flex gap-5 justify-between">
                    <div className="flex flex-col">
                      <div className="font-bold text-xl text-[#1A202C]">
                        CR-V
                      </div>
                      <p className="mt-1 font-semibold text-sm text-[#90A3BF]">
                        SUV
                      </p>
                    </div>
                  </div>
                  <Image
                    width={248}
                    height={100}
                    src="/images/Car4.png"
                    alt="CR-V"
                    className="self-center mt-16 max-lg:mt-10"
                  />
                  <div
                    className="flex lg:gap-4 gap-1.5 items-start mt-16 text-sm font-medium
             text-[#90A3BF] max-lg:mt-10"
                  >
                    <div className="flex gap-1.5 items-start">
                      <Image
                        height={24}
                        width={24}
                        src="/images/gas-station.png"
                        alt="Gas-Station"
                      />
                      <div className="w-7">80L</div>
                    </div>
                    <div className="flex gap-1 items-start">
                      <Image
                        height={24}
                        width={24}
                        src="/images/manual.png"
                        alt="Mode"
                      />
                      <div className="w-12">Manual</div>
                    </div>
                    <div className="flex gap-1.5 items-start">
                      <Image
                        height={24}
                        width={24}
                        src="/images/profile-2user.png"
                        alt="2users-profile"
                      />
                      <div className="w-[60px]">6 People</div>
                    </div>
                  </div>
                  <div className="flex gap-3 mt-8 w-full">
                    <div className="flex flex-col font-bold text-[#1A202C]">
                      <div className="text-xl">
                        $80.00/{" "}
                        <span className="text-sm text-[#90A3BF]">day</span>
                      </div>
                    </div>

                    <Link href="/car-rent">
                      <button
                        className="gap-2 px-6 py-3 mt-1 text-base font-medium text-center
                 text-white bg-[#3563E9] hover:bg-blue-800 rounded min-h-[10px] w-32"
                      >
                        Rent Now
                      </button>
                    </Link>
                  </div>
                </div>

                <div
                  className="flex flex-col p-4 sm:p-6 bg-white rounded-xl min-w-[280px] 
        lg:w-[304px] max-w-[304px] mx-auto relative shadow-sm"
                >
                  <Image
                    src={isFav6 ? "/images/Like2.png" : "/images/Like.png"}
                    height={24}
                    width={24}
                    alt="Favourite"
                    className="cursor-pointer absolute mt-0 lg:ml-60 ml-56 z-10"
                    onClick={() => setIsFav6(!isFav6)}
                  />
                  <div className="flex gap-5 justify-between">
                    <div className="flex flex-col">
                      <div className="font-bold text-xl text-[#1A202C]">
                        All New Terios
                      </div>
                      <p className="mt-1 font-semibold text-sm text-[#90A3BF]">
                        SUV
                      </p>
                    </div>
                  </div>
                  <Image
                    height={100}
                    width={224}
                    src="/images/Car5.png"
                    alt="All New Terios"
                    className="object-contain self-center mt-16 max-lg:mt-10"
                  />
                  <div
                    className="flex lg:gap-4 gap-1.5 items-start mt-16 text-sm font-medium 
            text-[#90A3BF] max-lg:mt-10"
                  >
                    <div className="flex gap-1.5 items-start">
                      <Image
                        height={24}
                        width={24}
                        src="/images/gas-station.png"
                        alt="Gas-Station"
                      />
                      <div className="w-7">90L</div>
                    </div>
                    <div className="flex gap-1 items-start">
                      <Image
                        height={24}
                        width={24}
                        src="/images/manual.png"
                        alt="Mode"
                      />
                      <div className="w-12">Manual</div>
                    </div>
                    <div className="flex gap-1.5 items-start">
                      <Image
                        height={24}
                        width={24}
                        src="/images/profile-2user.png"
                        alt="2users-profile"
                      />
                      <div className="w-[60px]">6 People</div>
                    </div>
                  </div>
                  <div className="flex gap-3 mt-8 w-full">
                    <div className="flex flex-col font-bold text-[#1A202C]">
                      <div className="text-xl">
                        $74.00/{" "}
                        <span className="text-sm text-[#90A3BF]">day</span>
                      </div>
                    </div>

                    <Link href="/car-rent">
                      <button
                        className="gap-2 px-6 py-3 mt-1 text-base font-medium text-center
                 text-white bg-[#3563E9] hover:bg-blue-800 rounded min-h-[10px] w-32"
                      >
                        Rent Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCarRent;
