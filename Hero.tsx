import React from  'react'
import Navbar from './Navbar'

const Hero = () => {
    return (
        <div id="hero" className='min-h-screen bg-no-repeat bg-[url(/download (1).png)] bg-left lg:bg-[15%] bg-cover'
        style={{backgroundSize: "35%"}}>
        
         <Navbar />
         <div className='container grid lg:grid-cols-3 h-[calc(100vh-60px)]'>
            <div className='hidden lg:block'></div>
            <div className='text-[90px] sm:text-[99px] font-sans leading-tight flex justify-start items-start'>
                <div>
                    <p>Here's</p>
                      <p>My</p>
                    <p>Portfolio</p>
                </div>
            </div>
         </div>
        </div>
    )
}
export default Hero