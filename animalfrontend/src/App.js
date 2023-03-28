import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Landing from "./pages/Landing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
          <Route index element={<Landing />} />
          <Route path="home" element={<Home />} />
        </Routes>
    </BrowserRouter>
  );
}
export default App;
