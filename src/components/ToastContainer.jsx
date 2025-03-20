import React, { useState } from 'react'

const ToastContainer = () => {
    const [show,setShow]=useState(null);
    const handleClose=()=>{
        setShow(false);
    }
    const handleClick=()=>{
        setShow(true);
        setTimeout(handleClose,5000);
    }

  return (
    <div className='py-10 px-10 flex flex-col gap-10'>
      <div className='fixed top-1 right-1'>
       {
        show &&  <div className='flex justify-between w-[300px] rounded-xl toast bg-green-600 text-white py-4 px-4'>
        <div>Success</div>
        <div className='cursor-pointer' onClick={handleClose}>X</div>
    </div>
       }
      </div>
      <div className='flex gap-4'>
        <button onClick={handleClick} className='px-6 py-3 bg-red-400 text-white'>Success Toast</button>
        <button className='px-6 py-3 bg-red-400 text-white'>Warning Toast</button>
        <button className='px-6 py-3 bg-red-400 text-white'>Error Toast</button>
        <button className='px-6 py-3 bg-red-400 text-white'>Info Toast</button>
      </div>
    </div>
  )
}

export default ToastContainer
