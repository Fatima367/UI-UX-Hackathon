import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="box-border w-screen bg-white border border-[#C3D4E9] mt-0 md:mt-16
      border-opacity-40 p-4 md:p-[30px] flex flex-col md:flex-row items-start justify-between h-auto relative">

      {/* Logo */}
      <div className="flex items-center md:ml-0 ml-20">
        <Image src="/images/Logo.png" width={148} height={44} alt="Logo" />
      </div>

      {/* Search bar */}
      <div className="flex items-center justify-between w-full md:w-[492px] h-[44px] rounded-full ring-1 ring-[#C3D4E9] ring-opacity-70 
        md:absolute md:left-1/2 md:transform md:-translate-x-1/2 mt-4 md:mt-0 px-4">
        <button>
          <Image src="/images/search-normal.png" height={24} width={24} alt="search" />
        </button>
        <p className="text-[14px] font-medium text-[#596780] mx-4">Search something here</p>
        <button>
          <Image src="/images/filter.png" height={24} width={24} alt="filter" />
        </button>
      </div>

      {/* Profile and Notification */}
      <div className="flex items-center gap-5 mt-4 md:mt-0 md:ml-0 ml-5">
        <div className="w-11 h-11 flex-none rounded-full ring-1 ring-[#C3D4E9] ring-opacity-40 
          flex items-center justify-center">
          <button>
            <Image src="/images/heart.png" height={24} width={24} alt="search" />
          </button>
        </div>

        <div className="w-11 h-11 flex-none rounded-full ring-1 ring-[#C3D4E9] ring-opacity-40 
          flex items-center justify-center">
          <button>
            <Image src="/images/notification.png" height={24} width={24} alt="notification" />
          </button>
        </div>

        <div className="w-11 h-11 flex-none rounded-full ring-1 ring-[#C3D4E9] ring-opacity-40 
          flex items-center justify-center">
          <button>
            <Image src="/images/setting-2.png" height={24} width={24} alt="settings" />
          </button>
        </div>

        <div className="w-11 h-11 flex-none rounded-full ring-1 ring-[#C3D4E9] ring-opacity-40 
          flex items-center justify-center">
          <button>
            <Image src="/images/Image.png" height={44} width={44} alt="profile" />
          </button>
        </div>
      </div>

    </nav>
  );
};
