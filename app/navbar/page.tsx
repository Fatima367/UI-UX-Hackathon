import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      className="box-border w-screen bg-white border border-[#C3D4E9] mt-0 md:mt-16
      border-opacity-40 p-6 md:p-[30px] flex flex-col md:flex-row md:items-start 
      md:justify-between items-center justify-center h-auto relative"
    >
      {/* Logo */}
      <div className="flex md:items-center md:space-x-0 space-x-36">
        <Link href="/" className="h-[44px]">
          <Image src="/images/Logo.png" width={148} height={44} alt="Logo" />
        </Link>

        <button>
          <Image
            src="/images/Image.png"
            height={44}
            width={44}
            alt="profile"
            className="lg:hidden block"
          />
        </button>
      </div>

      {/* Search bar */}
      <div
        className="flex items-center justify-center space-x-5
      md:left-1/2 md:-translate-x-44 md:transform md:-mt-1 mt-4"
      >
        <div
          className="flex items-center justify-between w-[280px] md:w-[492px] h-[44px]
         lg:rounded-full rounded-md ring-1 ring-[#C3D4E9] ring-opacity-70 
         px-4"
        >
          <button>
            <Image
              src="/images/search-normal.png"
              height={24}
              width={24}
              alt="search"
            />
          </button>
          <p className="text-[14px] font-medium text-[#596780] mx-4">
            Search something here
          </p>
          <button>
            <Image
              src="/images/filter.png"
              height={24}
              width={24}
              alt="filter"
              className="hidden md:flex"
            />
          </button>
        </div>
        <div
          className=" rounded-md ring-1 ring-[#C3D4E9] ring-opacity-70 md:hidden
      h-10 w-9 flex items-center justify-center"
        >
          <button>
            <Image
              src="/images/filter.png"
              height={24}
              width={24}
              alt="filter"
              className="block md:hidden"
            />
          </button>
        </div>
      </div>

      {/* Profile and Notification */}
      <div className="md:items-center gap-5 mt-4 md:mt-0 md:ml-0 ml-5 md:mr-4 md:flex hidden">
        <div
          className="w-11 h-11 flex-none rounded-full ring-1 ring-[#C3D4E9] ring-opacity-40 
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

        <div
          className="w-11 h-11 flex-none rounded-full ring-1 ring-[#C3D4E9] ring-opacity-40 
          flex items-center justify-center"
        >
          <button>
            <Image
              src="/images/notification.png"
              height={24}
              width={24}
              alt="notification"
            />
          </button>
        </div>

        <div
          className="w-11 h-11 flex-none rounded-full ring-1 ring-[#C3D4E9] ring-opacity-40 
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

        <div
          className="w-11 h-11 flex-none rounded-full ring-1 ring-[#C3D4E9] ring-opacity-40 
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
      </div>
    </nav>
  );
}
