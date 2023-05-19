import { Link } from "react-router-dom";
import logo from '../../assets/images/angrybard.png'
import { useContext } from "react";
import { AuthContext } from "../../page/Provider/AuthProvider";



const NavigationBar = () => {

const { user, logOut } = useContext(AuthContext)

const handelLogOut = () =>{
  logOut()
  .then(()=>{

  })
  .catch(error =>{
    console.log(error)
  })
}

  const navItem = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/blog'>Blog</Link></li>
    <li><Link to='/alltoys'>All Toys</Link></li>
    
    {user ? <>
    <li><Link to='/Mytoys'>My Toys</Link></li>
    <li><Link to='/addtoys'>Add Toys</Link></li>
    <li><button onClick={handelLogOut}>logOut</button></li>
  </>:<li><Link to='/login'>LogIn</Link></li>}

  </>
  return (
    <div className="navbar bg-purple-100 h-28 mb-4">
      <div className="navbar-start">
        <div className="flex-1 flex items-center">
          <div className="avatar">
            <div className="w-20 mask mask-squircle">
              <img src={logo} />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-purple-900 ml-2">Toys-Store</h2>
        </div>
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {navItem}
          </ul>
        </div>
        
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItem}
        </ul>
      </div>
      <div className="navbar-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </label>
      </div>
    </div>
  );
};

export default NavigationBar;