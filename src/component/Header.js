import { useContext, useState } from 'react';
import {LOGO_URL} from '../utils/constants'
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineSatus';
import UserContext from '../utils/UserContext';

import { useSelector } from 'react-redux';

const Header = () =>{
  
      const [status , setStatus] = useState('Login')
      const onlineStatus = useOnlineStatus();
      const {loggedInUser} = useContext(UserContext)
      
      console.log(onlineStatus )
      const cartItems = useSelector((store)=> store.cart.items)
      console.log("CSd", cartItems)
  return (
  <div className='flex justify-between bg-pink-200 shadow-xl sm:bg-yellow-50 sticky top-0'>
        <div className='w-28'>
          <img
          className='logo'
          src={LOGO_URL}
          />
        </div>    
        <div className='flex'>
          <ul className='flex p-11' >
            <li className='px-5'>Online Status:{onlineStatus? "✅" : "❌"}</li>
            <li className='px-5' ><Link to=''>Home</Link></li>
            <li className='px-5'><Link to='/about'>About Us</Link></li>
            <li className='px-5'><Link to='/contact' >Contact Us</Link></li>
            <li className='px-5'><Link to='/grocery' >Grocery</Link></li>
            <li className='px-5 font-bold'>
               <Link to='/cart' >Cart-{`(${cartItems.length} Items)`}</Link>
              </li>
            <li className='px-5 font-bold'>{loggedInUser}</li>
            <li className='px-5'><button className='login-btn'
              onClick={()=>{
                if(status=="Login") setStatus('Logout')
                  else setStatus ("Login");
              }}>{status}</button></li>
          </ul>
        </div>
  </div>
)}
export default Header;