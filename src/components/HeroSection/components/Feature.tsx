import React from 'react'
import { FileCode,Container,DatabaseZap } from 'lucide-react';
function Feature() {
  return (
    <>
    <div className='flex flex-col lg:flex-row  items-center justify-center gap-[5rem]'>
            <div className='flex flex-col items-center'>
                            <span className='p-10  border rounded-full text-white bg-blue-400'><FileCode/></span>
                            <span className='font-bold text-xl font-sans text-center '>Develop</span>
                            <p className='text-center pt-4 text-slate-500 lg:hidden'>We craft visually appealing and functional websites that engage your audience and drive results. Our websites are optimized for performance, responsiveness, and user experience across all devices.</p>
            </div>
            <div className='flex flex-col items-center'>
                            <span className='p-10 border rounded-full text-white bg-blue-400'><Container/></span>
                            <span className='font-bold text-xl font-sans text-center ' >Build</span>
                            <p className='text-center pt-4 text-slate-500 lg:hidden'>Our build process is meticulously crafted to deliver high-quality, custom-built digital solutions that exceed client expectations. From conceptualization to deployment, we follow a structured approach that ensures transparency, efficiency, and excellence at every stage of development.</p>
            </div>
            <div className='flex flex-col items-center'>
                            <span className='p-10 border rounded-full text-white bg-blue-400'><DatabaseZap/></span>
                            <span className='font-bold text-xl font-sans text-center '>Deploy</span>
                            <p className='lg:hidden text-center pt-4 text-slate-500'>We understand the importance of seamless deployment to ensure your digital solutions go live efficiently and effectively. Our deployment process is designed to minimize downtime, maximize performance, and provide a smooth transition from development to production environments.</p>
            </div>
    </div>
    </>
  )
}

export default Feature