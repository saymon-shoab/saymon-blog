import React from 'react'
import { Link } from 'react-router-dom'
import "../configureAmplify"
const Navbar = () => {
  return (
    <div>
       <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
        <div class="container flex flex-wrap justify-between items-center mx-auto">
         <a href="https://flowbite.com" class="flex items-center">
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Vlogapp</span>
       </a>

  <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1 mx-20" id="mobile-menu-2">
    <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
      <li>
        <Link to="/" class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</Link>
      </li>
      <li>
        <Link to="/createpost" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Create Post</Link>
      </li>
      <li>
        <Link to="/profile" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Profile</Link>
      </li>
    </ul>
  </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar