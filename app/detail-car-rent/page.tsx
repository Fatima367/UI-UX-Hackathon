"use client";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
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

  return (
    <div className="w-screen min-h-screen bg-[#F6F7F9]">
      <div className="flex flex-col items-center justify-center bg-[#F6F7F9]">
        <div className="flex">
          {/*Left*/}
          <div
            className="md:ml-0 lg:flex lg:flex-col lg:visible hidden lg:h-[1600px] bg-white
         md:w-[310px]"
          >
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
              className="md:flex-row flex flex-col md:space-x-[32px] space-y-5 mx-[32px]
        items-center justify-center"
            >
              {/*Left Side*/}
              <div className="flex flex-col my-[24px] md:w-[492px]">
                <div
                  className="rounded-[10px] object-cover md:w-[492px] md:h-[360px] w-[350px] 
           h-[400px] bg-blue-400"
                >
                  <Image
                    src="/images/View.png"
                    height={360}
                    width={492}
                    alt="Bg image"
                  />

                  <div
                    className="flex flex-col space-y-[16px] z-10 ml-6 text-white 
            md:-mt-[340px] -mt-40"
                  >
                    <h2 className="text-[32px] font-semibold text-left">
                      Sports car with the best <br /> design and acceleration
                    </h2>
                    <p className="text-[16px] font-medium text-left">
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
              md:mx-auto mb-10 md:mt-8 mt-6"
                  />
                </div>

                <div
                  className="md:flex-row flex flex-col md:space-x-[24px] space-y-5 items-center 
          justify-center"
                >
                  <div
                    className="rounded-[8px] flex items-center justify-center
            ring-2 ring-[#3563E9] ring-offset-[#F6F7F9] h-[124px]
            w-[148px] md:flex-row flex-col mt-[24px] relative"
                  >
                    <Image
                      src="/images/View.png"
                      height={108}
                      width={132}
                      alt="car"
                      className="rounded-[10px]"
                    />

                    <Image
                      src="/images/image 8.png"
                      height={36}
                      width={116}
                      alt="car"
                      className="z-50 rounded-none mx-auto absolute"
                    />
                  </div>

                  <Image
                    src="/images/View 2.png"
                    height={124}
                    width={148}
                    alt="car-interior"
                    className="rounded-[10px]"
                  />

                  <Image
                    src="/images/View 3.png"
                    height={124}
                    width={148}
                    alt="car-interior"
                    className="rounded-[10px]"
                  />
                </div>
              </div>

              {/*Right Side*/}
              <div className="w-[492px] h-[508px] bg-white rounded-[10px]">
                <div className="relative">
                  <div className="flex flex-col space-y-2 p-[24px]">
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
                      <p className="text-[#596780] text-[14px] font-medium">
                        440+ Reviewer
                      </p>
                    </div>
                  </div>

                  <div className="flex items-end justify-end absolute ml-[445px] -mt-[105px]">
                    <Image
                      src="/images/Like.png"
                      height={24}
                      width={24}
                      alt="favourite"
                    />
                  </div>
                </div>

                <div className="mx-[24px] mt-[32px] flex items-start justify-between">
                  <p className="text-[#596780] text-[18px] text-left">
                    NISMO has become the embodiment of Nissan's outstanding
                    performance, inspired by the most unforgiving proving
                    ground, the "race track".
                  </p>
                </div>

                <div className="mt-[32px] mx-[24px] flex space-x-[44px] items-start justify-between">
                  <div className="flex flex-col space-y-[16px]">
                    <div className="space-x-[16px] flex">
                      <p className="text-[#90A3BF] text-[18px] text-left">
                        Type Car
                      </p>
                      <p className="text-[#596780] text-[18px] text-right">
                        Sport
                      </p>
                    </div>
                    <div className="space-x-[16px] flex">
                      <p className="text-[#90A3BF] text-[18px] text-left">
                        Steering
                      </p>
                      <p className="text-[#596780] text-[18px] text-right">
                        Manual
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-[16px]">
                    <div className="space-x-[16px] flex">
                      <p className="text-[#90A3BF] text-[18px] text-left">
                        Capacity
                      </p>
                      <p className="text-[#596780] text-[18px] text-right">
                        2 Person
                      </p>
                    </div>
                    <div className="space-x-[16px] flex">
                      <p className="text-[#90A3BF] text-[18px] text-left">
                        Gasoline
                      </p>
                      <p className="text-[#596780] text-[18px] text-right">
                        70L
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex mt-[64px] mx-[24px] mb-[24px] items-stretch justify-between">
                  <div className="flex flex-col  font-bold text-slate-900">
                    <div className="text-[28px] font-bold">
                      $80.00/{" "}
                      <span className="text-[16px] text-[#90A3BF]">day</span>
                    </div>
                    <div className="mt-1 text-[16px] text-[#90A3BF] line-through">
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

              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCarRent;
