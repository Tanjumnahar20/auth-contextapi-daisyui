/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const Header = () => {

     const {user,logOut} = useContext(AuthContext);

     const handleLogout = ()=>{
      logOut()
      .then(()=>{})
      .catch(error=>console.error(error))
     }

    return (
        <div>
   
<div className="navbar bg-primary text-primary-content">
  <button className="btn btn-ghost text-xl">Auth master</button>
  <Link className='btn btn-ghost text-xl' to='/orders'>Orders</Link>
  <Link className="btn btn-ghost text-xl" to='/'>Home</Link>
{ user &&
 <Link className='btn btn-ghost text-xl' to='/profile'>Profile</Link>
}  <Link className="btn btn-ghost text-xl" to='/register'>Register</Link>
  <Link className="btn btn-ghost text-xl" to='/login'>Login</Link>
  

  {
    user ? <>
    <span>{user.email}</span>
    
   <button onClick={handleLogout} className="btn btn-xs">sign out</button>

    </>:
    <Link to='/login'>login</Link>

  }
</div>
    
</div>
    );
};

export default Header;