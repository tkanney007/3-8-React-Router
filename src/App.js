import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { dummyData } from "./data";
import Header from "./routes/Header";
import Add from "./routes/Add";
import View from "./routes/View";
import Item from "./routes/Item";
import ItemDefault from "./routes/ItemDefault";
import { uuid } from "uuidv4";

function App() {
  const [list, setList] = useState(dummyData);
  // const [name, setName] = useState("");
  // const [quantity, setQuantity] = useState(0);
  // const [price, setPrice] = useState(0);
  // const [discount, setDiscount] = useState(0);
  const DefaultPage = () => <p>Nothing to see here!</p>;
  const handlerDeleteProduct = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };
  const handlerAddProduct = (myProduct) => {
    const newList = [...list, myProduct];
    setList(newList);
  };
  return (
    <>
      <div className="App">Hello React!</div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path="view" element={<View list={list} />}>
              <Route index element={<ItemDefault />} />
              <Route
                path=":id"
                element={
                  <Item list={list} handlerDelete={handlerDeleteProduct} />
                }
              />
            </Route>
            <Route
              path="add"
              element={<Add handlerAdd={handlerAddProduct} />}
            />
          </Route>
          <Route path="*" element={<DefaultPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
