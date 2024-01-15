import { useState } from "react";
import TodoPage from "./pages/Todo";

function App() {
  return (
    <>
      <TodoPage />
      <footer className="info">
        <p>Double-click to edit a todo</p>
      </footer>
    </>
  );
}

export default App;
