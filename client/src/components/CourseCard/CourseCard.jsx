import React from 'react'
import { Link } from 'react-router-dom';

const CourseCard = ({data}) => {
    console.log(data);
  return (
   <>
   <Link>
   <div className="bg-cyan-950 rounded p-4 h-[32rem] flex flex-col shadow-lg shadow-cyan-200/50 hover:bg-cyan-600">
   <div classname="bg-cyan-800 rounded flex item-center justify-center">
    <img src ="/programming-background-with-person-working-with-codes-computer (2).jpg" alt="/" className="h-[25vh"/>
   </div>
   <h2 className="mt-4 text-cyan-200 text-xl font-semibold"> {data.coursename}</h2>
   <p className="mt-2 text-cyan-200 font-semibold">{data.description}</p>
   <p className="mt-2 text-cyan-400 font-semibold"> by {data.instructor}</p>
   <p className='mt-2 text-cyan-200 font-semibold text-xl'>{data.price}</p>
   </div>
   </Link>
   </>
  )
}

export default CourseCard