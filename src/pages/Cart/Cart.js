import { useEffect, useState } from "react"
import useAxiosPrivate from "../../data/api/axiosInterceptors"
import useUserContext from "../../data/context/useUserContext"
import CartList from "./CartList"
const CART_URL = '/GetCartProducts'


const Cart = () => {
    const {user} = useUserContext();
    const [cartList, setCartList] = useState({})
    const axiosPrivate = useAxiosPrivate();

    const asy = async () => {
        try {
            const response = await (await axiosPrivate.get(CART_URL)).data;
            setCartList(response);
        } catch (err) {

        }
    }

    useEffect(() => {
        asy();
    },)

    return (
        <div>
            {user.email}
            {JSON.stringify(cartList)}
            <CartList items={cartList}/>
        </div>
    )
}

export default Cart;