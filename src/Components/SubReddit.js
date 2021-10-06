import React from 'react';
import '../App.css';

const SubReddit = (props) => {
    return (
        <div>
           
            <div className="subredditWrapper">
            
              <ul>
                  <li>
                      <button type="button" className="subReddit-button" formaction="https://reddit.com">
                          {
                              props.subReddit.icon_img !== "" ?  <img className="subReddit-img" src={props.subReddit.icon_img} alt=""  /> :
                              <img className="subReddit-img"   src="Error.src" alt=""/>
                          }
              <span className="subReddit-name"> {props.subReddit.display_name} </span>
                      </button>
                  </li>
              </ul>
           <p></p>
         </div>
        </div>
    )
}

export default SubReddit;