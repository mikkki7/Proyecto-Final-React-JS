import estilosNavBar from "./NavBar.module.css";
import CartWidget from "../../common/CartWidget/CartWidget";
import { menuNavegation } from "../../../router/menuNavegacion";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <>
            <header className={estilosNavBar.header}>
                <nav className={estilosNavBar.navBar}>
                    <div className={estilosNavBar.contenedorLogo}>
                        <Link to="/"><img src="https://res.cloudinary.com/db2pyuqoa/image/upload/v1708378030/logo_V.O_zwtf0g.webp" className= {estilosNavBar.logo} alt="logo-vidal-ortiz" />
                        </Link>
                    </div>
                    <ul className={estilosNavBar.categorias}>
                        {menuNavegation.map (({ id, text, path }) => (
                            <Link key={id} to={path}>
                                {text}
                            </Link>
                        ))}
                    </ul>
                    <div className={estilosNavBar.contenedorIconos}>
                        <CartWidget />
                        <div>
                            <AiOutlineUser className={estilosNavBar.iconoUser}/>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}