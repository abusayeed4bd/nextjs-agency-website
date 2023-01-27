import Image from 'next/image'
import React from 'react'


const Hero = () => {
    return (
        <div className='bg-[#f8f6fa]    '>

            <div style={{ backgroundImage: "url('/hero-bg.png')" }} className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse " >
                    {/* <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" alt='' /> */}
                    <Image src={"/hero-img.png"} alt="hero-img" width={500} height={250} className=" hidden md:block  "  ></Image>
                    <div className='mt-24 mr-12 text-center md:text-left'>
                        <h4 className='text-4xl font-semibold mb-8'>All in one Solution for <span className='text-indigo-600'>your company</span></h4>
                        <h1 className="text-5xl font-bold ">Unlock Your Digital Potential With Our Customized Solutions</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero