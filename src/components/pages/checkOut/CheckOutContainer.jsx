import {  useContext, useState } from "react";
import { CheckOut } from "./CheckOut";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";

export const CheckOutContainer = () => {
    const [userInfo, setUserInfo] = useState({
        name: "",
        surname: "",
        phone: "",
        email: "",
    });

    const [orderId, setOrderId] = useState(null)
    
    const {cart, getTotalPrice, clearCart} = useContext(CartContext)

    let totalPrice = getTotalPrice()

    const envioDeFormulario = (e) => {
        e.preventDefault();

        let order = {
            comprador: userInfo,
            items: cart,
            total: totalPrice
        }

        let ordersCollection = collection(db, "orders")

        addDoc(ordersCollection, order).then ( (resp) => setOrderId(resp.id))

        cart.forEach((producto) => {
            let refDoc = doc(db, "productos", producto.id)
            
            updateDoc( refDoc, {stock: producto.stock - producto.quantity} )
        });
        clearCart()
    };

    const capturarDatos = (e) => {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    };
    
    return <CheckOut orderId={orderId} envioDeFormulario={envioDeFormulario} capturarDatos={capturarDatos} />;
};