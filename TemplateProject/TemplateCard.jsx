import React from 'react'
import './Template.css'


import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import { motion } from 'framer-motion'

const TemplateCard = () => {

    const suggestedRooms = [
        { title: 'Comfort Room', para: 'United kingdom', color: 'bg-[#817d7d]', price: '$105' },
        { title: 'Lux Room', para: 'United kingdom', color: 'bg-[#adc74e]', price: '$80' },
        { title: 'Standerd Room', para: 'United kingdom', color: 'bg-[#e6be74d7]', price: '$65' },
        { title: 'Normal Room', para: 'United kingdom', color: 'bg-zinc-800', price: '$112' },
    ]


    return (
        <><div style={{ paddingTop: "40px", }} className=''>



            <div className=' md:px-20 px-5 pb-1 flex flex-col justify-center  '>


                <motion.div className='flex items-center justify-between  text-white px-10 py-5'
                    initial={{ y: -60, opacity: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: .5, ease: 'linear' }}

                >


                    <h1 className=' text-3xl font-medium' > Suggested room </h1>


                    <div className='flex gap-3'>

                        <span className='bg-[#686565] text-white text-3xl rounded-sm ' > <IoIosArrowForward /> </span>
                        <span className='bg-[#686565] text-white text-3xl rounded-sm ' > <IoIosArrowBack /> </span>

                    </div>

                </motion.div>


                <motion.div className='flex flex-wrap gap-2  sm:justify-between p-5  justify-center '
                // initial={{ x: 150, opacity: 0 }}
                // whileInView={{ opacity: 1, x: 0 }}
                // transition={{ duration: .7, ease: 'linear' }} 
                >

                    {suggestedRooms.map((item, i) =>

                        <motion.div key={i} className={`flex items-end rounded-lg gap-6 py-3 px-6 text-white 
                        ${item.color} mt-6  items-end `}
                            transition={{ duration: .2, ease: 'linear' }}
                            whileHover={{ scale: 1.1, y: -10 }}
                            whileTap={{ scale: .9 }}
                        >

                            <div className='space-y-2 '>
                                <h2 className='font-bold'> {item.title}  </h2>
                                <p className='text-xs font-normal text-neutral-100 '> {item.para}  </p>
                            </div>

                            <button className='text-xs rounded bg-white text-black px-2 py-1'> {item.price} </button>



                        </motion.div>


                    )}


                </motion.div>

            </div>











        </div>
        </>
    )
}

export default TemplateCard