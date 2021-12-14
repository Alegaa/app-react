import React from "react";

import {useState} from 'react';


const ItemCount=({stock, initial}) =>{
    let [contador, setContador]= useState(0);

    const sumar= () =>{
        if (contador >= stock){
            console.log("agregar")
        }else{
            setContador( contador + 1)
        }
    }
    const restar=() =>{
        if (contador <= initial){
            console.log("retirando articulo")
        }else{
            setContador( contador - 1)
        }
    }
    const vaciar=() =>{
        setContador(initial)
        console.log("reinicia pedido")

    }
    const onAdd= () =>{
    console.log("Se incluyo al carrito")
}
    
    return(
        <div>
            <div>
                <h4>Tarta de coco</h4>
            </div>
        <p>Contador: {contador}</p>
        <button onClick={sumar}> + </button>
        <button onClick={restar}> - </button>
        <button onClick={vaciar}> vaciar </button>
        <div>
         <button onClick={onAdd}>Agregar</button>
        </div>
        </div>
    )
}


export default ItemCount;

