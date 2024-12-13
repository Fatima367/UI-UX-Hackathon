import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      className="box-border bg-white border border-[#C3D4E9] mt-0 md:mt-16
      border-opacity-40 p-6 md:p-5 flex flex-col md:flex-row md:items-start 
      md:justify-between items-center justify-center h-auto relative"
    >
      <div className="flex items-center justify-between space-x-10 -mb-5">
        {/* Logo */}
        <div className="flex md:items-center md:space-x-0 ml-3 mt-1">
          <Link href="/" className="h-[44px]">
            <Image src="/images/Logo.png" width={130} height={36} alt="Logo" />
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
        <div className="flex items-center justify-center space-x-5 md:transform md:-mt-2 mt-4">
          <div
            className="flex items-center justify-between w-[280px] md:w-[420px] h-[36px]
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
              className="absolute bg-transparent md:w-[450px] h-10
       placeholder:text-[14px] placeholder:text-[#596780] placeholder:font-medium placeholder:mx-4
       ml-10 border-0 border-transparent focus-visible:outline-none focus-visible:ring-0"
              placeholder="Search something here"
            />

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
      h-10 w-9 flex items-center justify-center relative"
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
      </div>

      {/* Profile and Notification */}
      <div className="md:items-center gap-5 mt-4 md:mt-0 md:ml-0 ml-5 md:mr-4 md:flex hidden">
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
}
