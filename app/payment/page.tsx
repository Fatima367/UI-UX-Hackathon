import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Payment = () => {
  return (
    <div className="w-screen bg-[#F6F7F9]">
      <div
        className="md:flex md:space-x-5 md:items-start md:justify-between md:mr-10 grid
      md:mx-0 mx-6"
      >
        {/*For Responsive Design*/}
        <div
          className="bg-white p-[24px] mt-[32px] rounded-[10px] mx-12
        md:hidden block md:w-auto w-[350px]"
        >
          <div className="flex flex-col text-left space-y-1">
            <p className="text-[20px] font-bold text-[#1A202C]">
              Rental Summary
            </p>
            <p className="text-[14px] text-[#90A3BF] font-medium">
              Prices may change depending on the length of the rental and the{" "}
              <br /> price of your rental car.
            </p>
          </div>

          <div className="flex">
            <div className="flex items-center justify-center md:flex-row mt-[32px] relative">
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

            <div className="flex flex-col items-start space-y-2 mt-[50px] ml-4">
              <h2 className="text-[20px] font-bold text-[#1A202C]">
                Nissan GT - R
              </h2>
              <div className="flex space-x-2 items-center justify-center">
                <Image
                  src="/images/Four Star.png"
                  height={20}
                  width={108}
                  alt="ratings"
                />
                <p className="text-[14px] text-[#90A3BF] font-medium">
                  440+ Reviewer
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-[32px] mb-8 h-[1px] bg-[#C3D4E9] opacity-40">
            {" "}
          </div>

          <div className="flex items-stretch justify-between md:space-x-[212px] space-x-[170px]">
            <p className="text-[16px] text-[#90A3BF] font-medium text-left">
              Subtotal
            </p>
            <p className="text-[#1A202C] text-[16px] font-semibold text-right">
              $80.00
            </p>
          </div>

          <div className="flex items-stretch justify-between space-x-[212px] mt-[24px]">
            <p className="text-[16px] text-[#90A3BF] font-medium text-left">
              Tax
            </p>
            <p className="text-[#1A202C] text-[16px] font-semibold text-right">
              $0
            </p>
          </div>

          <div
            className="rounded-[10px] w-[310px] md:w-[444px] h-[56px] bg-[#F6F7F9] my-[32px]
     flex items-stretch justify-between relative md:space-x-[330px] space-x-[210px]"
          >
            <input
              type="text"
              className="absolute bg-transparent w-[300px] h-[56px]
       placeholder:text-[14px] placeholder:text-[#90A3BF] placeholder:font-medium 
       ml-5 border-0 border-transparent focus-visible:outline-none focus-visible:ring-0"
              placeholder="Apply promo code"
            />

            <button className="text-[16px] font-semibold text-[#1A202C]">
              Apply Now
            </button>
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
            <p className="md:text-[32px] text-[28px] font-bold text-[#1A202C]">
              $80.00
            </p>
          </div>
        </div>

        {/*Left Form*/}
        <div className="flex flex-col items-start justify-between">
          {/*Step 1*/}
          <div className="bg-white p-[24px] mt-[32px] mx-auto rounded-[10px] md:w-auto w-[350px]">
            <p className="text-[20px] font-bold text-[#1A202C] text-left">
              Billing Info
            </p>
            <div className="mt-1 flex items-stretch justify-between">
              <p className="font-medium text-[14px] text-[#90A3BF] text-left">
                Please enter your billing info
              </p>
              <p className="font-medium text-[14px] text-[#90A3BF] text-right">
                Step 1 of 4
              </p>
            </div>

            <div className="md:flex md:space-x-8 mt-[32px] grid space-y-4 md:space-y-0">
              <div className="flex flex-col text-left space-y-[16px]">
                <p className="text-[16px] font-semibold text-[#1A202C]">Name</p>

                <div
                  className="rounded-[10px] w-[300px] md:w-[386px] h-[56px] bg-[#F6F7F9] my-[32px]
     flex items-stretch justify-between relative space-x-[330px]"
                >
                  <input
                    type="text"
                    className="absolute bg-transparent w-[320px] h-[56px]
       placeholder:text-[14px] placeholder:text-[#90A3BF] placeholder:font-medium 
       ml-7 border-0 border-transparent focus-visible:outline-none focus-visible:ring-0"
                    placeholder="Your name"
                  />
                </div>
              </div>

              <div className="flex flex-col text-left space-y-[16px]">
                <p className="text-[16px] font-semibold text-[#1A202C]">
                  Phone Number
                </p>

                <div
                  className="rounded-[10px] w-[300px] md:w-[386px] h-[56px] bg-[#F6F7F9] my-[32px]
     flex items-stretch justify-between relative space-x-[330px]"
                >
                  <input
                    type="text"
                    className="absolute bg-transparent w-[320px] h-[56px]
       placeholder:text-[14px] placeholder:text-[#90A3BF] placeholder:font-medium 
       ml-7 border-0 border-transparent focus-visible:outline-none focus-visible:ring-0"
                    placeholder="Phone number"
                  />
                </div>
              </div>
            </div>

            <div className="md:flex md:space-x-8 mt-[32px] grid space-y-4 md:space-y-0">
              <div className="flex flex-col text-left space-y-[16px]">
                <p className="text-[16px] font-semibold text-[#1A202C]">
                  Address
                </p>

                <div
                  className="rounded-[10px] w-[300px] md:w-[386px] h-[56px] bg-[#F6F7F9] my-[32px]
     flex items-stretch justify-between relative space-x-[330px]"
                >
                  <input
                    type="text"
                    className="absolute bg-transparent w-[320px] h-[56px]
       placeholder:text-[14px] placeholder:text-[#90A3BF] placeholder:font-medium 
       ml-7 border-0 border-transparent focus-visible:outline-none focus-visible:ring-0"
                    placeholder="Address"
                  />
                </div>
              </div>

              <div className="flex flex-col text-left space-y-[16px]">
                <p className="text-[16px] font-semibold text-[#1A202C]">
                  Town/City
                </p>

                <div
                  className="rounded-[10px] w-[300px] md:w-[386px] h-[56px] bg-[#F6F7F9] my-[32px]
     flex items-stretch justify-between relative space-x-[330px]"
                >
                  <input
                    type="text"
                    className="absolute bg-transparent w-[320px] h-[56px]
       placeholder:text-[14px] placeholder:text-[#90A3BF] placeholder:font-medium 
       ml-7 border-0 border-transparent focus-visible:outline-none focus-visible:ring-0"
                    placeholder="Town or city"
                  />
                </div>
              </div>
            </div>
          </div>

          {/*Step 2*/}
          <div className="bg-white p-[24px] mt-[32px] mx-auto rounded-[10px] md:w-auto w-[350px]">
            <p className="text-[20px] font-bold text-[#1A202C] text-left">
              Rental Info
            </p>
            <div className="mt-1 flex items-stretch justify-between">
              <p className="font-medium text-[14px] text-[#90A3BF] text-left">
                Please select your rental date
              </p>
              <p className="font-medium text-[14px] text-[#90A3BF] text-right">
                Step 2 of 4
              </p>
            </div>

            <div className="flex space-x-2 items-center mt-8 text-left justify-start">
              <div className="rounded-full h-2 w-2 bg-[#3563E9] ring-4 ring-[#3563E9] ring-opacity-30"></div>
              <h3 className="text-[16px] font-medium text-[#1A202C]">
                Pick-Up
              </h3>
            </div>

            <div className="md:flex md:space-x-8 mt-[32px] grid space-y-4 md:space-y-0">
              <div className="flex flex-col text-left space-y-[16px]">
                <p className="text-[16px] font-semibold text-[#1A202C]">
                  Locations
                </p>

                <div
                  className="rounded-[10px] w-[300px] md:w-[386px] h-[56px] bg-[#F6F7F9] my-[32px]
flex items-center justify-center relative space-x-[330px]"
                >
                  <select
                    className="absolute bg-transparent w-[280px] md:w-[340px] h-[56px]
text-[14px] text-[#90A3BF] selection:font-medium 
 border-0 border-transparent focus-visible:outline-none focus-visible:ring-0"
                  >
                    <option>Select your city</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col text-left space-y-[16px]">
                <p className="text-[16px] font-semibold text-[#1A202C]">Date</p>

                <div
                  className="rounded-[10px] w-[300px] md:w-[386px] h-[56px] bg-[#F6F7F9] my-[32px]
flex items-center justify-center relative space-x-[330px]"
                >
                  <select
                    className="absolute bg-transparent w-[280px] md:w-[340px] h-[56px]
text-[14px] text-[#90A3BF] selection:font-medium 
 border-0 border-transparent focus-visible:outline-none focus-visible:ring-0"
                  >
                    <option>Select your date</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="md:flex md:space-x-8 mt-[32px] grid space-y-4 md:space-y-0">
              <div className="flex flex-col text-left space-y-[16px]">
                <p className="text-[16px] font-semibold text-[#1A202C]">Time</p>

                <div
                  className="rounded-[10px] w-[300px] md:w-[386px] h-[56px] bg-[#F6F7F9] my-[32px]
flex items-center justify-center relative space-x-[330px]"
                >
                  <select
                    className="absolute bg-transparent w-[280px] md:w-[340px] h-[56px]
text-[14px] text-[#90A3BF] selection:font-medium 
 border-0 border-transparent focus-visible:outline-none focus-visible:ring-0"
                  >
                    <option>Select your time</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex space-x-2 items-center mt-8 text-left justify-start">
              <div className="rounded-full h-2 w-2 bg-[#3563E9] ring-4 ring-[#5CAFFC] ring-opacity-30"></div>
              <h3 className="text-[16px] font-medium text-[#1A202C]">
                Drop-Off
              </h3>
            </div>

            <div className="md:flex md:space-x-8 mt-[32px] grid space-y-4 md:space-y-0">
              <div className="flex flex-col text-left space-y-[16px]">
                <p className="text-[16px] font-semibold text-[#1A202C]">
                  Locations
                </p>

                <div
                  className="rounded-[10px] w-[300px] md:w-[386px] h-[56px] bg-[#F6F7F9] my-[32px]
flex items-center justify-center relative space-x-[330px]"
                >
                  <select
                    className="absolute bg-transparent w-[280px] md:w-[340px] h-[56px]
text-[14px] text-[#90A3BF] selection:font-medium 
 border-0 border-transparent focus-visible:outline-none focus-visible:ring-0"
                  >
                    <option>Select your city</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col text-left space-y-[16px]">
                <p className="text-[16px] font-semibold text-[#1A202C]">Date</p>

                <div
                  className="rounded-[10px] w-[300px] md:w-[386px] h-[56px] bg-[#F6F7F9] my-[32px]
flex items-center justify-center relative space-x-[330px]"
                >
                  <select
                    className="absolute bg-transparent w-[280px] md:w-[340px] h-[56px]
text-[14px] text-[#90A3BF] selection:font-medium 
 border-0 border-transparent focus-visible:outline-none focus-visible:ring-0"
                  >
                    <option>Select your date</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="md:flex md:space-x-8 mt-[32px] grid space-y-4 md:space-y-0">
              <div className="flex flex-col text-left space-y-[16px]">
                <p className="text-[16px] font-semibold text-[#1A202C]">Time</p>

                <div
                  className="rounded-[10px] w-[300px] md:w-[386px] h-[56px] bg-[#F6F7F9] my-[32px]
                  flex items-center justify-center relative space-x-[330px]"
                >
                  <select
                    className="absolute bg-transparent w-[280px] md:w-[340px] h-[56px]
                       text-[14px] text-[#90A3BF] selection:font-medium 
                  border-0 border-transparent focus-visible:outline-none focus-visible:ring-0"
                  >
                    <option>Select your time</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/*Step 3*/}
          <div className="bg-white p-[24px] mt-[32px] mx-auto rounded-[10px] md:w-auto w-[350px]">
            <p className="text-[20px] font-bold text-[#1A202C] text-left">
              Payment Method
            </p>
            <div className="mt-1 flex items-stretch justify-between">
              <p className="font-medium text-[14px] text-[#90A3BF] text-left">
                Please enter your payment method
              </p>
              <p className="font-medium text-[14px] text-[#90A3BF] text-right">
                Step 3 of 4
              </p>
            </div>

            <div className="bg-[#F6F7F9] p-[24px] rounded-[10px] mt-8 md:w-[804px] w-[310px]">
              <div className="flex items-center justify-between">
                <div className="flex space-x-2 items-center text-left justify-start">
                  <div className="rounded-full h-2 w-2 bg-[#3563E9] ring-4 ring-[#3563E9] ring-opacity-30"></div>
                  <h3 className="text-[16px] font-medium text-[#1A202C]">
                    Credit Card
                  </h3>
                </div>
                <div className="flex space-x-3">
                  <Image
                    src="/images/visa.png"
                    width={48}
                    height={16}
                    alt="Visa"
                  />
                  <Image
                    src="/images/mc.png"
                    width={32}
                    height={20}
                    alt="Master-Card"
                  />
                </div>
              </div>

              <div className="md:flex md:space-x-8 mt-[32px] grid space-y-4 md:space-y-0">
                <div className="flex flex-col text-left space-y-[16px]">
                  <p className="text-[16px] font-semibold text-[#1A202C]">
                    Card Number
                  </p>

                  <div
                    className="rounded-[10px] w-[270px] md:w-[362px] h-[56px] bg-white my-[32px]
     flex items-stretch justify-between relative space-x-[330px]"
                  >
                    <input
                      type="text"
                      className="absolute bg-transparent w-[320px] h-[56px]
       placeholder:text-[14px] placeholder:text-[#90A3BF] placeholder:font-medium 
       ml-7 border-0 border-transparent focus-visible:outline-none focus-visible:ring-0"
                      placeholder="Card number"
                    />
                  </div>
                </div>

                <div className="flex flex-col text-left space-y-[16px]">
                  <p className="text-[16px] font-semibold text-[#1A202C]">
                    Expration Date
                  </p>

                  <div
                    className="rounded-[10px] w-[270px] md:w-[362px] h-[56px] bg-white my-[32px]
     flex items-stretch justify-between relative space-x-[330px]"
                  >
                    <input
                      type="text"
                      className="absolute bg-transparent w-[320px] h-[56px]
       placeholder:text-[14px] placeholder:text-[#90A3BF] placeholder:font-medium 
       ml-7 border-0 border-transparent focus-visible:outline-none focus-visible:ring-0"
                      placeholder="DD/MM/YY"
                    />
                  </div>
                </div>
              </div>

              <div className="md:flex md:space-x-8 mt-[32px] grid space-y-4 md:space-y-0">
                <div className="flex flex-col text-left space-y-[16px]">
                  <p className="text-[16px] font-semibold text-[#1A202C]">
                    Card Holder
                  </p>

                  <div
                    className="rounded-[10px] w-[270px] md:w-[362px] h-[56px] bg-white my-[32px]
                   flex items-stretch justify-between relative space-x-[330px]"
                  >
                    <input
                      type="text"
                      className="absolute bg-transparent w-[320px] h-[56px]
                      placeholder:text-[14px] placeholder:text-[#90A3BF] placeholder:font-medium 
                      ml-7 border-0 border-transparent focus-visible:outline-none focus-visible:ring-0"
                      placeholder="Card holder"
                    />
                  </div>
                </div>

                <div className="flex flex-col text-left space-y-[16px]">
                  <p className="text-[16px] font-semibold text-[#1A202C]">
                    CVC
                  </p>

                  <div
                    className="rounded-[10px] w-[270px] md:w-[362px] h-[56px] bg-white my-[32px]
     flex items-stretch justify-between relative space-x-[330px]"
                  >
                    <input
                      type="text"
                      className="absolute bg-transparent w-[320px] h-[56px]
       placeholder:text-[14px] placeholder:text-[#90A3BF] placeholder:font-medium 
       ml-7 border-0 border-transparent focus-visible:outline-none focus-visible:ring-0"
                      placeholder="CVC"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-[24px] mt-6">
              <div
                className="flex items-center justify-between bg-[#F6F7F9] rounded-[10px]
                            h-14 md:w-[804px] w-[310px]"
              >
                <div className="flex items-center justify-center ml-10">
                  <Checkbox className="h-6 w-6 rounded-full" />
                  <p className="text-[14px] text-[#1F2544] font-semibold md:ml-5 ml-2">
                    Paypal
                  </p>
                </div>
                <Image
                  src="/images/Paypal.png"
                  height={24}
                  width={100}
                  alt="Paypal"
                  className="mr-10"
                />
              </div>

              <div
                className="flex items-center justify-between bg-[#F6F7F9] rounded-[10px]
                            h-14 md:w-[804px] w-[310px]"
              >
                <div className="flex items-center justify-center ml-10">
                  <Checkbox className="h-6 w-6 rounded-full" />
                  <p className="text-[14px] text-[#1F2544] font-semibold md:ml-5 ml-2">
                    Bitcoin
                  </p>
                </div>
                <Image
                  src="/images/Bitcoin.png"
                  height={20}
                  width={94}
                  alt="Bitcoin"
                  className="mr-10"
                />
              </div>
            </div>
          </div>

          {/*Step 4*/}
          <div className="bg-white p-[24px] my-[32px] mx-auto rounded-[10px] md:w-auto w-[350px]">
            <p className="text-[20px] font-bold text-[#1A202C] text-left">
              Confirmation
            </p>
            <div className="mt-1 flex items-stretch justify-between">
              <p className="font-medium text-[14px] text-[#90A3BF] text-left">
                We are getting to the end. Just few clicks and your rental is
                ready!
              </p>
              <p className="font-medium text-[14px] text-[#90A3BF] text-right">
                Step 4 of 4
              </p>
            </div>

            <div className="flex flex-col space-y-[24px] mt-8">
              <div
                className="flex items-center justify-start bg-[#F6F7F9] rounded-[10px]
                md:h-14 h-16 md:w-[804px] w-[310px]"
              >
                <Checkbox className="h-6 w-6 md:ml-10 ml-6" />
                <p
                  className="md:text-[14px] text-[12px] text-[#1F2544] font-semibold 
                md:ml-5 ml-2"
                >
                  I agree with sending an Marketing and newsletter emails. No
                  spam, promissed!
                </p>
              </div>

              <div
                className="flex items-center justify-start bg-[#F6F7F9] rounded-[10px]
                md:h-14 h-16 md:w-[804px] w-[310px]"
              >
                <Checkbox className="h-6 w-6 md:ml-10 ml-6" />
                <p
                  className="md:text-[14px] text-[12px] text-[#1F2544] font-semibold 
                md:ml-5 ml-2"
                >
                  I agree with our terms and conditions and privacy policy.
                </p>
              </div>
            </div>

            <Link href="/dashboard">
              <button
                className="px-[20px] py-3 mt-8 text-base font-medium text-center space-x-[8px]
                     text-white bg-[#3563E9] rounded-[10px] h-[56px] w-[140px] hover:bg-blue-800"
              >
                Rent Now
              </button>
            </Link>

            <div className="flex flex-col space-y-4 my-8">
              <Image
                src="/images/ic-security-safety.png"
                height={32}
                width={32}
                alt="safety-icon"
              />
              <p className="text-[16px] text-[#1A202C] font-semibold">
                All your data are safe
              </p>
              <p className="text-[14px] text-[#90A3BF]">
                We are using the most advanced security to provide you the best
                experience ever.
              </p>
            </div>
          </div>
        </div>

        {/*Right Card*/}
        <div className="bg-white p-[24px] mt-[32px] rounded-[10px] md:block hidden w-[480px]">
          <div className="flex flex-col text-left space-y-1">
            <p className="text-[20px] font-bold text-[#1A202C]">
              Rental Summary
            </p>
            <p className="text-[14px] text-[#90A3BF] font-medium">
              Prices may change depending on the length of the rental and the{" "}
              <br /> price of your rental car.
            </p>
          </div>

          <div className="flex">
            <div className="flex items-center justify-center md:flex-row mt-[32px] relative">
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

            <div className="flex flex-col items-start space-y-2 mt-[50px] ml-4">
              <h2 className="text-[20px] font-bold text-[#1A202C]">
                Nissan GT - R
              </h2>
              <div className="flex space-x-2 items-center justify-center">
                <Image
                  src="/images/Four Star.png"
                  height={20}
                  width={108}
                  alt="ratings"
                />
                <p className="text-[14px] text-[#90A3BF] font-medium">
                  440+ Reviewer
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-[32px] mb-8 h-[1px] bg-[#C3D4E9] opacity-40">
            {" "}
          </div>

          <div className="flex items-stretch justify-between space-x-[212px]">
            <p className="text-[16px] text-[#90A3BF] font-medium text-left">
              Subtotal
            </p>
            <p className="text-[#1A202C] text-[16px] font-semibold text-right">
              $80.00
            </p>
          </div>

          <div className="flex items-stretch justify-between space-x-[212px] mt-[24px]">
            <p className="text-[16px] text-[#90A3BF] font-medium text-left">
              Tax
            </p>
            <p className="text-[#1A202C] text-[16px] font-semibold text-right">
              $0
            </p>
          </div>

          <div
            className="rounded-[10px] w-[444px] h-[56px] bg-[#F6F7F9] my-[32px]
     flex items-stretch justify-between relative space-x-[330px]"
          >
            <input
              type="text"
              className="absolute bg-transparent w-[300px] h-[56px]
       placeholder:text-[14px] placeholder:text-[#90A3BF] placeholder:font-medium 
       ml-5 border-0 border-transparent focus-visible:outline-none focus-visible:ring-0"
              placeholder="Apply promo code"
            />

            <button className="text-[16px] font-semibold text-[#1A202C]">
              Apply Now
            </button>
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
        {/*----------------------------------------------*/}
      </div>
    </div>
  );
};

export default Payment;
