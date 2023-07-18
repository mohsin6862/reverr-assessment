import { Link } from "react-router-dom";

const Navbar = () => {
//   const { user, LogOut } = useContext(AuthContext);
  const handleLogout = () => {
//     LogOut()
//     .then(()=>{
//        localStorage.removeItem('kids-zone-access-token')
//     })
//     .catch(error =>{
//       console.log(error)
//     })
  }
  const navItem = <>
    <li> <Link to='/'> Home </Link> </li>
    <li> <Link to='/blogs'>Blog </Link> </li>
    <li> <Link to='/login'>Log In </Link> </li>

    {/* {user &&
      <button><li > <Link to='/myvehicles'>My Toys </Link> </li></button>
    }
    {user &&
      <li> <Link to='/addvehicles'>Add Toys </Link> </li>
    }

    {user ?
      <li onClick={handleLogout}> <Link>LogOut</Link> </li> : <li> <Link to='/login'>Login</Link> </li>}
    {
      user && <div className="avatar online">
        <div className="w-12 rounded-full">
          <img title={user?.displayName} src={user?.photoURL} />
        </div>
      </div>
    } */}

  </>
  return (
    <div className="navbar bg-base-300 h-28 mb-5">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {navItem}
          </ul>
        </div>
        <Link className="ml-20">
     <h1 className="text-3xl font-bold text-amber-600">Reverr <span className="text-green-600"> Assessment</span></h1>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItem}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="hidden lg:flex gap-2">
          <div className="form-control">
            <input type="text" placeholder="Search" className="input input-bordered" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
