import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { authActions } from "../store/auth";
import { useDispatch } from "react-redux";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setformData] = useState({
    email:"",
    password:"",
  })
const handleChange = (e)=>{
  const {name, value}=e.target;
  setformData({...formData, [name]:value});
};
const handleSubmit = async (e)=>{
  e.preventDefault();
  try {
    if(formData.email === "" || formData.password === ""){
      alert("All fields required");
    }else{
      const response = await axios.post("http://localhost:5000/auth/login", formData);
      dispatch(authActions.login());
//Implementing admin role using reducer changerole
      dispatch(authActions.changeRole(response.data.role));

    localStorage.setItem("id",response.data.userId);
    localStorage.setItem("token",response.data.token);
    localStorage.setItem("role",response.data.role);
      navigate("/dashboard")
    } 
  } catch (error) {
    alert(error.response.data.message)
  }
}
  return (
    <div className="h-[84vh] bg-cyan-700 px-12 py-8 flex items-center justify-center">
      <div className="bg-cyan-950 rounded-lg px-8 py-5 w-full md:w-3/6 lg:w-2/6">
      <p className="text-cyan-400 text-xl mb-5">Log In</p>
        <form className="max-w-md mx-auto">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="email"
              name="email"
              id="email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label
              htmlFor=""
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email ID
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="password"
              name="password"
              id="password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label
              htmlFor=""
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
          </div>
          <button
            type="submit"
            className="text-cyan-400 bg-cyan-900 border w-full border-cyan-200 hover:bg-cyan-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
          onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login