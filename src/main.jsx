import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Account from "./pages/Account";
import AddFood from "./pages/AddFood";
import BadFoods from "./pages/BadFoods";
import FoodList from "./pages/FoodList";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Account" element={<Account />} />
          <Route path="AddFood" element={<AddFood />} />
          <Route path="BadFoods" element={<BadFoods />} />
          <Route path="FoodList" element={<FoodList />} />
          <Route path="Login" element={<Login />} />
          <Route path="Signup" element={<Signup />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
