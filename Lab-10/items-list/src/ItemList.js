// ItemList.js
import React, { useState } from "react";

function ItemList() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // Add new item
  const addItem = () => {
    if (inputValue.trim() !== "") {
      const newItem = { id: Date.now(), name: inputValue };
      setItems([...items, newItem]);
      setInputValue("");
    }
  };

  // Remove item
  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="list-card">
      <h2>Dynamic Item List</h2>

      <div className="input-group">
        <input
          type="text"
          value={inputValue}
          placeholder="Enter item"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addItem}>Add</button>
      </div>

      {items.length === 0 ? (
        <p className="empty-message">No items in the list.</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.name}{" "}
              <button className="remove-btn" onClick={() => removeItem(item.id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ItemList;