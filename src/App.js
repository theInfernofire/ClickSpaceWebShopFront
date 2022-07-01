import { Routes, Route } from 'react-router-dom';
import useUserContext from './data/context/useUserContext';
import Layout from './Layout';
import Cart from './pages/Cart/Cart';
import Login from './pages/Login/Login';
import ProductLogged from './pages/Product page accounted/Product';
import Product from './pages/Product page/Product';
import Register from './pages/Register/Register';
import Unauthorized from './pages/Unauthorized/Unauthorized';
import RequireAuth from './RouteRequire';

const ROLES = {
    'User': 2001
}

function App() {
    const {user} = useUserContext();
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route path='/' element={<Login />} />
                <Route path='login' element={<Login />} />
                <Route path='register' element={<Register />} />
                <Route path='unaothorized' element={<Unauthorized />} />
                <Route path="product" element={<Product />} />

                <Route path="home" render={() => { window.location.href = "home.html" }} />
                <Route path={"product/user"} element={<ProductLogged />} />
                <Route path="cart" element={<Cart />} />
            </Route>

        </Routes>
    )
}

export default App;