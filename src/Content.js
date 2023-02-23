import React from 'react'
import ItemLists from './itemLists'
const Content = ({items,handleCheck,handleDelete}) => {
    
   
    return (
        // there has to be an HTML wrapper for a jsx loop output.
        <main>
            {/* Check if items are there or not */}
            {items.length ? (
               <ItemLists 
               items={items}
               handleCheck={handleCheck}
               handleDelete={handleDelete}
               />
            ):(
                <p style={{marginTop:'2rem'}}>no entries</p>
            )
}
    </main >
  );
}

export default Content;