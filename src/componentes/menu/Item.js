import React from 'react'
import ItemCount from './ItemCount';

const onAdd= (cantidad) => {
    console.log("Agregar al carrito")
    console.log("cantidad de items" + cantidad)
}

const Item = props =>{
    return(
        <div>
          <h2>{props.name}</h2>
          <img src={props.image} alt="" />
          <ItemCount stock={10} initial={0} onAdd={onAdd}/>
       </div>
    )}

export default Item;