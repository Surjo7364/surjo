import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { FaSquareYoutube } from "react-icons/fa6";
import { ReactTyped,} from "react-typed";
import pic from "../../public/img1.jpg";

const Home = () => {
  return (
    <>
      <div name="Home" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
          <div className='flex flex-col md:flex-row'>
                <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
                  <span className='text-xl'>Welcome In My Site</span>
                  <div className='flex space-x-1 text-2xl md:text-4xl'>
                      <h1>Hey I'm a</h1>
                     {/*<span className='text-red-700 font-bold'>Developer</span>*/}
                     <ReactTyped
                       className='text-red-700 font-bold'
                        strings={["Developer","Programmer","Coder"]}
                        typeSpeed={40}
                        backSpeed={50}
                          loop={true}
                        
                      />
                  </div>
                  <br />
                  <p className='text-sm md:text-sm text-justify'>I am Surjo biswas, I was born and brought up in north 24 Pargonas.I am 22 years old.
                    I belong to a Nuclear family.I am now studying B-Tech CSE(AL & ML). MY strength ar i am self motivating person
                    and i have strong communication skill also.My short term goal is to get a job in a reputed Company and
                    long term goal is to achive a good position like yours.
                    </p>
                      <br />
                      <div className='space-y-2'>
                          <h1 className='font-bold '>Abailable me</h1>
                           <ul className='flex space-x-5 cursor-pointer text-2xl '>
                              <li>
                                <a href="https://www.facebook.com/surya.biswas.1806?mibextid=ZbWKwL" target='-_blank'>
                                  
                                <FaFacebook />
                                </a>
                              </li>
                              
                              <li> 
                                <a href="https://www.linkedin.com/in/s-s-surya-biswas-5513b3255?utm_source=
                                share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'>
                                <FaLinkedin />
                                </a>
                              </li>
                              <li> {<FaTelegram />}</li>
                              <li>
                                <a href="https://youtube.com/@GangofMedia?si=zEh0_UP-THk58zhy" target='_blank'>
                                <FaSquareYoutube />
                                </a>
                                </li>
                           </ul>
                      </div>
                      <div>
                         
                      </div>
                </div>

                  <div className='md:w-1/2 md:ml-40 md:mt-20  mt-8 order-1'>
                    <img src={pic} className='rounded-full md:w-[350px] md:h-[350px]'
                    alt="" />
                  </div>
          </div>
      </div>
      <hr/>
    </>
  )
}

export default Home