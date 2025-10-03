import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

function App() {
  const [category, setCategory] = useState("general"); // default category
  const pageSize = 6;

  return (
    <div className="App">
      <Navbar setCategory={setCategory} />
      <News key={category} pageSize={pageSize} category={category} />
    </div>
  );
}

export default App;
