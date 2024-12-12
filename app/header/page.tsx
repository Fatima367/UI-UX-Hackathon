import Image from "next/image";

export default function Header() {
  return (
    <header className="hidden md:mx-[32px] md:mt-0 md:visible md:block">
      <div className="flex items-center justify-between md:-mb-14 md:mt-2 ">
        <div className="flex space-x-3 items-center">
        <Image src="/images/command.png" height={24} width={24} alt="command" />
        <h2 className="font-bold text-[24px]">
          High Fidelity Dashboard - Detail Car
        </h2>
        </div>
        <div className="flex space-x-2">
          <p className="text-[16px] font-medium text-[#666666]">Last Updated:</p>
          <p className="text-[16px] font-bold -ml-10">8 Aug 2022</p>
        </div>
      </div>
    </header>
  );
}
