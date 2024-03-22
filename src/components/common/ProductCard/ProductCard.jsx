import styleProductCard from "../ProductCard/ProductCard.module.css";
import { Link } from "react-router-dom";
import { PiShoppingCartSimple } from "react-icons/pi";

export const ProductCard = ( {image, title, price, carrito, id} ) => {
  return (
    <div className={styleProductCard.card}>
      <div className={styleProductCard.contenedorFoto}>
        <img src={image} className={styleProductCard.foto} />
      </div>
        <div className={styleProductCard.contenedorDescription}>
          <p className={styleProductCard.textoProducto}>{title}</p>
        </div>
        <div className={styleProductCard.contenedorPrecio}>
          <span className={styleProductCard.precio}>$ {price}</span>
        </div>
        <button className={styleProductCard.contenedorCarrito}>
          <PiShoppingCartSimple className={styleProductCard.iconoCarrito}/>
          <p className={styleProductCard.textoCarrito}>{carrito}</p>
        </button>
        <Link to={`/item/${id}`}>
          <button className={styleProductCard.botonDetalle}>
            Ver detalle
          </button>
          </Link>
    </div>
  )
}