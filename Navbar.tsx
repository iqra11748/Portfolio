import React from 'react'
import { FcMenu } from "react-icons/fc";
import { BsFillTelephoneXFill } from "react-icons/bs";



const Navbar = () => {
    return (
        <div className='container pt-8'>
            <div className='flex justify-between items-center'>
                <div className='text-xl font-serif'> Iqra Shafiq</div>
                <ul className='gap-10 lg:gap-16 hidden md:flex'>
                    <li className='menuLink'><a href='#hero'>Home</a></li>
                    <li className='menuLink'><a href='#habout'>About</a></li>
                    <li className='menuLink'><a href='#project'>Project</a></li>
                    <li className='menuLink'><a href='#skills'> Skills</a></li>
                    <li className='menuLink'><a href='contact'>Contact</a></li>
                </ul>
                <FcMenu />


            </div>

        </div>
    )
}

export default Navbar