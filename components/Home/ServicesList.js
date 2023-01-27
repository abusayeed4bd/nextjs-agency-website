import Image from 'next/image'
import React from 'react'

const ServicesList = () => {
    return (
        <div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-12">

                {[1, 2, 3, 4].map(iteam => {
                    return (
                        <div key={iteam.index} className="card w-72  card-compact gap-4 mx-auto bg-base-100 shadow-xl">
                            <figure>
                                <Image src={"/smm.png"} height={100} width={400} alt="smm" />
                            </figure>
                            <div className="card-body text-center">
                                <h2 className="text-2xl font-bold ">Shoes!</h2>
                                <p className='text-lg'>If a dog chews shoes whose shoes does he choose?</p>

                            </div>
                        </div>
                    )
                })}

            </div>

        </div>
    )
}

export default ServicesList