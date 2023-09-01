import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import './App.css';
import { Header } from './components/header';
import { Footer } from './components/footer';


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer/>
    </BrowserRouter>    
  );
}

export default App;
