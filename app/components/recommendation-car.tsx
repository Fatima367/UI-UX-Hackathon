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
    <div className="p-[24px] flex flex-col items-start justify-between">
      <div className="flex items-start">
        <h2 className="text-xl font-bold text-[#90A3BF] mt-6 text-left mb-8">
          Recomendation Car{" "}
        </h2>
      </div>

      {/*Car Cards*/}
      {/*Row 1*/}
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5 mb-8 gap-10">
          <div
            className="flex flex-col sm:p-6 bg-white rounded-xl min-w-[280px] 
        lg:w-[304px] max-w-[304px] mx-auto relative shadow-sm p-6"
          >
            <Image
              src={isFav1 ? "/images/Like2.png" : "/images/Like.png"}
              height={24}
              width={24}
              alt="Favourite"
              className="cursor-pointer absolute mt-0 lg:ml-60 ml-56 z-10"
              onClick={() => setIsFav1(!isFav1)}
            />
            <div className="flex gap-5 justify-between">
              <div className="flex flex-col">
                <div className="font-bold text-[20px] text-[#1A202C]">
                  All New Rush
                </div>
                <p className="mt-1 font-semibold text-[14px] text-[#90A3BF]">
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
            <div className="flex lg:gap-4 gap-1.5 items-start mt-16 text-[14px] font-medium text-[#90A3BF] max-lg:mt-10">
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
                <div className="text-[20px]">
                  $72.00/{" "}
                  <span className="text-[14px] text-[#90A3BF]">day</span>
                </div>
                <div className="mt-1 text-[14px] text-[#90A3BF] line-through">
                  $80.00
                </div>
              </div>

              <Link href="/car-rent">
                <button
                  className="gap-2 px-6 py-3 mt-1 text-[16px] font-medium text-center
                 text-white bg-[#3563E9] hover:bg-blue-800 rounded min-h-[10px] w-[130px]"
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
              src={isFav2 ? "/images/Like2.png" : "/images/Like.png"}
              height={24}
              width={24}
              alt="Favourite"
              className="cursor-pointer absolute mt-0 lg:ml-60 ml-56 z-10"
              onClick={() => setIsFav2(!isFav2)}
            />
            <div className="flex gap-5 justify-between">
              <div className="flex flex-col">
                <div className="font-bold text-[20px] text-[#1A202C]">CR-V</div>
                <p className="mt-1 font-semibold text-[14px] text-[#90A3BF]">
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
              className="flex lg:gap-4 gap-1.5 items-start mt-16 text-[14px] font-medium
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
                <div className="text-[20px]">
                  $80.00/{" "}
                  <span className="text-[14px] text-[#90A3BF]">day</span>
                </div>
              </div>

              <Link href="/car-rent">
                <button
                  className="gap-2 px-6 py-3 mt-1 text-[16px] font-medium text-center
                 text-white bg-[#3563E9] hover:bg-blue-800 rounded min-h-[10px] w-[130px]"
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
              src={isFav3 ? "/images/Like2.png" : "/images/Like.png"}
              height={24}
              width={24}
              alt="Favourite"
              className="cursor-pointer absolute mt-0 lg:ml-60 ml-56 z-10"
              onClick={() => setIsFav3(!isFav3)}
            />
            <div className="flex gap-5 justify-between">
              <div className="flex flex-col">
                <div className="font-bold text-[20px] text-[#1A202C]">
                  All New Terios
                </div>
                <p className="mt-1 font-semibold text-[14px] text-[#90A3BF]">
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
              className="flex lg:gap-4 gap-1.5 items-start mt-16 text-[14px] font-medium 
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
                <div className="text-[20px]">
                  $74.00/{" "}
                  <span className="text-[14px] text-[#90A3BF]">day</span>
                </div>
              </div>

              <Link href="/car-rent">
                <button
                  className="gap-2 px-6 py-3 mt-1 text-[16px] font-medium text-center
                 text-white bg-[#3563E9] hover:bg-blue-800 rounded min-h-[10px] w-[130px]"
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
              src={isFav4 ? "/images/Like2.png" : "/images/Like.png"}
              height={24}
              width={24}
              alt="Favourite"
              className="cursor-pointer absolute mt-0 lg:ml-60 ml-56 z-10"
              onClick={() => setIsFav4(!isFav4)}
            />
            <div className="flex gap-5 justify-between">
              <div className="flex flex-col">
                <div className="font-bold text-[20px] text-[#1A202C]">
                  CR -V
                </div>
                <p className="mt-1 font-semibold text-[14px] text-[#90A3BF]">
                  SUV
                </p>
              </div>
            </div>
            <Image
              height={100}
              width={248}
              src="/images/Car6.png"
              alt="Nissan GT-R"
              className="object-contain self-center mt-16 max-lg:mt-10"
            />
            <div
              className="flex lg:gap-4 gap-1.5 items-start mt-16 text-[14px] font-medium
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
                <div className="text-[20px]">
                  $80.00/{" "}
                  <span className="text-[14px] text-[#90A3BF]">day</span>
                </div>
              </div>

              <Link href="/car-rent">
                <button
                  className="gap-2 px-6 py-3 mt-1 text-[16px] font-medium text-center 
                text-white bg-[#3563E9] hover:bg-blue-800 rounded min-h-[10px] w-[130px]"
                >
                  Rent Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/*Row 2*/}
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5 mb-8 gap-10">
          <div
            className="flex flex-col p-6 sm:p-6 bg-white rounded-xl min-w-[280px] 
        lg:w-[304px] max-w-[304px] mx-auto relative shadow-sm"
          >
            {" "}
            <Image
              src={isFav5 ? "/images/Like2.png" : "/images/Like.png"}
              height={24}
              width={24}
              alt="Favourite"
              className="cursor-pointer absolute mt-0 lg:ml-60 ml-56 z-10"
              onClick={() => setIsFav5(!isFav5)}
            />
            <div className="flex flex-col">
              <div className="font-bold text-[20px] text-[#1A202C]">
                MG ZX Exclusive
              </div>
              <p className="mt-1 font-semibold text-[14px] text-[#90A3BF]">
                Hatchback
              </p>
            </div>
            <Image
              width={264}
              height={108}
              src="/images/Car7.png"
              alt="MG ZX Exclusive"
              className="self-center mt-10 sm:mt-16"
            />
            <div
              className="flex gap-4 items-start mt-8 sm:mt-16 text-[12px] lg:text-[14px]
            font-medium text-[#90A3BF]"
            >
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
              <div className="flex gap-1 items-start">
                <Image
                  height={24}
                  width={24}
                  src="/images/profile-2user.png"
                  alt="2users-profile"
                />
                <div className="w-[60px]">4 People</div>
              </div>
            </div>
            <div className="flex gap-3 lg:mt-6 mt-8 items-center justify-between w-full">
              <div className="flex flex-col font-bold text-[#1A202C]">
                <div className="text-[18px] sm:text-[20px]">
                  $72.00/{" "}
                  <span className="text-[12px] sm:text-[14px] text-[#90A3BF]">
                    day
                  </span>
                </div>
                <div className="mt-1 text-[12px] sm:text-[14px] text-[#90A3BF] line-through">
                  $80.00
                </div>
              </div>

              <Link href="/car-rent">
                <button
                  className="gap-2 px-6 py-3 mt-1 text-[16px] font-medium text-center
                 text-white bg-[#3563E9] hover:bg-blue-800 rounded min-h-[10px] w-[130px]"
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
              src={isFav6 ? "/images/Like2.png" : "/images/Like.png"}
              height={24}
              width={24}
              alt="Favourite"
              className="cursor-pointer absolute mt-0 lg:ml-60 ml-56 z-10"
              onClick={() => setIsFav6(!isFav6)}
            />
            <div className="flex flex-col">
              <div className="font-bold text-[20px] text-[#1A202C]">
                New MG ZS
              </div>
              <p className="mt-1 font-semibold text-[14px] text-[#90A3BF]">
                SUV
              </p>
            </div>
            <Image
              width={288}
              height={112}
              src="/images/Car8.png"
              alt="New MG ZS"
              className="self-center mt-10 sm:mt-16"
            />
            <div
              className="flex gap-4 items-start mt-8 sm:mt-16 text-[12px] sm:text-[14px] 
            font-medium text-[#90A3BF]"
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
            <div className="flex gap-3 mt-6 sm:mt-8 items-center justify-between w-full">
              <div className="flex flex-col font-bold text-[#1A202C]">
                <div className="text-[18px] sm:text-[20px]">
                  $80.00/{" "}
                  <span className="text-[12px] sm:text-[14px] text-[#90A3BF]">
                    day
                  </span>
                </div>
              </div>

              <Link href="/car-rent">
                <button
                  className="gap-2 px-6 py-3 mt-1 text-[16px] font-medium text-center
                 text-white bg-[#3563E9] hover:bg-blue-800 rounded min-h-[10px] w-[130px]"
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
              src={isFav7 ? "/images/Like2.png" : "/images/Like.png"}
              height={24}
              width={24}
              alt="Favourite"
              className="cursor-pointer absolute mt-0 lg:ml-60 ml-56 z-10"
              onClick={() => setIsFav7(!isFav7)}
            />
            <div className="flex flex-col">
              <div className="font-bold text-[20px] text-[#1A202C]">
                MG ZX Excite
              </div>
              <p className="mt-1 font-semibold text-[14px] text-[#90A3BF]">
                Hatchback
              </p>
            </div>
            <Image
              width={264}
              height={108}
              src="/images/Car7.png"
              alt="MG ZX Excite"
              className="self-center mt-10 sm:mt-16"
            />
            <div
              className="flex gap-4 items-start mt-8 sm:mt-16 text-[12px] sm:text-[14px]
             font-medium text-[#90A3BF]"
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
              <div className="flex gap-1 items-start">
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
              <div className="flex flex-col font-bold text-[#1A202C] lg:-mt-5">
                <div className="text-[18px] sm:text-[20px]">
                  $74.00/{" "}
                  <span className="text-[12px] sm:text-[14px] text-[#90A3BF]">
                    day
                  </span>
                </div>
              </div>

              <Link href="/car-rent">
                <button
                  className="gap-2 px-6 py-3 mt-1 text-[16px] font-medium text-center
                 text-white bg-[#3563E9] hover:bg-blue-800 rounded min-h-[10px] w-[130px]"
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
              src={isFav8 ? "/images/Like2.png" : "/images/Like.png"}
              height={24}
              width={24}
              alt="Favourite"
              className="cursor-pointer absolute mt-0 lg:ml-60 ml-56 z-10"
              onClick={() => setIsFav8(!isFav8)}
            />
            <div className="flex flex-col">
              <div className="font-bold text-[20px] text-[#1A202C]">
                MG ZS EV
              </div>
              <p className="mt-1 font-semibold text-[14px] text-[#90A3BF]">
                SUV
              </p>
            </div>
            <Image
              width={288}
              height={112}
              src="/images/Car9.png"
              alt="MG ZS EV"
              className="self-center mt-10 sm:mt-16"
            />
            <div
              className="flex gap-4 items-start mt-8 sm:mt-16 text-[12px] sm:text-[14px] 
            font-medium text-[#90A3BF]"
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
            <div className="flex gap-3 mt-6 sm:mt-8 items-center justify-between w-full">
              <div className="flex flex-col font-bold text-[#1A202C]">
                <div className="text-[18px] sm:text-[20px]">
                  $90.00/{" "}
                  <span className="text-[12px] sm:text-[14px] text-[#90A3BF]">
                    day
                  </span>
                </div>
              </div>

              <Link href="/car-rent">
                <button
                  className="gap-2 px-6 py-3 mt-1 text-[16px] font-medium text-center
                 text-white bg-[#3563E9] hover:bg-blue-800 rounded min-h-[10px] w-[130px]"
                >
                  Rent Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center my-[64px] mx-auto">
        <Link href="/car-rent">
          <button
            className="rounded space-x-2 px-5 bg-[#3563E9] text-[16px] font-semibold text-white
           h-[44px] w-[156px] hover:bg-blue-800"
          >
            Show more car
          </button>
        </Link>
      </div>
    </div>
  );
}
