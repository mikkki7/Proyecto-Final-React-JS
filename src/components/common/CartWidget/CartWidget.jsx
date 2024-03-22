import { PiShoppingCartSimple } from "react-icons/pi";
import cartWidgetEstilos from "./CartWidget.module.css";
import { Link } from "react-router-dom"
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const CartWidget = () => {
    const { getTotalItems } = useContext(CartContext);

    let total = getTotalItems();

    return (
        <div className={cartWidgetEstilos.contenedorCarrito}>
            <Link to="/cart">
                <PiShoppingCartSimple className={cartWidgetEstilos.iconoCarrito}/>
                <div className={cartWidgetEstilos.contenedorContador}>
                <span>{total}</span>
                </div>
            </Link>
        </div>
    );
};

export default CartWidget;