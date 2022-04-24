import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { a, Auth, Hub } from 'aws-amplify'
import "../configureAmplify"
const Navbar = () => {
  const [signedInUser, setSignedInUser] = useState(false);

  const authListnr = async ()=>{
    Hub.listen('auth', (data)=> {
      switch(data.payload.event){
         case "sign in" :
           return setSignedInUser(true)
         case "Sign Out" :
           return setSignedInUser(false)
      }
    })
    try{
       await Auth.currentAuthenticatedUser()
       setSignedInUser(true)
    }catch(error){

    }
  }

  useEffect(()=>{
     authListnr()
  },[])

  return (
    <div>
       <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
        <div class="container flex flex-wrap justify-between items-center mx-auto">
         <a href="/*" class="flex items-center">
        <span class="self-center text-xl mx-20 font-semibold whitespace-nowrap dark:text-white">Vlogapp</span>
       </a>

  <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1 mx-20" id="mobile-menu-2">
    <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
      <li>
        <Link to="/" class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</Link>
      </li>
      <li>
        <Link to="/createPost" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Create Post</Link>
      </li>
      <li>
        <Link to="/profile" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Profile</Link>
      </li>
      {signedInUser && (
              <li>
              <Link to="/myPosts" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">MyPosts</Link>
            </li>
      )}
    </ul>
  </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar