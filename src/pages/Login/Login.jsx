import { useContext, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { FaGithub, FaGoogle } from "react-icons/fa"
import { AuthContext } from "../../providers/AuthProvider"
import { Helmet } from "react-helmet-async"
import Swal from "sweetalert2"
import { Fade } from "react-awesome-reveal"

const Login = () => {
  const { signIn, signInWithGoogle, signInWithGithub } = useContext(AuthContext)
  const [loginError, setLoginError] = useState("")
  const [success, setSuccess] = useState("")
  const location = useLocation()
  const navigate = useNavigate()
  console.log("Location in the login page", location)

  const handleLogin = (e) => {
    e.preventDefault()
    console.log(e.currentTarget)
    const form = new FormData(e.currentTarget)
    const email = form.get("email")
    const password = form.get("password")
    console.log(email, password)

    //reset error
    setLoginError("")
    setSuccess("")

    //Password should be 6 character
    if (password.length < 6) {
      setLoginError("Password should be at least 6 characters")
      return
    } else if (!/[A-Z]/.test(password)) {
      setLoginError("Your Password should be at least one uppercase")
      return
    } else if (!/[a-z]/.test(password)) {
      setLoginError("Your Password should be at least one lowercase")
      return
    }

    signIn(email, password)
      .then((result) => {
        console.log(result.user)
        setSuccess("User Login Successfully")

        Swal.fire({
          position: "top",
          icon: "success",
          title: "User Login Successfully",
          showConfirmButton: false,
          timer: 1500,
        })

        //navigate after login
        navigate(location?.state ? location.state : "/")
      })
      .catch((error) => {
        console.error(error)
        setLoginError(error.message)
      })
  }
  //FOR GOOGLE SIGN IN
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user)
        Swal.fire({
          position: "top",
          icon: "success",
          title: "User Login Successfully",
          showConfirmButton: false,
          timer: 1500,
        })
        navigate(location?.state ? location.state : "/")
      })
      .catch((error) => {
        console.log(error)
      })
  }

  //FOR GITHUB SIGN IN
  const handleGithubSignIn = () => {
    signInWithGithub()
      .then((result) => {
        console.log(result.user)
        navigate(location?.state ? location.state : "/")
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <Fade direction="right">
      <div className="lg:mt-10 mt-5 bg-lime-200 lg:py-10 mb-5">
        <Helmet>
          <title>Login</title>
        </Helmet>
        <div>
          <h2 className="text-3xl text-center font-bold text-black">
            Login Now
          </h2>
          <form
            onSubmit={handleLogin}
            className="card-body md:w-3/4 lg:w-1/2 mx-auto"
          >
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
              <input
                type="password"
                placeholder="Password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
              {loginError && (
                <p className="text-red-700 text-center">{loginError}</p>
              )}
              {
                success

                // alert("User Login Successfully")
                // Swal.fire({
                //   position: "top",
                //   icon: "success",
                //   title: "User Created Successfully",
                //   showConfirmButton: false,
                //   timer: 1500
                // })
              }
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>

          {/* {/*Login With Google And Github  */}
          <div className="lg:ml-[360px] p-4 space-y-3 ml-10">
            <h2 className="text-3xl lg:ml-[170px]">Login With</h2>
            <div className="lg:ml-24">
              <button
                data-aos="fade-up"
                data-aos-duration="2000"
                onClick={handleGoogleSignIn}
                className="btn btn-outline w-1/5"
              >
                <FaGoogle />
                Google
              </button>
              <button
                data-aos="fade-up"
                data-aos-duration="2000"
                onClick={handleGithubSignIn}
                className="btn btn-outline w-1/5 ml-2"
              >
                <FaGithub />
                Github
              </button>
            </div>
          </div>
          <div className="mr-4">
            <p
              data-aos="fade-up"
              data-aos-duration="2000"
              className="text-center mb-5"
            >
              Do not have an account? Please{" "}
              <Link className="text-blue-600 font-bold" to="/register">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Fade>
  )
}

export default Login
