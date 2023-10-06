import React from 'react'
import Login from './Login'
import useFetch from '../custom/usefetch'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { useNavigate } from 'react-router-dom';

import PuffLoader from "react-spinners/PuffLoader";

function Series() {
  const auth = window.localStorage.getItem("auth_token")
  const cookie = document.cookie.replace("auth_token=","")
  const [series] = useFetch("http://localhost:9000/series")
  const navigate = useNavigate()
  const handleClick = async(id) =>{
      navigate(`/series/${id}`)
  }

  const notify = (value) => toast.error(value);
  const notifysuccess = (value) => toast.success(value);

  const override = {
    display: 'block',
    margin: '10% auto'
  };

  return (
    <>
    <h3>Series</h3>
      {
      (auth===cookie)?(
        <>
        <CardGroup>

            {series.length==0 ?
                          <div className='w-100 p-5'>
                              <PuffLoader cssOverride={override} size={60} />
                          </div>

                          :

                          series.map((item,key) => {
                            return <div key={key}>
                                      <Card className='m-2'>
                                        <Card.Img variant="top" src={`${item.image}`} />
                                        <Card.Body>
                                          <Card.Title>{item.name}</Card.Title>
                                          <Card.Text>
                                            This is a wider card with supporting text below as a natural lead-in
                                            to additional content. This content is a little bit longer.
                                          </Card.Text>
                                        </Card.Body>
                                        <Card.Footer>
                                          <small className="text-muted">  <button className="btn btn-primary" onClick={()=>handleClick(item._id)}>View more</button></small>
                                        </Card.Footer>
                                      </Card>
                              </div>;
                          })
              }
                        
        </CardGroup>
        </>
      ):(
        <Login />
        )
      }
    </>
  )
}

export default Series
