import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'




const NavbarRouter = () => {

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (

        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#121329] text-gray-300 '>
            {/* Logo Div */}
            <div>
                <img src='/' alt="Logo Image" />
            </div>



            {/* Menu */}
            <ul className=' hidden md:flex md:justify-between w-[400px] pr-4'>
                <li>
                    <Link to="/categories" duration={500}>
                        Categories
                    </Link>
                </li>
                <li>
                    <Link to="/releases" duration={500}>
                        Releases
                    </Link>
                </li>
                <li>
                    <Link to="books" duration={500}>
                        Books
                    </Link>
                </li>
            </ul>

            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10 pr-4'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile Menu */}
            <ul className={!nav ? 'hidden' : 'absolute left-0 top-0 w-full h-screen bg-[#121329]  flex flex-col justify-center items-center '}>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="/categories"  duration={500}>
                        Categories
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="/releases"  duration={500}>
                        Releases
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="/books"  duration={500}>
                        Books
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="/weapons"  duration={500}>
                        Weapons
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="/armor" smooth={true} duration={500}>
                        Armor
                    </Link>
                </li>
            </ul>

            
        </div>
        // end of Main Div


    )

}

export default NavbarRouter