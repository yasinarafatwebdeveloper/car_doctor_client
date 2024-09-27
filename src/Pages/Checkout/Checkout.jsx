// import React from 'react';

import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Checkout = () => {
    const checkLoader=useLoaderData()

 const {name,image}=checkLoader


    // console.log(checkLoader)

const handleOrderConfirm=(e)=>{
e.preventDefault()
const form=e.target;
const name=form.name.value;
const email=form.email.value;
const location=form.location.value;
const date=form.date.value;
// console.log(name,email,location,date)

const buierIdentity={

    name,email,location,date, image
}
fetch("https://car-doctor-backend-side.vercel.app/order",{

    method:"POST",
    headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify(buierIdentity)
})
.then(res=>res.json())
.then(data=>{
    console.log(data)
    Swal.fire({
      title: "Order Successfully",
      // text: "You clicked the button!",
      icon: "success"
    });
})
}



    return (
        <div>
          <div className="text-center items-center ">
          <p className="mt-5 text-2xl text-orange-800">{name}</p>

            <img className="w-72 mx-auto mt-6" src={image} alt="" />
          </div>
       



      
      <form onSubmit={handleOrderConfirm} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Location</span>
          </label>
          <input type="text" name="location" placeholder="Location" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input type="date" name="date"  className="input input-bordered" required />
      
        </div>
        <div className="form-control mt-6">
       <button className="btn btn-primary" type="submit">Order Confirm</button>
        </div>
      </form>
    </div>
  
    );
};

export default Checkout;