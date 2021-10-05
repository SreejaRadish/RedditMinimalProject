import React from 'react';
import Style from '../App.css';
const Items = (props) => {
    return (
      
        <div className="contentWrapper">
          <div className="articleWrapper">
            <article>
              <a href={"https://reddit.com"+props.item.permalink}>
              <h3>{props.item.title}</h3>
              </a>
            </article>
         
          {props.item.thumbnail !== "self" 
           ?  <img className="imageStyle" src={props.item.thumbnail} alt="" height="400px" width="500px"></img> : ""         }
         </div>
         <div className="subredditWrapper">
           <img  className="subredditImage" src="" alt=""></img>
           <p>{props.item.subreddit}</p>
         </div>
        </div>

           );
}


export default Items;