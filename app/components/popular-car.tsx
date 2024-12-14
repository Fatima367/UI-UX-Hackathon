"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function PopularCarSection() {
  const [isFav1, setIsFav1] = useState(false); // Card 1
  const [isFav2, setIsFav2] = useState(true); // Card 2
  const [isFav3, setIsFav3] = useState(false); // Card 3
  const [isFav4, setIsFav4] = useState(true); // Card 4
  return (
    <div className="flex">
      <div className="flex flex-col space-y-[20px] items-start justify-between">
        <div className="flex items-stretch justify-between ">
          <p className="text-[20px] font-bold text-[#90A3BF]">Popular Car</p>

          <Link href="/car-rent">
            <p
              className="text-[16px] font-semibold text-[#3563E9] lg:ml-[1080px] 
          mr-0 ml-32"
            >
              View All
            </p>
          </Link>
        </div>

        {/*Car Cards*/}
        <div
          className="grid grid-cols-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5 mb-8 gap-[330px]
        overflow-x-auto w-[300px] lg:w-auto lg:overflow-hidden"
        >
          <div
            className="bg-white rounded-[10px] flex flex-col
                w-[304px] h-[388px] py-[24px] px-[24px]"
          >
            <div className="flex space-x-[104px] items-start">
              <div className="flex flex-col text-left space-y-1">
                <p className="font-bold text-[20px] text-[#1A202C]">
                  Koenigsegg
                </p>
                <p className="font-bold text-[14px] text-[#90A3BF]">Sport</p>
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
              className="mt-[64px]"
            />

            <div className="flex space-x-[16px] mt-[64px] items-center justify-center">
              <div className="flex space-x-[6px] items-center justify-center">
                <Image
                  height={24}
                  width={24}
                  src="/images/gas-station.png"
                  alt="Gas-Station"
                />
                <p className="text-[#90A3BF] text-[14px] font-medium">90L</p>
              </div>
              <div className="flex space-x-[6px] items-center justify-center">
                <Image
                  height={24}
                  width={24}
                  src="/images/manual.png"
                  alt="Mode"
                />
                <p className="text-[#90A3BF] text-[14px] font-medium">Manual</p>
              </div>
              <div className="flex space-x-[6px] items-center justify-center">
                <Image
                  height={24}
                  width={24}
                  src="/images/profile-2user.png"
                  alt="2users-profile"
                />
                <p className="text-[#90A3BF] text-[14px] font-medium">
                  2 People
                </p>
              </div>
            </div>

            <div
              className="flex items-stretch 
                        justify-between mt-[24px] mb-6"
            >
              <div className="flex flex-col font-bold text-[#1A202C]">
                <div className="text-[20px] font-bold">
                  $99.00/{" "}
                  <span className="text-[14px] text-[#90A3BF]">day</span>
                </div>
              </div>

              <Link href="/car-rent">
                <button
                  className="px-[20px] py-3 mt-1 text-base font-medium text-center space-x-[8px]
                     text-white bg-[#3563E9] hover:bg-blue-800 rounded min-h-[44px] w-[116px]"
                >
                  Rent Now
                </button>
              </Link>
            </div>
          </div>

          <div
            className="bg-white rounded-[10px] flex flex-col
                w-[304px] h-[388px] py-[24px] px-[24px]"
          >
            <div className="flex space-x-[104px] items-start">
              <div className="flex flex-col text-left space-y-1">
                <p className="font-bold text-[20px] text-[#1A202C]">
                  Nissan GT -R
                </p>
                <p className="font-bold text-[14px] text-[#90A3BF]">Sport</p>
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

            <div className="flex space-x-[16px] mt-[68px] items-center justify-center">
              <div className="flex space-x-[6px] items-center justify-center">
                <Image
                  height={24}
                  width={24}
                  src="/images/gas-station.png"
                  alt="Gas-Station"
                />
                <p className="text-[#90A3BF] text-[14px] font-medium">80L</p>
              </div>
              <div className="flex space-x-[6px] items-center justify-center">
                <Image
                  height={24}
                  width={24}
                  src="/images/manual.png"
                  alt="Mode"
                />
                <p className="text-[#90A3BF] text-[14px] font-medium">Manual</p>
              </div>
              <div className="flex space-x-[6px] items-center justify-center">
                <Image
                  height={24}
                  width={24}
                  src="/images/profile-2user.png"
                  alt="2users-profile"
                />
                <p className="text-[#90A3BF] text-[14px] font-medium">
                  2 People
                </p>
              </div>
            </div>

            <div
              className="flex items-stretch 
                        justify-between mt-[20px] mb-6"
            >
              <div className="flex flex-col  font-bold text-[#1A202C]">
                <div className="text-[20px] font-bold">
                  $80.00/{" "}
                  <span className="text-[14px] text-[#90A3BF]">day</span>
                </div>
                <div className="mt-1 text-[14px] text-[#90A3BF] line-through">
                  $100.00
                </div>
              </div>

              <Link href="/car-rent">
                <button
                  className="px-[20px] py-3 mt-1 text-base font-medium text-center space-x-[8px]
                     text-white bg-[#3563E9] hover:bg-blue-800 rounded min-h-[44px] w-[116px]"
                >
                  Rent Now
                </button>
              </Link>
            </div>
          </div>

          <div
            className="bg-white rounded-[10px] flex flex-col
                w-[304px] h-[388px] py-[24px] px-[24px]"
          >
            <div className="flex space-x-[104px] items-start">
              <div className="flex flex-col text-left space-y-1">
                <p className="font-bold text-[20px] text-[#1A202C]">
                  Rolls-Royce
                </p>
                <p className="font-bold text-[14px] text-[#90A3BF]">Sport</p>
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
              className="mt-[64px] mx-auto"
            />

            <div className="flex space-x-[16px] mt-[68px] items-center justify-center">
              <div className="flex space-x-[6px] items-center justify-center">
                <Image
                  height={24}
                  width={24}
                  src="/images/gas-station.png"
                  alt="Gas-Station"
                />
                <p className="text-[#90A3BF] text-[14px] font-medium">70L</p>
              </div>
              <div className="flex space-x-[6px] items-center justify-center">
                <Image
                  height={24}
                  width={24}
                  src="/images/manual.png"
                  alt="Mode"
                />
                <p className="text-[#90A3BF] text-[14px] font-medium">Manual</p>
              </div>
              <div className="flex space-x-[6px] items-center justify-center">
                <Image
                  height={24}
                  width={24}
                  src="/images/profile-2user.png"
                  alt="2users-profile"
                />
                <p className="text-[#90A3BF] text-[14px] font-medium">
                  4 People
                </p>
              </div>
            </div>

            <div
              className="flex items-stretch 
                        justify-between mt-[24px] mb-6"
            >
              <div className="flex flex-col font-bold text-[#1A202C]">
                <div className="text-[20px] font-bold">
                  $97.00/{" "}
                  <span className="text-[14px] text-[#90A3BF]">day</span>
                </div>
              </div>

              <Link href="/car-rent">
                <button
                  className="px-[20px] py-3 mt-1 text-base font-medium text-center space-x-[8px]
                     text-white bg-[#3563E9] hover:bg-blue-800 rounded min-h-[44px] w-[116px]"
                >
                  Rent Now
                </button>
              </Link>
            </div>
          </div>

          <div
            className="bg-white rounded-[10px] flex flex-col
                w-[304px] h-[388px] py-[24px] px-[24px]"
          >
            <div className="flex space-x-[104px] items-start">
              <div className="flex flex-col text-left space-y-1">
                <p className="font-bold text-[20px] text-[#1A202C]">
                  Nissan GT - R
                </p>
                <p className="font-bold text-[14px] text-[#90A3BF]">Sport</p>
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
              src="/images/image 8.png"
              width={204}
              height={64}
              alt="car-image"
              className="mt-[68px] mx-auto"
            />

            <div className="flex space-x-[16px] mt-[68px] items-center justify-center">
              <div className="flex space-x-[6px] items-center justify-center">
                <Image
                  height={24}
                  width={24}
                  src="/images/gas-station.png"
                  alt="Gas-Station"
                />
                <p className="text-[#90A3BF] text-[14px] font-medium">80L</p>
              </div>
              <div className="flex space-x-[6px] items-center justify-center">
                <Image
                  height={24}
                  width={24}
                  src="/images/manual.png"
                  alt="Mode"
                />
                <p className="text-[#90A3BF] text-[14px] font-medium">Manual</p>
              </div>
              <div className="flex space-x-[6px] items-center justify-center">
                <Image
                  height={24}
                  width={24}
                  src="/images/profile-2user.png"
                  alt="2users-profile"
                />
                <p className="text-[#90A3BF] text-[14px] font-medium">
                  2 People
                </p>
              </div>
            </div>

            <div
              className="flex items-stretch 
                        justify-between mt-[20px] mb-6"
            >
              <div className="flex flex-col  font-bold text-[#1A202C]">
                <div className="text-[20px] font-bold">
                  $80.00/{" "}
                  <span className="text-[14px] text-[#90A3BF]">day</span>
                </div>
                <div className="mt-1 text-[14px] text-[#90A3BF] line-through">
                  $100.00
                </div>
              </div>

              <Link href="/car-rent">
                <button
                  className="px-[20px] py-3 mt-1 text-base font-medium text-center space-x-[8px]
                     text-white bg-[#3563E9] hover:bg-blue-800 rounded min-h-[44px] w-[116px]"
                >
                  Rent Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
