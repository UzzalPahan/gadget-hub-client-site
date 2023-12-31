import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../AuthProvider/AuthProviders"


const Navbar = () => {
  const {users, logOut} = useContext(AuthContext)

  const handleLogOut = () =>{
    logOut()
    .then(res =>{
      console.log(res)
    })
    .catch(error =>{
      console.log(error);
    })

  }
  return (
    <div className="navbar bg-gray-700">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <Link to={'/'} className="btn btn-ghost normal-case text-xl text-black font-normal">Home</Link>
     <Link to={'/addproduct'} className="btn btn-ghost normal-case text-xl text-black font-normal">Add Product</Link>
     <Link to={'/carts'} className="btn btn-ghost normal-case text-xl text-black font-normal">My Cart</Link>
        </ul>
      </div>
     <Link to={'/'} className="btn btn-ghost normal-case text-2xl text-white">GadgetHub</Link>

    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
     <Link to={'/'} className="btn btn-ghost normal-case text-xl text-white font-normal">Home</Link>
     <Link to={'/addproduct'} className="btn btn-ghost normal-case text-xl text-white font-normal">Add Products</Link>
     <Link to={'/carts'} className="btn btn-ghost normal-case text-xl text-white font-normal">My Cart</Link>
     </ul>
    </div>
    <div className="navbar-end">


    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost lg:hidden btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={users?.photoURL} />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between text-black">
          {users?.displayName}
          </a>
        </li>
        <li onClick={handleLogOut}><a>Logout</a></li>
      </ul>
    </div>

   

      <div className="flex-none">
  {users? 
    
    <>
    <li className="btn btn-ghost normal-case text-xl text-white font-normal"><a>{users?.displayName}</a></li>
    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={users?.photoURL}/>
        </div>
      </label>
      <li className="btn btn-ghost normal-case text-xl text-white font-normal" onClick={handleLogOut}><a>Logout</a></li>
      </>
      :
    <Link className="btn btn-ghost normal-case text-xl text-white font-normal" to={'/login'}>Login</Link>
  }
  </div>
    </div>
  </div>

  )
}

export default Navbar