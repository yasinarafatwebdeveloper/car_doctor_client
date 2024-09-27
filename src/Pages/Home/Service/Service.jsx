import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Service = () => {

const [service,setService]=useState([])
useEffect(()=>{
fetch("https://car-doctor-backend-side.vercel.app/service")
.then(res=>res.json())
.then(data=>setService(data))
},[])

    return (
        <div>
            <div className="text-center mt-10">
                <h2 className="text-5xl text-orange-600 mt-5">our service cars stay here</h2>
                <p className="text-xl mt-6">Regular vehicle maintenance and service has become a top priority among car owners. This ascertains the car’s life-span and the car owner’s safety as well. It helps in detecting the smallest defects and prevents it from turning into major issues thereby decreasing any service and/or repair expenses. </p>
            </div>
            <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                {
                    service.map(service=><ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Service;