import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import './App.css';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { ConfigProvider, theme } from 'antd';


function App() {
  return (
    <BrowserRouter>
      <ConfigProvider
        theme={{
          algorithm: theme.darkAlgorithm,
          token: {
            colorPrimary: '#1cb073',
            borderRadius: 6,

            colorBgContainer: '#2b2c2f',
            colorBorder: '#2b2c2f',
          },
        }}
      >
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer />
      </ConfigProvider>
    </BrowserRouter>
  );
}

export default App;
