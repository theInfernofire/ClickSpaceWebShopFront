import { Routes, Route } from 'react-router-dom';
import useUserContext from './data/context/useUserContext';
import Layout from './Layout';
import Cart from './pages/Cart/Cart';
import Homepage from './pages/Homepage/homepage';
import Login from './pages/Login/Login';
import ProductLogged from './pages/Product page accounted/Product';
import Product from './pages/Product page/Product';
import Register from './pages/Register/Register';
import Unauthorized from './pages/Unauthorized/Unauthorized';
import RequireAuth from './RouteRequire';
import DemoCart from './pages/demoCart/Cart';
import AboutUs from './pages/AboutUs/AboutUs';

const ROLES = {
    'User': 2001
}

function App() {
    const {user} = useUserContext();
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route path='/' element={<Login />} />
                <Route path='testcart' element={<DemoCart />} />
                <Route path='ClickSpaceWebShopFront' element={<Login />} />
                <Route path='login' element={<Login />} />
                <Route path='register' element={<Register />} />
                <Route path='unaothorized' element={<Unauthorized />} />
                <Route path="product" element={<Product />} />
                <Route path={"product/user"} element={<ProductLogged />} />
                <Route path="cart" element={<Cart />} />
                <Route path="aboutus" element={<AboutUs/>}/>
            </Route>

        </Routes>
    )
}

export default App;