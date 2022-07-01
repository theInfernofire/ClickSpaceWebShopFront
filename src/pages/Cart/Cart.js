import { useEffect, useState } from "react"
import useAxiosPrivate from "../../data/api/axiosInterceptors"
import useUserContext from "../../data/context/useUserContext"
import CartList from "./CartList"
const CART_URL = '/GetCartProducts'


const Cart = () => {
    const { user } = useUserContext();
    const [cartList, setCartList] = useState({})
    const axiosPrivate = useAxiosPrivate();
    const [loading, setLoading] = useState(true);

    const asy = async () => {
        try {
            const response = await (await axiosPrivate.get(CART_URL)).data;
            setCartList(response);
            if (cartList != null) {
                setLoading(false);
            }
        } catch (err) {

        }
    }

    useEffect(() => {
        asy();
    },[cartList,setCartList])

    return (
        <div>
            {user.email}
            {!loading ? <CartList items={cartList} /> : "Nothing in the cart"}
        </div>
    )
}

export default Cart;