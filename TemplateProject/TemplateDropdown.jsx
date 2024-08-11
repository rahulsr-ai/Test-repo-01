import React from 'react'

import { IoIosArrowDown } from "react-icons/io";

const TemplateDropdown = () => {


  const menuDropdown = [
    { title: 'Your Category', icon: <IoIosArrowDown />, text: 'select' },
    { title: 'Total Person', icon: <IoIosArrowDown />, text: 'select' },

  ]

  return (<>s
    
     




        <div className='flex flex-col bg-[#5a5858] justify-center py-2 px-1    md:p-4   lg:py-6 lg:px-8  rounded-s-xl  '>

          <div className=' px-2 py-1 flex items-end gap-1 text-xs sm:text-base md:text-lg lg:text-xl  '>

            <h1 className='inline-block  font-bold text-white'> Location  </h1>
            <span className='inline-block  text-white'> <IoIosArrowDown/> </span>

          </div>

          <div className=' px-2 text-neutral-300 font-medium'>
            <p> Select </p>
          </div>

        </div>




        {menuDropdown.map((item, i) =>

          <div className='flex flex-col bg-[#5a5858] bg-blend-multiply justify-center py-2 px-1  
               md:p-4   lg:py-6 lg:px-8  '>

            <div className=' px-2 py-1 flex items-end gap-1  text-xs sm:text-base md:text-lg lg:text-xl '>

              <h1 className='inline-block  font-bold text-white'>{item.title}  </h1>
              <span className='inline-block  text-white'> {item.icon} </span>

            </div>

            <div className=' px-2  text-neutral-300 font-medium'>
              <p> {item.text} </p>
            </div>

          </div>

        )}
           

           <div className='bg-[#c5a15f] font-bold text-center content-center  text-xs sm:text-base md:text-lg lg:text-xl  text-white py-2 px-1  rounded-e-xl 
             md:p-4   lg:py-6 lg:px-8   '>
             <h1> Book Now</h1>
           </div>








    
    
  </>
  )
}

export default TemplateDropdown