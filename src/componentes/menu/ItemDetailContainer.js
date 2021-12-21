import ItemDetail from "./ItemDetail"
import { useState, useEffect} from 'react'

const showProduct= {
     nombre: 'Rogel',
     precio: 2500
}
const ItemDetailContainer = () =>{
    const [producto, setProducto]= useState(null)
    
    useEffect(() => {
    const getItem= new Promise((res, rej) =>{
        setTimeout(() =>{
            res(showProduct)
        }, 2000)
    })
    getItem
    .then((producto)=>{
        setProducto(showProduct)
    })
    },)
    
    return(
        <div>
            <ItemDetail producto={producto} />
        </div>
    )
}
export default ItemDetailContainer