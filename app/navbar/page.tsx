import Image from "next/image";

export default function Navbar() {

    return(
    <nav className="box-border w-screen ml-0 mt-0 bg-white border border-[#C3D4E9] 
    border-opacity-40 p-[30px] flex items-start justify-between">


     {/*Logo*/}
     <Image src="/images/Logo.png" width={148} height={44} alt="Logo"/>


     {/*Search bar*/}
     <div className="absolute w-[492px] h-[44px] ml-[272px] rounded-full ring-1 ring-[#C3D4E9] ring-opacity-70
     flex items-center justify-center">
            
         <button>   
         <Image src="/images/search-normal.png" height={24} width={24} alt="search"/>
         </button>

         <p className="text-[14px] font-medium text-[#596780] ml-4">Search something here</p>

          <button>
         <Image src="/images/filter.png" height={24} width={24} alt="filter" className="ml-60"/>
         </button>
     </div>
     
     
     
     
     {/*Profile and Notification*/}
     <div className="flex flex-row items-start p-0 gap-5 w-[236px] h-[44px] ml-[800px] ">
     
     <div className="w-11 h-11 flex-none order-0 flex-grow-0 rounded-full ring-1 ring-[#C3D4E9] ring-opacity-40
                     flex items-center justify-center">
        <button>
        <Image src="/images/heart.png" height={24} width={24} alt="search"/>
        </button>

     </div>
     
     
     <div className="w-11 h-11 flex-none order-0 flex-grow-0 rounded-full ring-1 ring-[#C3D4E9] ring-opacity-40
                     flex items-center justify-center">
        <button>
        <Image src="/images/notification.png" height={24} width={24} alt="search"/>
        </button>

     </div>

     
     <div className="w-11 h-11 flex-none order-0 flex-grow-0 rounded-full ring-1 ring-[#C3D4E9] ring-opacity-40
                     flex items-center justify-center">
        <button>
        <Image src="/images/setting-2.png" height={24} width={24} alt="search"/>
        </button>

     </div>

     
     <div className="w-11 h-11 flex-none order-0 flex-grow-0 rounded-full ring-1 ring-[#C3D4E9] ring-opacity-40
                     flex items-center justify-center">
        <button>
        <Image src="/images/Image.png" height={44} width={44} alt="search"/>
        </button>

     </div>

     </div>

    </nav>
    )
};