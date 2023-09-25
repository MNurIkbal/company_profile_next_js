'use client'
import { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'About', href: '/page/about', current: false },
  { name: 'Portfolio', href: '/page/ortfolio', current: false },
  { name: 'Kontak', href: '/page/kontak', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
      <Disclosure as="nav" className={` navbar fixed w-full  box-content shadow-lg z-50 ${scrolled ? 'scrolled' : ''}`}>
      {({ open }) => (
        <>
          <div className='ml-5 mr-5'>
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="relative inline-flex mt-7 items-center justify-center rounded-md p-2 text-white hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="grid-sistem-navbar "  style={{ marginTop: scrolled ? '5px' : '35px' }}>
                <div className='justify-start imgt'>
                  <Image src='/assets/img/satu.png' width={30} height={30} alt='ok' />
                </div>
                <div className='justify-center  flex items-center'>
                  <div className="hidden  sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current ? 'bg-blue-900 font-extrabold text-white' : 'text-white font-bold hover:bg-blue-400 hover:text-white',
                            'rounded-md px-3 py-2 text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}>
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className='flex justify-end'>
                  <button type="button" className="text-white bg-gradient-to-r hover:bg-gradient-to-br focus:ring-4 focus:outline-none outline font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-1 mb-1" style={{ backgroundColor: '#3D246C' }}>Login</button>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-black hover:bg-blue-400 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure> 
  )
}
