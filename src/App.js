import Header from './header'
import AddItem from './AddItem'
import Content from './Content'
import SearchItem from './SearchItem'
import Footer from './footer'
import {useState} from 'react'
function App() {
  
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')));
// Creating blank useState to save values from form
const [newItem,setNewItem]=useState('')
// for search functionality
const[search,setSearch]=useState('')
const setAndSaveItems= (newItems) =>{
  setItems(newItems)
  localStorage.setItem('shoppinglist', JSON.stringify(newItems))
}

//add item function
const addItem = (item) =>{
  console.log('Added item')
  
  const id = (items || []).length + 1
  const myNewItem = { id,checked:false,item }
  console.log(myNewItem)
  const listItems=[...items,myNewItem]
  setAndSaveItems(listItems)
}

const handleCheck = (id) => {
  console.log(`Item id clicked is ${id}`)
  const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item)
  setAndSaveItems(listItems)
}
const handleDelete = (id) => {
  console.log(`Item id clicked is ${id}`)
  const listItems = items.filter((item) => item.id !== id)
  setAndSaveItems(listItems)
}

const handleSubmit = (e) => {
  e.preventDefault()
  if(!newItem) return;
  addItem(newItem)
  console.log(newItem)
  setNewItem('')
}

  return (
    <div className="App">
      {/* Prop drilling is used to pass values from one component to other components */}
      <Header title="Groceries list" />
      <AddItem 
      newItem={newItem}
      setNewItem={setNewItem}
      handleSubmit={handleSubmit}
      />
       <SearchItem 
      search={search}
      setSearch={setSearch}
      />
      <Content 
      items={items?.filter(item=>((item.item).toLowerCase()).includes(search.toLowerCase()))}
      handleCheck={handleCheck}
      handleDelete={handleDelete}
      />
      <Footer 
      length={items.length}
      />
    </div>
  );
}

export default App;
