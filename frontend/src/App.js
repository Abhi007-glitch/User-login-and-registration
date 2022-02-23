
import './App.css';
import Footer from './components/Footer/Footer';
import LandingPage from './Screen/LandingPage/LandingPage';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Registeration from './Screen/Registeration/Registeration';
import RegisterScreen from './Screen/RegisterScreen/RegisterScreen';
import LoginScreen from './Screen/LoginScreen/LoginScreen';
function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginScreen/>}/>
        <Route path="/register" element={<RegisterScreen/>} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
