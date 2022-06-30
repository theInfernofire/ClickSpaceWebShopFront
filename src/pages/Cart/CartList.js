import CartElement from "./CartElement";

const CartList = ({items}) => {
    return items.map((item =>
    <CartElement
        key={item.id}
        params={item}
    /> ));
}

export default CartList;