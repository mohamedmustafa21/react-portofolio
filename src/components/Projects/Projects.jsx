import  {React, useEffect,useState} from 'react'
import DATA from '../../Data'
import './projects.css'
import { NavLink  } from 'react-router-dom';
// import axios from 'axios';


function Projects() {
   







    const cardItem = (item)=>{
        return(
          <div className="card my-5   " key={item.id}  style={{width: "25rem"}}>
        <img  style={{height: "15rem"}} src={item.img} className="card-img-top " alt={item.title}/>
            <h4>{item.title}</h4>
            <h5 >You Can See <a href={item.desc} className='link-project'>Click Here <i className="fa-solid fa-eye"></i></a>  </h5>
            
      </div>
        );
      }
     
    

   
  
    
  
  return (
    <div>
    <div className="container py-2">
      <div className="row">
        <div className="col-md-12 text-center">
            <h1 className='fw-bolder mt-2'>Projects <i className="fa-solid fa-list-check"></i></h1>
            <hr />
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row justify-content-around">
        {DATA.map(cardItem)}
      </div>
    </div>
  

  </div>
  
  
  )
}

export default Projects
