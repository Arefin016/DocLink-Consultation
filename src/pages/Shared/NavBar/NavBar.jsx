import { Link} from "react-router-dom"
import logo from "../../../assets/logo.jpg"

const NavBar = () => {
  const navItems = (
    <>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/services">Services</Link></li>
    </>
  )
  const navItems2 = (
    <>
      <li><Link to="">Add Service</Link></li>
      <li><Link to="">Manage Service</Link></li>
      <li><Link to="">Booked-Services</Link></li>
      <li><Link to="">Service-To-Do</Link></li>
    </>
  )

  return (
    <div className="navbar bg-base-100 lg:h-24">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
            <li>
              <a>Dashboard</a>
              <ul className="p-2">
                {navItems2}
              </ul>
            </li>
          </ul>
        </div>
        <Link to="/">
          <img className="lg:h-9 lg:w-9 h-14 w-14" src={logo} alt="" />
        </Link>
        <Link to="/">
          <a className="text-xl">DocLink Consult</a>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems}
          <li>
            <details>
              <summary>Dashboard</summary>
              <ul>
                {navItems2}
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
       <Link to="/login"> 
       <a className="btn btn-outline btn-primary">Login</a>
       </Link>
      </div>
    </div>
  )
}

export default NavBar
