import styleNotFound from "./NoutFound.module.css";

const NotFound = () => {
    return (
        <div className={styleNotFound.contenedorNotFound}>
            <div className={styleNotFound.contenedorFoto}>
                <img src="https://res.cloudinary.com/db2pyuqoa/image/upload/v1710503611/Error_404_apv3z7.jpg" alt="" className={styleNotFound.fotoNotFound}/>
            </div>
            <div className={styleNotFound.contenedorTexto}>
                <h1 className={styleNotFound.tituloNotFound}>¡ Error 404 !</h1>
                <p className={styleNotFound.textoNotFound1}>Pagina no encontrada.</p>
                <p className={styleNotFound.textoNotFound2}>Lo sentimos, no hemos encontrado tu pagina.</p>
            </div>
        </div>
    )
}

export default NotFound