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
            colorBgElevated: '#1B1C2F',
            controlItemBgActive: '#1B1C2F',

            colorBgContainer: '#1B1C2F',
            colorBorder: '#1B1C2F',
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
