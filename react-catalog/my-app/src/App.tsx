import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import { About } from './pages/About';
import { NotFound } from './pages/NotFound';
import { Catalog } from './pages/Catalog';
import { ProductDetails } from './pages/ProductDetails';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Catalog />} />
        <Route path="details/:productId" element={<ProductDetails />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
