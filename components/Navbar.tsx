"use client";
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'

const overlayStyles = {
  position: 'fixed', // Set the position to 'fixed'
  top: '100px',
  left: 0,
  width: '100%',
  height: 'calc(100% - 100px)',
  background: 'rgba(0, 0, 0, 0.5)',
  backdropFilter: 'blur(5px)',
  zIndex: 999,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const navVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1 } },
};

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`py-8 relative`}
    >
      <div className="flex-between mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16">
        <Link href="/">
          <Image src='/logo.svg' width={55} height={40} alt='LabApp Logo' />
        </Link>
        <div className="flex gap-x-6">
      <a href="https://twitter.com/LabAppDigital">
            <Image
              src="/twitter-500.svg"
              alt="Twitter"
              width={30}
              height={30}
              loading="lazy"
            />
          </a>
          <a href="https://t.me/LabAppDigital">
            <Image
              src="/telegram-500.svg"
              alt="Telegram"
              width={30}
              height={30}
              loading="lazy"
            />
          </a>
          <a href="https://github.com/labappdigital">
            <Image
              src="/github-500.svg"
              alt="GitHub"
              width={30}
              height={30}
              loading="lazy"
            />
          </a>
      </div>
        {isMobile ? (
          <div className="w-[24px] h-[24px] object-contain" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? (
              <Image 
              src="/close-menu.svg"
              width={30}
              height={30}
              alt="Close"
              />
            ) : (
              <Image 
              src="/hamburger-menu.svg"
              width={30}
              height={30}
              alt="Open"
              />
            )}
          </div>
        ) : (

        <ul className="flex-center gap-x-3 max-md:hidden md:gap-x-10">
          <li className="body-text !font-normal">
            <Link
              href="./"
            >
              Home
            </Link>
          </li>   
          <li className="body-text text-gradient_blue-purple !font-bold">
            <Link
              href="/projects"
            >
              Projects
            </Link>
          </li>
          <li className="body-text !font-normal">
            <Link
              href="/contact"
            >
              Contact
            </Link>
          </li>
            <button
              className="gradient_blue-purple whitespace-nowrap rounded-lg px-8 py-2.5 capitalize text-white"
            >
              <a href="https://t.me/RaoWay" target="_blank" rel="noopener noreferrer">SPEAK WITH US</a>
            </button>
        </ul>
        )}
      </div>
      {isMobile && mobileMenuOpen && (
        <div style={overlayStyles} onClick={closeMobileMenu}>
        <div className="flex flex-col items-center rounded-md bg-black-200 text-white p-4 shadow-lg sm:w-[90%] w-full">
        <span className="body-text !font-normal pb-2">
            <Link
              href="./"
            >
              Home
            </Link>
          </span>   
          <span className="body-text text-gradient_blue-purple !font-bold pb-2 pt-2">
            <Link
              href="/projects"
            >
              Projects
            </Link>
          </span>
          <span className="body-text !font-normal pb-5 pt-2">
            <Link
              href="/contact"
            >
              Contact
            </Link>
          </span>
          <button
              className="gradient_blue-purple whitespace-nowrap rounded-lg px-8 py-2.5 capitalize text-white"
            >
              <a href="https://t.me/RaoWay" target="_blank" rel="noopener noreferrer">SPEAK WITH US</a>
          </button>
        </div>
      </div>
      )}
    </motion.nav>
  )
}

export default Navbar
