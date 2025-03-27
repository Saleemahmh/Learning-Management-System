import React,{useEffect, useState} from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from "../components/Profile/Sidebar";
import { useSelector } from 'react-redux';
const Dashboard = () => {

  return (
    <div className='bg-cyan-900 px-2 md:px-12 flex flex-col md:flex-row h-screen py-8 gap-4 text-cyan-200'>
        <div className='w-1/6'>
            <Sidebar/>
        </div>
        <div className='w-5/6'>
            <Outlet/>
        </div>
    </div>
  )
}

export default Dashboard