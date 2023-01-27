import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Hero from '@/components/Home/Hero'
import About from '@/components/Home/About'
import ServicesList from '@/components/Home/ServicesList'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Digital marketing agency</title>
        <meta name="description" content="Digital marketing agency in bangladesh" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className=''>
        <Hero />
        <About />

        <div style={{ backgroundImage: "url('/s-bg.png')", backgroundPosition: "center top" }} className='py-24 px-12 bg-indigo-100'>
          <div className="ml-2">
            <h4 className='text-indigo-500 text-2xl font-semibold'>Services</h4>
            <h2 className='text-4xl font-bold mb-8 text-slate-600'>Our Most <br /> Popular Services</h2>
          </div>
          <ServicesList />
        </div>


      </main>


    </>
  )
}
