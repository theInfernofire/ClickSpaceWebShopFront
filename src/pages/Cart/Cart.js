import { useEffect, useState } from "react"
import useAxiosPrivate from "../../data/api/axiosInterceptors"
const CART_URL = '/GetCartProducts'


const Cart = () => {
    const [cartList, setCartList] = useState('')
    const axiosPrivate = useAxiosPrivate();

    useEffect(() => {
        const asy = async () => {
            try {
                const response = await (await axiosPrivate.get(CART_URL)).data;
                console.log(response);
                setCartList(response);
            } catch (err) {

            }
        }
        asy();
    },)

    return (
        <div>
            mma mia
        </div>
    )
}

export default Cart;