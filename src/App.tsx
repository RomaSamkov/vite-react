import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Products from "./components/Products/Products";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      {/* <Header /> */}
    </>
  );
}

export default App;
