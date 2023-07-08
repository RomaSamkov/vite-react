import Header from "./components/Header/Header";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Products from "./components/Products/Products";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      {/* <Header /> */}
    </>
  );
}

export default App;
