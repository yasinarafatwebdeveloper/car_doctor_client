import { useContext } from "react";
import {  Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Pages/AuthProvider/AuthProvider";
import imageLogo from"../../../image/carLogo.jpg"

const Navbar = () => {
  const{user,Logout}=useContext(AuthContext)

const handleLogout=()=>{
  Logout()
.then(()=>{

})
.catch((error)=>{
console.log(error)
})
}

const navInfo=<>

{/* <NavLink  className="text-xl hover:text-white " to={"/"}><li><a>Home</a></li></NavLink> */}
<NavLink
   to="/"
   className={({ isActive }) => {
   return isActive ? "btn btn-primary" : "btn btn-ghost";
   }}
   >
   Home
</NavLink>
{/* <Link to={"/about"}><li><a>About</a></li></Link> */}
<NavLink
   to="/about"
   className={({ isActive }) => {
   return isActive ? "btn btn-primary" : "btn btn-ghost";
   }}
   >
   About
</NavLink>
{
  user?<>
  {/* <Link to={"/book"}><li> <a>Booking item</a> </li></Link> */}

  <NavLink
   to="/book"
   className={({ isActive }) => {
   return isActive ? "btn btn-primary" : "btn btn-ghost";
   }}
   >
   Booking_Items
</NavLink>
  <li className="mt-1 text-sm"><button onClick={handleLogout}>Log out</button></li>
  </>:<NavLink
   to="/login"
   className={({ isActive }) => {
   return isActive ? "btn btn-primary" : "btn btn-ghost";
   }}
   >
   Login
</NavLink>
}



</>


    return (
        <div className="navbar bg-base-100 bg-emerald-400 py-6 sticky top-0 z-50 rounded">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {navInfo}
      </ul>
    </div>
    {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
    <Link to={"/car"}><a href="">
    <img className="w-16 animate-pulse mb-5 rounded-2xl" src={imageLogo} alt="" />
      </a></Link>
   
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navInfo}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
    );
};

export default Navbar;