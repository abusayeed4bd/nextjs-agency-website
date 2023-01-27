import ServicesList from '@/components/Home/ServicesList'
import React from 'react'

const Services = () => {
    return (
        <div >

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