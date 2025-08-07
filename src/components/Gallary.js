function Gallary() {
  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h1>Gallery</h1>

      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel" style={{ width: "80%", margin: "auto", marginTop: "20px" }}>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="abc1.jpg" className="d-block w-100" alt="First" />
          </div>
          <div className="carousel-item">
            <img src="abc2.jpg" className="d-block w-100" alt="Second" />
          </div>
          <div className="carousel-item">
            <img src="abc3.jpg" className="d-block w-100" alt="Third" />
          </div>
          
        </div>

        {/* Carousel controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
    </div>
  );
}

export default Gallary;
