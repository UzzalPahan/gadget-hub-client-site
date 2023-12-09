import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProviders";
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";


const SignIn = () => {
    const {googleLogin, githubLogin, facebookLogin} = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const [images, setImage] = useState();

    const googleSignin = () =>{
      googleLogin(googleProvider)
      .then(res => {
        console.log(res)
      })
      .catch(error => {
        console.log(error)
      })
    }
    const githubSignin = () => {
      githubLogin(githubProvider)
      .then(res => {
        console.log(res)
      })
      .catch(error => {
        console.log(error)
      })
    }
    const facebookSignin = () => {
      facebookLogin(facebookProvider)
      .then(res => {
        console.log(res)
      })
      .catch(error => {
        console.log(error)
      })

    }

    
  return (
    <div>
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
      <h2 className="text-4xl text-center">Sign in</h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
          <div className="text-center">
          Do not have an account
          <Link to={'/register'}>
            <button className="underline text-red-400 pl-2"> Register</button>
          </Link>
          </div>
          <p className="text-center">Sign in with </p>
          <div className="flex justify-center gap-2">
            <button className="text-2xl py-4" onClick={googleSignin}><FaGoogle></FaGoogle></button><br />
            <button className="text-2xl py-4" onClick={githubSignin}><FaGithub></FaGithub></button><br />
            <button className="text-2xl py-4" onClick={facebookSignin}><FaFacebook></FaFacebook></button>
          </div>
        {/* <img src={images?.photoURL} alt="" /> */}
    </div>
  </div>
</div>
    </div>
  )
}

export default SignIn