import './styles/App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/header-footer/NavBar';
import ItemListContainer from './components/products/ItemListContainer';
import ItemDetailContainer from './components/productsDetail/ItemDetailContainer';
import Cart from './components/carrito/Cart'
import CartProvider from './components/context/cart/CartProvider';
import Main from './components/main/Main';
import Footer from './components/header-footer/Footer';

function App() {

  return (
    <CartProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/category/all" element={<ItemListContainer />} />
          <Route exact path="/category/:id" element={<ItemListContainer />} />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>

  );
}

export default App;
