'use client';

import Image from 'next/image';

import { FaPlay } from 'react-icons/fa6';

type SongItemsProps = {
  name?: string;
  image: string;
  description?: string;
};

export default function SongItems({
  name,
  image,
  description,
}: SongItemsProps) {
  return (
    <div className='flex group flex-col w-48 rounded-md cursor-pointer bg-neutral-100/10 hover:bg-neutral-100/20 transition duration-150 gap-x-5'>
      <div className='p-5'>
        <figure className='relative w-full h-40 p-3 group'>
          <Image src={image} alt='Song' fill />

          <figcaption className='absolute'>
            <Image src='/logo.png' alt='Logo' width={20} height={20} />
          </figcaption>

          <FaPlay className='absolute bottom-0 right-0 h-10 w-auto text-black p-2 bg-emerald-500 rounded-full transition duration-200 group-hover:opacity-100 group-hover:bottom-3 group-hover:right-3 group-hover:scale-100 scale-75 opacity-0' />
        </figure>

        <div className='flex flex-col mt-3'>
          <h2 className='text-xl font-bold'>{name}</h2>

          <p className='text-sm'>{description}</p>
        </div>
      </div>
    </div>
  );
}
