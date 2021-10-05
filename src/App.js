
import { useState,useEffect } from 'react';
import './App.css';
import  Items from './Components/Items';
function App() {
  const [items,setItems] = useState([]);
  const [query,setQuery] =useState('popular');
  const [search,setSearch] = useState('');
  useEffect(() => {
    getItems();
  },[query]);
  const getItems = async () => {
    const response = await fetch(`https://www.reddit.com/search.json?q=${query}`);
   const url = `https://www.reddit.com/search.json?q=${query}`;
   console.log(url);
    const data = await response.json();
    if(data != null){
      setItems(data.data.children);
    }
    
console.log(data);
      }
      const updateHandler = (e) => {
        setSearch(e.target.value);
      }
      const submitHandler = (e) => {
      e.preventDefault();
      setQuery(search);
      setSearch('');
      }
  return (
    <div className="App">
   <h3>Reddit<span className="headinSpan">Minimal</span></h3>
<input type="text" value={search} onChange={updateHandler}></input>
<button type="submit" className="search-Button" onClick={submitHandler}>Search</button>
     
      <div className="itemWrapper">
        <div className ="">
      { 
      items.map((item,index) => ( < Items key={index} item={item.data} />)) }
</div>

      </div>
    </div>
  );
}

export default App;
