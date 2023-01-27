import Image from 'next/image'
import React from 'react'

const AboutSection = () => {
    return (
        <div>
            <div className="flex py-12 mx-12">
                <div className='w-[60%]'>
                    <Image src={'/about_main_img.png'} height={900} width={700} alt="about img" />
                </div>
                <div className='w-[40%]'>
                    <h4 className='text-indigo-500 text-xl font-semibold top-title my-5'>About Us</h4>
                    <h2 className='text-[#6ec1e4] text-4xl font-bold mb-5'>We’re your Company all in one solution</h2>
                    <h3 className='text-xl font-semibold mb-5'>Digital Marketing Agency is a full–service agency that provides strategic and creative digital marketing services to help businesses reach their goals.</h3>
                    <p className="text-slate-500 text-md mb-5">Our service include SEO, SEM, Social Media, Email Marketing, and Web Development. Our goal is to help businesses succeed by providing them with custom–tailored digital marketing strategies, data–driven insights, and innovative solutions. We are committed to delivering results that exceed expectations, and our team of experienced professionals will work closely with you to ensure success.</p>

                    <button className='btn btn-outline rounded-full btn-md btn-primary'>Read More</button>
                </div>
            </div>
        </div>
    )
}

export default AboutSection