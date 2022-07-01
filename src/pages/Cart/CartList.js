import { useEffect } from "react";
import CartElement from "./CartElement";

const CartList = ({items,add}) => {
    useEffect(() => {
        const val = items.reduce((sum,item) => sum+item.price*item.quantity,0)
        add(val);
    },[])

    return items.map((item =>
    <CartElement
        key={item.id}
        params={item}
        sum={add}
    /> ));
}

export default CartList;