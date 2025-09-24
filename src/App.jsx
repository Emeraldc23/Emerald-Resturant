import Header from "./components/Header";
import Form from "./UtilisComponent/Form";
import MainPage from "./components/Main";
import MenuPage from "./components/Menu";
import BanquetFacility from "./components/Banquet";
import Vendor from "./components/Vendor";
import Gallery from "./components/Gallery";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/banquet" element={<BanquetFacility />} />
            <Route path="/vendor" element={<Vendor />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </BrowserRouter>

        <Form />
      </div>
    </>
  );
}

export default App;
