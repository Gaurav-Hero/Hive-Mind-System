import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/LogoWName.png'

const Footer = () => {
  return (
    <footer class="bg-white dark:bg-gray-800 w-full">
      <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <div class="text-sm text-gray-500 dark:text-gray-400 flex flex-col text-center md:text-left">
          <img src={logo} alt="Logo" className='mx-auto md:mx-0 w-[30%] md:w-[10%]'/>
          <span>
          © 2023 
          </span>
          <Link to={"/"} class="hover:underline">Hive-Mind™</Link>All Rights Reserved.
        </div>
        <ul class="flex items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link to={"/about"} class="hover:underline me-4 md:me-6">About</Link>
          </li>
          <li>
            <Link to={"/policy"} class="hover:underline me-4 md:me-6">Privacy Policy</Link>
          </li>
          <li>
            <Link to={"/license"} class="hover:underline me-4 md:me-6">Licensing</Link>
          </li>
          <li>
            <Link to="/contact" class="hover:underline" >Contact</Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
