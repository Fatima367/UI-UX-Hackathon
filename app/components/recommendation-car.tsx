import Image from "next/image";
import Link from "next/link";

export default function RecommendationCar() {
  return (
    <div className="p-[24px] mx-auto flex flex-col items-start justify-between">
      <div className="flex items-start">
        <h2 className="text-xl font-bold text-[#90A3BF] mt-6 text-left mb-8">
          Recomendation Car{" "}
        </h2>
      </div>

      {/*Row 1*/}
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-20 mb-8 gap-10">
          <div
            className="flex flex-col sm:p-6 bg-white rounded-xl min-w-[280px] 
        lg:w-[304px] max-w-[304px] mx-auto relative shadow-sm p-6"
          >
            <Image
              height={24}
              width={24}
              src="/images/Like2.png"
              alt="Favorite Icon"
              className="absolute top-3 right-3 w-6 aspect-square cursor-pointer z-10"
            />
            <div className="flex gap-5 justify-between">
              <div className="flex flex-col">
                <div className="text-xl text-gray-900 font-bold">
                  All New Rush
                </div>
                <div className="mt-1 text-sm text-slate-400">Suv</div>
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
              <div className="flex gap-1.5 items-start">
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
                  $72.00/ <span className="text-sm text-slate-400">day</span>
                </div>
                <div className="mt-1 text-sm text-slate-400 line-through">
                  $80.00
                </div>
              </div>
              <button
                className="gap-2 self-start px-6 py-3 mt-1 text-base font-medium text-center text-white bg-[#3563E9] rounded min-h-[10px] w-[130px]"
                aria-label="Rent All New Rush now"
              >
                Rent Now
              </button>
            </div>
          </div>

          <div
            className="flex flex-col p-6 sm:p-6 bg-white rounded-xl min-w-[280px] 
        lg:w-[304px] max-w-[304px] mx-auto relative shadow-sm"
          >
            <Image
              height={24}
              width={24}
              src="/images/Like.png"
              alt="Favorite Icon"
              className="absolute top-3 right-3 w-6 aspect-square cursor-pointer z-10"
            />
            <div className="flex gap-5 justify-between">
              <div className="flex flex-col">
                <div className="text-xl text-gray-900 font-bold">CR-V</div>
                <div className="mt-1 text-sm text-slate-400">Suv</div>
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
              <div className="flex flex-col font-bold text-slate-900">
                <div className="text-xl">
                  $80.00/ <span className="text-sm text-slate-400">day</span>
                </div>
              </div>
              <button
                className="gap-2 self-start px-6 py-3 mt-1 text-base font-medium text-center text-white bg-[#3563E9] rounded min-h-[10px] w-[130px]"
                aria-label="Rent CR-V now"
              >
                Rent Now
              </button>
            </div>
          </div>

          <div
            className="flex flex-col p-4 sm:p-6 bg-white rounded-xl min-w-[280px] 
        lg:w-[304px] max-w-[304px] mx-auto relative shadow-sm"
          >
            <Image
              height={24}
              width={24}
              src="/images/Like2.png"
              alt="Favorite Icon"
              className="absolute top-3 right-3 w-6 aspect-square cursor-pointer z-10"
            />
            <div className="flex gap-5 justify-between">
              <div className="flex flex-col">
                <div className="text-xl text-gray-900 font-bold">
                  All New Terios
                </div>
                <div className="mt-1 text-sm text-slate-400">Suv</div>
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
              <div className="flex flex-col font-bold text-slate-900">
                <div className="text-xl">
                  $74.00/ <span className="text-sm text-slate-400">day</span>
                </div>
              </div>
              <button
                className="gap-2 self-start px-6 py-3 mt-1 text-base font-medium text-center text-white bg-[#3563E9] rounded min-h-[10px] w-[130px]"
                aria-label="Rent All New Terios now"
              >
                Rent Now
              </button>
            </div>
          </div>

          <div
            className="flex flex-col p-4 sm:p-6 bg-white rounded-xl min-w-[280px] 
        lg:w-[304px] max-w-[304px] mx-auto relative shadow-sm"
          >
            <Image
              height={24}
              width={24}
              src="/images/Like.png"
              alt="Favourite Icon"
              className="absolute top-3 right-3 w-6 aspect-square cursor-pointer z-10"
            />
            <div className="flex gap-5 justify-between">
              <div className="flex flex-col">
                <div className="text-xl text-gray-900 font-bold">CR -V</div>
                <div className="mt-1 text-sm text-slate-400">Suv</div>
              </div>
            </div>
            <Image
              height={100}
              width={248}
              src="/images/Car6.png"
              alt="Nissan GT-R"
              className="object-contain self-center mt-16 max-md:mt-10"
            />
            <div className="flex gap-4 items-start mt-16 text-sm font-medium leading-5 text-slate-400 max-md:mt-10">
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
              <div className="flex flex-col font-bold text-slate-900">
                <div className="text-xl">
                  $80.00/ <span className="text-sm text-slate-400">day</span>
                </div>
              </div>
              <button
                className="gap-2 self-start px-6 py-3 mt-1 text-base font-medium text-center text-white bg-[#3563E9] rounded min-h-[10px] w-[130px]"
                aria-label="Rent Nissan GT - R now"
              >
                Rent Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*Row 2*/}
      <div className="mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-20 gap-10">
          <div
            className="flex flex-col p-6 sm:p-6 bg-white rounded-xl min-w-[280px] 
        lg:w-[304px] max-w-[304px] mx-auto relative shadow-sm"
          >
            \{" "}
            <Image
              height={24}
              width={24}
              src="/images/Like.png"
              alt="Favorite Icon"
              className="absolute top-3 right-3 w-6 aspect-square cursor-pointer z-10"
            />
            <div className="flex flex-col">
              <div className="text-lg md:text-xl text-gray-900 font-bold">
                MG ZX Exclusive
              </div>
              <div className="mt-1 text-sm md:text-base text-slate-400">
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
                <div className="w-[60px]">4 People</div>
              </div>
            </div>
            <div className="flex gap-3 mt-6 sm:mt-8 items-center justify-between w-full">
              <div className="flex flex-col font-bold text-slate-900">
                <div className="text-lg sm:text-xl">
                  $72.00/{" "}
                  <span className="text-xs sm:text-sm text-slate-400">day</span>
                </div>
                <div className="mt-1 text-xs sm:text-sm text-slate-400 line-through">
                  $80.00
                </div>
              </div>
              <button
                className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-medium text-white bg-[#3563E9] rounded min-h-[10px] w-[100px] sm:w-[130px]"
                aria-label="Rent MG ZX Exclusive now"
              >
                Rent Now
              </button>
            </div>
          </div>

          <div
            className="flex flex-col p-6 sm:p-6 bg-white rounded-xl min-w-[280px] 
        lg:w-[304px] max-w-[304px] mx-auto relative shadow-sm"
          >
            <Image
              height={24}
              width={24}
              src="/images/Like2.png"
              alt="Favorite Icon"
              className="absolute top-3 right-3 w-6 aspect-square cursor-pointer z-10"
            />
            <div className="flex flex-col">
              <div className="text-lg md:text-xl text-gray-900 font-bold">
                New MG ZS
              </div>
              <div className="mt-1 text-sm md:text-base text-slate-400">
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
              <div className="flex flex-col font-bold text-slate-900">
                <div className="text-lg sm:text-xl">
                  $80.00/{" "}
                  <span className="text-xs sm:text-sm text-slate-400">day</span>
                </div>
              </div>
              <button
                className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-medium text-white bg-[#3563E9] rounded min-h-[10px] w-[100px] sm:w-[130px]"
                aria-label="Rent New MG ZS now"
              >
                Rent Now
              </button>
            </div>
          </div>

          <div
            className="flex flex-col p-6 sm:p-6 bg-white rounded-xl min-w-[280px] 
        lg:w-[304px] max-w-[304px] mx-auto relative shadow-sm"
          >
            <Image
              height={24}
              width={24}
              src="/images/Like.png"
              alt="Favorite Icon"
              className="absolute top-3 right-3 w-6 aspect-square cursor-pointer z-10"
            />
            <div className="flex flex-col">
              <div className="text-lg md:text-xl text-gray-900 font-bold">
                MG ZX Excite
              </div>
              <div className="mt-1 text-sm md:text-base text-slate-400">
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
                <div className="w-[60px]">4 People</div>
              </div>
            </div>
            <div className="flex gap-3 mt-6 sm:mt-8 items-center justify-between w-full">
              <div className="flex flex-col font-bold text-slate-900">
                <div className="text-lg sm:text-xl">
                  $74.00/{" "}
                  <span className="text-xs sm:text-sm text-slate-400">day</span>
                </div>
              </div>
              <button
                className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-medium text-white bg-[#3563E9] rounded min-h-[10px] w-[100px] sm:w-[130px]"
                aria-label="Rent MG ZX Excite now"
              >
                Rent Now
              </button>
            </div>
          </div>

          <div
            className="flex flex-col p-6 sm:p-6 bg-white rounded-xl min-w-[280px] 
        lg:w-[304px] max-w-[304px] mx-auto relative shadow-sm"
          >
            <Image
              height={24}
              width={24}
              src="/images/Like2.png"
              alt="Favorite Icon"
              className="absolute top-3 right-3 w-6 aspect-square cursor-pointer z-10"
            />
            <div className="flex flex-col">
              <div className="text-lg md:text-xl text-gray-900 font-bold">
                MG ZS EV
              </div>
              <div className="mt-1 text-sm md:text-base text-slate-400">
                Electric SUV
              </div>
            </div>
            <Image
              width={288}
              height={112}
              src="/images/Car9.png"
              alt="MG ZS EV"
              className="object-contain self-center mt-10 sm:mt-16"
            />
            <div className="flex gap-4 items-start mt-8 sm:mt-16 text-xs sm:text-sm font-medium leading-5 text-slate-400">
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
                <div className="w-12">Auto</div>
              </div>
              <div className="flex gap-1.5 items-start">
                <Image
                  height={24}
                  width={24}
                  src="/images/profile-2user.png"
                  alt="2users-profile"
                />
                <div className="w-[60px]">5 People</div>
              </div>
            </div>
            <div className="flex gap-3 mt-6 sm:mt-8 items-center justify-between w-full">
              <div className="flex flex-col font-bold text-slate-900">
                <div className="text-lg sm:text-xl">
                  $90.00/{" "}
                  <span className="text-xs sm:text-sm text-slate-400">day</span>
                </div>
              </div>
              <button
                className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-medium text-white bg-[#3563E9] rounded min-h-[10px] w-[100px] sm:w-[130px]"
                aria-label="Rent MG ZS EV now"
              >
                Rent Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center my-[64px] mx-auto">
        <Link href="/car-rent">
          <button
            className="rounded space-x-2 px-5 bg-[#3563E9] text-[16px] font-semibold text-white
           h-[44px] w-[156px]"
          >
            Show more car
          </button>
        </Link>
      </div>
    </div>
  );
}
