import { ProductCard } from "../../common/ProductCard/ProductCard.jsx";
import styleItemList from "./ItemList.module.css"

const ItemList = ({ productos }) => {
    return (
        <div className={styleItemList.contenedorCards}>
            {productos.map(({id, image, title, price, carrito}) => {
                return (
                    <ProductCard 
                        key={id}
                        image={image}
                        title={title}
                        price={price}
                        carrito={carrito}
                        id={id}
                    />
                );
            })}
        </div> 
    );
};

export default ItemList;