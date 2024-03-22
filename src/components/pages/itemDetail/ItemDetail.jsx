import ItemCountContainer from "../../common/ItemCount/ItemCountContainer";
import styleItemDetail from "./ItemDetail.module.css";

export const ItemDetail = ({ item, onAdd, initial }) => {
    return (
        <>
            <div className={styleItemDetail.contenedorItemDetail}>
                <div className={styleItemDetail.contenedorImagen}>
                    <img src={item.image} alt="" className={styleItemDetail.foto} />
                </div>
                <div className={styleItemDetail.contenedorDetalle}>
                    <div className={styleItemDetail.contenedorTexto}>
                        <h1 className={styleItemDetail.title}>{item.title}</h1>
                        <p className={styleItemDetail.descripcion}>{item.description}</p>
                        <p className={styleItemDetail.precio}>$ {item.price}</p>
                    </div>
                    <div className={styleItemDetail.contenedorContador}>
                        <ItemCountContainer
                            stock={item.stock}
                            onAdd={onAdd}
                            initial={initial}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};