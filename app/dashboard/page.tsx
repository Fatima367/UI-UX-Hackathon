import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import React from "react";
import Footer from "../footer/page";

const Dashboard = () => {
  return (
    <div className="w-screen bg-[#F6F7F9]">
      <div className="flex">
        {/*Left*/}
        <div className="-ml-5 lg:flex lg:flex-col lg:visible hidden md:h-[1600px] bg-white md:w-[310px]">
          <div className="flex flex-col space-y-[42px] mr-[16px] mt-[40px] ml-8">
            <p className="text-[#90A3BF] text-base ml-9">M A I N M E N U</p>
            <div className="space-y-[32px]">
              <div
                className="w-[254px] h-[56px] rounded-[10px] bg-[#3563E9] text-white
               relative flex items-center justify-start"
              >
                <div className="text-[20px] font-medium z-10 absolute flex">
                  <Image
                    src="/images/home.png"
                    height={24}
                    width={24}
                    alt="Home"
                    className="ml-3 mr-2"
                  />{" "}
                  <p> Dashboard</p>
                </div>
              </div>

              <div className="text-[20px] font-medium flex text-[#90A3BF]">
                <Image
                  src="/images/car-icon.png"
                  height={24}
                  width={24}
                  alt="Home"
                  className="ml-3 mr-2"
                />{" "}
                <p> Car Rent</p>
              </div>

              <div className="text-[20px] font-medium flex text-[#90A3BF]">
                <Image
                  src="/images/chart.png"
                  height={24}
                  width={24}
                  alt="Home"
                  className="ml-3 mr-2"
                />{" "}
                <p> Insight</p>
              </div>

              <div className="text-[20px] font-medium flex text-[#90A3BF]">
                <Image
                  src="/images/wallet.png"
                  height={24}
                  width={24}
                  alt="Home"
                  className="ml-3 mr-2"
                />{" "}
                <p> Reimburse</p>
              </div>

              <div className="text-[20px] font-medium flex text-[#90A3BF]">
                <Image
                  src="/images/message.png"
                  height={24}
                  width={24}
                  alt="Home"
                  className="ml-3 mr-2"
                />{" "}
                <p> Inbox</p>
              </div>

              <div className="text-[20px] font-medium flex text-[#90A3BF]">
                <Image
                  src="/images/calendar.png"
                  height={24}
                  width={24}
                  alt="Home"
                  className="ml-3 mr-2"
                />{" "}
                <p> Calendar</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-[28px] mr-[16px] mt-[56px] ml-8">
            <p className="text-[#90A3BF] text-base ml-8">
              P R E F E R E N C E S
            </p>

            <div className="space-y-[32px]">
              <div className="text-[20px] font-medium flex text-[#90A3BF]">
                <Image
                  src="/images/setting.png"
                  height={24}
                  width={24}
                  alt="Home"
                  className="ml-3 mr-2"
                />{" "}
                <p>Settings</p>
              </div>

              <div className="text-[20px] font-medium flex text-[#90A3BF]">
                <Image
                  src="/images/info.png"
                  height={24}
                  width={24}
                  alt="Home"
                  className="ml-3 mr-2"
                />{" "}
                <p> Help & Center</p>
              </div>

              <div className="text-[20px] font-medium flex text-[#90A3BF]">
                <Image
                  src="/images/briefcase.png"
                  height={24}
                  width={24}
                  alt="Home"
                  className="ml-3 mr-2"
                />{" "}
                <p> Dark Mode</p>
              </div>
            </div>
          </div>

          <div className="flex mt-[145px] mb-20 ml-8">
            <div className="text-[20px] font-medium flex text-[#90A3BF]">
              <Image
                src="/images/logout.png"
                height={24}
                width={24}
                alt="Home"
                className="ml-3 mr-2"
              />{" "}
              <p>LogOut</p>
            </div>
          </div>
        </div>

        {/*Right*/}
        <div className="md:flex grid items-start justify-between md:mx-auto md:space-x-8 mx-6 mt-8">
          <div className="bg-white p-6 rounded-[10px] md:w-auto w-[350px]">
            <p className="text-[20px] font-bold text-[#1A202C]">
              Details Rental
            </p>

            <Image
              src="/images/Maps.png"
              height={272}
              width={486}
              alt="map"
              className="mt-6 mb-[38px] md:w-[486px] w-[295px]"
            />

            <div className="flex">
              <div className="flex items-center justify-center md:flex-row mt-[32px] relative">
                <Image
                  src="/images/View.png"
                  height={72}
                  width={132}
                  alt="car"
                  className="rounded-[8px] md:w-[132px] md:h-[72px] w-[116px] h-16"
                />

                <Image
                  src="/images/image 8.png"
                  height={36}
                  width={116}
                  alt="car"
                  className="z-50 rounded-none mx-auto absolute  md:w-[116px] md:h-[36px] w-[102px] h-8"
                />
              </div>

              <div
                className="flex mt-[38px] ml-4 items-start justify-between 
              md:space-x-[126px]"
              >
                <div className="flex flex-col items-start space-y-2">
                  <h2 className="text-[24px] font-bold text-[#1A202C]">
                    Nissan GT - R
                  </h2>
                  <p className="text-[14px] text-[#90A3BF] font-medium">
                    Sport
                  </p>
                </div>
                <p
                  className="text-[14px] text-[#3D5278] font-medium text-right md:mt-0
                mt-20"
                >
                  #9761
                </p>
              </div>
            </div>

            <div className="flex-1 items-start justify-between mt-8">
              <div className="flex space-x-2 items-center justify-start">
                <div className="rounded-full h-2 w-2 bg-[#3563E9] ring-4 ring-[#3563E9] ring-opacity-30"></div>
                <h3 className="text-[16px] font-medium text-[#1A202C]">
                  Pick-Up
                </h3>
              </div>

              <div className="grid space-y-2 md:flex mt-4 mx-auto">
                <div className="space-y-2 flex flex-col">
                  <label className="text-[16px] font-bold text-[#1A202C]">
                    Locations
                  </label>
                  <select
                    className="md:w-[126px] w-full border-0 text-[#90A3BF] font-medium
                   text-[12px] md:bg-transparent bg-[#F6F7F9] md:p-0 p-4 md:rounded-none rounded-md"
                  >
                    <option>Kota Semarang</option>
                  </select>
                </div>
                <div className="mx-[24px] w-[1px] bg-[#C3D4E9] opacity-40">
                  {" "}
                </div>
                <div className="space-y-2 flex-col flex">
                  <label className="text-[16px] font-bold text-[#1A202C]">
                    Date
                  </label>
                  <select
                    className="md:w-[126px] w-full border-0 text-[#90A3BF] font-medium
                   text-[12px]  md:bg-transparent bg-[#F6F7F9] md:p-0 p-4 md:rounded-none rounded-md"
                  >
                    <option>20 July 2022</option>
                  </select>
                </div>
                <div className="mx-[24px] w-[1px] bg-[#C3D4E9] opacity-40">
                  {" "}
                </div>
                <div className="space-y-2 flex-col flex">
                  <label className="text-[16px] font-bold text-[#1A202C]">
                    Time
                  </label>
                  <select
                    className="md:w-[126px] w-full border-0 text-[#90A3BF] font-medium
                   text-[12px] md:bg-transparent bg-[#F6F7F9] md:p-0 p-4 md:rounded-none rounded-md"
                  >
                    <option>07.00</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex-1 items-start justify-between mt-8">
              <div className="flex space-x-2 items-center justify-start">
                <div className="rounded-full h-2 w-2 bg-[#3563E9] ring-4 ring-[#5CAFFC] ring-opacity-30"></div>
                <h3 className="text-[16px] font-medium text-[#1A202C]">
                  Drop-Off
                </h3>
              </div>

              <div className="grid space-y-2 md:flex mt-4 mx-auto">
                <div className="space-y-2 flex flex-col">
                  <label className="text-[16px] font-bold text-[#1A202C]">
                    Locations
                  </label>
                  <select
                    className="md:w-[126px] w-full border-0 text-[#90A3BF] font-medium 
                  text-[12px] md:bg-transparent bg-[#F6F7F9] md:p-0 p-4 md:rounded-none rounded-md"
                  >
                    <option>Kota Semarang</option>
                  </select>
                </div>
                <div className="mx-[24px] w-[1px] bg-[#C3D4E9] opacity-40">
                  {" "}
                </div>
                <div className="space-y-2 flex-col flex">
                  <label className="text-[16px] font-bold text-[#1A202C]">
                    Date
                  </label>
                  <select
                    className="md:w-[126px] w-full border-0 text-[#90A3BF] font-medium 
                  text-[12px] md:bg-transparent bg-[#F6F7F9] md:p-0 p-4 md:rounded-none rounded-md"
                  >
                    <option>21 July 2022</option>
                  </select>
                </div>
                <div className="mx-[24px] w-[1px] bg-[#C3D4E9] opacity-40">
                  {" "}
                </div>
                <div className="space-y-2 flex-col flex">
                  <label className="text-[16px] font-bold text-[#1A202C]">
                    Time
                  </label>
                  <select
                    className="md:w-[126px] w-full border-0 text-[#90A3BF] font-medium 
                  text-[12px] md:bg-transparent bg-[#F6F7F9] md:p-0 p-4 md:rounded-none rounded-md"
                  >
                    <option>01.00</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="mt-[40px] mb-[36px] h-[1px] bg-[#C3D4E9] opacity-40">
              {" "}
            </div>

            <div className="flex items-start justify-between">
              <div className="flex flex-col space-y-1">
                <p className="text-[20px] font-bold text-[#1A202C]">
                  Total Rental Price
                </p>
                <p className="text-[14px] text-[#90A3BF] font-medium">
                  Overall price and includes rental discount
                </p>
              </div>
              <p className="text-[32px] font-bold text-[#1A202C]">$80.00</p>
            </div>
          </div>

          <div className="flex flex-col space-y-8 md:mt-0 mt-5">
            <div className="bg-white p-6 rounded-[10px] md:w-auto w-[350px]">
              <div className="flex items-center justify-between md:space-x-[260px] ">
                <p className="text-[20px] font-bold text-[#1A202C]">
                  Top 5 Car Rental
                </p>
                <Image
                  src="/images/more.png"
                  height={24}
                  width={24}
                  alt="more"
                />
              </div>

              <div className="grid md:flex mt-8 space-x-6 mb-6">
                <div className=" md:mx-0 mx-10">
                  <Image
                    src="/images/Chartpie.png"
                    height={220}
                    width={220}
                    alt="chart"
                    className="relative"
                  />
                  <div className="flex flex-col space-y-1 z-10 items-center justify-center -mt-36">
                    <p className="text-[24px] font-bold text-[#1A202C]">
                      72,030
                    </p>
                    <p className="text-[14px] text-[#90A3BF] font-medium">
                      Rental Car
                    </p>
                  </div>
                </div>

                <div className="flex flex-col space-y-[25px] md:mt-0 mt-28">
                  <div className="flex items-start justify-between space-x-9">
                    <div className="flex items-center justify-center">
                      <Image
                        src="/images/Mark.png"
                        height={12}
                        width={12}
                        alt="mark"
                      />
                      <p className="ml-3 text-[14px] text-[#90A3BF] font-semibold">
                        Sport Car
                      </p>
                    </div>
                    <p className="text-[14px] text-[#1A202C] font-semibold text-right">
                      17,439
                    </p>
                  </div>

                  <div className="flex items-start justify-between space-x-9">
                    <div className="flex items-center justify-center">
                      <Image
                        src="/images/Mark (1).png"
                        height={12}
                        width={12}
                        alt="mark"
                      />
                      <p className="ml-3 text-[14px] text-[#90A3BF] font-semibold">
                        SUV
                      </p>
                    </div>
                    <p className="text-[14px] text-[#1A202C] font-semibold text-right">
                      9,478
                    </p>
                  </div>

                  <div className="flex items-start justify-between space-x-9">
                    <div className="flex items-center justify-center">
                      <Image
                        src="/images/Mark (2).png"
                        height={12}
                        width={12}
                        alt="mark"
                      />
                      <p className="ml-3 text-[14px] text-[#90A3BF] font-semibold">
                        Coupe
                      </p>
                    </div>
                    <p className="text-[14px] text-[#1A202C] font-semibold text-right">
                      18,197
                    </p>
                  </div>

                  <div className="flex items-start justify-between space-x-9">
                    <div className="flex items-center justify-center">
                      <Image
                        src="/images/Mark (3).png"
                        height={12}
                        width={12}
                        alt="mark"
                      />
                      <p className="ml-3 text-[14px] text-[#90A3BF] font-semibold">
                        Hatchback
                      </p>
                    </div>
                    <p className="text-[14px] text-[#1A202C] font-semibold text-right">
                      12,510
                    </p>
                  </div>

                  <div className="flex items-start justify-between space-x-9">
                    <div className="flex items-center justify-center">
                      <Image
                        src="/images/Mark (4).png"
                        height={12}
                        width={12}
                        alt="mark"
                      />
                      <p className="ml-3 text-[14px] text-[#90A3BF] font-semibold">
                        MPV
                      </p>
                    </div>
                    <p className="text-[14px] text-[#1A202C] font-semibold text-right">
                      14,406
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-[10px] md:w-auto w-[350px]">
              <div className="flex items-center justify-between md:space-x-[216px]">
                <p className="text-[20px] font-bold text-[#1A202C]">
                  Recent Transaction
                </p>
                <p className="text-[#3563E9] text-[14px] font-medium">
                  View All
                </p>
              </div>

              <div className="flex mt-8 md:-ml-0 -ml-4">
                <Image
                  src="/images/Car (2).png"
                  width={114}
                  height={36}
                  alt="car"
                  className="m-[17px]"
                />
                <div className="flex flex-col space-y-2 text-left">
                  <p className="text-[16px] font-bold text-[#1A202C]">
                    Nissan GT -R
                  </p>
                  <p className="text-[12px] text-[#90A3BF]">Sport Car</p>
                </div>
                <div className="flex flex-col space-y-2 text-right md:ml-[140px] ml-2">
                  <p className="text-[12px] text-[#90A3BF]">20 July</p>
                  <p className="text-[16px] font-bold text-[#1A202C]">$80.00</p>
                </div>
              </div>

              <div className="flex mt-8 md:-ml-0 -ml-4">
                <Image
                  src="/images/image 7.png"
                  width={116}
                  height={36}
                  alt="car"
                  className="m-[17px]"
                />
                <div className="flex flex-col space-y-2 text-left">
                  <p className="text-[16px] font-bold text-[#1A202C]">
                    Koegnigsegg
                  </p>
                  <p className="text-[12px] text-[#90A3BF]">Sport Car</p>
                </div>
                <div className="flex flex-col space-y-2 text-right md:ml-[140px] ml-2">
                  <p className="text-[12px] text-[#90A3BF]">19 July</p>
                  <p className="text-[16px] font-bold text-[#1A202C]">$99.00</p>
                </div>
              </div>

              <div className="flex mt-8 md:-ml-0 -ml-4">
                <Image
                  src="/images/Car (1).png"
                  width={116}
                  height={36}
                  alt="car"
                  className="m-[17px]"
                />
                <div className="flex flex-col space-y-2 text-left">
                  <p className="text-[16px] font-bold text-[#1A202C]">
                    Rolls - Royce
                  </p>
                  <p className="text-[12px] text-[#90A3BF]">Sport Car</p>
                </div>
                <div className="flex flex-col space-y-2 text-right md:ml-[140px] ml-2">
                  <p className="text-[12px] text-[#90A3BF]">18 July</p>
                  <p className="text-[16px] font-bold text-[#1A202C]">$96.00</p>
                </div>
              </div>

              <div className="flex mt-8 md:-ml-0 -ml-4">
                <Image
                  src="/images/Car4.png"
                  width={110}
                  height={44}
                  alt="car"
                  className="m-[20px]"
                />
                <div className="flex flex-col space-y-2 text-left">
                  <p className="text-[16px] font-bold text-[#1A202C]">CR - V</p>
                  <p className="text-[12px] text-[#90A3BF]">SUV</p>
                </div>
                <div className="flex flex-col space-y-2 text-right md:ml-[180px] ml-14">
                  <p className="text-[12px] text-[#90A3BF]">17 July</p>
                  <p className="text-[16px] font-bold text-[#1A202C]">$80.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;