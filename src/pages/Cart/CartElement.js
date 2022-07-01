import useAxiosPrivate from "../../data/api/axiosInterceptors";
const INCREASE_URL = "/AddInCart";
const DECREASE_URL = "/DecreaseFromCart";

const CartElement = ({params}) => {
    const axiosPrivate = useAxiosPrivate();

    const Increase = async () => {
        const response = await axiosPrivate.post(INCREASE_URL,{usedId: params.usedId, productId:params.productId},{
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
        });
        console.log('+');
    }

    const Decrease = async () => {
        const response = await axiosPrivate.post(DECREASE_URL,{usedId: params.usedId, productId:params.productId},{
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
        });
        console.log('-');
    }

    return(
        <div>
        <hr/>
            {JSON.stringify(params)}
            <button onClick={()=>{Increase()}}>+</button>
            <button onClick={()=>{Decrease()}}>-</button>
        </div>
    )
}

export default CartElement;