
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const{_id,name,image,description,price}=service
    return (
        <div>
            
            <div className="card card-compact w-80 mt-7 bg-base-100 shadow-xl container h-full">
  <figure>
    <img
       className="w-full" src={image}
      alt="car" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{description}</p>
    <p> Price:${price}</p>
    <div className="card-actions justify-end">
   <Link to={`/check/${_id}`}>
   <button className="btn btn-primary hover:bg-orange-700">Buy Now</button>
   </Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default ServiceCard;