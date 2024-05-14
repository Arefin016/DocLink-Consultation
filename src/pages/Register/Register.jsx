// import { Helmet } from "react-helmet"
import { Link, useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa"
import { AuthContext } from "../../providers/AuthProvider"
import { Helmet } from "react-helmet-async"
import Swal from "sweetalert2"
import { Fade } from "react-awesome-reveal"

const Register = () => {
  const { createUser } = useContext(AuthContext)
  const [registerError, setRegisterError] = useState("")
  const [success, setSuccess] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  const handleRegister = (e) => {
    e.preventDefault()
    console.log(e.currentTarget)
    const form = new FormData(e.currentTarget)
    const name = form.get("name")
    const photo = form.get("photo")
    const email = form.get("email")
    const password = form.get("password")
    console.log(name, photo, email, password)

    //reset error
    setRegisterError("")
    setSuccess("")

    //Password should be 6 character
    if (password.length < 6) {
      setRegisterError("Password should be at least 6 characters")
      return
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError("Your Password should be at least one uppercase")
      return
    } else if (!/[a-z]/.test(password)) {
      setRegisterError("Your Password should be at least one lowercase")
      return
    }

    // //reset error
    setRegisterError("")
    setSuccess("")

    //create user
    createUser(email, password)
      .then((result) => {
        console.log(result.user)
        setSuccess("User Created Successfully")

        Swal.fire({
          position: "top",
          icon: "success",
          title: "User Created Successfully",
          showConfirmButton: false,
          timer: 1500,
        })

        //navigation after register
        navigate(location?.state ? location.state : "/login")
      })
      .catch((error) => {
        console.error(error)
        setRegisterError(error.message)
      })
  }

  return (
    <Fade direction="right">
      <div className="lg:mt-10 mt-5 bg-gray-200 lg:py-10 mb-5">
        <Helmet>
          <title>Register</title>
        </Helmet>
        <div>
          <h2 className="text-3xl text-center font-bold text-black">
            Please Register
          </h2>
          <form
            onSubmit={handleRegister}
            className="card-body lg:w-1/2 mx-auto"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Photo URL"
                name="photo"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  className="input input-bordered w-full lg:w-full"
                  required
                />
                <span
                  className="absolute top-4 right-2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </span>
              </div>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
              {registerError && (
                <p className="text-red-700 text-center">{registerError}</p>
              )}
              {success}
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>

          <p className="text-center mb-5">
            Already have an account? Please{" "}
            <Link className="text-blue-600 font-bold" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </Fade>
  )
}

export default Register
