import React from 'react'

const Footer = () => {
  return (
    <div className='w-[70%] mx-auto mt-20 flex justify-between'>
        <div>
            <h1 className='text-9xl font-medium tracking-tight'>refokus.</h1>
            <div className='flex items-center text-zinc-600 text-xs gap-7 mt-10 mb-5'>
                <h6>Privacy Policy</h6>
                <h6>Cookie Policy</h6>
                <h6>Impressum</h6>
                <h6>Terms</h6>
            </div>
        </div>
        <div className='flex gap-12 ml-20'>
            <div className='text-zinc-600 text-xs'>
                <h1>Socials</h1>
                <div className='mt-8'>
                    <h6>Instagram</h6>
                    <h6>Twitter</h6>
                    <h6>LinkedIn</h6>
                </div>
            </div>
            <div className='text-zinc-600 text-xs'>
                <h1>Sitemap</h1>
                <div className='mt-8 text-zinc-500'>
                    <h6>Home</h6>
                    <h6>Work</h6>
                    <h6>Careers</h6>
                    <h6>Contact</h6>
                </div>
            </div>
            <div className='text-xs mt-10 text-zinc-200 flex flex-col items-end'>
                <p className='text-end'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ashuo Neque, inventore.</p>
                <button className='px-3 py-2 bg-blue-700 mt-5'>Enterprise Partner</button>
            </div>
        </div>
    </div>
  )
}

export default Footer
