import Carousel from "../../Carousel/Carousel"
import Flecha from "../../Flecha/Flecha"
import Pagos from "../../Pagos/Pagos"
import Prendas from "../../Prendas/Prendas"
import "./Index.css"

const Index = () => {
  return (
    <main className="index">
      <Carousel />
      <Prendas />
      <div className="banner">
        <img data-aos="fade-right" src="images/costura.jpg" alt="" />
      </div>
      <section className="banner">
        <div className="info">
          <p className="text">Diseñamos y confeccionamos nuestras prendas</p>
        </div>
      </section>
      <Flecha/>
      <Pagos />
    </main>
  )
}

export default Index