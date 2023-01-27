
import AboutSection from '@/components/Home/AboutSection'
import Head from 'next/head'
import React from 'react'

const About = () => {
    return (
        <div className=''>
            <Head>
                <title>About - DigitalXplore</title>
                <meta name="description" content="Digital marketing agency in bangladesh" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div style={{ backgroundImage: "url('/hero-bg.png')", backgroundPosition: "center bottom" }} className="pt-48 pb-12">
                <h1 className='text-center text-4xl font-bold'>About</h1>
            </div>

            <AboutSection />


        </div>
    )
}

export default About