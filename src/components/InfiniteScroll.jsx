import React, { useEffect, useState } from 'react'
import axios from "axios";
const InfiniteScroll = () => {
    //we want to just know when the last element comes in view
    
    const apiUrl="https://jsonplaceholder.typicode.com/posts?_limit=5"
    const [data,setData]=useState([]);
    const [pageNo,setPageNo]=useState(1);
    useEffect(()=>{
        const fetchData = async () => {
            try {
                console.log("Api calling for page,",pageNo);
                const res = await axios.get(`${apiUrl}&_page=${pageNo}`);
                setData((prevData) => [...prevData, ...res.data]); // Append correctly
                // console.log("Updated data:", res.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    },[pageNo]);
    useEffect(()=>{

        const observer=new IntersectionObserver((param)=>{
            // console.log("Observer param is:",param);
            if(param[0]?.isIntersecting){
                observer.unobserve(lastDiv);
                setPageNo(pageNo+1);
            }
        },{threshold:0.5});
        //threshold 0.5 measn call api in 50% view and 1 meeans 100% 
        const lastDiv=document.querySelector(".data-div:last-child");
        if(!lastDiv){
            return;
        }
        // console.log("Last div is:",lastDiv);
        observer.observe(lastDiv);

        //for optimization
        return ()=>{
            if(lastDiv){
                observer.unobserve(lastDiv);
                observer.disconnect();
            }
        }
    },[data])
  return (
    <div className='flex flex-col gap-3'>
        {
            data.map((item,index)=>{
                return <div key={index} className='data-div w-[250px] h-[250px] bg-blue-200'>
                    <div>{index}</div>
                    <div>{item.title}</div>
                </div>
            })
        }
    </div>
  )
}

export default InfiniteScroll
