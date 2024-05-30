import { useState } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { Outlet, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

function Login() {
  const [login,setLogin]=useState();
  const [data,setData]=useState();
  let refreshregister = useNavigate();
  let loginNav = useNavigate();

let handleChange=(event)=>{
setData({...data,[event.target.name] : event.target.value})
}

  const toggleForm=()=>{
    setLogin(!login);

  }
//-----------------------------Login-----------------------------------

let handleLogin = async(e)=>{
  e.preventDefault()
  try{
    let response = await axios.post('http://localhost:4000/login',data);
    toast.success('Login Success!!')
    loginNav('/UserHome')
    localStorage.setItem('token',response.data.token)

  }
  catch(e){
    console.log(e.response.data);
    toast.error(e.response.data);
  }
}
//-----------------------------Register-----------------------------------


let handleRegister =async (e) =>{
  e.preventDefault()
  let response = await axios.post('http://localhost:4000/register',data)
  console.log(response);
  toast.success('Registerd Successfully!!')
  setLogin(login);
  


  
}

  return (
    <div>
      <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
    
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <div className="card p-4 shadow" style={{ maxWidth: '400px', width: '100%' }}>
        <h3 className="card-title text-center mb-4">{login ? 'Login':'Register'}</h3>
            <form>

              <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" className="form-control" name="username" placeholder="Enter your username" onChange={handleChange}/>
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" name="password" placeholder="Enter your password" onChange={handleChange}/>
              </div>

              <div className="d-grid gap-2">
                <button type="submit" className="btn btn-primary" onClick={login?handleLogin:handleRegister}>{login ? "Login":"Register"}</button>
              </div>

            </form>
        <div className="text-center mt-3">
          <p>{login ? "Don't have an account?" : "Already have an account?"} <a href="#" onClick={toggleForm}>{login? "Register":"Login"}</a></p>
        </div>
      </div>
    </div>
    <Outlet/>
    </div>
  );
}

export default Login;
