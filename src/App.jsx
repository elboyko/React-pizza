import Categories from "./components/Categories";
import Header from "./components/Header";
import PizzaBlock from "./components/PizzaBlock";
import Sort from "./components/Sort";
import "./scss/app.scss";
import pizzas from "./assets/pizzas.json";
console.log(pizzas);

function App() {
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
              {pizzas.map((obj) => (
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
