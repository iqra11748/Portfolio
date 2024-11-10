import React from 'react'
import { BsFillTelephoneXFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";



const contact= () => {
    return (
        <div id='contact' className='pt-32 container'>
            <div className='grid md;grid-cols2 gap-10'>
                <div className='space-y-8'>
                    <h2 className='text-5xl'>Get in touch</h2>
                    <p className='text-grey-600 text-[18px] pt-2'>
                        Drop me a line, give me a call, or send me message by submitting the form.
                    </p>

                    <div className='flex-gap-3 items-center'></div>
                    <BsFillTelephoneXFill size={30} />(021) 034-21342

                    <div className='flex-gap-3 items-center'></div>
                    <MdEmail size={30} /> iqrashafiq32@gmail.com
                    </div>
                     <div className='space-y-8'>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="name">Name</label>
                            <input type="text"
                            className='h-[40px] bg-transparent border border-blue-700'
                            id='name'/>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="tel">Telephone</label>
                            <input type="text"
                            className='h-[40px] bg=tansparent border border-blue-700'
                            id='Telephone'/>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="email">Email</label>
                            <input type="text"
                            className='h-[40px] bg=transparent border border-blue-700'
                            id='Email'/>
                        </div>
                        <button className='bg-accent p-2 px-6'></button>
                     </div>
                </div>
            </div>
        
    )
}

export default contact
