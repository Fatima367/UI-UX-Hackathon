"use client";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import Link from "next/link";
import React, { MouseEvent, useState } from "react";
import Navbar from "../navbar/Navbar";
import Navbar2 from "../navbar/Navbar2";

const CarRent = () => {
  const [isFav1, setIsFav1] = useState(false); // Card 1
  const [isFav2, setIsFav2] = useState(true); // Card 2
  const [isFav3, setIsFav3] = useState(true); // Card 3
  const [isFav4, setIsFav4] = useState(true); // Card 4
  const [isFav5, setIsFav5] = useState(false); // Card 5
  const [isFav6, setIsFav6] = useState(true); // Card 6
  const [isFav7, setIsFav7] = useState(true); // Card 7
  const [isFav8, setIsFav8] = useState(true); // Card 8
  const [isFav9, setIsFav9] = useState(false); // Card 9

  const [progress, setProgress] = useState(70);

  const increaseProgress = (e: MouseEvent<HTMLDivElement>) => {
    setProgress((prev) => Math.min(prev + 10, 100));
  };

  const decreaseProgress = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation(); // Prevent triggering the parent click
    setProgress((prev) => Math.max(prev - 10, 0));
  };

  return (
    <div className="bg-[#F6F7F9]">
      <Navbar />
      <Navbar2 />
        <div className="flex relative">
          {/*Left*/}
          <div className="left-0 lg:flex lg:flex-col lg:visible hidden lg:h-[1800px] bg-white relative lg:px-5">
            <div className="flex flex-col space-y-4 mr-4 mt-10 ml-5">
              <p className="text-[#90A3BF] text-base">T Y P E</p>
              <p className="text-xl font-medium">
                <Checkbox className="mr-2" checked /> Sport<span className="ml-2 text-[#90A3BF] text-base">(10)</span>
              </p>
              <p className="text-xl font-medium">
                <Checkbox className="mr-2" checked /> SUV <span className="ml-2 text-[#90A3BF] text-base">(12)</span>
              </p>
              <p className="text-xl font-medium">
                <Checkbox className="mr-2" /> MPV<span className="ml-2 text-[#90A3BF] text-base">(16)</span>
              </p>
              <p className="text-xl font-medium">
                <Checkbox className="mr-2" /> Sedan<span className="ml-2 text-[#90A3BF] text-base">(20)</span>
              </p>
              <p className="text-xl font-medium">
                <Checkbox className="mr-2" /> Cope<span className="ml-2 text-[#90A3BF] text-base">(14)</span>
              </p>
              <p className="text-xl font-medium">
                <Checkbox className="mr-2" /> Hatchback<span className="ml-2 text-[#90A3BF] text-base">(14)</span>
              </p>
            </div>

            <div className="flex flex-col space-y-4 mr-4 mt-14 ml-5">
              <p className="text-[#90A3BF] text-base">C A P A C I T Y</p>
              <p className="text-xl font-medium">
                <Checkbox className="mr-2" checked /> 2 Person<span className="ml-2 text-[#90A3BF] text-base">(10)</span>
              </p>
              <p className="text-xl font-medium">
                <Checkbox className="mr-2" /> 4 Person<span className="ml-2 text-[#90A3BF] text-base">(14)</span>
              </p>
              <p className="text-xl font-medium">
                <Checkbox className="mr-2" /> 6 Person<span className="ml-2 text-[#90A3BF] text-base">(12)</span>
              </p>
              <p className="text-xl font-medium">
                <Checkbox className="mr-2" checked /> 8 Person<span className="ml-2 text-[#90A3BF] text-base">(16)</span>
              </p>
            </div>

            <div className="flex flex-col space-y-4 mr-4 mt-14 ml-5">
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
          <div className="flex flex-col items-center justify-center mx-auto">
            <div
              className="flex flex-col lg:flex-row lg:items-center lg:gap-x-4 mt-2 p-4 
          mb-9 items-start justify-center mx-auto gap-y-4"
            >
              {/* Pick-Up */}
              <div
                className="lg:flex-1 items-start justify-between bg-white shadow-md 
                lg:p-7 p-3 rounded-lg flex flex-col relative"
              >
                <div className="flex-1 items-start justify-between">
                  <div className="flex space-x-3 items-center justify-start lg:ml-0 ml-1 mt-1 lg:mt-0">
                    <div className="rounded-full h-2 w-2 bg-[#3563E9] ring-4 ring-[#3563E9] ring-opacity-30"></div>
                    <h3 className="text-base font-medium text-[#1A202C]">
                      Pick-Up
                    </h3>
                  </div>

                  <div className="lg:space-x-3 space-x-2 flex mt-4 mx-auto">
                    <div className="space-y-2 flex flex-col">
                      <label
                        className="lg:text-base text-sm font-bold text-[#1A202C]
                      lg:ml-0 ml-1"
                      >
                        Locations
                      </label>
                      <select
                        className="w-20 lg:w-32 border-0 text-[#90A3BF] font-medium
                   text-xs bg-transparent lg:py-0 py-4 lg:rounded-none rounded-md"
                      >
                        <option>Kota Semarang</option>
                      </select>
                    </div>
                    <div className="mx-4 w-[1px] bg-[#C3D4E9] opacity-40">
                      {" "}
                    </div>
                    <div className="space-y-2 flex-col flex">
                      <label className="lg:text-base text-sm font-bold text-[#1A202C] lg:ml-0 ml-1">
                        Date
                      </label>
                      <select
                        className="w-20 lg:w-32 border-0 text-[#90A3BF] font-medium
                   text-xs bg-transparent lg:py-0 py-4 lg:rounded-none rounded-md"
                      >
                        <option>20 July 2022</option>
                      </select>
                    </div>
                    <div className="mx-4 w-[1px] bg-[#C3D4E9] opacity-40">
                      {" "}
                    </div>
                    <div className="space-y-2 flex-col flex">
                      <label className="lg:text-base text-sm font-bold text-[#1A202C] lg:ml-0 ml-1">
                        Time
                      </label>
                      <select
                        className="w-20 lg:w-24 border-0 text-[#90A3BF] font-medium
                   text-xs bg-transparent lg:py-0 py-4 lg:rounded-none rounded-md"
                      >
                        <option>07.00</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Swap Button */}
              <div
                className=" flex items-center justify-center lg:my-0 lg:-mx-6
                  -my-8 z-10"
              >
                <button
                  className="bg-[#3563E9] p-4 shadow-lg hover:bg-blue-400
                    rounded-lg lg:ml-0 ml-32 h-14 w-14"
                >
                  <Image
                    src="/images/Swap.png"
                    height={24}
                    width={24}
                    alt="Swap"
                    className="z-10 text-white font-bold"
                  />
                </button>
              </div>

              {/* Drop-Off */}
              <div
                className="lg:flex-1 items-start justify-between bg-white shadow-md
                lg:p-7 p-3 rounded-lg flex flex-col relative"
              >
                <div className="flex-1 items-start justify-between">
                  <div className="flex space-x-3 items-center justify-start lg:ml-0 ml-1 mt-1 lg:mt-0">
                    <div className="rounded-full h-2 w-2 bg-[#3563E9] ring-4 ring-[#5CAFFC] ring-opacity-30"></div>
                    <h3 className="text-base font-medium text-[#1A202C]">
                      Drop-Off
                    </h3>
                  </div>

                  <div className="lg:space-x-3 space-x-2 flex mt-4 mx-auto">
                    <div className="space-y-2 flex flex-col">
                      <label
                        className="lg:text-base text-sm font-bold text-[#1A202C]
                      lg:ml-0 ml-1"
                      >
                        Locations
                      </label>
                      <select
                        className="w-20 lg:w-32 border-0 text-[#90A3BF] font-medium 
                  text-xs bg-transparent lg:py-0 py-4 lg:rounded-none rounded-md"
                      >
                        <option>Kota Semarang</option>
                      </select>
                    </div>
                    <div className="mx-4 w-[1px] bg-[#C3D4E9] opacity-40">
                      {" "}
                    </div>
                    <div className="space-y-2 flex-col flex">
                      <label className="lg:text-base text-sm font-bold text-[#1A202C] lg:ml-0 ml-1">
                        Date
                      </label>
                      <select
                        className="w-20 lg:w-32 border-0 text-[#90A3BF] font-medium 
                    text-xs bg-transparent lg:py-0 py-4 lg:rounded-none rounded-md"
                      >
                        <option>21 July 2022</option>
                      </select>
                    </div>
                    <div className="mx-4 w-[1px] bg-[#C3D4E9] opacity-40">
                      {" "}
                    </div>
                    <div className="space-y-2 flex-col flex">
                      <label className="lg:text-base text-sm font-bold text-[#1A202C] lg:ml-0 ml-1">
                        Time
                      </label>
                      <select
                        className="w-20 lg:w-24 border-0 text-[#90A3BF] font-medium 
                    text-xs bg-transparent lg:py-0 py-4 lg:rounded-none rounded-md"
                      >
                        <option>01.00</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          <div className="flex-1 items-start justify-between">
            {/*Row 1*/}
            <div className="hidden lg:flex gap-8 ml-10 lg:ml-0">
              <div
                className="bg-white rounded-lg flex flex-col p-6 relative"
              >
                <div className="flex items-start justify-between">
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
                  <div className="flex space-x-1 items-center justify-center">
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
                  <div className="flex space-x-1 items-center justify-center">
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
                  <div className="flex space-x-1 items-center justify-center">
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
                        justify-between mt-6"
                >
                  <div className="flex flex-col font-bold text-[#1A202C]">
                    <div className="text-xl font-bold">
                      $99.00/{" "}
                      <span className="text-sm text-[#90A3BF]">day</span>
                    </div>
                  </div>

                  <Link href="/detail-car-rent">
                    <button
                      className="px-5 py-3 mt-1 text-base font-medium text-center space-x-2
                     text-white bg-[#3563E9] hover:bg-blue-800 rounded min-h-11"
                    >
                      Rent Now
                    </button>
                  </Link>
                </div>
              </div>

              <div
                className="bg-white rounded-lg flex flex-col p-6"
              >
                <div className="flex items-start justify-between">
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
                  className=" mx-auto mt-16"
                />

                <div className="flex space-x-4 mt-16 items-center justify-center">
                  <div className="flex space-x-1 items-center justify-center">
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
                  <div className="flex space-x-1 items-center justify-center">
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
                  <div className="flex space-x-1 items-center justify-center">
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
                        justify-between mt-6"
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

                  <Link href="/detail-car-rent">
                    <button
                      className="px-5 py-3 mt-1 text-base font-medium text-center space-x-2
                     text-white bg-[#3563E9] hover:bg-blue-800 rounded min-h-11"
                    >
                      Rent Now
                    </button>
                  </Link>
                </div>
              </div>

              <div
                className="bg-white rounded-lg flex flex-col p-6"
              >
                <div className="flex items-start justify-between">
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

                <div className="flex space-x-4 mt-16 items-center justify-center">
                  <div className="flex space-x-1 items-center justify-center">
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
                  <div className="flex space-x-1 items-center justify-center">
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
                  <div className="flex space-x-1 items-center justify-center">
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
                        justify-between mt-6"
                >
                  <div className="flex flex-col font-bold text-[#1A202C]">
                    <div className="text-xl font-bold">
                      $97.00/{" "}
                      <span className="text-sm text-[#90A3BF]">day</span>
                    </div>
                  </div>

                  <Link href="/detail-car-rent">
                    <button
                      className="px-5 py-3 mt-1 text-base font-medium text-center space-x-2
                     text-white bg-[#3563E9] hover:bg-blue-800 rounded min-h-11"
                    >
                      Rent Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/*Row 2*/}
              <div className="grid lg:flex lg:gap-8 gap-10 mt-7 sm:grid-cols-2">
                <div
                  className="flex flex-col bg-white rounded-xl relative shadow-sm p-6"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex flex-col">
                      <div className="font-bold text-xl text-[#1A202C]">
                        All New Rush
                      </div>
                      <p className="mt-1 font-semibold text-sm text-[#90A3BF]">
                        SUV
                      </p>
                    </div>
                    <Image
                    src={isFav4 ? "/images/Like2.png" : "/images/Like.png"}
                    height={24}
                    width={24}
                    alt="Favourite"
                    className="cursor-pointer"
                    onClick={() => setIsFav4(!isFav4)}
                  />
                  </div>
                  <Image
                    width={224}
                    height={100}
                    src="/images/Car3.png"
                    alt="All New Rush"
                    className="self-center mt-16"
                  />
                  <div className="flex space-x-4 items-start mt-16 text-sm font-medium text-[#90A3BF]">
                    <div className="flex space-x-1 items-start">
                      <Image
                        height={24}
                        width={24}
                        src="/images/gas-station.png"
                        alt="Gas-Station"
                      />
                      <p>70L</p>
                    </div>
                    <div className="flex space-x-1 items-start">
                      <Image
                        height={24}
                        width={24}
                        src="/images/manual.png"
                        alt="Mode"
                      />
                      <p>Manual</p>
                    </div>
                    <div className="flex space-x-1 items-start">
                      <Image
                        height={24}
                        width={24}
                        src="/images/profile-2user.png"
                        alt="2users-profile"
                      />
                      <p>6 People</p>
                    </div>
                  </div>
                  <div className="flex items-stretch justify-between mt-6">
                    <div className="flex flex-col font-bold text-[#1A202C]">
                      <div className="text-xl">
                        $72.00/{" "}
                        <span className="text-sm text-[#90A3BF]">day</span>
                      </div>
                      <div className="mt-1 text-sm text-[#90A3BF] line-through">
                        $80.00
                      </div>
                    </div>

                    <Link href="/detail-car-rent">
                      <button
                        className="space-x-2 px-6 py-3 mt-1 text-base font-medium text-center
                 text-white bg-[#3563E9] hover:bg-blue-800 rounded min-h-11"
                      >
                        Rent Now
                      </button>
                    </Link>
                  </div>
                </div>

                <div
                  className="flex flex-col p-6 bg-white rounded-xl mx-auto relative shadow-sm"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex flex-col">
                      <div className="font-bold text-xl text-[#1A202C]">
                        CR-V
                      </div>
                      <p className="mt-1 font-semibold text-sm text-[#90A3BF]">
                        SUV
                      </p>
                    </div>
                    <Image
                    src={isFav5 ? "/images/Like2.png" : "/images/Like.png"}
                    height={24}
                    width={24}
                    alt="Favourite"
                    className="cursor-pointer"
                    onClick={() => setIsFav5(!isFav5)}
                  />
                  </div>
                  <Image
                    width={248}
                    height={100}
                    src="/images/Car4.png"
                    alt="CR-V"
                    className="self-center mt-16"
                  />
                  <div
                    className="flex space-x-4 items-start mt-16 text-sm font-medium text-[#90A3BF]"
                  >
                    <div className="flex space-x-1 items-start">
                      <Image
                        height={24}
                        width={24}
                        src="/images/gas-station.png"
                        alt="Gas-Station"
                      />
                      <p>80L</p>
                    </div>
                    <div className="flex space-x-1 items-start">
                      <Image
                        height={24}
                        width={24}
                        src="/images/manual.png"
                        alt="Mode"
                      />
                      <p>Manual</p>
                    </div>
                    <div className="flex space-x-1 items-start">
                      <Image
                        height={24}
                        width={24}
                        src="/images/profile-2user.png"
                        alt="2users-profile"
                      />
                      <p>6 People</p>
                    </div>
                  </div>
                  <div className="flex items-stretch justify-between mt-6">
                    <div className="flex flex-col font-bold text-[#1A202C]">
                      <div className="text-xl">
                        $80.00/{" "}
                        <span className="text-sm text-[#90A3BF]">day</span>
                      </div>
                    </div>

                    <Link href="/detail-car-rent">
                      <button
                        className="space-x-2 px-6 py-3 mt-1 text-base font-medium text-center
                 text-white bg-[#3563E9] hover:bg-blue-800 rounded min-h-11"
                      >
                        Rent Now
                      </button>
                    </Link>
                  </div>
                </div>

                <div
                  className="flex flex-col p-6 bg-white rounded-xl mx-auto relative shadow-sm"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex flex-col">
                      <div className="font-bold text-xl text-[#1A202C]">
                        All New Terios
                      </div>
                      <p className="mt-1 font-semibold text-sm text-[#90A3BF]">
                        SUV
                      </p>
                    </div>
                    <Image
                    src={isFav6 ? "/images/Like2.png" : "/images/Like.png"}
                    height={24}
                    width={24}
                    alt="Favourite"
                    className="cursor-pointer"
                    onClick={() => setIsFav6(!isFav6)}
                  />
                  </div>
                  <Image
                    height={100}
                    width={224}
                    src="/images/Car5.png"
                    alt="All New Terios"
                    className="object-contain self-center mt-16"
                  />
                  <div
                    className="flex space-x-4 items-start mt-16 text-sm font-medium text-[#90A3BF]"
                  >
                    <div className="flex space-x-1 items-start">
                      <Image
                        height={24}
                        width={24}
                        src="/images/gas-station.png"
                        alt="Gas-Station"
                      />
                      <p>90L</p>
                    </div>
                    <div className="flex space-x-1 items-start">
                      <Image
                        height={24}
                        width={24}
                        src="/images/manual.png"
                        alt="Mode"
                      />
                      <p>Manual</p>
                    </div>
                    <div className="flex space-x-1 items-start">
                      <Image
                        height={24}
                        width={24}
                        src="/images/profile-2user.png"
                        alt="2users-profile"
                      />
                      <p>6 People</p>
                    </div>
                  </div>
                  <div className="flex items-stretch justify-between mt-6">
                    <div className="flex flex-col font-bold text-[#1A202C]">
                      <div className="text-xl">
                        $74.00/{" "}
                        <span className="text-sm text-[#90A3BF]">day</span>
                      </div>
                    </div>

                    <Link href="/detail-car-rent">
                      <button
                        className="space-x-2 px-6 py-3 mt-1 text-base font-medium text-center
                 text-white bg-[#3563E9] hover:bg-blue-800 rounded min-h-11"
                      >
                        Rent Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

            {/*Row 3*/}
              <div className="grid lg:flex lg:gap-8 gap-10 mt-7 sm:grid-cols-2">
                <div
                  className="flex flex-col p-6 bg-white rounded-xl mx-auto relative shadow-sm"
                >
                 <div className="flex items-start justify-between">
                  <div className="flex flex-col">
                    <div className="font-bold text-xl text-[#1A202C]">
                      MG ZX Exclusive
                    </div>
                    <p className="mt-1 font-semibold text-sm text-[#90A3BF]">
                      Hatchback
                    </p>
                  </div>
                  <Image
                    src={isFav7 ? "/images/Like2.png" : "/images/Like.png"}
                    height={24}
                    width={24}
                    alt="Favourite"
                    className="cursor-pointer"
                    onClick={() => setIsFav7(!isFav7)}
                  />
                  </div>
                  <Image
                    width={244}
                    height={108}
                    src="/images/Car7.png"
                    alt="MG ZX Exclusive"
                    className="self-center mt-16"
                  />
                  <div
                    className="flex space-x-4 items-start mt-16 text-xs lg:text-sm font-medium text-[#90A3BF]"
                  >
                    <div className="flex space-x-1 items-start">
                      <Image
                        height={24}
                        width={24}
                        src="/images/gas-station.png"
                        alt="Gas-Station"
                      />
                      <p>70L</p>
                    </div>
                    <div className="flex space-x-1 items-start">
                      <Image
                        height={24}
                        width={24}
                        src="/images/manual.png"
                        alt="Mode"
                      />
                      <p>Manual</p>
                    </div>
                    <div className="flex space-x-1 items-start">
                      <Image
                        height={24}
                        width={24}
                        src="/images/profile-2user.png"
                        alt="2users-profile"
                      />
                      <p>4 People</p>
                    </div>
                  </div>
                  <div className="flex mt-6 items-stretch justify-between">
                    <div className="flex flex-col font-bold text-[#1A202C]">
                      <div className="text-lg sm:text-xl">
                        $72.00/{" "}
                        <span className="text-xs sm:text-sm text-[#90A3BF]">
                          day
                        </span>
                      </div>
                      <div className="mt-1 text-xs sm:text-sm text-[#90A3BF] line-through">
                        $80.00
                      </div>
                    </div>

                    <Link href="/detail-car-rent">
                      <button
                        className="space-x-2 px-6 py-3 mt-1 text-base font-medium text-center
                 text-white bg-[#3563E9] hover:bg-blue-800 rounded min-h-11"
                      >
                        Rent Now
                      </button>
                    </Link>
                  </div>
                </div>

                <div
                  className="flex flex-col p-6 bg-white rounded-xl mx-auto relative shadow-sm"
                >
                 <div className="flex items-start justify-between">
                  <div className="flex flex-col">
                    <div className="font-bold text-xl text-[#1A202C]">
                      New MG ZS
                    </div>
                    <p className="mt-1 font-semibold text-sm text-[#90A3BF]">
                      SUV
                    </p>
                  </div>
                  <Image
                    src={isFav8 ? "/images/Like2.png" : "/images/Like.png"}
                    height={24}
                    width={24}
                    alt="Favourite"
                    className="cursor-pointer"
                    onClick={() => setIsFav8(!isFav8)}
                  />
                  </div>
                  <Image
                    width={248}
                    height={112}
                    src="/images/Car8.png"
                    alt="New MG ZS"
                    className="self-center mt-16"
                  />
                  <div
                    className="flex space-x-4 mt-16 items-start text-xs sm:text-sm  font-medium text-[#90A3BF]"
                  >
                    <div className="flex space-x-1 items-start">
                      <Image
                        height={24}
                        width={24}
                        src="/images/gas-station.png"
                        alt="Gas-Station"
                      />
                      <p>80L</p>
                    </div>
                    <div className="flex space-x-1 items-start">
                      <Image
                        height={24}
                        width={24}
                        src="/images/manual.png"
                        alt="Mode"
                      />
                      <p>Manual</p>
                    </div>
                    <div className="flex space-x-1 items-start">
                      <Image
                        height={24}
                        width={24}
                        src="/images/profile-2user.png"
                        alt="2users-profile"
                      />
                      <p>6 People</p>
                    </div>
                  </div>
                  <div className="flex mt-6 items-stretch justify-between">
                    <div className="flex flex-col font-bold text-[#1A202C]">
                      <div className="text-lg sm:text-xl">
                        $80.00/{" "}
                        <span className="text-xs sm:text-sm text-[#90A3BF]">
                          day
                        </span>
                      </div>
                    </div>

                    <Link href="/detail-car-rent">
                      <button
                        className="space-x-2 px-6 py-3 mt-1 text-base font-medium text-center
                 text-white bg-[#3563E9] hover:bg-blue-800 rounded min-h-11"
                      >
                        Rent Now
                      </button>
                    </Link>
                  </div>
                </div>

                <div
                  className="flex flex-col p-6 bg-white rounded-xl mx-auto relative shadow-sm"
                >
                 <div className="flex items-start justify-between">
                  <div className="flex flex-col">
                    <div className="font-bold text-xl text-[#1A202C]">
                      MG ZX Excite
                    </div>
                    <p className="mt-1 font-semibold text-sm text-[#90A3BF]">
                      Hatchback
                    </p>
                  </div>
                  <Image
                    src={isFav9 ? "/images/Like2.png" : "/images/Like.png"}
                    height={24}
                    width={24}
                    alt="Favourite"
                    className="cursor-pointer"
                    onClick={() => setIsFav9(!isFav9)}
                  />
                  </div>
                  <Image
                    width={244}
                    height={108}
                    src="/images/Car7.png"
                    alt="MG ZX Excite"
                    className="self-center mt-16"
                  />
                  <div
                    className="flex space-x-4 items-start mt-16 text-xs sm:text-sm font-medium text-[#90A3BF]"
                  >
                    <div className="flex space-x-1 items-start">
                      <Image
                        height={24}
                        width={24}
                        src="/images/gas-station.png"
                        alt="Gas-Station"
                      />
                      <p>90L</p>
                    </div>
                    <div className="flex space-x-1 items-start">
                      <Image
                        height={24}
                        width={24}
                        src="/images/manual.png"
                        alt="Mode"
                      />
                      <p>Manual</p>
                    </div>
                    <div className="flex space-x-1 items-start">
                      <Image
                        height={24}
                        width={24}
                        src="/images/profile-2user.png"
                        alt="2users-profile"
                      />
                      <p>4 People</p>
                    </div>
                  </div>
                  <div className="flex mt-6 items-stretch justify-between">
                    <div className="flex flex-col font-bold text-[#1A202C]">
                      <div className="text-lg sm:text-xl">
                        $74.00/{" "}
                        <span className="text-xs sm:text-sm text-[#90A3BF]">
                          day
                        </span>
                      </div>
                    </div>

                    <Link href="/detail-car-rent">
                      <button
                        className="space-x-2 px-6 py-3 mt-1 text-base font-medium text-center
                 text-white bg-[#3563E9] hover:bg-blue-800 rounded min-h-11"
                      >
                        Rent Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center mt-16 mb-16 mx-auto">
              <Link href="/car-rent">
                <button
                  className="rounded space-x-2 px-5 bg-[#3563E9] text-base font-semibold text-white
           h-11 w-[156px] mb-16 hover:bg-blue-800"
                >
                  Show more car
                </button>
              </Link>
            </div>
          </div>
        </div>
    </div>
  );
};

export default CarRent;
