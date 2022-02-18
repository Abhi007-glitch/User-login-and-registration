
import './App.css';
import Footer from './components/Footer/Footer';
import LandingPage from './Screen/LandingPage/LandingPage';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Registeration from './Screen/Registeration/Registeration';
function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/register" element={<Registeration/>} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
