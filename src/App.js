import "./App.css";
import * as images from "./names.json";

function App() {
  return (
    <>
      <div className="header">
        <h1>Вики Колаж</h1>
        <h4>Кликни снимката за да видиш изненада </h4>
      </div>
      <div className="container">
        <div className="cards">
          {images.default
            .sort(() => 0.5 - Math.random())
            .map((image) => {
              return (
                <div className="card" key={image.name}>
                  <div className="card-inner">
                    <div className="card-front">
                      <img src={`/img/${image.name}`} alt="" />
                    </div>
                    <div className="card-back">
                      <h1>{image.title}</h1>
                      {Array.from(image.text).map((t, i) => (
                        <p key={i}>{t}</p>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="footer">
        <h1>Честит Свети Валентин Вики</h1>
        <h4>Надявам се да се видим скоро 💙</h4>
      </div>
    </>
  );
}

export default App;
