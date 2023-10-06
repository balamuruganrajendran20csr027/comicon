import React from 'react'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'

const Navbar =()=> {
   const auth = window.localStorage.getItem("auth_token")
   const cookie = document.cookie.replace("auth_token=","")
   console.log("Navbar" , auth , cookie, auth===cookie);
   const navigate = useNavigate()

    const logout = () =>{
        window.localStorage.clear()
        navigate('/login')
    }

  return (
        <> 
        <nav className="navbar navbar-expand-lg navbar-light bg-primary-subtle">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Comics</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item px-5">
                    <Link to="/" className='nav-link'>Home</Link>
                    </li>
                    <li className="nav-item px-5">
                    <Link to="/movies" className='nav-link'>Movies</Link>
                    </li>
                    <li className="nav-item px-5">
                    <Link to="/comics" className='nav-link'>Comics</Link>
                    </li>
                    <li className="nav-item px-5">
                    <Link to="/series" className='nav-link'>Series</Link>
                    </li>
                    <li className="nav-item px-5">
                    <Link to="/about" className='nav-link'>About</Link>
                    </li>
                    {
                    
                        (auth===cookie)?(
                            <>
                            <li className="nav-item px-5 bg-primary  rounded float-end">
                            <button type='submit' className='nav-link' onClick={logout}>Logout</button>
                            </li>
                            
                            <li className="nav-item px-5 text-primary p-2">
                            {window.localStorage.getItem("user")}
                            </li>
                            </>
                        ):(
                            <>
                            <li className="nav-item px-5 bg-primary  rounded float-end">
                            <Link to="/login" className='nav-link'>Login</Link>
                            </li>
                            </>
                        )
                    }
                    
                </ul>
                </div>
            </div>
        </nav>
        </>
  )
}

export default Navbar

