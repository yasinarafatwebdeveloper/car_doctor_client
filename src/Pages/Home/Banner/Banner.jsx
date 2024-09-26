import image from"../../../../image/car8.jpg"
import image1 from"../../../../image/car9.jpg"
import image2 from"../../../../image/car12.jpeg"
import image3 from"../../../../image/car13.jpeg"
const Banner = () => {
    return (
      <div className="mt-6">
        <h3 className="text-center text-4xl mt-5 text-orange-700">Here have many luxirous cars,It is very cost </h3>
        <p className="text-center mt-5">A car is a vehicle that has wheels, carries a small number of passengers, and is moved by an engine or a motor. <br /> Cars are also called automobiles or motor vehicles. Trucks and buses are motor vehicles as well. <br /> However, trucks and buses are larger than cars, and they carry heavier loads.</p>
        <div className="carousel w-full mt-6">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src={image}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between   ">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src={image1}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src={image2}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src={image3}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
</div>
    );
};

export default Banner;