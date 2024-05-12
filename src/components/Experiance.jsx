import React from 'react'
import html from "../../public/html.png";
import css from "../../public/css.png";
import java from "../../public/java.png";
import javascript from "../../public/javascript.png";
import mongoDB from "../../public/mongoDB.png";
import tailwinde from "../../public/tailwinde.png";
import c from "../../public/c.png";
import python  from "../../public/python.png";

const Experiance = () => {
    const cardItem=[
        {
            id:1,
            logo:html,
            name:"HTML"
        },
        {
            id:2,
            logo:css,
            name:"CSS"
        },
        {
            id:3,
            logo:java,
            name:"Java"
        },
        {
            id:4,
            logo:javascript,
            name:"Javascript"
        },
        {
            id:5,
            logo:mongoDB,
            name:"MongoDB"
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
        },
        {
            id:8,
            logo:tailwinde,
            name:"Tailwinde"
        }
        
        

    ]
  
  return (
    <div name="Experiance" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
        <div>
            <h1 className='text-3xl font-bold mb-5'>Experiance</h1>
            <span className=''>I've  stuyding experiance in below this technologies.</span>
            <div className='grid grid-cols-2 md:grid-cols-5 gap-10 my-3'>
                {
                    cardItem.map(({id,logo,name})=>(
                        <div className=' flex flex-col items-center justify-center border-[3px] rounded-full md:w-[200px] md:h-[200px]
                        p-2 cursor-pointer hover:scale-110 duration-300' key={id}>
                                <img src={logo} className='w-[150px]  rounded-full 
                              ' alt="" />
                                <div>
                                    <div className=''>{name}</div>
                                    
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

export default Experiance;