
const Header = ({ nombre, links }) => {
    

    return <>
        <header>
            <div>
                {/* <img src="/img/Nunzia.png" alt="logo"/> */}
            </div>
            <h1>{nombre}</h1>
            <nav className="containerNav">
                {links.map((element) => {
                    return <a key={element.id} href={element.href}>{element.name}</a>
                })}
                <span className="material-icons">shopping_cart</span>
            </nav>
        </header>
    </>
}

export default Header;