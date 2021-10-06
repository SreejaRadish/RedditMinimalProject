import React from 'react';
import '../App.css';
import Style from '../Styles/ItemStyle.css';
const Items = (props) => {
    return (
      
        <div className="contentWrapper">
          <div className="item" >
            <article className="articleWrapper">
              <a href={"https://reddit.com"+props.item.permalink}  >
              <h3 >{props.item.title}</h3>
              </a>
            </article>
         
          {props.item.thumbnail !== "self" 
           ?  <img className="imageStyle" src={props.item.thumbnail} alt="" height="400px" width="500px"></img> : ""         }
           <p className="item-subReddit">{props.item.subreddit}</p>
         </div>
         
         
     
        </div>

           );
}


export default Items;