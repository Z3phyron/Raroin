import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import ItemDetails from "./pages/ItemDetails/ItemDetails";
import MarketPlace from "./pages/marketplace/MarketPlace";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/marketplace" exact element={<MarketPlace />} />
        <Route path="/itemDetails" exact element={<ItemDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
