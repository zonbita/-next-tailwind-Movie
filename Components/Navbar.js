import Link from "next/link";
import Image from "next/image";
import React, { useRef, useEffect } from 'react';
const Navbar = () => {
  const headerRef = useRef(null);
  useEffect(() => {
    const shrinkHeader = () => {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            headerRef.current.classList.add('shrink');
        } else {
            headerRef.current.classList.remove('shrink');
        }
    }
    window.addEventListener('scroll', shrinkHeader);
    return () => {
        window.removeEventListener('scroll', shrinkHeader);
    };
}, []);
  return (
    <nav ref={headerRef} className="fixed-top background-color  h-40">
      <div className="font-bold text-neutral-100 max-w-7xl mx-auto container">
        <Link href="/">
          <Image className=" cursor-pointer" src='/logo.png' width={120} height={110} alt='logo'/>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;