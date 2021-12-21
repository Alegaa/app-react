import React from 'react'

const Item = props =>{
    return(
        <div>
          <h2>{props.name}</h2>
          <img src={props.image} alt="" />
       </div>
    )}

export default Item;