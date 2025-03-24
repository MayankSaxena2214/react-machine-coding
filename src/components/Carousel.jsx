import React, { useEffect, useRef, useState } from 'react'

/*
    Requirements
    1. Images change automatically after a particular interval
    2. When hover on particular imkage, then automatically change stop
    3. button for the next image
*/
const Carousel = () => {
    const ref=useRef(null);
    const imgData=[
        {
          "id": "0",
          "author": "Alejandro Escamilla",
          "width": 5000,
          "height": 3333,
          "url": "https://unsplash.com/photos/yC-Yzbqy7PY",
          "download_url": "https://picsum.photos/id/0/5000/3333"
        },
        {
          "id": "1",
          "author": "Alejandro Escamilla",
          "width": 5000,
          "height": 3333,
          "url": "https://unsplash.com/photos/LNRyGwIJr5c",
          "download_url": "https://picsum.photos/id/1/5000/3333"
        },
        {
          "id": "2",
          "author": "Alejandro Escamilla",
          "width": 5000,
          "height": 3333,
          "url": "https://unsplash.com/photos/N7XodRrbzS0",
          "download_url": "https://picsum.photos/id/2/5000/3333"
        },
        {
          "id": "3",
          "author": "Alejandro Escamilla",
          "width": 5000,
          "height": 3333,
          "url": "https://unsplash.com/photos/Dl6jeyfihLk",
          "download_url": "https://picsum.photos/id/3/5000/3333"
        },
        {
          "id": "4",
          "author": "Alejandro Escamilla",
          "width": 5000,
          "height": 3333,
          "url": "https://unsplash.com/photos/y83Je1OC6Wc",
          "download_url": "https://picsum.photos/id/4/5000/3333"
        },
        {
          "id": "5",
          "author": "Alejandro Escamilla",
          "width": 5000,
          "height": 3334,
          "url": "https://unsplash.com/photos/LF8gK8-HGSg",
          "download_url": "https://picsum.photos/id/5/5000/3334"
        },
        {
          "id": "6",
          "author": "Alejandro Escamilla",
          "width": 5000,
          "height": 3333,
          "url": "https://unsplash.com/photos/tAKXap853rY",
          "download_url": "https://picsum.photos/id/6/5000/3333"
        },
        
        
        
        
      ]
      const [index,setIndex]=useState(0);
      const handlePrev=()=>{
        if(index>0){
            setIndex(index-1);
        }
        else{
            setIndex(imgData.length-1);
        }
      }
      const handleNext = () => {
        setIndex((prevIndex) => {
            if (prevIndex === imgData.length - 1) {
                return 0; // Reset to the first image
            } else {
                return prevIndex + 1; // Move to the next image
            }
        });
    };
    
      useEffect(()=>{
        ref.current=setInterval(handleNext,1000);
      },[])
  return (
    <div onMouseEnter={clearInterval(ref.current)} onMouseLeave={()=>{ref.current=setInterval(handleNext,1000);}} className='flex items-center relative py-3 '>
      <div onClick={handlePrev} className='text-xl bg-black text-white p-3 absolute top-[50%] left-[1rem] cursor-pointer'>{"<"}</div>
      <div className='flex-1'>
        <img src={imgData[index].download_url} className='w-[100%] h-[600px]' alt="" />
      </div>
      <div onClick={handleNext} className='text-xl bg-black text-white p-3 absolute top-[50%] right-[1rem] cursor-pointer'>{">"}</div>
    </div>
  )
}

export default Carousel
