
import { useState,useEffect } from 'react';
import './App.css';
import  Items from './Components/Items';
import SubReddit from './Components/SubReddit';
import image from '../src/Images/redditlogo.png';
function App() {
  const [items,setItems] = useState([]);
  const [query,setQuery] =useState('popular');
  const [search,setSearch] = useState('');
  const [subReddits,setSubReddits] = useState([]);
  useEffect(() => {
    getItems();
    getSubReddits();
  },[query]);
  const getItems = async () => {
    
    const response = await fetch(`https://www.reddit.com/search.json?q=${query}`);
    

      const data = await response.json();
    if(data != null){
      setItems(data.data.children);
    }
    
console.log(data);
      }
      const getSubReddits = async () => {
        const response = await fetch(`https://www.reddit.com/subreddits.json`);
        const data = await response.json();
        if(data != null){
        setSubReddits(data.data.children);
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
      <header>
        <div className="leftWrapper">
          <img src={image} className="logo-header" alt=""></img>
          <h3>Reddit<span className="headinSpan">Minimal</span></h3>
        </div>
        <div className="rightWrapper">
          <input className="input-search" type="text" value={search} onChange={updateHandler}></input>
          <button type="submit" className="search-Button" onClick={submitHandler}>Search</button>
        </div>
      </header>
      <div className ="mainWrapper">
        <div className="itemWrapper">
       
         { 
         items.map((item,index) => ( < Items key={index} item={item.data} />)) }
        </div>
  
        <div className="subReddits">
        <h2>SubReddits</h2>
         {
         subReddits.map((subReddit,index) => (
           
           <SubReddit key={index} subReddit={subReddit.data} />
          ))
         }
        </div>
      </div>
    </div>
  );
}

export default App;
