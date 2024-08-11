import React from 'react'
import TemplateCard from './TemplateCard'

import './Template.css'

import { NavLink , Link} from 'react-router-dom'

import { motion } from 'framer-motion'

const Templatenav = () => {

    const anchorTags = [
        { title: "Home", color: '', link: '/' },
        { title: "About", color: '', link: '/About' },
        { title: "Features", color: '', link: '/Features' },
        { title: "FAQ", color: '', link: '/FAQ' }
    ]

    return (<>



        <nav className='fixed w-full h-[70px] bg-black text-white z-30  flex items-center justify-between px-10 shadow-lg'>

            <div className='flex gap-1  font-bold'>

                <div className='  h-8 w-4 bg-[#f2c775]
             inline-block rounded-s-full '/> <span className='text-xl'> ious</span>
            </div>

            <div className='space-x-7 ml-16 md:flex hidden text-sm md:text-base font-normal p-2'>

                {anchorTags.map((item, i) =>

                    <NavLink key={i} to={item.link} className={ ( {isActive} ) =>  `px-2 py-1 text-neutral-400 rounded-md 
                    hover:bg-slate-100 hover:text-black 
                    ${isActive ?  "bg-white text-purple-700 font-bold" : "" }   `} 
                    > {item.title} </NavLink >

                )}
    
            </div>

            <motion.button className='bg-zinc-700 text-white px-3 py-1 rounded-lg mr-10'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: .9 }}
            > Register </motion.button>

        </nav>




    </>
    )
}

export default Templatenav