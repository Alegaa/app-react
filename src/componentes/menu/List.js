import React from 'react'
import ItemListContainer from './ItemListContainer'

const List= props => {
    return(
        <div>
            {props.data.map(item => (
                <ItemListContainer key={item.id} name={item.nombre}>
                
                </ItemListContainer>
            ))}
        </div>
        )
}

export default List;