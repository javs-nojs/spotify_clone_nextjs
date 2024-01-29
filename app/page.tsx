import SongItems from '@/components/song-item/SongItems';

export default function Home() {
  return (
    <main className='bg-gradient-to-b from-neutral-700/60 via-black to-black px-5'>
      <div className='flex items-center justify-between pt-2 pb-12'>
        <h4 className='text-3xl font-bold'>Spotify playlist</h4>
        <button className='text-base hover:underline transition'>
          Show all
        </button>
      </div>

      <div className='grid grid-cols-7 gap-5 overflow-hidden overflow-y-scroll'>
        <SongItems name='Mukti' image='/song.jpeg' description='indah sekali' />
        <SongItems name='Mukti' image='/song.jpeg' description='indah sekali' />
        <SongItems name='Mukti' image='/song.jpeg' description='indah sekali' />
        <SongItems name='Mukti' image='/song.jpeg' description='indah sekali' />
        <SongItems name='Mukti' image='/song.jpeg' description='indah sekali' />
        <SongItems name='Mukti' image='/song.jpeg' description='indah sekali' />
        <SongItems name='Mukti' image='/song.jpeg' description='indah sekali' />
        <SongItems name='Mukti' image='/song.jpeg' description='indah sekali' />
        <SongItems name='Mukti' image='/song.jpeg' description='indah sekali' />
        <SongItems name='Mukti' image='/song.jpeg' description='indah sekali' />
        <SongItems name='Mukti' image='/song.jpeg' description='indah sekali' />
        <SongItems name='Mukti' image='/song.jpeg' description='indah sekali' />
        <SongItems name='Mukti' image='/song.jpeg' description='indah sekali' />
        <SongItems name='Mukti' image='/song.jpeg' description='indah sekali' />
        <SongItems name='Mukti' image='/song.jpeg' description='indah sekali' />
        <SongItems name='Mukti' image='/song.jpeg' description='indah sekali' />
        <SongItems name='Mukti' image='/song.jpeg' description='indah sekali' />
        <SongItems name='Mukti' image='/song.jpeg' description='indah sekali' />
        <SongItems name='Mukti' image='/song.jpeg' description='indah sekali' />
        <SongItems name='Mukti' image='/song.jpeg' description='indah sekali' />
        <SongItems name='Mukti' image='/song.jpeg' description='indah sekali' />
        <SongItems name='Mukti' image='/song.jpeg' description='indah sekali' />
        <SongItems name='Mukti' image='/song.jpeg' description='indah sekali' />
        <SongItems name='Mukti' image='/song.jpeg' description='indah sekali' />
        <SongItems name='Mukti' image='/song.jpeg' description='indah sekali' />
        <SongItems name='Mukti' image='/song.jpeg' description='indah sekali' />
        <SongItems name='Mukti' image='/song.jpeg' description='indah sekali' />
        <SongItems name='Mukti' image='/song.jpeg' description='indah sekali' />
      </div>
    </main>
  );
}
