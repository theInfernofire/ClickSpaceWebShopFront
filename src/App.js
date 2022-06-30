import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Cart from './pages/Cart/Cart';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Unauthorized from './pages/Unauthorized/Unauthorized';
import RequireAuth from './RouteRequire';

const ROLES = {
    'User': 2001
}

function App() {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route path='login' element={<Login />} />
                <Route path='register' element={<Register />} />
                <Route path='unaothorized' element={<Unauthorized />} />

                <Route path="cart" element={<Cart/>} />
            </Route>

        </Routes>
    )
}

export default App;