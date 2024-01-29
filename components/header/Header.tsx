'use client';

import { useMemo } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Link from 'next/link';

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();

  const routes = useMemo(
    () => [
      {
        label: 'Premium',
        active: pathname === '/premium',
        href: '/',
      },
      {
        label: 'Suport',
        active: pathname === '/suport',
        href: '/search',
      },
      {
        label: 'Download',
        active: pathname === '/download',
        href: '/search',
      },
    ],
    [pathname]
  );

  return (
    <header className='sticky w-[calc(100vw-16rem)] z-10 px-5 py-3'>
      <nav className='flex justify-between items-center'>
        <div className='flex gap-x-2 items-center'>
          <button
            onClick={() => router.back()}
            className='hover:rounded-full flex items-center justify-center hover:bg-neutral-700 transition duration-150'
          >
            <IoIosArrowBack size={20} />
          </button>

          <button
            onClick={() => router.forward()}
            className='hover:rounded-full flex items-center justify-center hover:bg-neutral-700 transition duration-150'
          >
            <IoIosArrowForward size={20} />
          </button>
        </div>

        <ul className='flex gap-x-3 items-center text-neutral-400'>
          <li className='flex gap-x-2 text-base items-center border-r-2 border-neutral-400 pr-3'>
            {routes.map(({ label, active, href }) => (
              <Link
                key={label}
                href={href}
                className={`hover:text-white transition duration-150`}
              >
                {label}
              </Link>
            ))}
          </li>

          <>
            <Link
              href='/register'
              className='hover:text-white transition duration-150'
            >
              Sign up
            </Link>
            <Link
              href='/login'
              className='px-5 py-[0.4rem] rounded-full bg-white text-black font-semibold hover:scale-105 transition duration-150'
            >
              Log in
            </Link>
          </>
        </ul>
      </nav>
    </header>
  );
}
