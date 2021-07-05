import './style.css';

const Slider = ()=>{
    return(
        <div id="carouselExampleControls" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="5000">
      <div className="slider slider-1" alt="..."/>
      <div className="slider-content">
        <h1>PROVIDING BEST SERVICES</h1>
        <button>Know More</button>
      </div>
    </div>
    {/* <div className="carousel-item" data-bs-interval="2000">
      <div className="slider slider-2" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <div className="slider slider-3" alt="..."/>
    </div> */}
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>        
    )
}

export default Slider;