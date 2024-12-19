"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { XMarkIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";
import { MouseEvent, useState } from "react";

const Navbar = () => {
  return (
    <nav
      className="box-border bg-white border border-[#C3D4E9] mt-0 lg:mt-16
      border-opacity-40 p-6 lg:p-5 lg:flex lg:flex-row lg:items-start 
      lg:justify-between items-center justify-center h-auto relative border-r-0 hidden"
    >
      <div className="lg:flex items-center justify-between lg:space-x-10 lg:-mb-5">
        {/* Logo */}
        <div className="flex lg:items-center lg:space-x-0 lg:ml-3 mt-1">
          <Link href="/" className="h-11">
            <Image src="/images/Logo.png" width={130} height={36} alt="Logo" />
          </Link>

          <Link href="/dashboard">
            <Image
              src="/images/Image.png"
              height={44}
              width={44}
              alt="profile"
              className="lg:hidden block ml-40 -mt-1"
            />
          </Link>
        </div>

        {/* Search bar */}
        <div className="flex items-center justify-center space-x-5 lg:transform lg:-mt-2 mt-4">
          <div
            className="flex items-center justify-between w-[280px] lg:w-[420px] h-[36px]
         lg:rounded-full rounded-md ring-1 ring-[#C3D4E9] ring-opacity-70 
         px-4 relative"
          >
            <button>
              <Image
                src="/images/search-normal.png"
                height={24}
                width={24}
                alt="search"
              />
            </button>

            <input
              type="text"
              className="absolute bg-transparent lg:w-80 h-10
       placeholder:text-sm placeholder:text-[#596780] placeholder:font-medium placeholder:mx-4
       ml-10 border-0 border-transparent focus-visible:outline-none focus-visible:ring-0"
              placeholder="Search something here"
            />

            <button>
              <Image
                src="/images/filter.png"
                height={24}
                width={24}
                alt="filter"
                className="hidden lg:flex"
              />
            </button>
          </div>
          <div
            className=" rounded-md ring-1 ring-[#C3D4E9] ring-opacity-70 lg:hidden
      h-10 w-9 flex items-center justify-center relative"
          >
            <button>
              <Image
                src="/images/filter.png"
                height={24}
                width={24}
                alt="filter"
                className="block lg:hidden"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Profile and Notification */}
      <div className="lg:items-center gap-5 mt-4 lg:mt-0 lg:ml-0 ml-5 lg:mr-4 lg:flex hidden">
        <Link href="/detail-car-rent">
          <div
            className="w-9 h-9 flex-none rounded-full ring-1 ring-[#C3D4E9] ring-opacity-40 
          flex items-center justify-center"
          >
            <button>
              <Image
                src="/images/heart.png"
                height={24}
                width={24}
                alt="search"
              />
            </button>
          </div>
        </Link>

        <Link href="/">
          <div
            className="w-9 h-9 flex-none rounded-full ring-1 ring-[#C3D4E9] ring-opacity-40 
          flex items-center justify-center relative"
          >
            <button>
              <Image
                src="/images/notification.png"
                height={24}
                width={24}
                alt="notification"
              />
            </button>
            <div
              className="rounded-full h-2 w-2 bg-red-500 z-10 absolute top-[2px]
            right-0"
            ></div>
          </div>
        </Link>

        <Link href="/">
          <div
            className="w-9 h-9 flex-none rounded-full ring-1 ring-[#C3D4E9] ring-opacity-40 
          flex items-center justify-center"
          >
            <button>
              <Image
                src="/images/setting-2.png"
                height={24}
                width={24}
                alt="settings"
              />
            </button>
          </div>
        </Link>

        <Link href="/dashboard">
          <div
            className="w-9 h-9 flex-none rounded-full ring-1 ring-[#C3D4E9] ring-opacity-40 
          flex items-center justify-center"
          >
            <button>
              <Image
                src="/images/Image.png"
                height={44}
                width={44}
                alt="profile"
              />
            </button>
          </div>
        </Link>
      </div>
    </nav>
  );
};

const NavbarMobile = () => {
  return (
    <nav
      className="box-border bg-white border border-[#C3D4E9] mt-0 lg:mt-16
      border-opacity-40 p-6 lg:p-5 flex flex-col lg:items-start 
      lg:justify-between items-center justify-center h-auto relative border-r-0 lg:hidden"
    >
      <div className="lg:flex items-center justify-between lg:space-x-10 lg:-mb-5">
        {/* Logo */}
        <div className="flex lg:items-center lg:space-x-0 lg:ml-3 mt-1">
          <Link href="/" className="h-11">
            <Image src="/images/Logo.png" width={130} height={36} alt="Logo" />
          </Link>

          <Link href="/dashboard">
            <Image
              src="/images/Image.png"
              height={44}
              width={44}
              alt="profile"
              className="lg:hidden block ml-40 -mt-1"
            />
          </Link>
        </div>

        {/* Search bar */}
        <div className="flex items-center justify-center space-x-5 lg:transform lg:-mt-2 mt-4">
          <div
            className="flex items-center justify-between w-[280px] lg:w-[420px] h-[36px]
         lg:rounded-full rounded-md ring-1 ring-[#C3D4E9] ring-opacity-70 
         px-4 relative"
          >
            <button>
              <Image
                src="/images/search-normal.png"
                height={24}
                width={24}
                alt="search"
              />
            </button>

            <input
              type="text"
              className="absolute bg-transparent lg:w-80 h-10
       placeholder:text-sm placeholder:text-[#596780] placeholder:font-medium placeholder:mx-4
       ml-10 border-0 border-transparent focus-visible:outline-none focus-visible:ring-0"
              placeholder="Search something here"
            />

            <button>
              <Image
                src="/images/filter.png"
                height={24}
                width={24}
                alt="filter"
                className="hidden lg:flex"
              />
            </button>
          </div>
          <div
            className=" rounded-md ring-1 ring-[#C3D4E9] ring-opacity-70 lg:hidden
      h-10 w-9 flex items-center justify-center relative"
          >
            <button>
              <Image
                src="/images/filter.png"
                height={24}
                width={24}
                alt="filter"
                className="block lg:hidden"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Profile and Notification */}
      <div className="lg:items-center gap-5 mt-4 lg:mt-0 lg:ml-0 ml-5 lg:mr-4 lg:flex hidden">
        <Link href="/detail-car-rent">
          <div
            className="w-9 h-9 flex-none rounded-full ring-1 ring-[#C3D4E9] ring-opacity-40 
          flex items-center justify-center"
          >
            <button>
              <Image
                src="/images/heart.png"
                height={24}
                width={24}
                alt="search"
              />
            </button>
          </div>
        </Link>

        <Link href="/">
          <div
            className="w-9 h-9 flex-none rounded-full ring-1 ring-[#C3D4E9] ring-opacity-40 
          flex items-center justify-center relative"
          >
            <button>
              <Image
                src="/images/notification.png"
                height={24}
                width={24}
                alt="notification"
              />
            </button>
            <div
              className="rounded-full h-2 w-2 bg-red-500 z-10 absolute top-[2px]
            right-0"
            ></div>
          </div>
        </Link>

        <Link href="/">
          <div
            className="w-9 h-9 flex-none rounded-full ring-1 ring-[#C3D4E9] ring-opacity-40 
          flex items-center justify-center"
          >
            <button>
              <Image
                src="/images/setting-2.png"
                height={24}
                width={24}
                alt="settings"
              />
            </button>
          </div>
        </Link>

        <Link href="/dashboard">
          <div
            className="w-9 h-9 flex-none rounded-full ring-1 ring-[#C3D4E9] ring-opacity-40 
          flex items-center justify-center"
          >
            <button>
              <Image
                src="/images/Image.png"
                height={44}
                width={44}
                alt="profile"
              />
            </button>
          </div>
        </Link>
      </div>
    </nav>
  );
};

const NavbarMobile2 = () => {
  return (
    <nav
      className="box-border bg-white border border-[#C3D4E9] mt-0 lg:mt-16
      border-opacity-40 p-6 flex flex-col lg:items-start 
      lg:justify-between items-center justify-center h-auto relative border-r-0 lg:hidden"
    >
      {/* Logo */}
      <div className="flex lg:items-center lg:space-x-0 lg:ml-3 mt-1">
        <Link href="/" className="h-11">
          <Image src="/images/Logo.png" width={130} height={36} alt="Logo" />
        </Link>

        <Link href="/dashboard">
          <Image
            src="/images/Image.png"
            height={44}
            width={44}
            alt="profile"
            className="lg:hidden block ml-40 -mt-2"
          />
        </Link>
      </div>
    </nav>
  );
};


const Navbar2 = () => {
  const [showNav, setShowNav] = useState(false);
  const [showFilter, setShowFilter] = useState(false);

  const [progress, setProgress] = useState(70);

  const increaseProgress = (e: MouseEvent<HTMLDivElement>) => {
    setProgress((prev) => Math.min(prev + 10, 100));
  };

  const decreaseProgress = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation(); // Prevent triggering the parent click
    setProgress((prev) => Math.max(prev - 10, 0));
  };

  return (
    <nav
      className="box-border bg-white border border-[#C3D4E9] mt-0 lg:mt-16
      border-opacity-40 p-6 lg:p-5 flex flex-col items-center justify-center h-auto
       relative border-r-0 lg:hidden"
    >
      <div className="flex w-full items-center justify-between mb-2">
        <button
          className=" absolute cursor-pointer top-6 
                  left-2 w-[2rem] h-[1rem]"
          onClick={() => setShowNav(!showNav)}
        >
          {showNav ? (
            <XMarkIcon className="text-2xl text-[#596780] " />
          ) : (
            <Image src="/images/menu.png" width={24} height={24} alt="menu" />
          )}
        </button>
        {/* Logo */}
        <div className="">
          <Link href="/dashboard">
            <Image
              src="/images/Image.png"
              height={44}
              width={44}
              alt="profile"
              className="lg:hidden block -mt-1 right-2 absolute "
            />
          </Link>
        </div>
      </div>
      {showNav && (
        <div className="absolute left-2 mt-5 bg-white rounded-md shadow-md p-4 z-20">
          <ul className="space-y-2 flex flex-col">
            <Link href="/detail-car-rent">
              <li className="flex space-x-3">
                <button>
                  <Image
                    src="/images/heart.png"
                    height={24}
                    width={24}
                    alt="search"
                  />
                </button>
                <p className="text-sm text-[#596780]"> Wishlist</p>
              </li>
            </Link>

            <Link href="/">
              <li className="flex space-x-3">
                <button>
                  <Image
                    src="/images/notification.png"
                    height={24}
                    width={24}
                    alt="notification"
                  />
                </button>
                <div
                  className="rounded-full h-2 w-2 bg-red-500 z-10 absolute 
          left-5"
                ></div>
                <p className="text-sm text-[#596780]"> Notifications</p>
              </li>
            </Link>

            <Link href="/">
              <li className="flex space-x-3">
                <button>
                  <Image
                    src="/images/setting-2.png"
                    height={24}
                    width={24}
                    alt="settings"
                  />
                </button>
                <p className="text-sm text-[#596780]"> Settings</p>
              </li>
            </Link>
          </ul>
        </div>
      )}
      <div className="lg:flex items-center justify-between lg:space-x-10 lg:-mb-5 mt-10">
        {/* Logo */}
        <div className="flex lg:items-center lg:space-x-0 lg:ml-3 mt-1">
          <Link href="/" className="h-11">
            <Image src="/images/Logo.png" width={130} height={36} alt="Logo" />
          </Link>
        </div>

        {/* Search bar */}
        <div className="flex items-center justify-center space-x-5 lg:transform lg:-mt-2 mt-4">
          <div
            className="flex items-center justify-between w-[280px] lg:w-[420px] h-[36px]
         lg:rounded-full rounded-md ring-1 ring-[#C3D4E9] ring-opacity-70 
         px-4 relative"
          >
            <button>
              <Image
                src="/images/search-normal.png"
                height={24}
                width={24}
                alt="search"
              />
            </button>

            <input
              type="text"
              className="absolute bg-transparent lg:w-80 h-10 w-full
       placeholder:text-sm placeholder:text-[#596780] placeholder:font-medium placeholder:mx-4
       ml-10 border-0 border-transparent focus-visible:outline-none focus-visible:ring-0"
              placeholder="Search something here"
            />
          </div>
          <div
            className="rounded-md ring-1 ring-[#C3D4E9] ring-opacity-70
      h-10 w-9 flex items-center justify-center relative"
          >
            <button
              className="absolute"
              onClick={() => setShowFilter(!showFilter)}
            >
              {showFilter ? (
                <XMarkIcon
                  className="text-2xl text-[#596780]"
                  height={24}
                  width={24}
                />
              ) : (
                <Image
                  src="/images/filter.png"
                  height={24}
                  width={24}
                  alt="filter"
                />
              )}
            </button>
          </div>
          {showFilter && (
            <ul
              className="right-4 flex flex-col bg-white absolute py-4 z-50 shadow-md rounded-md
                      top-44 px-6"
            >
              <li className="flex flex-col space-y-4 mt-5">
                <p className="text-[#90A3BF] text-base">T Y P E</p>
                <p className="text-xl font-medium">
                  <Checkbox className="mr-2" checked /> Sport{" "}
                  <span className="ml-2 text-[#90A3BF] text-base">(10)</span>
                </p>
                <p className="text-xl font-medium">
                  <Checkbox className="mr-2" checked /> SUV{" "}
                  <span className="ml-2 text-[#90A3BF] text-base">(12)</span>
                </p>
                <p className="text-xl font-medium">
                  <Checkbox className="mr-2" /> MPV{" "}
                  <span className="ml-2 text-[#90A3BF] text-base">(16)</span>
                </p>
                <p className="text-xl font-medium">
                  <Checkbox className="mr-2" /> Sedan{" "}
                  <span className="ml-2 text-[#90A3BF] text-base">(20)</span>
                </p>
                <p className="text-xl font-medium">
                  <Checkbox className="mr-2" /> Cope{" "}
                  <span className="ml-2 text-[#90A3BF] text-base">(14)</span>
                </p>
                <p className="text-xl font-medium">
                  <Checkbox className="mr-2" /> Hatchback{" "}
                  <span className="ml-2 text-[#90A3BF] text-base">(14)</span>
                </p>
              </li>

              <li className="flex flex-col space-y-4 mt-10">
                <p className="text-[#90A3BF] text-base">C A P A C I T Y</p>
                <p className="text-xl font-medium">
                  <Checkbox className="mr-2" checked /> 2 Person{" "}
                  <span className="ml-2 text-[#90A3BF] text-base">(10)</span>
                </p>
                <p className="text-xl font-medium">
                  <Checkbox className="mr-2" /> 4 Person{" "}
                  <span className="ml-2 text-[#90A3BF] text-base">(14)</span>
                </p>
                <p className="text-xl font-medium">
                  <Checkbox className="mr-2" /> 6 Person{" "}
                  <span className="ml-2 text-[#90A3BF] text-base">(12)</span>
                </p>
                <p className="text-xl font-medium">
                  <Checkbox className="mr-2" checked /> 8 Person{" "}
                  <span className="ml-2 text-[#90A3BF] text-base">(16)</span>
                </p>
              </li>

              <li className="flex flex-col space-y-4 mt-10">
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

                <p className="text-xl font-medium text-[#596780]">
                  Max. $100.00
                </p>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

const Navbar3 = () => {
  const [showNav, setShowNav] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav
      className="box-border bg-white border border-[#C3D4E9] mt-0 lg:mt-16
      border-opacity-40 p-6 lg:p-5 flex flex-col items-center justify-center h-auto
       relative border-r-0 lg:hidden"
    >
      <div className="flex w-full items-center justify-between mb-2">
        <button
          className=" absolute cursor-pointer top-6 
                  left-2 w-[2rem] h-[1rem]"
          onClick={() => setShowNav(!showNav)}
        >
          {showNav ? (
            <XMarkIcon className="text-2xl text-[#596780] " />
          ) : (
            <Image src="/images/menu.png" width={24} height={24} alt="menu" />
          )}
        </button>
        {/* Logo */}
        <div className="">
          <button
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          >
            {showMenu ? (
              <XMarkIcon
                className="text-2xl text-[#596780] absolute right-5 top-5"
                height={24}
                width={24}
              />
            ) : (
              <Image
                src="/images/Image.png"
                height={44}
                width={44}
                alt="profile"
                className="absolute right-3 top-5"
              />
            )}
          </button>
        </div>
      </div>
      {showNav && (
        <div className="absolute left-2 mt-5 bg-white rounded-md shadow-md p-4 z-20">
          <ul className="space-y-2 flex flex-col">
            <Link href="/detail-car-rent">
              <li className="flex space-x-3">
                <button>
                  <Image
                    src="/images/heart.png"
                    height={24}
                    width={24}
                    alt="search"
                  />
                </button>
                <p className="text-sm text-[#596780]"> Wishlist</p>
              </li>
            </Link>

            <Link href="/">
              <li className="flex space-x-3">
                <button>
                  <Image
                    src="/images/notification.png"
                    height={24}
                    width={24}
                    alt="notification"
                  />
                </button>
                <div
                  className="rounded-full h-2 w-2 bg-red-500 z-10 absolute 
          left-5"
                ></div>
                <p className="text-sm text-[#596780]"> Notifications</p>
              </li>
            </Link>

            <Link href="/">
              <li className="flex space-x-3">
                <button>
                  <Image
                    src="/images/setting-2.png"
                    height={24}
                    width={24}
                    alt="settings"
                  />
                </button>
                <p className="text-sm text-[#596780]"> Settings</p>
              </li>
            </Link>
          </ul>
        </div>
      )}
      {showMenu && (
        <ul className="flex flex-col bg-white rounded-md shadow-md p-5 z-20">
          <li className="flex flex-col space-y-[42px] mt-5">
            <p className="text-[#90A3BF] text-base ml-9">M A I N M E N U</p>
            <div className="space-y-8">
              <div
                className="w-[254px] h-14 rounded-lg bg-[#3563E9] text-white
                     relative flex items-center justify-start"
              >
                <div className="text-xl font-medium z-10 absolute flex">
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

              <div
                className="text-xl font-medium flex z-10 text-[#90A3BF]
                     hover:bg-blue-50 hover:rounded-md cursor-pointer"
              >
                <Image
                  src="/images/car-icon.png"
                  height={24}
                  width={24}
                  alt="Home"
                  className="ml-3 mr-2"
                />{" "}
                <p> Car Rent</p>
              </div>

              <div
                className="text-xl font-medium flex z-10 text-[#90A3BF]
                     hover:bg-blue-50 hover:rounded-md cursor-pointer"
              >
                <Image
                  src="/images/chart.png"
                  height={24}
                  width={24}
                  alt="Home"
                  className="ml-3 mr-2"
                />{" "}
                <p> Insight</p>
              </div>

              <div
                className="text-xl font-medium flex z-10 text-[#90A3BF]
                     hover:bg-blue-50 hover:rounded-md cursor-pointer"
              >
                <Image
                  src="/images/wallet.png"
                  height={24}
                  width={24}
                  alt="Home"
                  className="ml-3 mr-2"
                />{" "}
                <p> Reimburse</p>
              </div>

              <div
                className="text-xl font-medium flex z-10 text-[#90A3BF]
                     hover:bg-blue-50 hover:rounded-md cursor-pointer"
              >
                <Image
                  src="/images/message.png"
                  height={24}
                  width={24}
                  alt="Home"
                  className="ml-3 mr-2"
                />{" "}
                <p> Inbox</p>
              </div>

              <div
                className="text-xl font-medium flex z-10 text-[#90A3BF]
                     hover:bg-blue-50 hover:rounded-md cursor-pointer"
              >
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
          </li>

          <li className="flex flex-col space-y-7 mt-10">
            <p className="text-[#90A3BF] text-base ml-8">
              P R E F E R E N C E S
            </p>

            <div className="space-y-8">
              <div
                className="text-xl font-medium flex z-10 text-[#90A3BF]
                     hover:bg-blue-50 hover:rounded-md cursor-pointer"
              >
                <Image
                  src="/images/setting.png"
                  height={24}
                  width={24}
                  alt="Home"
                  className="ml-3 mr-2"
                />{" "}
                <p>Settings</p>
              </div>

              <div
                className="text-xl font-medium flex z-10 text-[#90A3BF]
                     hover:bg-blue-50 hover:rounded-md cursor-pointer"
              >
                <Image
                  src="/images/info.png"
                  height={24}
                  width={24}
                  alt="Home"
                  className="ml-3 mr-2"
                />{" "}
                <p> Help & Center</p>
              </div>

              <div
                className="text-xl font-medium flex z-10 text-[#90A3BF]
                     hover:bg-blue-50 hover:rounded-md cursor-pointer"
              >
                <Image
                  src="/images/briefcase.png"
                  height={24}
                  width={24}
                  alt="Home"
                  className="ml-3 mr-2"
                />{" "}
                <p> Dark Mode</p>
                <div
                  className="ml-6 bg-[#F6F7F9] rounded-full w-68px flex items-center justify-center
                       w-[68px] h-[34px] space-x-3"
                >
                  <div className="rounded-full bg-[#3563E9] h-7 w-7 flex items-center justify-center">
                    <Image
                      src="/images/sun.png"
                      height={16}
                      width={16}
                      alt="lightmode"
                    />
                  </div>
                  <Image
                    src="/images/moon.png"
                    height={14.96}
                    width={14.96}
                    alt="darkmode"
                  />
                </div>
              </div>
            </div>
          </li>

          <li className="flex mt-10 mb-6">
            <Link href="/">
              <div
                className="text-xl font-medium flex z-10 text-[#90A3BF]
                     hover:bg-blue-50 hover:rounded-md cursor-pointer hover:w-60"
              >
                <Image
                  src="/images/logout.png"
                  height={24}
                  width={24}
                  alt="Home"
                  className="ml-3 mr-2"
                />{" "}
                <p>LogOut</p>
              </div>
            </Link>
          </li>
        </ul>
      )}

      <div className="lg:flex items-center justify-between lg:space-x-10 lg:-mb-5 mt-5">
        {/* Logo */}
        <div className="flex lg:items-center lg:space-x-0 lg:ml-3 mt-1">
          <Link href="/" className="h-11">
            <Image src="/images/Logo.png" width={130} height={36} alt="Logo" />
          </Link>
        </div>

        {/* Search bar */}
        <div className="flex items-center justify-center space-x-5 lg:transform lg:-mt-2 mt-4">
          <div
            className="flex items-center justify-between w-[280px] lg:w-[420px] h-[36px]
         lg:rounded-full rounded-md ring-1 ring-[#C3D4E9] ring-opacity-70 
         px-4 relative"
          >
            <button>
              <Image
                src="/images/search-normal.png"
                height={24}
                width={24}
                alt="search"
              />
            </button>

            <input
              type="text"
              className="absolute bg-transparent lg:w-80 h-10 w-full
       placeholder:text-sm placeholder:text-[#596780] placeholder:font-medium placeholder:mx-4
       ml-10 border-0 border-transparent focus-visible:outline-none focus-visible:ring-0"
              placeholder="Search something here"
            />
          </div>
          <div
            className="rounded-md ring-1 ring-[#C3D4E9] ring-opacity-70
      h-10 w-9 flex items-center justify-center relative"
          >
            <button className="absolute">
              <Image
                src="/images/filter.png"
                height={24}
                width={24}
                alt="filter"
              />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

export { NavbarMobile, NavbarMobile2, Navbar2, Navbar3 };
