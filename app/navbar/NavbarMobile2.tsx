import Image from "next/image";
import Link from "next/link";

export default function NavbarMobile2() {
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
}
