"use client"

import Link from "next/link"

const LINKS = [
  { href:"/tools/literally", text: 'liter-ally' },
  { href:'https://github.com/JakeSchaum/jstb/tree/dev', text: 'Github' } 
             
]

export default function NavBar() {
          //todo-add styling
          //todo - accordion for the tools? maybe later 
  return (
    <nav className="flex justify-end bg-zinc-300 dark:text-zinc-800">
      <div>{/*  */}
        <Link className="px-8 texta text-lg leading-8 text-zinc-600 dark:text-zinc-400" href={LINKS[0].href}>{LINKS[0].text}</Link>
        
      </div>
    </nav>
  )
}