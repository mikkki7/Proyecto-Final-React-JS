import ItemList from "./ItemList";
import styleItemList from "./ItemList.module.css"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
    const { category } = useParams();

    const [productos , setProductos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=> {
        let productosCollection = collection( db, "productos")

        
        let consulta = productosCollection;
        
        if (category) {
            let productosCollectionFiltrados = query( 
                productosCollection,
                where ("category", "==", category)
            );
            consulta = productosCollectionFiltrados;
        }

        getDocs(consulta)
            .then( (resp) => {
                let mejorArray = resp.docs.map((elemento) => {
                    return { ...elemento.data(), id: elemento.id };
                });
                setProductos(mejorArray);
            })
            .finally(() => setIsLoading(false));
    }, [category]);

    return (
        <>
            {isLoading ? (
                <PulseLoader className={styleItemList.spinner}/>
            ) : (
                <ItemList productos={productos} />
            )}
        </>
    );
};

export default ItemListContainer;