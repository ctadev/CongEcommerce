import React, { useState } from "react";
import data from "../components/store/carousel";

function Hero() {
  const [x, setX] = useState(0);
  const goLeft = () => {
    x === -200 ? setX(0) : setX(x - 100);
  };

  const goRight = () => {
    x === 0 ? setX(-200) : setX(x + 100);
  };
  return (
    <main className="hero-container" id="home">
      {data.map((item) => (
        <div
          key={item.id}
          className="img-container"
          style={{ transform: `translateX(${x}%)` }}
        >
          <img src={item.image} alt={item.name} />
          <h1>{item.title}</h1>
          <div className="overlay"></div>
          <button onClick={() => goLeft()} className="left">
            <i className="fas fa-chevron-left"></i>
          </button>
          <button onClick={() => goRight()} className="right">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      ))}
    </main>
  );
}

export default Hero;
