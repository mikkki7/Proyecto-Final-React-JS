import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState( JSON.parse(localStorage.getItem("cart") ) || []);

    const addToCart = (producto) => {
        let existe = isInCart(producto.id);

        if (existe) {
            let nuevoArray = cart.map((elemento) => {
                if (elemento.id === producto.id) {
                    return {
                        ...elemento,
                        quantity : producto.quantity,
                    };
                } else {
                    return elemento;
                }
            });
            setCart(nuevoArray);
            localStorage.setItem("cart", JSON.stringify(nuevoArray) );
        } else {
            setCart([...cart, producto]);
            localStorage.setItem("cart", JSON.stringify([...cart, producto]) );
        }
    };

    const clearCart = () => {
        setCart([]);
        localStorage.removeItem("cart")
    };

    const isInCart = (id) => {
        let existe = cart.some((elemento) => elemento.id === id);
        return existe;
    };

    const removeById = (id) => {
        let nuevoArray = cart.filter((elemento) => elemento.id !== id);
        setCart(nuevoArray);
        localStorage.setItem("cart", JSON.stringify(nuevoArray))
    };
    
    const getTotalItems = () => {
        let total = cart.reduce( (acc, elemento) => {
            return acc + elemento.quantity
        }, 0)
        return total
    }

    const getTotalPrice = () => {
        let total = cart.reduce((acc, elemento) => {
            return acc + elemento.quantity * elemento.price
        }, 0);
        return total;
    };

    const getTotalQuantityById = (id) => {
        let producto = cart.find((elemento) => elemento.id === id);

        if (producto) {
            return producto.quantity;
        } else {
            return producto;
        }
    }

    let data = {
        cart, 
        addToCart,
        clearCart, 
        removeById,
        getTotalItems,
        getTotalPrice,
        getTotalQuantityById
    };

    return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
}

export default CartContextProvider;