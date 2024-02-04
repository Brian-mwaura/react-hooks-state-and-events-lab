import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import "../index.css"

function App() {
  const [appClass, setAppClass] =useState(false)
  function handleClickDarkMode(){
    setAppClass(!appClass)
   }

  return (
    <div className={appClass ? "App dark" : "App light"}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClickDarkMode}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
