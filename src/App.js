import Header from "./componentes/header/Header";
import ItemListContainer from "./componentes/menu/ItemListContainer";
import ItemDetailContainer from "./componentes/menu/ItemDetailContainer";
import "./componentes/header/header.css"


    const links = [
        { href: "#", name: "Información Útil", id: 1 },
        { href: "#", name: "Contactos", id: 2 },
        { href: "#", name: "Carrito", id: 3 }
    ]


const App = () => {
    return(
        <>
            <Header nombre="NunZia" links={links}/>
            <ItemListContainer/>
            <ItemDetailContainer/>
        </>
        )
}

export default App