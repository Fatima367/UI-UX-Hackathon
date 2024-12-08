import Image from "next/image";

export default function PopularCar() {
  return (
    <div className="p-6 mx-auto">
      <div className="flex items-center justify-between mt-6 mb-5">
        <h2 className="text-xl font-bold text-slate-400">Popular Car</h2>
        <button className="text-blue-600 font-semibold ml-[1050px] text-[16px]">
          View all
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-20">
        <div className="flex overflow-hidden flex-col p-6 bg-white rounded-xl min-w-[240px] w-[304px] max-md:px-5 relative border border-gray-50">
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
                $99.00/ <span className="text-sm text-slate-400">day</span>
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

        <div className="flex overflow-hidden flex-col p-6 bg-white rounded-xl min-w-[240px] w-[304px] max-md:px-5 relative border border-gray-50">
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
                $80.00/ <span className="text-sm text-slate-400">day</span>
              </div>
              <div className="mt-1 text-sm text-slate-400 line-through">$100.00</div>
            </div>
            <button
              className="gap-2 self-start px-6 py-3 mt-1 text-base font-medium tracking-tight text-center text-white bg-[#3563E9] rounded min-h-[10px] w-[130px] whitespace-nowrap"
              aria-label="Rent Nisan GT - R now"
            >
              Rent Now
            </button>
          </div>
        </div>

        <div className="flex overflow-hidden flex-col p-6 bg-white rounded-xl min-w-[240px] w-[304px] max-md:px-5 relative border border-gray-50">
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
                $96.00/ <span className="text-sm text-slate-400">day</span>
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

        <div className="flex overflow-hidden flex-col p-6 bg-white rounded-xl min-w-[240px] w-[304px] max-md:px-5 relative border border-gray-50">
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
                $80.00/ <span className="text-sm text-slate-400">day</span>
              </div>
              <div className="mt-1 text-sm text-slate-400 line-through">$100.00</div>
            </div>
            <button
              className="gap-2 self-start px-6 py-3 mt-1 text-base font-medium tracking-tight text-center text-white bg-[#3563E9] rounded min-h-[10px] w-[130px] whitespace-nowrap"
              aria-label="Rent Nisan GT - R now"
            >
              Rent Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
