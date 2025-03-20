import React, { useRef, useState } from 'react'

const MultipleToastOptimized = () => {
    const [show,setShow]=useState(null);
    const [toastsList,setToastList]=useState([]);
    const timersRef=useRef({});
    console.log("Timers ref is:",timersRef)
    const colorsMapping={
        success:"green",
        warning:"yellow",
        error:"red",
        info:"blue"
    }
    const handleClose=(id)=>{
        clearTimeout(timersRef.current[id]);
        delete(timersRef.current[id]);
        setToastList((prevToasts)=>{
            let newToastList=prevToasts.filter((item)=>item.id!=id);
            return newToastList;
        })
    }
    const handleClick=(message,type)=>{
        const id=new Date().getTime();
        console.log(id);
        setToastList([...toastsList,{id,message,type}]);
        
        timersRef.current[id]=setTimeout(()=>handleClose(id),5000);
    }

  return (
    <div className='py-10 px-10 flex flex-col gap-10'>
      <div className='fixed top-1 right-1 flex gap-2 flex-col'>
       {
        toastsList.map((item)=>{
            return  <div key={item.id} className='flex justify-between w-[300px] rounded-xl toast py-4 px-4' style={{
                backgroundColor:colorsMapping[item.type]
            }}>
            <div>{item?.message}</div>
            <div className='cursor-pointer' onClick={()=>handleClose(item.id)}>X</div>
        </div>
        })
       }
      </div>
      <div className='flex gap-4'>
        <button onClick={()=>handleClick("Success","success")} className='px-6 py-3 bg-red-400 text-white'>Success Toast</button>
        <button onClick={()=>handleClick("Warning","warning")} className='px-6 py-3 bg-red-400 text-white'>Warning Toast</button>
        <button onClick={()=>handleClick("Error","error")} className='px-6 py-3 bg-red-400 text-white'>Error Toast</button>
        <button onClick={()=>handleClick("Info","info")} className='px-6 py-3 bg-red-400 text-white'>Info Toast</button>
      </div>
    </div>
  )
}

export default MultipleToastOptimized
