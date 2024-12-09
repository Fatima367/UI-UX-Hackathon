"use client";
import { Checkbox } from '@/components/ui/checkbox'
import React, { MouseEvent, useState } from 'react'

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
        <div className="-ml-5 lg:flex lg:flex-col lg:visible hidden lg:h-[1600px] bg-white md:w-[310px]">
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
        <div className='md:flex-row flex flex-col md:space-x-[32px] space-y-5 mx-auto
        items-center justify-center'>
          
          <div className='flex flex-col my-[24px] md:w-[492px]'>

            <div></div>
          </div>

           
          <div></div>
             

        </div>



       </div> 
     
    </div>
    </div>  
  )
}

export default DetailCarRent
