import "./Banner.css"

const Banner = () => {

// const close = document.getElementById("close")
// const banner = document.getElementById("banner")

// close.addEventListener("click", () => {
//     banner.remove()
// })

  return (
    <div id="banner" className="banner">Estamos de promocion descuento hasta 30% por compras mayores a $ 10 000 <span id="close" className="close">X</span></div>
  )
}

export default Banner