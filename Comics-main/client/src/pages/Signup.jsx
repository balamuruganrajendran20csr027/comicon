import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
    const [userName,setUserName] = useState("")
    const [password,setPassword] = useState("")
    const [confirmPassword,setConfirmPassword] = useState("")
    
  const navigate =useNavigate()
  
  const notify = (value) => toast.error(value);
  const notifysuccess = (value) => toast.success(value);


  const handleUsername = (e) =>{
      setUserName(e.target.value)
    }
    const handlePassword = (e) =>{
      setPassword(e.target.value)
    }
    const handleConfirmPassword = (e) =>{
      setConfirmPassword(e.target.value)
    }
    
    const handleSubmit = (e) =>{
      e.preventDefault();
        if(password === confirmPassword && password.length>=8 && userName.length>=8){
            axios.post("http://localhost:9000/signup", {
                userName,
                password
            },{ headers: {
              'Content-Type': 'application/json'
            }})
            .then((response) => {
              if(!response.data.success)
              {
                  notify("Kindly try other username")
              }
              if(response.data.success){
                notifysuccess("Account created")
                setTimeout(()=>{
                  navigate("/login")
                },2000) 
              }       
            });
        }else if(password.length<8 && userName.length<8){
            notify("Username and password  should be atleat 8 characters")
        }
        else{
           notify("password not mactching")
        }
    }

  return (
    <> 
    <div className="border border-2 border-warning p-2 m-5 bg-secondary-subtle">
        <h2>Sign up</h2>
        <div className='login-container'>
              <div className="container px-4 text-center p-2">
                <div className="row gx-12 ">
                  <div className="col">
                        <div className="input-group mb-3 ">
                            <div className="form-floating ">
                              <input type="text" className="form-control border border-primary-subtle" id="floatingInputGroup1" placeholder="Username" onChange={(e)=>handleUsername(e)}/>
                              <label htmlFor="floatingInputGroup1">Username</label>
                            </div>
                      </div>
                    
                  </div>                 
                </div>
              </div>
              <div className="container px-4 text-center p-1">
                <div className="row gx-12 ">
                  <div className="col">
                      <div className="form-floating ">
                        <input type="password" className="form-control border border-primary-subtle" id="floatingPassword" placeholder="Password" onChange={(e)=>handlePassword(e)}/>
                        <label htmlFor="floatingPassword">Password</label>
                      </div>
                  </div>
                </div>
              </div>
              <div className="container px-4 text-center p-3">
                <div className="row gx-12 ">
                  <div className="col ">
                      <div className="form-floating ">
                        <input type="password" className="form-control border border-primary-subtle" id="floatingPassword2" placeholder="Password" onChange={(e)=>handleConfirmPassword(e)}/>
                        <label htmlFor="floatingPassword">Confirm Password</label>
                      </div>
                  </div>
                </div>
              </div>
              <div className='container px-4 text-left m-1 p-2 ' >
              <button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button>              
                  <ToastContainer />
                  </div>

                

        </div>
    </div>
    </>
  )
}

export default Signup
