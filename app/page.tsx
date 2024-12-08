import Image from "next/image";

export default function Home() {
  return (
  <main className="bg-[#F6F7F9] w-screen">
    <div className="flex flex-col items-start justify-between px-[64px]">

  {/*Hero Section*/}

  <div className="flex space-x-[32px] items-start justify-between mt-8">
   
   <div className="rounded-[10px]  object-cover w-[640px] h-[360px]">
    <Image src="/images/Ads 1.png" height={360} width={640} alt="Ad 1" />

    <div className="flex flex-col space-y-[16px] z-10 ml-6 text-white -mt-80">
        <h2 className="text-[32px] font-semibold">The Best Platform <br /> for Car Rental</h2>
        <p className="text-[16px] font-medium">Ease of doing a car rental safely and  <br /> reliably.
           Of course at a low price.</p>

           <button className="rounded space-x-2 px-5 bg-[#3563E9] text-[16px] font-medium text-white
           h-[44px] w-[120px]">
            Rental Car
           </button>
    </div>

    <Image src="/images/image 7.png" height={108} width={340} alt="car-image" className="z-50
    ml-[150px] mb-10 -mt-4" />
       </div>
   
   <div className="rounded-[10px] object-cover w-[640px] h-[360px]">
    <Image src="/images/Ads 2.png" height={360} width={640} alt="Ad 2" />

    <div className="flex flex-col space-y-[16px] z-10 ml-6 text-white -mt-80">
        <h2 className="text-[32px] font-semibold">The Best Platform <br /> for Car Rental</h2>
        <p className="text-[16px] font-medium">Providing cheap car rental services <br />
           and safe and comfortable facilities.</p>

           <button className="rounded space-x-2 px-5 bg-[#54A6FF] text-[16px] font-medium text-white
           h-[44px] w-[120px]">
            Rental Car
           </button>
    </div>

    <Image src="/images/image 8.png" height={108} width={340} alt="car-image" className="z-50
    ml-[190px] mb-10 -mt-5" />
    
   </div>

  </div>



   <div className="flex space-x-11 mt-[68px] mb-[72px]">


     <div className="rounded-[10px] bg-white">

      <div className="flex space-x-2">
        <div className="h-2 w-2 bg-[#3563E9] rounded-full"></div>
      <p className="text-[#1A202C] text-[16px] font-semibold">Pick - Up</p>
      </div>

     </div>
     
     <button>
     <div className="h-[60px] w-[60px] bg-[#3563E9] bg-opacity-[28px] flex items-center justify-center
     rounded-md">
        <Image src="/images/Swap.png" height={24} width={24} alt="Swap"/>
     </div>
     </button>


     <div></div>

   </div>

  {/*--------------------------------------------------------------------------------------------------------*/}

    </div>
  </main>

  );
}
