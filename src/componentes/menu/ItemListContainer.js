import React from 'react'
import ItemCount from './ItemCount';


const ItemListContainer = props =>{
    return(
        <div>
          <h2>{props.name}</h2>
          <img src={props.image} alt="" />
          <ItemCount stock={10} initial={0}/>
       </div>
    )}

export default ItemListContainer;