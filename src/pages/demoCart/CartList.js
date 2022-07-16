import { useEffect } from "react";
import CartElement from "./CartElement";

const CartList = ({items}) => {
    useEffect(() => {
        const val = items.reduce((sum,item) => sum+item.price*item.quantity,0)
    },[])

    return items.map((item =>
    <CartElement
        key={item.id}
        params={item}
    /> ));
}

export default CartList;