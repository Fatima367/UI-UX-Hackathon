import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white w-screen bottom-0">
      <div className="flex p-[80px]">
        <div className="space-y-[16px]">
          <Image src="/images/Logo.png" width={148} height={44} alt="Logo" />
          <p className="text-[16px] font-medium text-[#131313] opacity-60">
            Our vision is to provide convenience <br /> and help increase your
            sales business.
          </p>
        </div>

        <div
          className="lg:flex lg:flex-row lg:space-x-[80px] justify-between items-start grid grid-cols-1
         space-y-8 lg:space-y-0 ml-80"
        >
          <div className="flex flex-col space-y-[24px]">
            <h2 className="text-[20px] font-semibold text-[#1A202C]">About</h2>
            <div className="space-y-[16px]">
              <p className="text-[16px] font-medium text-[#131313] opacity-60">
                How it works
              </p>
              <p className="text-[16px] font-medium text-[#131313] opacity-60">
                Featured
              </p>
              <p className="text-[16px] font-medium text-[#131313] opacity-60">
                Partnership
              </p>
              <p className="text-[16px] font-medium text-[#131313] opacity-60">
                Bussiness Relation
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-[24px]">
            <h2 className="text-[20px] font-semibold text-[#1A202C]">
              Community
            </h2>
            <div className="space-y-[16px]">
              <p className="text-[16px] font-medium text-[#131313] opacity-60">
                Events
              </p>
              <p className="text-[16px] font-medium text-[#131313] opacity-60">
                Blog
              </p>
              <p className="text-[16px] font-medium text-[#131313] opacity-60">
                Podcast
              </p>
              <p className="text-[16px] font-medium text-[#131313] opacity-60">
                Invite a friend
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-[24px]">
            <h2 className="text-[20px] font-semibold text-[#1A202C]">About</h2>
            <div className="space-y-[16px]">
              <p className="text-[16px] font-medium text-[#131313] opacity-60">
                Discord
              </p>
              <p className="text-[16px] font-medium text-[#131313] opacity-60">
                Instagram
              </p>
              <p className="text-[16px] font-medium text-[#131313] opacity-60">
                Twitter
              </p>
              <p className="text-[16px] font-medium text-[#131313] opacity-60">
                Facebook
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*Copyright Section*/}

      <div className="mx-[60px] h-[1px] bg-[#131313] opacity-20"> </div>

      <div
        className="flex flex-row items-stretch 
            justify-between p-[25px] mx-[70px]"
      >
        <p className="text-[16px] font-semibold text-[#1A202C]">
          ©2022 MORENT. All rights reserved
        </p>
        <div className="space-x-[24px] flex items-center justify-center">
          <p className="text-[16px] font-semibold text-[#1A202C]">
            Privacy Policy{" "}
          </p>
          <p className="text-[16px] font-semibold text-[#1A202C]">
            Terms & Condition{" "}
          </p>
        </div>
      </div>
    </footer>
  );
}
