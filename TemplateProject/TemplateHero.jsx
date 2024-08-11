import React from 'react'
import './Template.css'

import TemplateCard from './TemplateCard';
import TemplateDropdown from './TemplateDropdown';

import { motion } from 'framer-motion';

const TemplateHero = () => {

    const herobg = {

        backgroundSize: 'cover',
        backgroundImage: 'url(/public/vite.svg)',
        backgroundPosition: "center",
        backgroundRepeat: 'no-repeat'


    }



    return (<><div style={{ paddingTop: '60px', }} className='flex justify-center'> 

        <main className=' flex justify-center py-4 relative  '>

            <div id='herobg' className='rounded-lg md:h-[76vh] min-h-[550px]  w-[90vw] flex items-center pb-10 px-20 '>

                <motion.div className=' flex flex-col gap-8 text-white' 
                initial={{opacity: 0, x: -100}}
                animate={{opacity: 1, x: 0} }
                transition={{ duration: .7, ease: 'easeInOut', delay: 1 }}
                >

                    <div className=' text-5xl font-bold'>

                        <h1>  Choose</h1>
                        <h1 className='text-black'>  your luxurious </h1>
                        <h1>  room </h1>
                    </div>

                    <div className='space-x-4 font-light text-sm'>
                        <button className='px-4 py-1.5 rounded-full bg-stone-100 text-black' > Start Now </button>
                        <button className='px-4 py-1.5 rounded-full bg-[#ad8c5b]' > Read more </button>
                    </div>

                </motion.div>



            </div>

            <div className='flex justify-center absolute bottom-[-22px] px-2 '>
                <TemplateDropdown />
            </div>


        </main>
         

        </div> 



        <TemplateCard/>
        </>
    )
}

export default TemplateHero