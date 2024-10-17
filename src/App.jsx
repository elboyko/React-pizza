import Categories from "./components/Categories";
import Header from "./components/Header";
import PizzaBlock from "./components/PizzaBlock/PizzaBlock";
import Sort from "./components/Sort";
import "./scss/app.scss";
import React, { useState } from "react";
import { useEffect } from "react";
import Skeleton from "./components/PizzaBlock/Skeleton";

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://5c6f28c5b1ecb11c.mokky.dev/pizzas")
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
            </div>
            <div className="content__sort">
              <Sort />
            </div>

            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              {isLoading
                ? [...new Array(3)].map((_, index) => <Skeleton key={index} />)
                : items.map((obj) => (
                    <PizzaBlock
                      key={obj.id}
                      title={obj.title}
                      price={obj.price}
                      image={obj.imageUrl}
                      sizes={obj.sizes}
                      types={obj.types}
                    />
                  ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
