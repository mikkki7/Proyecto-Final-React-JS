import styleItemList from "./ItemDetail.module.css";
import { ItemDetail } from "./ItemDetail";
import { useEffect, useState, useContext } from "react"; 
import { useParams } from "react-router-dom"; 
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";
import { PulseLoader } from "react-spinners";

export const ItemDetailContainer = () => {
    const { id } = useParams();

    const [item, setItem] = useState(null);
    const [isLoading, setIsloading] = useState(true);

    const { addToCart, getTotalQuantityById } = useContext(CartContext);

    const initial = getTotalQuantityById(id);

    useEffect(() => {
        setIsloading(true)

        let productosColleccion = collection(db, "productos");
        let refDoc = doc(productosColleccion, id )
        getDoc( refDoc ).then(resp => {
            setItem( {...resp.data(), id: resp.id} )
        }).finally(() => setIsloading(false))
    }, [id]);

    const onAdd = (cantidad) => {
        let infoProducto = {
            ...item,
            quantity: cantidad,
        };
        addToCart(infoProducto);
    };

    return (
        <>
            {isLoading ? 
                <PulseLoader className={styleItemList.spinner}/>
            :
                <ItemDetail item={item} onAdd={onAdd} initial={initial} />
            }
        </>
    );
};