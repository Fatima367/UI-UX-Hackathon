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
    <div className="max-w-[1440px] lg:px-4 py-8 mx-auto flex justify-between">
      <div className="flex flex-col space-y-5 relative">
        <div className="flex items-start justify-between">
          <p className="text-xl font-bold text-[#90A3BF]">Popular Car</p>

          <Link href="/car-rent">
            <p className="text-base font-semibold text-[#3563E9] ">View All</p>
          </Link>
        </div>

        {/*Car Cards*/}
        <div
          className="relative flex sm:grid-cols-2 lg:grid-cols-4 md:grid md:grid-cols-2 gap-6
           overflow-x-auto lg:overflow-visible mb-8 lg:w-auto w-80"
        >
          <div
            className="bg-white rounded-lg flex flex-col py-6 px-5 relative flex-shrink-0 lg:flex-shrink
          w-[304px] md:w-full lg:w-auto"
          >
            <div className="flex items-start justify-between">
              <div className="flex flex-col text-left space-y-1">
                <p className="font-bold text-xl text-[#1A202C]">Koenigsegg</p>
                <p className="font-bold text-sm text-[#90A3BF]">Sport</p>
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
              height={80}
              alt="car-image"
              className="mt-16 w-full h-auto object-cover mx-auto"
            />

            <div className="flex space-x-4 sm:flex-row mt-16 items-center justify-center -mx-2">
              <div className="flex space-x-1 items-center justify-center">
                <Image
                  height={24}
                  width={24}
                  src="/images/gas-station.png"
                  alt="Gas-Station"
                />
                <p className="text-[#90A3BF] text-sm font-medium">90L</p>
              </div>
              <div className="flex space-x-1 items-center justify-center">
                <Image
                  height={24}
                  width={24}
                  src="/images/manual.png"
                  alt="Mode"
                />
                <p className="text-[#90A3BF] text-sm font-medium">Manual</p>
              </div>
              <div className="flex space-x-1 items-center justify-center">
                <Image
                  height={24}
                  width={24}
                  src="/images/profile-2user.png"
                  alt="2users-profile"
                />
                <p className="text-[#90A3BF] text-sm font-medium">2 People</p>
              </div>
            </div>

            <div className="flex items-start justify-between mt-6 gap-2">
              <div className="flex flex-col font-bold text-[#1A202C]">
                <div className="text-xl font-bold">
                  $99.00/ <span className="text-sm text-[#90A3BF]">day</span>
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
              <div className="flex flex-col text-left space-y-1">
                <p className="font-bold text-xl text-[#1A202C]">Nissan GT -R</p>
                <p className="font-bold text-sm text-[#90A3BF]">Sport</p>
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
              className="mt-16 w-full h-auto object-cover mx-auto"
            />

            <div className="flex space-x-4 sm:flex-row mt-16 items-center justify-center -mx-2">
              <div className="flex space-x-1 items-center justify-center">
                <Image
                  height={24}
                  width={24}
                  src="/images/gas-station.png"
                  alt="Gas-Station"
                />
                <p className="text-[#90A3BF] text-sm font-medium">80L</p>
              </div>
              <div className="flex space-x-1 items-center justify-center">
                <Image
                  height={24}
                  width={24}
                  src="/images/manual.png"
                  alt="Mode"
                />
                <p className="text-[#90A3BF] text-sm font-medium">Manual</p>
              </div>
              <div className="flex space-x-1 items-center justify-center">
                <Image
                  height={24}
                  width={24}
                  src="/images/profile-2user.png"
                  alt="2users-profile"
                />
                <p className="text-[#90A3BF] text-sm font-medium">2 People</p>
              </div>
            </div>

            <div className="flex items-start justify-between mt-6 gap-2">
              <div className="flex flex-col font-bold text-[#1A202C]">
                <div className="text-xl font-bold">
                  $80.00/ <span className="text-sm text-[#90A3BF]">day</span>
                </div>
                <div className="mt-1 text-sm text-[#90A3BF] line-through">
                  $100.00
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
              <div className="flex flex-col text-left space-y-1">
                <p className="font-bold text-xl text-[#1A202C]">Rolls-Royce</p>
                <p className="font-bold text-sm text-[#90A3BF]">Sport</p>
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
              className="mt-16 w-full h-auto object-cover mx-auto"
            />

            <div className="flex space-x-4 sm:flex-row mt-16 items-center justify-center -mx-2">
              <div className="flex space-x-1 items-center justify-center">
                <Image
                  height={24}
                  width={24}
                  src="/images/gas-station.png"
                  alt="Gas-Station"
                />
                <p className="text-[#90A3BF] text-sm font-medium">70L</p>
              </div>
              <div className="flex space-x-1 items-center justify-center">
                <Image
                  height={24}
                  width={24}
                  src="/images/manual.png"
                  alt="Mode"
                />
                <p className="text-[#90A3BF] text-sm font-medium">Manual</p>
              </div>
              <div className="flex space-x-1 items-center justify-center">
                <Image
                  height={24}
                  width={24}
                  src="/images/profile-2user.png"
                  alt="2users-profile"
                />
                <p className="text-[#90A3BF] text-sm font-medium">4 People</p>
              </div>
            </div>

            <div className="flex items-start justify-between mt-6 gap-2">
              <div className="flex flex-col font-bold text-[#1A202C]">
                <div className="text-xl font-bold">
                  $97.00/ <span className="text-sm text-[#90A3BF]">day</span>
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
              <div className="flex flex-col text-left space-y-1">
                <p className="font-bold text-xl text-[#1A202C]">
                  Nissan GT - R
                </p>
                <p className="font-bold text-sm text-[#90A3BF]">Sport</p>
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
              className="mt-16 w-full h-auto mx-auto"
            />

            <div className="flex space-x-4 sm:flex-row mt-16 items-center justify-center -mx-2">
              <div className="flex space-x-1 items-center justify-center">
                <Image
                  height={24}
                  width={24}
                  src="/images/gas-station.png"
                  alt="Gas-Station"
                />
                <p className="text-[#90A3BF] text-sm font-medium">80L</p>
              </div>
              <div className="flex space-x-1 items-center justify-center">
                <Image
                  height={24}
                  width={24}
                  src="/images/manual.png"
                  alt="Mode"
                />
                <p className="text-[#90A3BF] text-sm font-medium">Manual</p>
              </div>
              <div className="flex space-x-1 items-center justify-center">
                <Image
                  height={24}
                  width={24}
                  src="/images/profile-2user.png"
                  alt="2users-profile"
                />
                <p className="text-[#90A3BF] text-sm font-medium">2 People</p>
              </div>
            </div>

            <div className="flex items-start justify-between mt-6 gap-2">
              <div className="flex flex-col font-bold text-[#1A202C]">
                <div className="text-xl font-bold">
                  $80.00/ <span className="text-sm text-[#90A3BF]">day</span>
                </div>
                <div className="mt-1 text-sm text-[#90A3BF] line-through">
                  $100.00
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
      </div>
    </div>
  );
}
