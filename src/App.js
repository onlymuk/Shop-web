import "./App.css";
import data from "./common/data";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Detail from "./components/Detail";
import MainPage from "./components/Main";
import Common from "./common/Common";
import Event from "./components/Event";
import Cart from "./components/Cart";

function App() {
  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify([]));
  }, []);
  let [shoes] = useState(data);

  return (
    <div className="App">
      <Common />
      <Routes>
        <Route path="/" element={<MainPage shoes={shoes} />} />

        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/event" element={<Event />}>
          <Route path="one" element={<div>이벤트1!</div>} />
          <Route path="two" element={<div>이벤트2!</div>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
