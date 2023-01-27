import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

import Hero from '@/components/Home/Hero'

import ServicesList from '@/components/Home/ServicesList'
import AboutSection from './../components/Home/AboutSection';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - DigitalXplore</title>
        <meta name="description" content="Digital marketing agency in bangladesh" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className=''>
        <Hero />
        <AboutSection />

        <div style={{ backgroundImage: "url('/s-bg.png')", backgroundPosition: "center top" }} className='py-24 px-12 bg-indigo-100'>
          <div className="ml-2">
            <h4 className='text-indigo-500 text-xl font-semibold top-title'>Services</h4>
            <h2 className='text-4xl font-bold mb-8 text-slate-600'>Our Most <br /> Popular Services</h2>
          </div>
          <ServicesList />
        </div>


      </main>


    </>
  )
}
