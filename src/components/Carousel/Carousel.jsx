import "./Carousel.css"

const Carousel = () => {
  return (
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="images/banner-2.webp" alt="..." />
            </div>
            <div className="carousel-item">
                <img src="images/banner-3.webp" alt="..." />
            </div>
            <div className="carousel-item">
                <img src="images/img-banner2.jpg" alt="..." />
            </div>
        </div>
    </div>
  )
}

export default Carousel