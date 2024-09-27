import axios from "axios";
import {  useEffect, useState } from "react";
// import IndivitualBook from "../IndivitualBook/IndivitualBook";
// import IndivitualBook from "../IndivitualBook/IndivitualBook";
// import { AuthContext } from "../AuthProvider/AuthProvider";


const BookingService = () => {

// const{user}=useContext(AuthContext)
    const[book,setBook]=useState([])

    
    const handleDeleteOption=(id)=>{

      console.log(id)

const view=confirm("do you want to delete it?")

if(view){


  fetch(`https://car-doctor-backend-side.vercel.app/order/${id}`,{
    method:"DELETE"
  })
  .then(res=>res.json())
  .then(data=>{
    console.log(data)  
    if(data.deletedCount>0){
      alert("yes success fully")
      const setRemaining=book.filter(removeItem=>removeItem._id!==id)
      setBook(setRemaining)
    }
   
  })



}

      }
      
      
    useEffect(()=>{

      axios.get("https://car-doctor-backend-side.vercel.app/order")
      .then(res=>{

      setBook(res.data);
      })
// fetch("https://car-doctor-backend-side.vercel.app/order")
// .then(res=>res.json())
// .then(data=>setBook(data))




    },[])


    return (
        <div>
            {/* <p>{book.length}</p> */}
           



<div className="overflow-x-auto">
  <table className="table ">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Image</th>
        <th>Name</th>
        {/* <th>Favorite Color</th> */}
        <th>Email</th>
      </tr>
    </thead>


    <tbody >
     {
                book.map(indivitualBook=> <tr key={indivitualBook._id}>



                    <th >

<div>
<button onClick={()=>handleDeleteOption(indivitualBook._id)}  className="btn btn-circle btn-outline">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M6 18L18 6M6 6l12 12" />
  </svg>
</button>
</div>
                    
                      <label >
                        {/* <input type="checkbox" className="checkbox" /> */}
                      </label>
                    </th>
                    <td >


                   
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={indivitualBook.image}
                              alt="Avatar Tailwind CSS Component" />
                          </div>
                        </div>
                        <div>
                          {/* <div  className="font-bold">Brice Swyre</div> */}
                          {/* <div className="text-sm opacity-50">China</div> */}
                        </div>
                      </div>
                    </td>
                    <td>
                    {indivitualBook.name}
                      <br />
                      {/* <span className="badge badge-ghost badge-sm">Tax Accountant</span> */}
                    </td>
                    <td>{indivitualBook.email}</td>
                    <th>
                      <button className="btn btn-ghost btn-xs">details</button>
                    </th>
                  </tr>)
            }
    </tbody>


 
 
  
  </table>
</div>
        </div>
    );
};

export default BookingService;