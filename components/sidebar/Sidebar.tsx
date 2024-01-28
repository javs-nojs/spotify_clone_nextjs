'use client';

import { useMemo } from 'react';
import { usePathname } from 'next/navigation';

import Link from 'next/link';
import Image from 'next/image';

import { HiHome } from 'react-icons/hi';
import { BiSearch, BiCollection } from 'react-icons/bi';
import { FiPlus } from 'react-icons/fi';
import { PiMusicNotesPlusLight } from 'react-icons/pi';

export default function Sidebar() {
  const pathname = usePathname();

  const routes = useMemo(
    () => [
      {
        label: 'Home',
        icon: HiHome,
        active: pathname !== '/search',
        href: '/',
      },
      {
        label: 'Search',
        icon: BiSearch,
        active: pathname === '/search',
        href: '/search',
      },
    ],
    [pathname]
  );

  return (
    <aside className='w-64 flex flex-col gap-y-3 h-full p-2'>
      <section>
        <Image
          src='/SpotifyLogo.png'
          alt='lOGO'
          width={500}
          height={500}
          className='h-9 w-auto py-2 px-5'
        />

        <ul className='px-5'>
          {routes.map(({ label, icon: Icon, active, href }) => (
            <Link
              key={label}
              href={href}
              className={`flex flex-row items-center gap-x-2 py-2 text-base font-semibold hover:text-white transition duration-150 text-neutral-400 ${
                active && 'text-white'
              }`}
            >
              <Icon size={26} />

              {label}
            </Link>
          ))}
        </ul>
      </section>

      <section className='overflow-y-auto h-full mt-5'>
        <div className='flex justify-between items-center  px-5'>
          <div className='flex items-center gap-x-1 text-neutral-400 hover:text-white transition duration-150'>
            <BiCollection size={26} />
            <span className='text-base'>Your Library</span>
          </div>

          <FiPlus />
        </div>
      </section>
    </aside>
  );
}
