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
      <main>
        <Hero />
        <About />
        <ServicesList />
      </main>


    </>
  )
}
