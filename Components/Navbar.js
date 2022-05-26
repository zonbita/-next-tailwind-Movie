import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return (
    <nav className="background-color">
      <div className="font-bold text-neutral-100 p-1 max-w-7xl mx-auto container">
        <Link href="/">
          <Image className=" cursor-pointer" src='/logo.png' width={70} height={60} alt='logo'/>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;