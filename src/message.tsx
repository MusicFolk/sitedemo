import { useState } from "react";
import "./Message.css";

function Message() {
  const [answered, setAnswered] = useState<'none' | 'yes' | 'no'>('none');

  return (
    <div className="message">
      <div className="card">
        <div className="teddy" aria-hidden>
          <img src={`${import.meta.env.BASE_URL}teddy.png`} alt="Teddy bear holding a heart" className="teddy-img" />
        </div>
        <h1 className="question">Ar būsi mano Valentino pora?</h1>

        {answered === 'none' ? (
          <div className="buttons">
            <button
              className="btn btn-yes"
              onClick={() => setAnswered('yes')}
              aria-label="Taip"
            >
              Taip
            </button>

            <button
              className="btn btn-no"
              onClick={() => setAnswered('no')}
              aria-label="Ne"
            >
              Ne
            </button>
          </div>
        ) : answered === 'yes' ? (
          <div className="response yes">
            Aww <span className="heart" aria-hidden>❤️</span>
          </div>
        ) : (
          <div className="response no">😢</div>
        )}
      </div>
    </div>
  );
}

export default Message;