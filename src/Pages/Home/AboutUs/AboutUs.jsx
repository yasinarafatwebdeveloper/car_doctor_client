
import image1 from"../../../../image/image1.jpg"

import image2 from"../../../../image/image2.jpg"
const AboutUs = () => {
    return (
        <div>
                    {/* <h1>this is our service</h1> */}
       <div className="hero bg-base-200 min-h-screen mt-16">

  <div className="hero-content flex-col lg:flex-row">

    <div className="w-1/2 relative">
    <img
      src={image2}
      className=" max-w-sm rounded-lg shadow-2xl" />
        <img
      src={image1}
      className="max-w-72 absolute top-10 right-6 rounded-lg shadow-2xl" />
    </div>
   
    <div className="w-1/2">
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default AboutUs;