import React from 'react' ;
import {BiLogOut} from "react-icons/bi" ;
import useLogOut from '../../hooks/useLogOut';
import Conversations from './Conversations';
import SearchInput from './SearchInput';


const Sidebar = () => {
    const {loading , logout}= useLogOut();
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col'> 

            {/* Search bar and icon  */}
        <SearchInput/>

      <div className='divider px-3'></div>
          
          {/* Conversations */}
            <Conversations/>


        {/* Logout button */}
        <div className='mt-auto'>
            {!loading ? (
                <BiLogOut className='w-6 h-6 text-white cursor-pointer'
                onClick={logout}/>
            ) : (
                <span className='loading loading-spinner '></span>
            )}
        </div>

     </div>
  )
}

export default Sidebar ;
