import "./Carousel.css"

const Carousel = () => {
  return (
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="images/banner-2.webp" alt="..." />
            </div>
            <div class="carousel-item">
                <img src="images/banner-3.webp" alt="..." />
            </div>
            <div class="carousel-item">
                <img src="images/img-banner2.jpg" alt="..." />
            </div>
        </div>
    </div>
  )
}

export default Carousel