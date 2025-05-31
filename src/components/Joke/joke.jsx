import { useState } from "react";
import './joke.css'

export const Joke = ({userAvatar, userName, text, likes, dislikes}) => {
    const [Up, setUp] = useState(likes);
    const [Down, setDown] = useState(dislikes);
    

 return (
    <div className="container">
      <div className="joke">
        <div className="joke__body">
          <div className="joke__user">
            <img className="user-avatar" src={userAvatar} />
            <p className="user-name">{userName}</p>
          </div>

          <p className="joke__text">
            {text}
          </p>
        </div>
        <div className="joke__likes">
          <button id="btn-up" className="btn-like btn-like--up" onClick={() => setUp (old => old + 1)}>
          </button>
          <span id="likes-up" className="likes-count likes-count--up">{Up}</span>
          <button id="btn-down" className="btn-like btn-like--down" onClick={() => setDown(old => old - 1)}>
          </button>
          <span id="likes-down" className="likes-count likes-count--down">{Down}</span>
        </div>
      </div>
    </div>
 )
};