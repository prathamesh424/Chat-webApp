import React from 'react' ;
import {IoSearchSharp } from "react-icons/io5" ;
import {BiLogOut} from "react-icons/bi" ;
import Conversation from './Conversation';


const Sidebar = () => {
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col'> 

            {/* Search bar and icon  */}
        <div>
            <form className='flex items-center gap-2'>
                <input type='text' placeholder='Search...' className='input input-bordered rounded-full' /> 
                <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
                    <IoSearchSharp className= "w-6 h-6 outline-none"/>
                </button>
            </form>
        </div>

      <div className='divider px-3'></div>
          
          {/* Conversations */}

        <div className='py-2 flex-col overflow-auto'>
            <Conversation/>
            <Conversation/>
            <Conversation/>
            <Conversation/>
            <Conversation/>
            <Conversation/>
        </div>

        {/* Logout button */}
        <div className='mt-auto'>
            <BiLogOut className='w-6 h-6 text-white cursor-pointer'/>
        </div>

     </div>
  )
}

export default Sidebar ;
