import CartElement from "./CartElement";

const CartList = (items) => {
    return items.map((item,index) =>
    <CartElement
        key={index}
    /> )
}