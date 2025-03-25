import React from 'react'
import { BookMarked } from "lucide-react";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div>
    <div className="flex flex-col min-h-screen"> 
    <header className="px-4 lg:px-6 h-14 flex items-center border-b">
    <Link to={"/"} className="flex items-center justify-center">
    <BookMarked className="h-8 w-8 mr-4"></BookMarked>
    <span className="font-extrabold text-xl">LearnSphere</span>
    </Link>
    </header> 
     </div>
     </div>
  )
}
