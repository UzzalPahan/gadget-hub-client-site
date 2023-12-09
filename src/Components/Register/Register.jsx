import { Link } from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProviders";



const Register = () => {
    const {createUser} = useContext(AuthContext)
    const registerBtn = e =>{
        e.preventDefault();

        const form = e.target;
        // const user = form.username.value;
        // const profile_Img = form.profileUrl.value;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(user, profile_Img, email, password);
        createUser(email, password)
        .then(res => console.log(res))
        .catch(error => {
            console.log(error);
        })



    }

  return (
    <div>
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={registerBtn} className="card-body">
        <h2 className="text-4xl text-center">Sign up</h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text">UserName</span>
          </label>
          <input type="text" placeholder="username" name="username" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Profile image</span>
          </label>
          <input type="text" placeholder="profile image url" name="profileUrl" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
        <Link to={'/login'} className="text-center">
          Already have an Account <button className="underline text-red-400">Sign In</button>
        </Link>
    </div>
  </div>
</div>
    </div>
  )
}

export default Register