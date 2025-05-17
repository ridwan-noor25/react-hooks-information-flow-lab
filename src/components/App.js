import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  const appClass = isDarkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <Header onDarkModeClick={handleDarkModeClick} isDarkMode={isDarkMode} />
      <ShoppingList />
    </div>
  );
}

export default App;
