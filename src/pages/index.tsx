import Head from 'next/head';
import { useEffect } from 'react';
import ServerColumn from '../components/ServerColumn';
import ChannelColumn from '../components/ChannelColumn';
import Header from '../components/Header';
import ChatBox from '../components/ChatBox';
import Members from '../components/Members';

export default function Home() {
  useEffect(() => {
    document.addEventListener('contextmenu', (e) => {
      e.preventDefault();
    })
  }, [])

  return (
    <div className="font-primary">
      <Head>
        <title>Discord Clone build with tailwindcss & nextjs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid grid-cols-[70px,240px,auto] h-screen">

        <ServerColumn />
        <ChannelColumn />

        <div className="h-full bg-[#36393F] flex flex-col overflow-hidden">
          <Header />
          <div className="grid grid-cols-[auto,240px] flex-grow overflow-hidden">
            <ChatBox />
            <section className="bg-gray-800 h-full flex-grow overflow-auto styled-scroll thin-scroll">
              <Members />
            </section>
          </div>
        </div>
      </div>

    </div>
  )
}
