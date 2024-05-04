import React,{useState} from 'react';
import Item from './Item';

function ShoppingList({items}) {
  const [selectedCategory, setSelectedCategor]= useState("All");
  const[filteredItems , setFilteredItem]= useState([]);

  function handleselect(e){
    const category = e.target.value;
    setSelectedCategor(category);
    const filtered = category === "All" ? items : items.filter(
      (item) => item.category === category
    );
    setFilteredItem(filtered);
  }
  return(
    <div className='ShoppingList'>
      <div className='Filter'>
        <select name='filter' onChange={handleselect} value={selectedCategory}>
          <option value='All'>Filter by category</option>
          <option value='Produce'>Produce</option>
          <option value='Dairy'>Dairy</option>
          <option value='Dessert'>Dessert</option>
        </select>
      </div>
      <ul className='Items'>
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;