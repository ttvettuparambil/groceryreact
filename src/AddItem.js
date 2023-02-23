import React,{ useRef } from 'react'
import {FaPlus} from 'react-icons/fa'

const AddItem = ({newItem,setNewItem,handleSubmit}) => {
  const inputRef=useRef()
    return (
        <form className='addForm' onSubmit={handleSubmit}>
            <label htmlFor="addItem"></label>
                <input 
                autoFocus
                ref={inputRef}
                type="text" 
                placeholder='Add Item'
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                required
                />
                <button 
                type="submit"
                aria-label="Add item"
                onClick={()=>inputRef.current.focus()}
                >
                    <FaPlus />
                </button>
        </form>
  )
}

export default AddItem