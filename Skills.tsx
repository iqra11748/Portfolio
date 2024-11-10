import React from 'react'
 
const skills = () => {
    return (
        <div id='skills' className='container pt-32'>
            <div className='grid md:grid-cols2 gap-20 items-center'>
                <div>
                    <h2 className='text-4xl md:text-5xl'>Technology I work with </h2>
                    <p className='text-grey-500 pt-2'> I am Web Developerand AI  enthusiast with a passion for learning and creativitySkillS in HTMl 

                    </p>
                </div>
            </div>
                <div className='grid grid-cols2 text=accent text-3xl sm:text-4xl'>
                    <div className='space-y-2'>
                        <h2>TypeScript</h2>
                        <h2>Next.js</h2>
                        <h2>React.js</h2>
                    </div>
                    <div className='space-y-2'>
                        <h2>Tailwind</h2>
                        <h2>CSS</h2>
                        <h2>Node.js</h2>

                    </div>
                </div>
        </div>
    )
}

export default skills