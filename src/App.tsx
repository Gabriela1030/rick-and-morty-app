import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./modules/characteres/MainPage";
import CharacterFormPage from "./modules/form/CharacterFormPage";
import CharacterDetailsPage from "./modules/characteres/CharacteresDetailsPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Header /> 
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/form" element={<CharacterFormPage />} />
        <Route path="/character/:id" element={<CharacterDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
