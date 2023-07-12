import "./App.css";
import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Destinations from "./Components/Destinations/Destinations";
import Crew from "./Components/Crew/Crew";
import Technology from "./Components/Technology/Technology";

function App() {
  const [pageIndex, setPageIndex] = useState(0);
  const array = [<Home />, <Destinations />, <Crew />, <Technology />];

  return (
    <div className="App">
      <Navbar setPageIndex={setPageIndex} />
      <main>{array[pageIndex]}</main>
    </div>
  );
}

export default App;
