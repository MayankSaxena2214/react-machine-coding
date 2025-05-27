import React from 'react'

const withAuth = (Component) => {
    const isAuthenticated=true;
  return function(props){
    // Write here the enhanced functionality for the component
    if(isAuthenticated)
    return <Component {...props}/>
    else
    return <p>Please login to the system first</p>
  }
}

export default withAuth;
