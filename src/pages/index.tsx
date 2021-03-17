import Head from 'next/head';
import { useEffect } from 'react';
import ServerColumn from '../components/ServerColumn';
import ChannelColumn from '../components/ChannelColumn';

export default function Home() {
  useEffect(() => {
    document.addEventListener('contextmenu', (e) => {
      e.preventDefault();
    })
  }, [])

  return (
    <div className="font-primary">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid grid-cols-[70px,240px,auto] h-screen">

        <ServerColumn />
        <ChannelColumn />

        <div className="h-full bg-gray-700"></div>
      </div>

    </div>
  )
}
