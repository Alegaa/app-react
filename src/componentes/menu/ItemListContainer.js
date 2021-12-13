import React from 'react'
const ItemListContainer = props =>{
    return(
        <div>
          <h2>{props.name}</h2>
          <img src={props.image} alt="" />
          <h4>{props.pr}</h4>
          <button>agregar</button>
       </div>
    )}

export default ItemListContainer;