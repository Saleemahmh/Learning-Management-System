import React from 'react'
import Hero from '../components/Home/Hero';
import RecentCourses from '../components/Home/RecentCourses';

const Home = () => {
  return (
    <div className='bg-cyan-700 text-cyan-200 px-10 py-8' >
      <Hero/>
      <RecentCourses/>
      </div>
  )
}

export default Home;