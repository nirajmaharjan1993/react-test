import React from "react";
import "./styles.css";

function Header() {
  return (
    <header>
      <h1>Eve's Kitchen</h1>
    </header>
  );
}

function Body() {
  return (
    <section>
      <p>We serve the most delicious around here.</p>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <h3>Footer</h3>
    </footer>
  );
}

export default function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
