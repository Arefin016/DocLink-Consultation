import logo from "../../../assets/logo.jpg"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../../providers/AuthProvider"
import { Link } from "react-router-dom"

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)

  const handleSignOut = () => {
    logOut().then().catch()
  }

  //Dark and light Mode active
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    localStorage.setItem("theme", theme)
    const localTheme = localStorage.getItem("theme")
    document.querySelector("html").setAttribute("data-theme", localTheme)
  }, [theme])
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("synthwave")
    } else {
      setTheme("light")
    }
  }
  console.log(theme)

  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/services">Services</Link>
      </li>
    </>
  )
  const navItems2 = (
    <>
      <li>
        <Link to="/addService">Add Service</Link>
      </li>
      <li>
        <Link to="/serviceToDo">Service-To-Do</Link>
      </li>
      <li><Link to="/bookedServices">Booked-Services</Link></li>
          <li><Link to="/manageService">Manage Service</Link></li>
      {user?.email ? <>
          <li><Link to="/bookedServices">Booked-Services</Link></li>
          <li><Link to="/manageService">Manage Service</Link></li>
          <button onClick={handleSignOut} className="">
            
          </button>
        </> 
        : 
        (
          <Link to="/login">
            <button></button>
           </Link>
        )
        }
    </>
  )

  return (
      <div className="navbar bg-blue-200 lg:h-20 mt-4 shadow-xl rounded-xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="p-0 btn btn-ghost lg:hidden">
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
              <ul className="p-2">{navItems2}</ul>
            </li>
          </ul>
        </div>
        <Link to="/">
          <img className="lg:h-9 lg:w-9 h-14 w-14" src={logo} alt="" />
        </Link>
        <Link to="/">
          <a className="lg:text-xl text-xs lg:ml-2">DocLink Consult</a>
        </Link>
      </div>
      <div className="navbar-center hidden z-[1] lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems}
          <li>
            <details>
              <summary>Dashboard</summary>
              <ul>{navItems2}</ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end">

        
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="lg:w-10 w-7 rounded-full">
            {user && (
              <span className="lg:tooltip-left" data-tip={user.displayName}>
                <img alt="No Image" src={user.photoURL} />
              </span>
            )}
          </div>
        </div>

        {/* Dark and light mode activated */}
        <label className="swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input
            onChange={handleToggle}
            type="checkbox"
            className="theme-controller"
          />

          {/* sun icon */}
          <svg
            className="swap-off fill-current w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />{" "}
          </svg>

          {/* moon icon */}
          <svg
            className="swap-on fill-current w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>

        {user?.email ? <>
          <button onClick={handleSignOut} className="btn btn-outline btn-primary">
            Sign Out
          </button>
        </> : (
          <Link to="/login">
            <button className="btn btn-outline btn-primary">Login</button>
          </Link>
        )}
      </div>
    </div>
    
  )
}

export default Navbar
