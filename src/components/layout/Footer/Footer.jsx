import styleFooter from "./Footer.module.css";

const Footer = () => {
    return (
        <>
            <footer className={styleFooter.footer}>
                <div className={styleFooter.contenedorFooter1}>
                    <div className={styleFooter.contenedorLogo}>
                        <img src="https://res.cloudinary.com/db2pyuqoa/image/upload/v1710158815/icono_instagram_s9j0vj.webp" alt="" className={styleFooter.logoInstagram}/>
                        <p className={styleFooter.textoLogosRD}>Instagram</p>
                    </div>
                    <div className={styleFooter.contenedorLogo}>
                        <img src="https://res.cloudinary.com/db2pyuqoa/image/upload/v1710158781/icono_whatsapp_ickeb0.webp" alt="" className={styleFooter.logoWpp}/>
                        <p className={styleFooter.textoLogosRD}>Whatsapp</p>
                    </div>
                    <div className={styleFooter.contenedorLogo}>
                        <img src="https://res.cloudinary.com/db2pyuqoa/image/upload/v1710158794/icono_tik_tok_pyquk6.webp" alt="" className={styleFooter.logoTikTok}/>
                        <p className={styleFooter.textoLogosRD}>Tik Tok</p>
                    </div>
                    </div>
                <div className={styleFooter.contenedorFooter2}>
                    <div className={styleFooter.contenedorLogo2}>
                        <img src="https://res.cloudinary.com/db2pyuqoa/image/upload/v1710158804/icono_tarjeta_i8wgpt.webp" alt=""  className={styleFooter.logoTarjetas}/>
                    </div>
                    <div className={styleFooter.contenedorTextos2}>
                        <p className={styleFooter.textoTarjeta}>Tarjeta de Debito</p>
                        <p className={styleFooter.textoTarjeta}>Tarjeta de Credito</p>
                        <p className={styleFooter.textoTarjeta}>Efectivo</p>
                    </div>
                </div>
                <div className={styleFooter.contenedorFooter3}>
                    <div className={styleFooter.contenedorLogo3}>
                        <img src="https://res.cloudinary.com/db2pyuqoa/image/upload/v1710158826/icono_camion_qlqh7t.webp" alt=""  className={styleFooter.logoCamion}/>
                    </div>
                    <div className={styleFooter.contenedorTextos3}>
                        <p className={styleFooter.textoEnvios}>Correo Argentino</p>
                        <p className={styleFooter.textoEnvios}>Andreani</p>
                        <p className={styleFooter.textoEnvios}>OCA</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer