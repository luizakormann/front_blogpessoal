import './App.css'
import Home from './pages/home/Home'
import Login from "./pages/login/Login";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cadastro from './pages/cadastro/Cadastro';
import Footer from './components/footer/Footer';
import Navbar from './components/navBar/NavBar';

function App() {
  return (
    <> 
    <div className="min-h-[100vh]">
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
      </div>
    </>
  )
}

export default App
