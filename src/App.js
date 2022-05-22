import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/card-sm/cars-sm";

function App() {
  const [data, setState] = useState([]);

  const news = () => {
    //public API 
    const BaseURL = `https://inshorts.deta.dev/news?category=all`;

    fetch(BaseURL)
      .then((res) => res.json())
      .then((data) => {
        setState(data.data);
      });
  };

  useEffect(() => news(), []);

  return (
    <div className="App">
      <div id="small-card">
        {data.map((item) => (
          <Card
            poster={item.imageUrl}
            posterName={item.title}
            title={item.title}
            details={item.content}
            date={item.date}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
