
import { useState,useEffect } from 'react';
import './App.css';

function App() {
  const [items,setItems] = useState([]);
  const [query,setQuery] =useState('');
  useEffect(() => {
    getItems();
  },[query]);
  const getItems = async () => {
    const response = await fetch("https://www.reddit.com/r/popular.json");
   
    const data = await response.json();
    if(data != null){
      setItems(data.data.children);
    }
    
console.log(data);
      }
      const submitHandler = (e) => {

      }
  return (
    <div className="App">
      <form className="search-form" >
<input type="text"></input>
<button type="submit" className="search-Button">Search</button>
      </form>
      <div className="itemWrapper">

      </div>
    </div>
  );
}

export default App;
