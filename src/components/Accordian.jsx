import React, { useState } from 'react'

const Accordian = () => {
    const accordianData = [
        {
            title: "Title A",
            description: "Description A"
        },
        {
            title: "Title B",
            description: "Description B"
        },
        {
            title: "Title C",
            description: "Description C"
        },
        {
            title: "Title D",
            description: "Description D"
        }
    ];
    const [activeIndex,setActiveIndex]=useState(null);
    return (
        <div className='w-[100%] bg-white mx-auto flex flex-col items-center'>
            <h1 className='text-4xl'>Faqs</h1>
            <div className='w-1/3 flex flex-col gap-4'>
                {
                    accordianData.map((item, index) => {
                        return <div key={index} className='flex flex-col border-2 py-6 px-3' style={{
                            backgroundColor:activeIndex==index ? 'brown':"white"
                        }}>
                            <div className='flex flex-col'>
                                <div className='flex justify-between'>
                                    <div>{item.title}</div>
                                    <div onClick={()=>{
                                        activeIndex==index ? setActiveIndex(null) : setActiveIndex(index)
                                    }}>{activeIndex==index ? "+":"-"}</div>
                                </div>
                                {
                                    activeIndex==index && <div>{item.description}</div>
                                }
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Accordian
