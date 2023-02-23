import React from 'react'
import LineItem from './lineItem'
const itemLists = ({items,handleCheck,handleDelete}) => {
  return (
    < ul >
    {
        items.map((item) => (
           <LineItem
           key={item.id}
           item={item}
           handleCheck={handleCheck}
           handleDelete={handleDelete}
           />
        ))
    }
</ul>
  )
}

export default itemLists