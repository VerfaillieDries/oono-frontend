import React from 'react';
/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import Image from 'next/image';

const navigation = [
  { name: 'Huisarten', href: '#huisartsen' },
  { name: 'Andere Diensten', href: '#' },
  { name: 'Contact', href: '#' },
];
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}
export default function Navbar() {
  return (
    <Disclosure
      as="nav"
      className=" w-9/10  mx-auto max-w-7xl z-50 fixed top-[40px] left-0 right-0  rounded-[16px] bg-white border-b-2 border-onoo_grey "
    >
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 ">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex items-center justify-between sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <div className="w-[270px] h-[48px] absolute block lg:hidden">
                    <Image
                      layout="fill"
                      src="/onoo_logo.png"
                      alt="Logo Onnoo Dokterspraktijken"
                    />
                  </div>
                  <Image
                    width={270}
                    height={48}
                    className="hidden lg:block h-8 w-auto"
                    src="/onoo_logo.png"
                    alt="Logo Onnoo Dokterspraktijken"
                  />
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          'px-3 py-2 rounded-md text-[16px] font-poppins font-medium '
                        )}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
