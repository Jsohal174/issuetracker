import Link from 'next/link'
import React from 'react' 
import { FaBug } from "react-icons/fa";


const NavBar = () => {

  const items = [
    {label:"dashboard",href:"/"},
    {label:"Issues", href:"/issues"}]
  return (
    <nav className='flex space-x-6 pl-5 border-b items-center h-14 mb-5'>
      <Link href="/"><FaBug/></Link>
      <ul className='flex space-x-6'>
      {items.map(item=> (
        <li>
          <Link href={item.href} className='text-zinc-400 hover:text-black transition-colors'>
            {item.label}
          </Link>
        </li>
      ))}
      </ul>
    </nav>
  )
}

export default NavBar
