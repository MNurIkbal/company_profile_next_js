'use client'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'About', href: '/about', current: false },
  { name: 'Service', href: '/service', current: false },
  { name: 'Portfolio', href: '/portfolio', current: false },
  { name: 'Kontak', href: '/kontak', current: false },
]

const logoimage = "M 25 3 C 22.089763 3 19.426171 4.6219485 18.101562 7.2109375 C 18.101562 7.2109375 18.101562 7.2128906 18.101562 7.2128906 C 18.100721 7.2145406 18.098456 7.2151469 18.097656 7.2167969 C 14.362181 14.470691 11.153754 20.806968 8.8125 25.537109 C 7.6414743 27.902985 6.687023 29.865615 5.9882812 31.351562 C 5.2895395 32.837511 4.8852246 33.690051 4.6484375 34.445312 L 4.6464844 34.451172 L 4.6445312 34.455078 C 4.3882597 35.286653 4.0507813 36.398902 4.0507812 37.710938 C 4.050775 42.817736 8.2464268 47 13.359375 47 C 19.155308 47 23.13514 42.379741 25 40.246094 C 26.863773 42.378622 30.84408 47 36.640625 47 C 41.753573 47 45.949219 42.817041 45.949219 37.710938 C 45.949219 36.400725 45.611269 35.290244 45.357422 34.462891 L 45.355469 34.457031 L 45.353516 34.451172 C 45.116766 33.696932 44.710766 32.842025 44.011719 31.355469 C 43.312672 29.868912 42.358775 27.905437 41.1875 25.539062 C 38.845946 20.808326 35.636451 14.471917 31.900391 7.2167969 L 31.896484 7.2089844 C 30.573258 4.6215238 27.909692 3 25 3 z M 25 7 C 26.501366 7 27.663733 7.7112326 28.337891 9.0332031 L 28.339844 9.0371094 L 28.341797 9.0410156 C 32.072698 16.286027 35.273612 22.609248 37.601562 27.3125 C 38.765538 29.664126 39.712688 31.612775 40.392578 33.058594 C 41.070992 34.501273 41.51864 35.591444 41.535156 35.642578 C 41.766356 36.396981 41.949219 37.142801 41.949219 37.710938 C 41.949219 40.640833 39.589677 43 36.640625 43 C 33.058397 43 29.288603 39.125076 27.574219 37.181641 L 27.570312 37.177734 L 27.564453 37.171875 C 29.414381 34.870802 32.5 30.815064 32.5 26.285156 C 32.5 22.24174 29.075312 19 25 19 C 20.924688 19 17.5 22.24174 17.5 26.285156 C 17.5 30.821724 20.585713 34.874909 22.433594 37.171875 L 22.429688 37.175781 L 22.425781 37.181641 C 20.71032 39.126116 16.941603 43 13.359375 43 C 10.410323 43 8.0507812 40.642105 8.0507812 37.710938 C 8.0507812 37.139669 8.2326858 36.397306 8.4648438 35.642578 C 8.4785567 35.598838 8.9298042 34.499865 9.609375 33.054688 C 10.288946 31.60951 11.234712 29.661671 12.398438 27.310547 C 14.725886 22.608298 17.926351 16.285977 21.65625 9.0429688 L 21.658203 9.0390625 L 21.660156 9.0371094 C 22.336573 7.7118248 23.498634 7 25 7 z M 25 23 C 26.990688 23 28.5 24.498572 28.5 26.285156 C 28.5 28.42415 26.577097 31.630372 24.998047 33.798828 C 23.4206 31.634253 21.5 28.434819 21.5 26.285156 C 21.5 24.498572 23.009312 23 25 23 z";
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-light-blue-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                <svg className='h-8 w-auto '  xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
<path d={logoimage}></path>
</svg>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 font-extrabold text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Pengaturan
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Login
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
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
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
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
