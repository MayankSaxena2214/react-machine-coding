import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers, setData } from '../store/slices/demoSlice';

const ReduxPersist = () => {
    const {name,email,phone,users,loading,error}=useSelector((state)=>state.demo);
    const dispatch=useDispatch();
    const setDummyData=()=>{
        dispatch(setData({name:"Mayank",email:"mayanksaxena2214@gmail.com",phone:"+919123442"}))
    }
    useEffect(()=>{
        dispatch(fetchUsers());
    },[]);
     if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>
  return (
    <div>
      <button onClick={setDummyData}>Set Data</button>
      <div>
        <div>Name</div><div>{name}</div>
        <div>email</div><div>{email}</div>
        <div>phone</div><div>{phone}</div>
        
      </div>
      <div>
      <h2>Users</h2>
      <ul>
        {users && users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
    </div>
  )
}

export default ReduxPersist
