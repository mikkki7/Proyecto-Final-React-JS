import styleItemCount from "./ItemCount.module.css";

const ItemCount = ({ counter, addOne, subOne, onAdd }) => {
    return (
        <>
            <div className={styleItemCount.contenedorContador}>
                <div className={styleItemCount.contenedorNumero}>
                    <p className={styleItemCount.contador}>{counter}</p>
                </div>
                <div className={styleItemCount.contenedorBotones}>
                    <button
                        onClick={subOne}
                        disabled={counter === 1 ? true : false}
                        className={styleItemCount.botones}
                        >
                        -
                    </button>
                    <button 
                        onClick={addOne}
                        className={styleItemCount.botones}
                        >
                        +
                    </button>
                </div>
            </div>
            <button className={styleItemCount.botonAgregar} onClick={ () => onAdd(counter) }>Agregar al carrito</button>
        </>
    );
};

export default ItemCount;