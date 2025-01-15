"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function RecommendationCar() {
  const [isFav1, setIsFav1] = useState(true); // Card 1
  const [isFav2, setIsFav2] = useState(false); // Card 2
  const [isFav3, setIsFav3] = useState(true); // Card 3
  const [isFav4, setIsFav4] = useState(false); // Card 4
  const [isFav5, setIsFav5] = useState(false); // Card 5
  const [isFav6, setIsFav6] = useState(true); // Card 6
  const [isFav7, setIsFav7] = useState(false); // Card 7
  const [isFav8, setIsFav8] = useState(true); // Card 8

  return (
    <div className="lg:py-8 mx-auto flex relative max-w-[1260px] md:py-8">
      <div className="flex flex-col relative">
        <div className="flex items-start justify-between">
          <h2 className="text-xl font-bold text-[#90A3BF] text-left mb-8">
            Recomendation Car{" "}
          </h2>
        </div>

        {/*Car Cards*/}
        {/*Row 1*/}
        <div
          className="relative grid sm:grid-cols-2 lg:grid-cols-4 md:grid md:grid-cols-2 gap-6
          mb-8"
        >
          <div
            className="bg-white rounded-lg flex flex-col py-6 px-5 relative flex-shrink-0 lg:flex-shrink
          w-[304px] md:w-full lg:w-auto shadow-sm"
          >
            <div className="flex items-start justify-between">
              <div className="flex flex-col">
                <div className="font-bold text-xl text-[#1A202C]">
                  All New Rush
                </div>
                <p className="mt-1 font-semibold text-sm text-[#90A3BF]">SUV</p>
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
              width={224}
              height={100}
              src="/images/Car3.png"
              alt="All New Rush"
              className="self-center mt-16 mx-auto w-full h-auto object-cover"
            />
            <div className="flex space-x-4 sm:flex-row items-center justify-center -mx-2 mt-16 text-sm font-medium text-[#90A3BF]">
              <div className="flex space-x-1 items-center justify-center">
                <Image
                  height={24}
                  width={24}
                  src="/images/gas-station.png"
                  alt="Gas-Station"
                />
                <p>70L</p>
              </div>
              <div className="flex space-x-1 items-center justify-center">
                <Image
                  height={24}
                  width={24}
                  src="/images/manual.png"
                  alt="Mode"
                />
                <p>Manual</p>
              </div>
              <div className="flex space-x-1 items-center justify-center">
                <Image
                  height={24}
                  width={24}
                  src="/images/profile-2user.png"
                  alt="2users-profile"
                />
                <p>6 People</p>
              </div>
            </div>
            <div className="flex items-start justify-between mt-6 gap-2">
              <div className="flex flex-col font-bold text-[#1A202C]">
                <div className="text-xl">
                  $72.00/ <span className="text-sm text-[#90A3BF]">day</span>
                </div>
                <div className="mt-1 text-sm text-[#90A3BF] line-through">
                  $80.00
                </div>
              </div>

              <Link href="/car-rent">
                <button
                  className="text-base font-medium text-center gap-2 h-11 w-28
                     text-white bg-[#3563E9] hover:bg-blue-800 rounded"
                >
                  Rent Now
                </button>
              </Link>
            </div>
          </div>

          <div
            className="bg-white rounded-lg flex flex-col py-6 px-5 relative flex-shrink-0 lg:flex-shrink
          w-[304px] md:w-full lg:w-auto shadow-sm"
          >
            <div className="flex items-start justify-between">
              <div className="flex flex-col">
                <div className="font-bold text-xl text-[#1A202C]">CR-V</div>
                <p className="mt-1 font-semibold text-sm text-[#90A3BF]">SUV</p>
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
              width={248}
              height={150}
              src="/images/Car4.png"
              alt="CR-V"
              className="self-center mt-20 mx-auto w-full h-auto object-cover"
            />
            <div className="flex space-x-4 sm:flex-row mt-16 items-center justify-center -mx-2 text-sm font-medium text-[#90A3BF]">
              <div className="flex space-x-1 items-center justify-center">
                <Image
                  height={24}
                  width={24}
                  src="/images/gas-station.png"
                  alt="Gas-Station"
                />
                <p>80L</p>
              </div>
              <div className="flex space-x-1 items-center justify-center">
                <Image
                  height={24}
                  width={24}
                  src="/images/manual.png"
                  alt="Mode"
                />
                <p>Manual</p>
              </div>
              <div className="flex space-x-1 items-center justify-center">
                <Image
                  height={24}
                  width={24}
                  src="/images/profile-2user.png"
                  alt="2users-profile"
                />
                <p>6 People</p>
              </div>
            </div>
            <div className="flex items-start justify-between mt-6 gap-2">
              <div className="flex flex-col font-bold text-[#1A202C]">
                <div className="text-xl">
                  $80.00/ <span className="text-sm text-[#90A3BF]">day</span>
                </div>
              </div>

              <Link href="/car-rent">
                <button
                  className="text-base font-medium text-center gap-2 h-11 w-28
                     text-white bg-[#3563E9] hover:bg-blue-800 rounded"
                >
                  Rent Now
                </button>
              </Link>
            </div>
          </div>

          <div
            className="bg-white rounded-lg flex flex-col py-6 px-5 relative flex-shrink-0 lg:flex-shrink
          w-[304px] md:w-full lg:w-auto shadow-sm"
          >
            <div className="flex items-start justify-between">
              <div className="flex flex-col">
                <div className="font-bold text-xl text-[#1A202C]">
                  All New Terios
                </div>
                <p className="mt-1 font-semibold text-sm text-[#90A3BF]">SUV</p>
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
              height={100}
              width={224}
              src="/images/Car5.png"
              alt="All New Terios"
              className="object-cover self-center mt-16 w-full h-auto"
            />
            <div
              className="flex space-x-4 sm:flex-row mt-16 items-center justify-center -mx-2 text-sm font-medium 
            text-[#90A3BF]"
            >
              <div className="flex space-x-1 items-center justify-center">
                <Image
                  height={24}
                  width={24}
                  src="/images/gas-station.png"
                  alt="Gas-Station"
                />
                <p>90L</p>
              </div>
              <div className="flex space-x-1 items-center justify-center">
                <Image
                  height={24}
                  width={24}
                  src="/images/manual.png"
                  alt="Mode"
                />
                <p>Manual</p>
              </div>
              <div className="flex space-x-1 items-center justify-center">
                <Image
                  height={24}
                  width={24}
                  src="/images/profile-2user.png"
                  alt="2users-profile"
                />
                <p>6 People</p>
              </div>
            </div>
            <div className="flex items-start justify-between mt-6 gap-2">
              <div className="flex flex-col font-bold text-[#1A202C]">
                <div className="text-xl">
                  $74.00/ <span className="text-sm text-[#90A3BF]">day</span>
                </div>
              </div>

              <Link href="/car-rent">
                <button
                  className="text-base font-medium text-center gap-2 h-11 w-28
                     text-white bg-[#3563E9] hover:bg-blue-800 rounded"
                >
                  Rent Now
                </button>
              </Link>
            </div>
          </div>

          <div
            className="bg-white rounded-lg flex flex-col py-6 px-5 relative flex-shrink-0 lg:flex-shrink
          w-[304px] md:w-full lg:w-auto"
          >
            <div className="flex items-start justify-between">
              <div className="flex flex-col">
                <div className="font-bold text-xl text-[#1A202C]">CR -V</div>
                <p className="mt-1 font-semibold text-sm text-[#90A3BF]">SUV</p>
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
              height={100}
              width={248}
              src="/images/Car6.png"
              alt="Nissan GT-R"
              className="object-contain self-center mt-20 w-full h-auto mx-auto:"
            />
            <div
              className="flex space-x-4 sm:flex-row mt-16 items-center justify-center -mx-2 text-sm font-medium
             text-[#90A3BF]"
            >
              <div className="flex space-x-1 items-center justify-center">
                <Image
                  height={24}
                  width={24}
                  src="/images/gas-station.png"
                  alt="Gas-Station"
                />
                <p>80L</p>
              </div>
              <div className="flex space-x-1 items-center justify-center">
                <Image
                  height={24}
                  width={24}
                  src="/images/manual.png"
                  alt="Mode"
                />
                <p>Manual</p>
              </div>
              <div className="flex space-x-1 items-center justify-center">
                <Image
                  height={24}
                  width={24}
                  src="/images/profile-2user.png"
                  alt="2users-profile"
                />
                <p>6 People</p>
              </div>
            </div>
            <div className="flex items-start justify-between mt-6 gap-2">
              <div className="flex flex-col font-bold text-[#1A202C]">
                <div className="text-xl">
                  $80.00/ <span className="text-sm text-[#90A3BF]">day</span>
                </div>
              </div>

              <Link href="/car-rent">
                <button
                  className="text-base font-medium text-center gap-2 h-11 w-28
                     text-white bg-[#3563E9] hover:bg-blue-800 rounded"
                >
                  Rent Now
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/*Row 2*/}
        <div
          className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid md:grid-cols-2 gap-6
          mb-8"
        >
          <div
            className="bg-white rounded-lg flex flex-col py-6 px-5 relative flex-shrink-0 lg:flex-shrink
          w-[304px] md:w-full lg:w-auto shadow-sm"
          >
            {" "}
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
                src={isFav5 ? "/images/Like2.png" : "/images/Like.png"}
                height={24}
                width={24}
                alt="Favourite"
                className="cursor-pointer"
                onClick={() => setIsFav5(!isFav5)}
              />
            </div>
            <Image
              width={264}
              height={108}
              src="/images/Car7.png"
              alt="MG ZX Exclusive"
              className="self-center mt-16 object-cover w-full h-auto mx-auto"
            />
            <div
              className="flex space-x-4 sm:flex-row mt-16 items-center justify-center -mx-2 text-xs lg:text-sm
            font-medium text-[#90A3BF]"
            >
              <div className="flex space-x-1 items-center justify-center">
                <Image
                  height={24}
                  width={24}
                  src="/images/gas-station.png"
                  alt="Gas-Station"
                />
                <p>70L</p>
              </div>
              <div className="flex space-x-1 items-center justify-center">
                <Image
                  height={24}
                  width={24}
                  src="/images/manual.png"
                  alt="Mode"
                />
                <p>Manual</p>
              </div>
              <div className="flex space-x-1 items-center justify-center">
                <Image
                  height={24}
                  width={24}
                  src="/images/profile-2user.png"
                  alt="2users-profile"
                />
                <p>4 People</p>
              </div>
            </div>
            <div className="flex items-start justify-between mt-6 gap-2">
              <div className="flex flex-col font-bold text-[#1A202C]">
                <div className="text-lg sm:text-xl">
                  $72.00/{" "}
                  <span className="text-xs sm:text-sm text-[#90A3BF]">day</span>
                </div>
                <div className="mt-1 text-xs sm:text-sm text-[#90A3BF] line-through">
                  $80.00
                </div>
              </div>

              <Link href="/car-rent">
                <button
                  className="text-base font-medium text-center gap-2 h-11 w-28
                     text-white bg-[#3563E9] hover:bg-blue-800 rounded"
                >
                  Rent Now
                </button>
              </Link>
            </div>
          </div>

          <div
            className="bg-white rounded-lg flex flex-col py-6 px-5 relative flex-shrink-0 lg:flex-shrink
          w-[304px] md:w-full lg:w-auto shadow-sm"
          >
            <div className="flex items-start justify-between">
              <div className="flex flex-col">
                <div className="font-bold text-xl text-[#1A202C]">
                  New MG ZS
                </div>
                <p className="mt-1 font-semibold text-sm text-[#90A3BF]">SUV</p>
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
              width={288}
              height={112}
              src="/images/Car8.png"
              alt="New MG ZS"
              className="self-center mt-16 object-cover w-full h-auto mx-auto"
            />
            <div
              className="flex space-x-4 sm:flex-row mt-16 items-center justify-center -mx-2 text-xs sm:text-sm 
            font-medium text-[#90A3BF]"
            >
              <div className="flex space-x-1 items-center justify-center">
                <Image
                  height={24}
                  width={24}
                  src="/images/gas-station.png"
                  alt="Gas-Station"
                />
                <p>80L</p>
              </div>
              <div className="flex space-x-1 items-center justify-center">
                <Image
                  height={24}
                  width={24}
                  src="/images/manual.png"
                  alt="Mode"
                />
                <p>Manual</p>
              </div>
              <div className="flex space-x-1 items-center justify-center">
                <Image
                  height={24}
                  width={24}
                  src="/images/profile-2user.png"
                  alt="2users-profile"
                />
                <p>6 People</p>
              </div>
            </div>
            <div className="flex items-start justify-between mt-6 gap-2">
              <div className="flex flex-col font-bold text-[#1A202C]">
                <div className="text-lg sm:text-xl">
                  $80.00/{" "}
                  <span className="text-xs sm:text-sm text-[#90A3BF]">day</span>
                </div>
              </div>

              <Link href="/car-rent">
                <button
                  className="text-base font-medium text-center gap-2 h-11 w-28
                     text-white bg-[#3563E9] hover:bg-blue-800 rounded"
                >
                  Rent Now
                </button>
              </Link>
            </div>
          </div>

          <div
            className="bg-white rounded-lg flex flex-col py-6 px-5 relative flex-shrink-0 lg:flex-shrink
          w-[304px] md:w-full lg:w-auto shadow-sm"
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
                src={isFav7 ? "/images/Like2.png" : "/images/Like.png"}
                height={24}
                width={24}
                alt="Favourite"
                className="cursor-pointer"
                onClick={() => setIsFav7(!isFav7)}
              />
            </div>
            <Image
              width={264}
              height={108}
              src="/images/Car7.png"
              alt="MG ZX Excite"
              className="self-center mt-16 object-cover w-full h-auto mx-auto"
            />
            <div
              className="flex space-x-4 sm:flex-row mt-16 items-center justify-center -mx-2 text-xs sm:text-sm
             font-medium text-[#90A3BF]"
            >
              <div className="flex space-x-1 items-center justify-center">
                <Image
                  height={24}
                  width={24}
                  src="/images/gas-station.png"
                  alt="Gas-Station"
                />
                <p>90L</p>
              </div>
              <div className="flex space-x-1 items-center justify-center">
                <Image
                  height={24}
                  width={24}
                  src="/images/manual.png"
                  alt="Mode"
                />
                <p>Manual</p>
              </div>
              <div className="flex space-x-1 items-center justify-center">
                <Image
                  height={24}
                  width={24}
                  src="/images/profile-2user.png"
                  alt="2users-profile"
                />
                <p>4 People</p>
              </div>
            </div>
            <div className="flex items-start justify-between mt-6 gap-2">
              <div className="flex flex-col font-bold text-[#1A202C]">
                <div className="text-lg sm:text-xl">
                  $74.00/{" "}
                  <span className="text-xs sm:text-sm text-[#90A3BF]">day</span>
                </div>
              </div>

              <Link href="/car-rent">
                <button
                  className="text-base font-medium text-center gap-2 h-11 w-28
                     text-white bg-[#3563E9] hover:bg-blue-800 rounded"
                >
                  Rent Now
                </button>
              </Link>
            </div>
          </div>

          <div
            className="bg-white rounded-lg flex flex-col py-6 px-5 relative flex-shrink-0 lg:flex-shrink
          w-[304px] md:w-full lg:w-auto shadow-sm"
          >
            <div className="flex items-start justify-between">
              <div className="flex flex-col">
                <div className="font-bold text-xl text-[#1A202C]">MG ZS EV</div>
                <p className="mt-1 font-semibold text-sm text-[#90A3BF]">SUV</p>
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
              width={288}
              height={112}
              src="/images/Car9.png"
              alt="MG ZS EV"
              className="self-center mt-16 object-cover w-full h-auto mx-auto"
            />
            <div
              className="flex space-x-4 sm:flex-row mt-16 items-center justify-center -mx-2 text-xs sm:text-sm 
            font-medium text-[#90A3BF]"
            >
              <div className="flex space-x-1 items-center justify-center">
                <Image
                  height={24}
                  width={24}
                  src="/images/gas-station.png"
                  alt="Gas-Station"
                />
                <p>80L</p>
              </div>
              <div className="flex space-x-1 items-center justify-center">
                <Image
                  height={24}
                  width={24}
                  src="/images/manual.png"
                  alt="Mode"
                />
                <p>Manual</p>
              </div>
              <div className="flex space-x-1 items-center justify-center">
                <Image
                  height={24}
                  width={24}
                  src="/images/profile-2user.png"
                  alt="2users-profile"
                />
                <p>6 People</p>
              </div>
            </div>
            <div className="flex items-start justify-between mt-6 gap-2">
              <div className="flex flex-col font-bold text-[#1A202C]">
                <div className="text-lg sm:text-xl">
                  $90.00/{" "}
                  <span className="text-xs sm:text-sm text-[#90A3BF]">day</span>
                </div>
              </div>

              <Link href="/car-rent">
                <button
                  className="text-base font-medium text-center gap-2 h-11 w-28
                     text-white bg-[#3563E9] hover:bg-blue-800 rounded"
                >
                  Rent Now
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center my-16 mx-auto">
          <Link href="/car-rent">
            <button
              className="rounded space-x-2 px-5 bg-[#3563E9] text-base font-semibold text-white
           h-11 w-[156px] hover:bg-blue-800"
            >
              Show more car
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
