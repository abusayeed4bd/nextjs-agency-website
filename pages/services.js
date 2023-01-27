import ServicesList from '@/components/Home/ServicesList'
import React from 'react'
import  Head  from 'next/head';

const Services = () => {
    return (
        <div >
            <Head>
                <title>Service - DigitalXplore</title>
                <meta name="description" content="Digital marketing agency in bangladesh" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.png" />
            </Head>

            <div style={{ backgroundImage: "url('/hero-bg.png')", backgroundPosition: "center bottom" }} className="pt-48 pb-12">
                <h1 className='text-center text-4xl font-bold'>Services</h1>
            </div>
            <div className="p-12">
                <ServicesList />
            </div>

        </div>
    )
}

export default Services