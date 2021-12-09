import Header from "./componentes/header/Header";
// import Cards from "./componentes/menu/Cards";

// import {Data} from "./Data";

import "./componentes/header/header.css"






const App = () => {
    const links = [
        { href: "#", name: "Información Útil", id: 1 },
        { href: "#", name: "Contactos", id: 2 },
        { href: "#", name: "Carrito", id: 3 }
    ]
    return(
        <>
        <Header nombre="NunZia" links={links}/>
        {/* <Cards/> */}
        </>
        )
}

export default App