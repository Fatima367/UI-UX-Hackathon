import Image from "next/image";

export default function Header() {
  return (
    <header className="hidden md:mx-[32px] md:mt-0 md:visible md:block">
      <div className="flex items-center justify-between md:space-x-auto md:-mb-12 md:mt-3 ">
        <Image src="/images/command.png" height={24} width={24} alt="command" />
        <h2 className="font-bold text-[28px] md:mr-[550px]">
          High Fidelity Dashboard - Detail Car
        </h2>
        <div className="flex space-x-2">
          <p className="text-lg font-medium text-[#666666]">Last Updated:</p>
          <p className="text-lg font-bold -ml-12">8 Aug 2022</p>
        </div>
      </div>
    </header>
  );
}
