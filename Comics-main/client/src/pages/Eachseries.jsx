import React from 'react'
import {  useParams } from 'react-router-dom'
import useFetch from '../custom/usefetch';

function Eachseries() {
    const {id} = useParams()
    const auth = window.localStorage.getItem("auth_token")
    const cookie = document.cookie.replace("auth_token=","")
    const [series] = useFetch(`http://localhost:9000/series/${id}`)

  return (
    <>

    {
      (auth===cookie)?(
        <div className='d-flex align-items-center justify-content-center p-3'>
            {series.length==0 ?
                          <>Empty list</>
                          :
                          series.map((item,key) => {
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
                                <p>Directed by </p>:
                                <p className='text-primary text-capitalize'>{item.director}</p>
                            </div>
                            <div className="d-flex justify-content-around p-1 text-danger">
                                <p>Cast  </p>:
                                <p className='text-primary text-capitalize'>{item.cast.map((element,unique)=>{
                                return (
                                    <div key={unique}>
                                        {element}
                                    </div >
                                )})}</p>
                            </div>
                            <div className="d-flex justify-content-around p-1 text-danger">
                               <p>
                                Year
                                </p > 
                                :
                            <p className='border border-success-subtle rounded px-2 text-primary'>{item.year}</p>
                                <p>
                                    Rating 
                                    </p>
                                    :
                            <p className='border border-success-subtle rounded px-2 text-primary'>{item.rating}</p>
                            </div>
                            <div className="d-flex justify-content-around p-1 text-danger">
                                <p>Duration </p>:
                            <p className='text-primary'>{item.duration}</p>
                            </div>
                        </div>
                        <div className="card-footer text-muted border-warning-subtle">
                            <p className='text-danger text-decoration-underline'>Synopsis</p>
                            <p className="card-text text-primary text-capitalize fw-light">{item.synopsis}</p> 
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

export default Eachseries
