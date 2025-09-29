import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='bg-gray-800 text-white flex md:flex-row  flex-col justify-between items-center px-2 md:px-10 md:h-14'>
      <div className='font-bold text-lg'><Link href="/"><span>Link<span className='text-blue-400'>Bytes</span></span></Link></div>
      <div className='flex gap-4 justify-center items-center'>
        <ul className='flex md:flex-row flex-col py-2 md:py-0 md:gap-6 px-4'>
          <li><Link href='/' className='hover:font-bold'>Home</Link></li>
          <li><Link href='/about' className='hover:font-bold'>About</Link></li>
          <li><Link href='/contactus' className='hover:font-bold'>Contact Us</Link></li>
        </ul>
        <Link href='/shorten'><button className='bg-white px-3 py-1 rounded-full text-gray-800 font-bold cursor-pointer
             hover:bg-gray-800 hover:text-white hover:border-white border'>Try Now</button></Link>
        <Link href='https://github.com/Daksh-Official' target='_blank'><button className='bg-white px-3 py-1 rounded-full text-gray-800 font-bold cursor-pointer hover:bg-gray-800 hover:text-white hover:border-white border'>Github</button></Link>
      </div>
    </nav>
  )
}

export default Navbar
