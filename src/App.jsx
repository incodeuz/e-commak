import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddProduct from "./pages/AddProduct";
import AllProducts from "./pages/AllProducts";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" index element={<AllProducts />} />
          <Route path="/admin" element={<AddProduct />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
