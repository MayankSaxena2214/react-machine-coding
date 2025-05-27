import React from 'react'
import withAuth from '../utils/withAuth';


const Dashboard = () => {
  return (
    <div>
      Dashboard
    </div>
  )
}
export const AuthDashboard=withAuth(Dashboard);

export default Dashboard;
