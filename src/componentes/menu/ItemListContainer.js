import React from 'react'

import ItemList from './ItemList'

const onAdd= () => {
  console.log("Se agrega al carrito")
}
const ItemListContainer = () => {

  const DATA = [
  {id: 1,img: '/brownie.jpg',nombre: 'Brownie',precio: 2500,},
  {id: 2,img: '/carrotcake.jpg',nombre: 'Carrot Cake',precio: 2500,},
  {id: 3,img: '/cheesecake.jpg',nombre: 'Cheese cake',precio: 2500,},
  {id: 4,img: '/Cocoydll.jpg',nombre: 'Coco y Dulce de Leche',precio: 2500,},
  {id: 5,img: '/keylimepie.jpg',nombre: 'Key Lime Pie',precio: 2500,},
  {id: 6,img: '/pasfrola.jpg',nombre: 'Pastafrola',precio: 2500,},
  {id: 7, img: '/rogel.jpg', nombre: 'Rogel', precio: 2500 },
]
return(
  <div>
    <ItemList data={DATA}/>
  </div>
);
};
export default ItemListContainer;

