import React, { useState } from 'react'
import {  useParams } from 'react-router-dom'
import useFetch from '../custom/usefetch';
import axios from 'axios';

import { Viewer } from '@react-pdf-viewer/core';
function Eachcomic() {
    const {id} = useParams()
    const auth = window.localStorage.getItem("auth_token")
    const cookie = document.cookie.replace("auth_token=","")
    const [comic] = useFetch(`http://localhost:9000/comics/${id}`)

    const base64toBlob = (data) => {
      // Cut the prefix `data:application/pdf;base64` from the raw base 64
      const base64WithoutPrefix = data.substr('data:application/pdf;base64,'.length);
  
      const bytes = atob(base64WithoutPrefix);
      let length = bytes.length;
      let out = new Uint8Array(length);
  
      while (length--) {
          out[length] = bytes.charCodeAt(length);
      }
  
      return new Blob([out], { type: 'application/pdf' });
    };
    const download = async() =>{
        const response = await axios.get(`http://localhost:9000/comics/${id}/download`)
        const datas = await response.data
        console.log(datas[0].file);
       }

  return (
    <>

    {
      (auth===cookie)?(
        <div className='d-flex align-items-center justify-content-center p-3'>
            {comic.length==0 ?
                          <>Empty list</>
                          :
                          comic.map((item,key) => {
                return <div key={key} >
                              
                    <div className="card text-center  border border-warning  w-75 m-5 ">
                        <div className="card-header border-warning-subtle text-success">
                        <h5 className="card-title">{item.name}</h5>
                        </div>
                        <div className="card-body">
                        <img className="card-img-top" src={`${item.image}`}  alt="Card image cap" />
                           
                            <div className="d-flex justify-content-around  text-danger">
                                <p>Category </p>:
                                <p className='text-primary text-capitalize'>{item.category}</p>
                            </div>

                            <div className="d-flex justify-content-around p-1 text-danger">
                                <p>Written by </p>:
                                <p className='text-primary text-capitalize'>{item.author}</p>
                            </div>

                            <div className="d-flex justify-content-around p-1 text-danger">
                               <p>
                                Year
                                </p > 
                                :
                            <p className='border border-success-subtle rounded px-2 text-primary'>{item.year}</p>
                                <p>
                                    Volume
                                    </p>
                                    :
                            <p className='border border-success-subtle rounded px-2 text-primary'>{item.volume}</p>
                            </div>
                            
                        </div>
                        <div className="card-footer text-muted border-warning-subtle">
                            <p className='text-danger text-decoration-underline'>Synopsis</p>
                            <p className="card-text text-primary text-capitalize fw-light">{item.synopsis}</p> 
        
        
                              <button className='btn btn-primary'  type="submit" onClick={()=>download()}>
                                    Read comic
                                </button>
                               

                        </div>
                    </div>

                 
                               
                </div>;
                          })
              }
      </div>
      ):(
        <Login />
        )
      }
    </>
  )
}

export default Eachcomic
