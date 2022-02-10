import React, { useState } from 'react';
/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { BellIcon, MenuIcon, PhoneIcon, XIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import OnooLogo from '@components/logos/OnooLogo';
import Button from '@components/buttons/Button';
import ButtonLink from '@components/buttons/ButtonLink';
import { Color } from 'styles/styleEnums';
import ButtonPhone from '@components/buttons/ButtonPhone';
import HamburgerIcon from '@components/logos/Hamburger';
import CloseIcon from '@components/logos/CloseIcon';

const navigation = [
  { name: 'Huisartsen', href: '#huisartsen' },
  { name: 'Andere Diensten', href: '#' },
  { name: 'Contact', href: '#' },
];
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}
export default function Navbar2() {
  const [open, SetOpen] = useState(false);
  return (
    <nav className=" z-100 border md:border-0 shadow-[0_10px_30px_10px_rgba(0,0,0,0.05)] px-[40px] bg-white h-[60px] md:h-[60px] lg:h-[111px]  lg:fixed md:top-[40px] w-full xl:w-4/5 mx-auto max-w-7xl lg:left-0 lg:right-0 rounded-2xl flex items-center justify-between">
      {/* LOGO */}
      <a href="/">
        <div className=" w-[135px] flex justify-center ite  sm:w-[270px] h-[24px] sm:h-[48px] relative">
          <OnooLogo />
        </div>
      </a>
      {/* Navitems */}
      <div className="lg:flex flex-row justify-evenly  hidden">
        {navigation.map((item) => (
          <a
            className="text-lg text-onoo_blue font-medium text-onoo_black font-poppins py-[8px] px-[16px]"
            href={item.href}
          >
            {item.name}
          </a>
        ))}
        <div className="ml-2">
          <ButtonPhone
            buttonText="014/ 22 22 00"
            color={Color.BLUE}
            phoneNumber="003214222200"
          />
        </div>
      </div>
      <div className="flex lg:hidden">
        {open ? (
          <div onClick={() => SetOpen(false)}>
            <CloseIcon />{' '}
          </div>
        ) : (
          <div onClick={() => SetOpen(true)}>
            <HamburgerIcon></HamburgerIcon>
          </div>
        )}

        {open && (
          <div className="z-101 absolute top-[62px]  left-0 right-0 h-full w-full bg-white ">
            <div className=" h-screen flex flex-col justify-center items-center">
              <h3 className="text-onoo_blue text-[26px] font-medium py-4">
                Huisartsen
              </h3>
              <h3 className="text-onoo_blue text-[26px] font-medium py-4">
                Andere Diensten
              </h3>
              <h3 className="text-onoo_blue text-[26px] font-medium py-4">
                Contact
              </h3>

              <div className=" flex flex-col items-center justify-self-end">
                <a className="text-center text-onoo_blue text-[22px] font-medium py-4">
                  Wachtdienst
                </a>
                <ButtonPhone
                  color={Color.BLUE}
                  buttonText="014/22 22 00"
                  phoneNumber="003214222200"
                ></ButtonPhone>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
