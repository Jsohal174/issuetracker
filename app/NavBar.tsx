"use client"
import Link from 'next/link'
import React from 'react' 
import { FaBug } from "react-icons/fa";
import { usePathname } from 'next/navigation';
import classNames from 'classnames';


const NavBar = () => {

  const path = usePathname()
  console.log(path)

  const items = [
    {label:"Dashboard",href:"/"},
    {label:"Issues", href:"/issues"}
  ]

  return (
    <nav className='flex space-x-6 pl-5 border-b items-center h-14 mb-5'>
      <Link href="/"><FaBug/></Link>
      <ul className='flex space-x-6'>
      {items.map(item=> (
        <li key={item.href}>
          <Link href={item.href} className={classNames({
            'text-black':item.href===path,
            'text-zinc-300':item.href!==path,
            'hover:text-black transition-colors':true
          })}>
            {item.label}
          </Link>
        </li>
      ))}
      </ul>
    </nav>
  )
}

// `${item.href===path? 'text-black':'text-zinc-400'} text-zinc-400 hover:text-black transition-colors`}

export default NavBar
