'use client'
import React, { useState } from 'react';
import { FaBars, FaTimes, FaRegUserCircle, FaTooth } from 'react-icons/fa';
import { FaHouse, FaAddressCard } from "react-icons/fa6";
import Link from 'next/link';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuOpenHeight, setMenuOpenHeight] = useState('h-20');
  const offsetValue = -1000; // desplazar no funciona

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setTimeout(() => {
      setMenuOpenHeight(menuOpen ? 'h-20' : 'h-auto');
    }, 0);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 flex flex-col md:flex-row justify-between items-center min-w-full bg-secondary-card text-primary-seccion p-4 transition-height duration-200 ease-in-out ${menuOpenHeight}`}>
      <div className={`flex items-center transition-all w-full ${menuOpen ? 'pb-4 md:pb-0' : ''}`}>
        <Link href="/portada">
          <h1 className="text-2xl text-gray-800 whitespace-nowrap">QUEVEDO<b>DENTAL</b> Docs</h1>
        </Link>
        <div className="flex-grow" />
        <div className={`md:hidden ${menuOpen ? 'hidden' : ''}`}>
          <button
            className="focus:outline-none"
            onClick={toggleMenu}
          >
            <FaBars size={30} />
          </button>
        </div>
      </div>
      <div className={`md:flex md:items-center ${menuOpen ? 'flex flex-col' : 'hidden'}`}>
        <nav className="md:hidden">
          <ul className="flex flex-col space-y-4 p-4 justify-start">
            <li className="text-left hover:scale-125 transition-transform flex items-center justify-start">
              <FaTooth className="mr-1" />
              <Link href="/reporte" scroll={true} offset={offsetValue}>Reporte</Link>
            </li>
            <li className="text-left hover:scale-125 transition-transform flex items-center justify-start">
              <FaRegUserCircle className="mr-1" />
              <Link href="/instalacion" scroll={true} offset={offsetValue}>Instalacion</Link>
            </li>
            <li className="text-left hover:scale-125 transition-transform flex items-center justify-start">
              <FaAddressCard className="mr-1" />
              <Link href="/manualusuario" scroll={true} offset={offsetValue}>ManualPaciente</Link>
            </li>
            <li className="text-left hover:scale-125 transition-transform flex items-center justify-start">
              <FaAddressCard className="mr-1" />
              <Link href="/manualuso" scroll={true} offset={offsetValue}>ManualDoctor</Link>
            </li>
          </ul>
        </nav>
        <div className="hidden md:flex md:items-center justify-start font-sans p-2">
          <ul className="md:flex md:space-x-4 whitespace-nowrap">
            <li className="transition-transform transform hover:scale-105 flex items-center justify-start">
              <Link href="/reporte" scroll={true} offset={offsetValue}>Reporte</Link>
            </li>
            <li className="transition-transform transform hover:scale-105 flex items-center justify-start">
              <Link href="/instalacion" scroll={true} offset={offsetValue}>Instalacion</Link>
            </li>
            <li className="transition-transform transform hover:scale-105 flex items-center justify-start">
              <Link href="/manualusuario" scroll={true} offset={offsetValue}>ManualPaciente</Link>
            </li>
            <li className="transition-transform transform hover:scale-105 flex items-center justify-start">
              <Link href="/manualuso" scroll={true} offset={offsetValue}>ManualDoctor</Link>
            </li>
          </ul>
        </div>
      </div>
      {menuOpen && (
        <div className="absolute top-0 right-0 m-4 md:hidden">
          <button
            className="focus:outline-none"
            onClick={toggleMenu}
          >
            <FaTimes size={30} />
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
