import { useState } from "react";
import initialItems from "../src/exampleData"

export default function App() {


  return (
    <div className="App">
      <Logo />

      <PackingList />
      <Stats />
    </div>
  );
}

// **************** LOGO
function Logo() {
  return <h1>Far away</h1>;
}

// **************** FORM


// **************** PACKING LIST
function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}

// **************** STATS
function Stats() {
  return (
    <footer className="stats">
      You have x items on your list and you already packed x
    </footer>
  );
}
