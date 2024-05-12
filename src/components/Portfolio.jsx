import React from 'react'
import nodejs from "../../public/img3.png";
import mongoDB from "../../public/img4.png";
import python from "../../public/img5.png";
import java from "../../public/img6.png";
import reactjs from "../../public/img7.png";
import express from "../../public/img8.png";
import c from "../../public/img9.png";

const Portfolio = () => {
    const cardItem=[
        {
            id:1,
            logo:mongoDB,
            name:"MongoDB"
        },
        {
            id:2,
            logo:reactjs,
            name:"ReactJS"
        },
        {
            id:3,
            logo:nodejs,
            name:"NodeJS"
        },
        {
            id:4,
            logo:express,
            name:"Express"
        },
        {
            id:5,
            logo:java,
            name:"Java"
        },
        {
            id:6,
            logo:python,
            name:"Python"
        },
        {
            id:7,
            logo:c,
            name:"C"
        }
        
        

    ]
  
  return (
    <div name="Portfolio" className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10'>
        <div>
            <h1 className='text-3xl font-bold mb-5'>Portfolio</h1>
            <span className='underline font-semibold'>Featured Projects</span>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-3 my-5'>
                {
                    cardItem.map(({id,logo,name})=>(
                        <div className='md:w-[300px] md:h-{300px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300' key={id}>
                                <img src={logo} className='w-[120px] h-[120px] rounded-full 
                                p-1 border-[2px]' alt="" />
                                <div>
                                    <div className='font-bold text-xl mb-2 px-3'>{name}</div>
                                    <p className='px-2 text-gray-800'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                                <div className='justify-around space-x-3'>
                                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded'>Video</button>
                                    <button className='bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded'>Source code</button>
                                </div>
                        </div>
                    ))
                }

            </div>
        </div>
        <hr/>

    </div>
  );
}

export default Portfolio;