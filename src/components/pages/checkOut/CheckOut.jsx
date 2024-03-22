import { Link } from "react-router-dom";
import styleCheckOut from "./CheckOut.module.css";

export const CheckOut = ({ envioDeFormulario, capturarDatos, orderId }) => {
    return (
        <>
            {orderId ? (
                <div className={styleCheckOut.contenedorTexto}>
                    <h1 className={styleCheckOut.titulo}> Perfecto, gracias por tu compra, tu numero es {orderId}. </h1>
                    <Link to="/">
                        <button className={styleCheckOut.botonComprando}>Seguir comprando</button>
                    </Link>
                </div>
            ) : (
                <div className={styleCheckOut.contenedorFormulario}>
                    <h1 className={styleCheckOut.titulo2}>Informacion del Cliente</h1>
                    <form onSubmit={envioDeFormulario} className={styleCheckOut.formulario}>
                        <p className={styleCheckOut.label}>Nombre: </p>
                        <input className={styleCheckOut.inputs}
                            type="text"
                            placeholder="Ingresa tu nombre"
                            onChange={capturarDatos}
                            name="name"
                        />

                        <p className={styleCheckOut.label}>Apellido: </p>
                        <input className={styleCheckOut.inputs}
                            type="text"
                            placeholder="Ingresa tu apellido"
                            onChange={capturarDatos}
                            name="surname"
                        />

                        <p className={styleCheckOut.label}>Telefono: </p>
                        <input className={styleCheckOut.inputs}
                            type="text"
                            placeholder="Ingresa tu telefono"
                            onChange={capturarDatos}
                            name="phone"
                        />

                        <p className={styleCheckOut.label}>Correo Electronico: </p>
                        <input className={styleCheckOut.inputs}
                            type="email"
                            placeholder="Ingresa tu email"
                            onChange={capturarDatos}
                            name="email"
                        />

                        <button type="submit" className={styleCheckOut.botonPagar}>Pagar Ahora</button>
                    </form>
                </div>
            )}
        </>
    )
}