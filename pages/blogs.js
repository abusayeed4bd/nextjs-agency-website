import React from 'react'
import Head from 'next/head';

const Blogs = () => {
    return (
        <div>
            <Head>
                <title>Blogs - DigitalXplore</title>
                <meta name="description" content="Digital marketing agency in bangladesh" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div style={{ backgroundImage: "url('/hero-bg.png')", backgroundPosition: "center bottom" }} className="pt-48 pb-12">
                <h1 className='text-center text-4xl font-bold'>Blogs</h1>
            </div>
        </div>
    )
}

export default Blogs