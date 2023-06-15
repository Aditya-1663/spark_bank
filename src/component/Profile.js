// import React from 'react'
import React, { useEffect,useContext,useState,useRef } from 'react'
import Datacontext from '../context/Datacontex'
import {
  BrowserRouter as Router,
  
  Route,  Routes, Link
  
} from "react-router-dom";

import '../style/Home.css'
import '../style/Profile.css'
const Profile = () => {
 

  const [cardential,setcardential]=useState({name:"",email:"",Mo_number:"",amount:"",address:"",account:""})
 const finddata= async()=>{
  
  
 
  const response = await fetch(`http://localhost:5000/addcustomer/finddata/${localStorage.getItem('localdata')}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      
    }
  });
  const json=await response.json();
  setcardential(json.data)
  
 }
 useEffect(()=>{
   
   const jsondata=finddata();

 },[]) 

 const handletransfer=()=>{
  localStorage.setItem('localdata',(cardential._id))

 }


  return (
    <div style={{height:"78vh"}}>

<div className='container myflex1 mb-5 mt-5' style={{  height:"auto"}}>
        Customer Detail</div>

      <section >
    
       
    
    <div class="row">
      <div class="col-lg-4" style={{border:"white solid 2px",marginLeft:"100px",marginRight:"10px"}}>
        <div class="card mb-4"style={{border:"none"}}>
          <div class="card-body text-center">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
              class="rounded-circle img-fluid" style={{width: "150px"}}/>
            <h5 class="my-3">{cardential.name}</h5>
            
            <p class="  mb-4">{cardential.address}</p>
           
          </div>
        </div>
       
      </div>
      <div class="col-lg">
        <div class="card mb-4 mycard" style={{border:"white solid 2px",width:"70%",height:"100%"}}>
          <div class="card-body "style={{border:"none",width:"100%",height:"100%"}}>
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Name</p>
              </div>
              <div class="col-sm-9">
                <p class=" mb-0" style={{color:"white"}}>{cardential.name}</p>
              </div>
              
               
              
            </div>
              <hr/>
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Email</p>
              </div>
              <div class="col-sm-9">
                <p class=" mb-0" style={{color:"white"}}>{cardential.email}</p>
              </div>
            </div>
              <hr/>
         
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Mobile Number</p>
              </div>
              <div class="col-sm-9">
                <p class="  mb-0">{cardential.Mo_number}</p>
              </div>
            </div>
              <hr/>
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Account Number</p>
              </div>
              <div class="col-sm-9">
                <p class="  mb-0">{cardential.account}</p>
              </div>
            </div>
              <hr/>
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Amount</p>
              </div>
              <div class="col-sm-9">
                <p class="  mb-0">{cardential.amount}</p>
              </div>
            </div>
              <hr/>
            <div class="row d-flex mt-3 justify-content-center">
              <div class="col-sm-3">
              <Link  to="/ViewAllAccount/tranferprofile">
              <button onClick={handletransfer} type="submit" class="btn innerbtn " style={{border:"1px white solid"}}>Transfer</button> 
                </Link>
              </div>
              
            </div>
          </div>
        </div>
       
      </div>
    </div>

</section>
    </div>
  )
}

export default Profile
