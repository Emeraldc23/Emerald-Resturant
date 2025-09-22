import Header from "./components/Header";
import Form from "./UtilisComponent/Form";
import MainPage from "./components/Main";
import MenuPage from "./components/Menu";
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
          </Routes>
        </BrowserRouter>

        <Form />
      </div>
    </>
  );
}

export default App;
