import { useContext } from "react";
import { Link, useLocation, useNavigate} from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
// import axios from "axios";
// import axios from "axios";


const Login = () => {

const{loginItem,user}=useContext(AuthContext)
const location=useLocation()
console.log(location)
const navigate=useNavigate()

const handleLogin=(e)=>{

e.preventDefault();
const form=e.target;
const email=form.email.value;
const password=form.password.value;

loginItem(email,password)

.then(result=>{
    console.log(result.user)
    // navigate(location?.state?location.state:"/")
    // const userItem={email}
    // const userName={email}
    // axios.post("http://localhost:5000/jwt",userName,{withCredentials:true})
    // .then(res=>{

    //   console.log(res.data)
    //   if(res.data){
    //     navigate(location?.state?location.state:"/")
    //   }
    // })
// axios.post("http://localhost:5000/jwt",tokenUser)
// .then(res=>{
//   console.log(res.data)
// })
  navigate(location?.state?location.state:"/")
  

})
.catch(error=>{
    console.log(error)
})


}

    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
        
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <h1 className="text-2xl">Login Here</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            {/* <Link className="text-center text-orange-700 text-xl" to={"/register"}> Register here</Link> */}
            <span className="ml-5 mb-5">New User?
            <Link className="text-center text-orange-700 text-xl" to={"/register"}> Register here</Link>
              </span> 
          </div>
        </div>
      </div>
    );
};

export default Login;