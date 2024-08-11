import React from 'react'
import Templatenav from '../Templatenav'
import { Outlet } from 'react-router-dom'


const EightacademyProject = () => {
    return (
        <>

        <div className='bg-black'>
            <Templatenav />
            <Outlet />
        </div>
        
        </>
    )
}

export default EightacademyProject