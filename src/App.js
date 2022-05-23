import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/card-sm/cars-sm";
import CategoryCard from "./components/category-card/category-card";

function App() {
  const [data, setState] = useState([]);

  const news = (category) => {
    //public API 
    const BaseURL = `https://inshorts.deta.dev/news?category=${category}`;

    fetch(BaseURL)
      .then((res) => res.json())
      .then((data) => {
        setState(data.data);
      });
  };



  useEffect(() => news('world'), []);

  return (
    <div className="App">

    <div id="category__list">
        <CategoryCard />
    </div>
      
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
