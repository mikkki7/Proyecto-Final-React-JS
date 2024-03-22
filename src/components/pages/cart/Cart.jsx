import styleCart from "./Cart.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext"
import { FaRegTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";


export const Cart = () => {
    const { cart, clearCart, removeById, getTotalPrice } =
        useContext(CartContext);
    let total = getTotalPrice();
    
    const limpiarAlerta = () => {
        Swal.fire({
            icon: "question",
            title: "¿Estas seguro que quieres limpiar el carrito?",
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: "Si, limpiar",
            denyButtonText: "No, cancelar",
        }).then((result) => {
            if (result.isConfirmed) {
                clearCart()
                Swal.fire("tu carrito ha sido eliminado", "", "success");
            } else if (result.isDenied){
                Swal.fire("Cancelado", "", "error");
            }
        });
    };

    return (
        <>
            <div className={styleCart.contenedorCarro}>
                <div className={styleCart.contenedorItems}>
                    <div className={styleCart.coontenedorTitulo}>
                        <h1 className={styleCart.titulo}>Carrito de Compra</h1>
                    </div>
                    <div className={styleCart.contenedorInfo}>
                        <p className={styleCart.textoInfo}>Producto</p>
                        <p className={styleCart.textoInfo}>Precio Unitario</p>
                        <p className={styleCart.textoInfo}>Cantidad</p>
                    </div>
                    {cart.map((item) => {
                        return (
                            <div key={item.id} className={styleCart.contenedorItem}>
                                <div className={styleCart.contenedorFoto}>
                                    <img src={item.image} alt="" className={styleCart.foto} />
                                    <p className={styleCart.nombreItem}>{item.title}</p>
                                </div>
                                <p className={styleCart.precioItem}>$ {item.price}</p>
                                <p className={styleCart.cantidadItem}>{item.quantity}</p>
                                <button onClick={() => removeById(item.id)} className={styleCart.botonBasura}>
                                    <FaRegTrashAlt className={styleCart.iconoBasura}/>
                                </button>
                            </div>
                        );
                    })}
                </div>
                    {cart.length > 0 ? (
                        <div className={styleCart.contenedorBotones}>
                            <button onClick={limpiarAlerta} className={styleCart.botonVaciar}>
                                <FaRegTrashAlt className={styleCart.iconoBasura} />
                                <p className={styleCart.textoBotonVaciar}>Vaciar carrito</p>
                            </button>
                            <Link to="/checkout">
                                <button className={styleCart.botonPago}>
                                    <img src="https://res.cloudinary.com/db2pyuqoa/image/upload/v1710158804/icono_tarjeta_i8wgpt.webp" alt="" className={styleCart.iconoTarjeta} />
                                    <p className={styleCart.textoBotonPago}>Realizar Pago</p>
                                </button>
                            </Link>
                        </div>
                    ) : (
                        <Link to="/">
                            <button className={styleCart.botonAgregar}><p className={styleCart.textoBotonAgregar}>Agregar productos</p></button>
                        </Link>
                    )}
                <div className={styleCart.infoCart}>
                    <p className={styleCart.textoCart}>Precio total del carrito: $ {total}</p>
                </div>
            </div>
        </>
    );
};