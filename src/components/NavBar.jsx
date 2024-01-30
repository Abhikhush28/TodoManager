import React from 'react'

const NavBar = () => {
  return (
    <div className='sticky top-0'>
      <ul className=' hidden md:flex text-3xl justify-around p-3 bg-green-300 text-green-800 '>
        
        <li>
            <a href='https://www.linkedin.com/in/techabhiexe/' className='inline-flex items-center'> <img src="./img/linkedin.png"alt="" className='mr-3 w-10 h-10' />LinkedIn</a>
        </li>


        <li><a href='https://www.facebook.com/abhi.khush.399' className='inline-flex items-center' >
            <img src="./img/fb.png"alt="" className='mr-3 w-10 h-10' />
            Facebook</a>
        </li>

        <li><a href='https://www.instagram.com/devil_abhi.exe/' className='inline-flex items-center' >
            <img src="./img/ig.png"alt="" className='mr-3 w-10 h-10' />
            Instagram</a>
        </li>
        <li>
            <a  href='' className='inline-flex items-center' >
            <img src="./img/github.png"alt="" className='mr-3 w-10 h-10' />
                Github</a>
        </li>
        <li>
            <a  href='https://github.com/Abhikhush28' className='inline-flex items-center'>
            <img src="./img/portfolio.png"alt="" className='mr-3 w-10 h-10' />
            PortFolio</a>
        </li>
      </ul>
    </div>
  )
}

export default NavBar;
