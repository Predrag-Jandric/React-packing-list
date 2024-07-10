import { useState } from "react";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Footer from "./components/Footer";

export default function App() {
  const [items, setItems] = useState([
    { id: 1, description: "Sling bags", quantity: 2, packed: false },
    { id: 2, description: "Travel soap", quantity: 1, packed: false },
  ]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirm = window.confirm("Are you sure you want to clear the list ?");
    if (confirm) setItems([]);
  }

  return (
    <div className="App">
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Footer items={items} />
    </div>
  );
}
