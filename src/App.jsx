import React from 'react'
import Accordian from './components/Accordian'
import ToastContainer from './components/ToastContainer'
import "./App.css";
/*
In normal toast we just showed the success toast single
but now we will show multiple toasst like success, warning, etc
Also suppose multiple toast at the same time also. Like error and warning at the same time
so we need to maining the list of toast

 */
import AdvancedToast from './components/AdvancedToast'
import MultipleToastOptimized from './components/MultipleToastOptimized';
import InfiniteScroll from './components/InfiniteScroll';
const App = () => {
  return (
    <div className='bg-blue-50'>
      {/* <Accordian/> */}
      {/* <ToastContainer/> */}
      {/* <AdvancedToast/> */}
      {/* <MultipleToastOptimized/> */}
      <InfiniteScroll/>
    </div>
  )
}

export default App
