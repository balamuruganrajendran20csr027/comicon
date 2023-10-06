import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import "../App.css"
import { Link } from 'react-router-dom';
import { Cookies, useCookies } from 'react-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  

const Login = () => {
  const notify = (value) => toast.error(value);
  const notifysuccess = (value) => toast.success(value);


  const [userName,setUserName] = useState("")
  const [password,setPassword] = useState("")
  const [displayPassword,setdisplayPassword]=useState(false)

  const [cookies,setCookies]=useCookies()

  const navigate =useNavigate()
  
  const handleUsername = (e) =>{
      setUserName(e.target.value)
    }
    const handlePassword = (e) =>{
      setPassword(e.target.value)
    }
    const showPassword = (displayPassword) =>{
            setdisplayPassword(displayPassword)
    }
    const handleSubmit = async(e) =>{
      e.preventDefault();

     await axios.post("http://localhost:9000/login", {
          userName,
          password
        },{
          headers: {
          'Content-Type': 'application/json'
        }
      })
        .then((response) => {
          console.log(response.data);
          if(!response.data.success){
            notify("invalid username or password")
          }
          if(response.data.success){
              
             

              notifysuccess("Login Successful")
              setTimeout(() => {
                window.localStorage.setItem("auth_token",response.data.jwt_token)
                setCookies("auth_token",response.data.jwt_token,{
                  maxAge: 3600 * 24 * 7,
                  SameSite:'Strict',
                  Secure:true
                })
                window.localStorage.setItem("user",userName)
                navigate("/")
              }, 2000);
          }
        });
      
    }

  return (
    <> 

    <div className='login-container'>
    <div className="border border-2 border-warning m-5 p-2 bg-secondary-subtle">
        <h2>Login</h2>
              <div className="container px-4 text-center p-2">
                <div className="row gx-6">
                  <div className="col">
                        <div className="input-group mb-3">
                            <div className="form-floating ">
                              <input type="text" className="form-control border border-primary-subtle" id="floatingInputGroup1" placeholder="Username" onChange={(e)=>handleUsername(e)}/>
                              <label htmlFor="floatingInputGroup1">Username</label>
                            </div>
                      </div>
                  </div>                 
                </div>
              </div>
              <div className="container px-4 text-center">
                <div className="row gx-6">
                  <div className="col">
                      <div className="form-floating">
                        <input type={!displayPassword ? "password" : "text"} className="form-control border border-primary-subtle" id="floatingPassword" placeholder="Password" onChange={(e)=>handlePassword(e)}/>
                        <label htmlFor="floatingPassword">Password</label>
                      </div>
                  </div>
                </div>
              </div>
              <br></br>
              <div className="container p-1">
                        <input type="checkbox" className='border border-primary-subtle' onChange={(e)=>showPassword(!displayPassword)}/>
                        <label htmlFor="showPassword" className='px-2'>Show Password</label>
              </div>
              
              <button type="button" className="btn btn-primary p" onClick={handleSubmit}>Submit</button>  
              <br></br>            
        <div className='container px-4 text-left m-1 p-2 bg-dark-subtle' onClick={notify}>
           Create a new account :  <Link to="/signup">Signup</Link>
        <ToastContainer />
        </div>
        
        

        </div>
    </div>
    </>
  )
}

export default Login
