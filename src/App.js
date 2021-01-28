import React from "react";
import "./styles.css";
import restaurant from "./restaurant.jpg";

function Header(props) {
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  );
}

function Body(props) {
  return (
    <section>
      <p>We serve the most {props.adjective} around here.</p>
      <img src={restaurant} width="200" alt="restaurant" />
      <ul style={{ textAlign: "left" }}>
        {props.dishes.map((dish) => (
          <li key={dish.id}>{dish.name}</li>
        ))}
      </ul>
    </section>
  );
}

function Footer(props) {
  return (
    <footer>
      <p>Copyright {props.year}</p>
    </footer>
  );
}
const dishes = ["Momo", "Chowmein", "Sausages", "Chicken chilly"];
const dishObjs = dishes.map((dish, i) => ({ id: i, name: dish }));
export default function App() {
  return (
    <div className="App">
      <Header name="Niraj" />
      <Body adjective="delicious" dishes={dishObjs} />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}
