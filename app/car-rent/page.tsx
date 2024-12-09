"use client";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import React, { MouseEvent, useState } from "react";

const CarRent = () => {
  const [progress, setProgress] = useState(70);

  const increaseProgress = (e: MouseEvent<HTMLDivElement>) => {
    setProgress((prev) => Math.min(prev + 10, 100));
  };

  const decreaseProgress = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation(); // Prevent triggering the parent click
    setProgress((prev) => Math.max(prev - 10, 0));
  };

  return (
    <div className="w-screen min-h-screen bg-[#F6F7F9]">
      <div className="flex flex-col items-center justify-center bg-[#F6F7F9]">
        <div className="flex">
          {/*Left*/}
          <div className="-ml-5 lg:flex lg:flex-col lg:visible hidden md:h-[1600px] bg-white md:w-[310px]">
            <div className="flex flex-col space-y-[16px] mr-[16px] mt-[40px] ml-8">
              <p className="text-[#90A3BF] text-base">T Y P E</p>
              <p className="text-[20px] font-medium">
                <Checkbox className="mr-2" checked /> Sport{" "}
                <span className="ml-2 text-[#90A3BF] text-base">(10)</span>
              </p>
              <p className="text-[20px] font-medium">
                <Checkbox className="mr-2" checked /> SUV{" "}
                <span className="ml-2 text-[#90A3BF] text-base">(12)</span>
              </p>
              <p className="text-[20px] font-medium">
                <Checkbox className="mr-2" /> MPV{" "}
                <span className="ml-2 text-[#90A3BF] text-base">(16)</span>
              </p>
              <p className="text-[20px] font-medium">
                <Checkbox className="mr-2" /> Sedan{" "}
                <span className="ml-2 text-[#90A3BF] text-base">(20)</span>
              </p>
              <p className="text-[20px] font-medium">
                <Checkbox className="mr-2" /> Cope{" "}
                <span className="ml-2 text-[#90A3BF] text-base">(14)</span>
              </p>
              <p className="text-[20px] font-medium">
                <Checkbox className="mr-2" /> Hatchback{" "}
                <span className="ml-2 text-[#90A3BF] text-base">(14)</span>
              </p>
            </div>

            <div className="flex flex-col space-y-[16px] mr-[16px] mt-[56px] ml-8">
              <p className="text-[#90A3BF] text-base">C A P A C I T Y</p>
              <p className="text-[20px] font-medium">
                <Checkbox className="mr-2" checked /> 2 Person{" "}
                <span className="ml-2 text-[#90A3BF] text-base">(10)</span>
              </p>
              <p className="text-[20px] font-medium">
                <Checkbox className="mr-2" /> 4 Person{" "}
                <span className="ml-2 text-[#90A3BF] text-base">(14)</span>
              </p>
              <p className="text-[20px] font-medium">
                <Checkbox className="mr-2" /> 6 Person{" "}
                <span className="ml-2 text-[#90A3BF] text-base">(12)</span>
              </p>
              <p className="text-[20px] font-medium">
                <Checkbox className="mr-2" checked /> 8 Person{" "}
                <span className="ml-2 text-[#90A3BF] text-base">(16)</span>
              </p>
            </div>

            <div className="flex flex-col space-y-[16px] mr-[16px] mt-[56px] ml-8">
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

              <p className="text-[20px] font-medium text-[#596780]">
                Max. $100.00
              </p>
            </div>
          </div>

          {/*Right*/}
          <div className="flex flex-col items-start justify-between mx-auto">
            <div
              className="flex flex-col md:flex-row items-start justify-between gap-4 mt-1 p-6  
            mb-[36px] md:-space-x-5 mx-auto"
            >
              {/* Pick-Up Section */}
              <div className="flex-1 items-start justify-between bg-white shadow-md p-5 rounded-lg md:px-9 md:w-[486px]">
                <div className="flex space-x-2 items-center justify-center md:-ml-[350px]">
                  <div className="rounded-full h-2 w-2 bg-[#3563E9] ring-4 ring-[#3563E9] ring-opacity-30"></div>
                  <h3 className="text-lg font-medium">Pick-Up</h3>
                </div>

                <div className="flex sm:grid-cols-3 px-[48px] space-x-6 mt-4 -mx-14">
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
              <div className="md:mt-10 flex items-center justify-center z-10">
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

              {/* Drop-Off Section */}
              <div className="flex-1 items-start justify-between bg-white shadow-md p-5 rounded-lg md:px-9 md:w-[486px]">
                <div className="flex space-x-2 items-center justify-center md:-ml-[350px]">
                  <div className="rounded-full h-2 w-2 bg-[#3563E9] ring-4 ring-[#3563E9] ring-opacity-30"></div>
                  <h3 className="text-lg font-medium">Drop-Off</h3>
                </div>

                <div className="flex sm:grid-cols-3 px-[48px] space-x-6 mt-4 -mx-14">
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

            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-12 gap-10 ml-10 -mt-5">
              <div
                className="flex overflow-hidden flex-col p-6 bg-white rounded-xl min-w-[240px] w-[304px]
         max-md:px-5 relative border border-gray-50"
              >
                {/* Heart Icon */}
                <Image
                  height={24}
                  width={24}
                  src="/images/Like.png"
                  alt="Favorite Icon"
                  className="absolute top-3 right-3 w-6 aspect-square cursor-pointer z-10"
                />
                <div className="flex gap-5 justify-between">
                  <div className="flex flex-col">
                    <div className="text-xl tracking-tight text-gray-900 font-bold">
                      Koenlgsegg
                    </div>
                    <div className="mt-1 text-sm tracking-tight text-slate-400">
                      Sport
                    </div>
                  </div>
                </div>
                <Image
                  width={232}
                  height={72}
                  src="/images/image 7.png"
                  alt="Koenigsegg"
                  className="object-contain self-center mt-16 max-w-full aspect-[3.18] w-[204px] max-md:mt-10"
                />
                <div className="flex gap-4 items-start mt-16 text-sm font-medium leading-5 text-slate-400 max-md:mt-10">
                  <div className="flex gap-1.5 items-start tracking-tight whitespace-nowrap">
                    <Image
                      height={24}
                      width={24}
                      src="/images/gas-station.png"
                      alt="Gas-Station"
                    />
                    <div className="w-7">90L</div>
                  </div>
                  <div className="flex gap-1 items-start whitespace-nowrap">
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
                    <div className="w-[60px]">2 People</div>
                  </div>
                </div>
                <div className="flex gap-3 mt-8 w-full items-center justify-stretch">
                  <div className="flex flex-col  font-bold text-slate-900">
                    <div className="text-xl">
                      $99.00/{" "}
                      <span className="text-sm text-slate-400">day</span>
                    </div>
                  </div>
                  <button
                    className="gap-2 self-start px-6 py-3 mt-1 text-base font-medium tracking-tight text-center text-white
               bg-[#3563E9] rounded min-h-[10px] w-[130px] whitespace-nowrap"
                    aria-label="Rent Koenlgsegg now"
                  >
                    Rent Now
                  </button>
                </div>
              </div>

              <div
                className="flex overflow-hidden flex-col p-6 bg-white rounded-xl min-w-[240px] w-[304px] 
        max-md:px-5 relative border border-gray-50 "
              >
                {/* Heart Icon Positioning */}
                <Image
                  height={24}
                  width={24}
                  src="/images/Like2.png"
                  alt="Favorite Icon"
                  className="absolute top-3 right-3 w-6 aspect-square cursor-pointer z-10"
                />
                <div className="flex gap-5 justify-between">
                  <div className="flex flex-col">
                    <div className="text-xl tracking-tight text-gray-900 font-bold">
                      Nisan GT - R
                    </div>
                    <div className="mt-1 text-sm tracking-tight text-slate-400">
                      Sport
                    </div>
                  </div>
                </div>
                <Image
                  width={204}
                  height={64}
                  src="/images/car.png"
                  alt="Nisan GT - R"
                  className="object-contain self-center mt-16 max-w-full aspect-[3.18] w-[204px] max-md:mt-10"
                />
                <div className="flex gap-4 items-start mt-16 text-sm font-medium leading-5 text-slate-400 max-md:mt-10">
                  <div className="flex gap-1.5 items-start tracking-tight whitespace-nowrap">
                    <Image
                      height={24}
                      width={24}
                      src="/images/gas-station.png"
                      alt="Gas-Station"
                    />
                    <div className="w-7">80L</div>
                  </div>
                  <div className="flex gap-1 items-start whitespace-nowrap">
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
                    <div className="w-[60px]">2 People</div>
                  </div>
                </div>
                <div className="flex gap-3 mt-8 w-full">
                  <div className="flex flex-col  font-bold text-slate-900">
                    <div className="text-xl">
                      $80.00/{" "}
                      <span className="text-sm text-slate-400">day</span>
                    </div>
                    <div className="mt-1 text-sm text-slate-400 line-through">
                      $100.00
                    </div>
                  </div>
                  <button
                    className="gap-2 self-start px-6 py-3 mt-1 text-base font-medium tracking-tight text-center text-white bg-[#3563E9] rounded min-h-[10px] w-[130px] whitespace-nowrap"
                    aria-label="Rent Nisan GT - R now"
                  >
                    Rent Now
                  </button>
                </div>
              </div>

              <div
                className="flex overflow-hidden flex-col p-6 bg-white rounded-xl min-w-[240px] w-[304px] 
        max-md:px-5 relative border border-gray-50 ]"
              >
                {/* Heart Icon Positioning */}
                <Image
                  height={24}
                  width={24}
                  src="/images/Like.png"
                  alt="Favourite-Icon"
                  className="absolute top-3 right-3 w-6 aspect-square cursor-pointer z-10"
                />
                <div className="flex gap-5 justify-between">
                  <div className="flex flex-col">
                    <div className="text-xl tracking-tight text-gray-900 font-bold">
                      Rolls - Royce
                    </div>
                    <div className="mt-1 text-sm tracking-tight text-slate-400">
                      Sedan
                    </div>
                  </div>
                </div>
                <Image
                  height={68}
                  width={220}
                  src="/images/Car (1).png"
                  alt="2users-profile"
                  className="object-contain self-center mt-16 max-w-full aspect-[3.18] w-[204px] max-md:mt-10"
                />

                <div className="flex gap-4 items-start mt-16 text-sm font-medium leading-5 text-slate-400 max-md:mt-10">
                  <div className="flex gap-1.5 items-start tracking-tight whitespace-nowrap">
                    <Image
                      height={24}
                      width={24}
                      src="/images/gas-station.png"
                      alt="Gas-Station"
                    />
                    <div className="w-7">70L</div>
                  </div>
                  <div className="flex gap-1 items-start whitespace-nowrap">
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
                    <div className="w-[60px]">4 People</div>
                  </div>
                </div>
                <div className="flex gap-3 mt-8 w-full">
                  <div className="flex flex-col  font-bold text-slate-900">
                    <div className="text-xl">
                      $96.00/{" "}
                      <span className="text-sm text-slate-400">day</span>
                    </div>
                  </div>
                  <button
                    className="gap-2 self-start px-6 py-3 mt-1 text-base font-medium tracking-tight text-center text-white bg-[#3563E9] rounded min-h-[10px] w-[130px] whitespace-nowrap"
                    aria-label="Rent Rolls - Royce now"
                  >
                    Rent Now
                  </button>
                </div>
              </div>
            </div>

            {/*Row 2*/}
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7 gap-10 md:ml-5 mt-5">
                <div
                  className="flex overflow-hidden flex-col p-4 sm:p-6 bg-white rounded-xl min-w-[280px] 
        lg:w-[304px] max-w-[304px] mx-auto border border-gray-50 relative"
                >
                  {/* Heart Icon */}
                  <Image
                    height={24}
                    width={24}
                    src="/images/Like2.png"
                    alt="Favorite Icon"
                    className="absolute top-3 right-3 w-6 aspect-square cursor-pointer z-10"
                  />
                  <div className="flex gap-5 justify-between">
                    <div className="flex flex-col">
                      <div className="text-xl tracking-tight text-gray-900 font-bold">
                        All New Rush
                      </div>
                      <div className="mt-1 text-sm tracking-tight text-slate-400">
                        Suv
                      </div>
                    </div>
                  </div>
                  <Image
                    width={248}
                    height={100}
                    src="/images/Car3.png"
                    alt="All New Rush"
                    className="object-contain self-center mt-16 max-md:mt-10"
                  />
                  <div className="flex gap-4 items-start mt-16 text-sm font-medium leading-5 text-slate-400 max-md:mt-10">
                    <div className="flex gap-1.5 items-start tracking-tight whitespace-nowrap">
                      <Image
                        height={24}
                        width={24}
                        src="/images/gas-station.png"
                        alt="Gas-Station"
                      />
                      <div className="w-7">70L</div>
                    </div>
                    <div className="flex gap-1 items-start whitespace-nowrap">
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
                  <div className="flex gap-3 mt-8 w-full items-center justify-stretch">
                    <div className="flex flex-col font-bold text-slate-900">
                      <div className="text-xl">
                        $72.00/{" "}
                        <span className="text-sm text-slate-400">day</span>
                      </div>
                      <div className="mt-1 text-sm text-slate-400 line-through">
                        $80.00
                      </div>
                    </div>
                    <button
                      className="gap-2 self-start px-6 py-3 mt-1 text-base font-medium tracking-tight text-center text-white bg-[#3563E9] rounded min-h-[10px] w-[130px] whitespace-nowrap"
                      aria-label="Rent All New Rush now"
                    >
                      Rent Now
                    </button>
                  </div>
                </div>

                <div
                  className="flex overflow-hidden flex-col p-4 sm:p-6 bg-white rounded-xl min-w-[240px] 
        lg:w-[304px] max-w-[304px] mx-auto border border-gray-50 relative"
                >
                  {/* Heart Icon */}
                  <Image
                    height={24}
                    width={24}
                    src="/images/Like.png"
                    alt="Favorite Icon"
                    className="absolute top-3 right-3 w-6 aspect-square cursor-pointer z-10"
                  />
                  <div className="flex gap-5 justify-between">
                    <div className="flex flex-col">
                      <div className="text-xl tracking-tight text-gray-900 font-bold">
                        CR-V
                      </div>
                      <div className="mt-1 text-sm tracking-tight text-slate-400">
                        Suv
                      </div>
                    </div>
                  </div>
                  <Image
                    width={248}
                    height={100}
                    src="/images/Car4.png"
                    alt="CR-V"
                    className="object-contain self-center mt-16 max-md:mt-10"
                  />
                  <div className="flex gap-4 items-start mt-16 text-sm font-medium leading-5 text-slate-400 max-md:mt-10">
                    <div className="flex gap-1.5 items-start tracking-tight whitespace-nowrap">
                      <Image
                        height={24}
                        width={24}
                        src="/images/gas-station.png"
                        alt="Gas-Station"
                      />
                      <div className="w-7">80L</div>
                    </div>
                    <div className="flex gap-1 items-start whitespace-nowrap">
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
                    <div className="flex flex-col font-bold text-slate-900">
                      <div className="text-xl">
                        $80.00/{" "}
                        <span className="text-sm text-slate-400">day</span>
                      </div>
                    </div>
                    <button
                      className="gap-2 self-start px-6 py-3 mt-1 text-base font-medium tracking-tight text-center text-white bg-[#3563E9] rounded min-h-[10px] w-[130px] whitespace-nowrap"
                      aria-label="Rent CR-V now"
                    >
                      Rent Now
                    </button>
                  </div>
                </div>

                <div
                  className="flex overflow-hidden flex-col p-4 sm:p-6 bg-white rounded-xl min-w-[240px] 
        lg:w-[304px] max-w-[304px] mx-auto border border-gray-50 relative"
                >
                  {/* Heart Icon */}
                  <Image
                    height={24}
                    width={24}
                    src="/images/Like2.png"
                    alt="Favorite Icon"
                    className="absolute top-3 right-3 w-6 aspect-square cursor-pointer z-10"
                  />
                  <div className="flex gap-5 justify-between">
                    <div className="flex flex-col">
                      <div className="text-xl tracking-tight text-gray-900 font-bold">
                        All New Terios
                      </div>
                      <div className="mt-1 text-sm tracking-tight text-slate-400">
                        Suv
                      </div>
                    </div>
                  </div>
                  <Image
                    height={100}
                    width={248}
                    src="/images/Car5.png"
                    alt="All New Terios"
                    className="object-contain self-center mt-16 max-md:mt-10"
                  />
                  <div className="flex gap-4 items-start mt-16 text-sm font-medium leading-5 text-slate-400 max-md:mt-10">
                    <div className="flex gap-1.5 items-start tracking-tight whitespace-nowrap">
                      <Image
                        height={24}
                        width={24}
                        src="/images/gas-station.png"
                        alt="Gas-Station"
                      />
                      <div className="w-7">90L</div>
                    </div>
                    <div className="flex gap-1 items-start whitespace-nowrap">
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
                    <div className="flex flex-col font-bold text-slate-900">
                      <div className="text-xl">
                        $74.00/{" "}
                        <span className="text-sm text-slate-400">day</span>
                      </div>
                    </div>
                    <button
                      className="gap-2 self-start px-6 py-3 mt-1 text-base font-medium tracking-tight text-center text-white bg-[#3563E9] rounded min-h-[10px] w-[130px] whitespace-nowrap"
                      aria-label="Rent All New Terios now"
                    >
                      Rent Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/*Row 3*/}
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5 gap-10 md:ml-5 mt-5">
                <div
                  className="flex overflow-hidden flex-col p-4 sm:p-6 bg-white rounded-xl min-w-[280px] 
        lg:w-[304px] max-w-[304px] mx-auto border border-gray-50 relative"
                >
                  {/* Heart Icon */}
                  <Image
                    height={24}
                    width={24}
                    src="/images/Like.png"
                    alt="Favorite Icon"
                    className="absolute top-3 right-3 w-6 aspect-square cursor-pointer z-10"
                  />
                  <div className="flex flex-col">
                    <div className="text-lg md:text-xl tracking-tight text-gray-900 font-bold">
                      MG ZX Exclusive
                    </div>
                    <div className="mt-1 text-sm md:text-base tracking-tight text-slate-400">
                      Hatchback
                    </div>
                  </div>
                  <Image
                    width={264}
                    height={108}
                    src="/images/Car7.png"
                    alt="MG ZX Exclusive"
                    className="object-contain self-center mt-10 sm:mt-16"
                  />
                  <div className="flex gap-4 items-start mt-8 sm:mt-16 text-xs sm:text-sm font-medium leading-5 text-slate-400">
                    <div className="flex gap-1.5 items-start tracking-tight whitespace-nowrap">
                      <Image
                        height={24}
                        width={24}
                        src="/images/gas-station.png"
                        alt="Gas-Station"
                      />
                      <div className="w-7">70L</div>
                    </div>
                    <div className="flex gap-1 items-start whitespace-nowrap">
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
                      <div className="w-[60px]">4 People</div>
                    </div>
                  </div>
                  <div className="flex gap-3 mt-6 sm:mt-8 items-center justify-between w-full">
                    <div className="flex flex-col font-bold text-slate-900">
                      <div className="text-lg sm:text-xl">
                        $72.00/{" "}
                        <span className="text-xs sm:text-sm text-slate-400">
                          day
                        </span>
                      </div>
                      <div className="mt-1 text-xs sm:text-sm text-slate-400 line-through">
                        $80.00
                      </div>
                    </div>
                    <button
                      className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-medium text-white bg-[#3563E9] rounded min-h-[10px] w-[100px] sm:w-[130px] whitespace-nowrap"
                      aria-label="Rent MG ZX Exclusive now"
                    >
                      Rent Now
                    </button>
                  </div>
                </div>

                <div
                  className="flex overflow-hidden flex-col p-4 sm:p-6 bg-white rounded-xl min-w-[280px] 
        lg:w-[304px] max-w-[304px] mx-auto border border-gray-50 relative"
                >
                  {/* Heart Icon */}
                  <Image
                    height={24}
                    width={24}
                    src="/images/Like2.png"
                    alt="Favorite Icon"
                    className="absolute top-3 right-3 w-6 aspect-square cursor-pointer z-10"
                  />
                  <div className="flex flex-col">
                    <div className="text-lg md:text-xl tracking-tight text-gray-900 font-bold">
                      New MG ZS
                    </div>
                    <div className="mt-1 text-sm md:text-base tracking-tight text-slate-400">
                      SUV
                    </div>
                  </div>
                  <Image
                    width={288}
                    height={112}
                    src="/images/Car8.png"
                    alt="New MG ZS"
                    className="object-contain self-center mt-10 sm:mt-16"
                  />
                  <div className="flex gap-4 items-start mt-8 sm:mt-16 text-xs sm:text-sm font-medium leading-5 text-slate-400">
                    <div className="flex gap-1.5 items-start tracking-tight whitespace-nowrap">
                      <Image
                        height={24}
                        width={24}
                        src="/images/gas-station.png"
                        alt="Gas-Station"
                      />
                      <div className="w-7">80L</div>
                    </div>
                    <div className="flex gap-1 items-start whitespace-nowrap">
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
                  <div className="flex gap-3 mt-6 sm:mt-8 items-center justify-between w-full">
                    <div className="flex flex-col font-bold text-slate-900">
                      <div className="text-lg sm:text-xl">
                        $80.00/{" "}
                        <span className="text-xs sm:text-sm text-slate-400">
                          day
                        </span>
                      </div>
                    </div>
                    <button
                      className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-medium text-white bg-[#3563E9] rounded min-h-[10px] w-[100px] sm:w-[130px] whitespace-nowrap"
                      aria-label="Rent New MG ZS now"
                    >
                      Rent Now
                    </button>
                  </div>
                </div>

                <div
                  className="flex overflow-hidden flex-col p-4 sm:p-6 bg-white rounded-xl min-w-[280px] 
        lg:w-[304px] max-w-[304px] mx-auto border border-gray-50 relative"
                >
                  {/* Heart Icon */}
                  <Image
                    height={24}
                    width={24}
                    src="/images/Like.png"
                    alt="Favorite Icon"
                    className="absolute top-3 right-3 w-6 aspect-square cursor-pointer z-10"
                  />
                  <div className="flex flex-col">
                    <div className="text-lg md:text-xl tracking-tight text-gray-900 font-bold">
                      MG ZX Excite
                    </div>
                    <div className="mt-1 text-sm md:text-base tracking-tight text-slate-400">
                      SUV
                    </div>
                  </div>
                  <Image
                    width={264}
                    height={108}
                    src="/images/Car7.png"
                    alt="MG ZX Excite"
                    className="object-contain self-center mt-10 sm:mt-16"
                  />
                  <div className="flex gap-4 items-start mt-8 sm:mt-16 text-xs sm:text-sm font-medium leading-5 text-slate-400">
                    <div className="flex gap-1.5 items-start tracking-tight whitespace-nowrap">
                      <Image
                        height={24}
                        width={24}
                        src="/images/gas-station.png"
                        alt="Gas-Station"
                      />
                      <div className="w-7">90L</div>
                    </div>
                    <div className="flex gap-1 items-start whitespace-nowrap">
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
                      <div className="w-[60px]">4 People</div>
                    </div>
                  </div>
                  <div className="flex gap-3 mt-6 sm:mt-8 items-center justify-between w-full">
                    <div className="flex flex-col font-bold text-slate-900">
                      <div className="text-lg sm:text-xl">
                        $74.00/{" "}
                        <span className="text-xs sm:text-sm text-slate-400">
                          day
                        </span>
                      </div>
                    </div>
                    <button
                      className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-medium text-white bg-[#3563E9] rounded min-h-[10px] w-[100px] sm:w-[130px] whitespace-nowrap"
                      aria-label="Rent MG ZX Excite now"
                    >
                      Rent Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center mt-[64px] mb-[64px] md:ml-[480px] mx-auto">
              <button
                className="rounded space-x-2 px-5 bg-[#3563E9] text-[16px] font-semibold text-white
           h-[44px] w-[156px] mb-16"
              >
                Show more car
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarRent;
