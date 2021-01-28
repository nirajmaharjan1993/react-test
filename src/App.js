import React from "react";
import "./styles.css";

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

export default function App() {
  return (
    <div className="App">
      <Header name="Niraj" />
      <Body adjective="delicious" />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}
