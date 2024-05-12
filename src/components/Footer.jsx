import React from 'react'
import { FaFacebook,FaTwitter,FaLinkedinIn,FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <>
    <hr/>
    <footer className='py-12'>
         <div className='max-w-screen-2xl container mx-auto px-4 md:px-20'>
            <div className='items-center justify-center flex flex-col'>
                <div className='flex space-x-5'>
                    < FaFacebook size={24}/>
                    <FaTwitter size={24}/>
                    <FaLinkedinIn size={24}/>
                    <FaInstagram size={24}/>
                </div>
                 <div className='mt-8 border-t border-gray-800 pt-6 flex flex-col items-center'>
                    <p className='text-sm'>&surya;2022 join my collage.All about reserved</p>
                    <p className='text-sm'>Supportive  My Partner ❤️<span className='text-green-700 text-xl'>Tithi</span></p>
                    
                 </div>

            </div>

         </div>
    </footer>
    </>
  )
}

export default Footer