import useAxiosPrivate from "../../data/api/axiosInterceptors";
const INCREASE_URL = "/AddInCart";
const DECREASE_URL = "/DeacreaseInQuantityCart";

const CartElement = ({params}) => {
    const axiosPrivate = useAxiosPrivate();

    const Increase = async () => {
        const response = await axiosPrivate.post(INCREASE_URL + "?productId="+params.productId);
    }

    const Decrease = async () => {
        console.log(params.id);
        const response = await axiosPrivate.post(DECREASE_URL+"?Id="+params.productId+"&userId=dachimagaria");
    }

    return(
        <div id="infoline" style={{display:"flex",justifyContent:"center", padding: "0.4rem"}}>
            {JSON.stringify(params)}
            <button onClick={()=>{Increase()}} style={{width: "3rem", height: "1.5rem", fontWeight: "bold", color: "white", padding: "2px 7px",
            backgroundColor: "rgb(40, 45, 46)", border: "none", borderRadius: "8px", cursor: "pointer", transition: "all 0.3 ease-in-out 0s"
            }}>+</button>

                                                        
                                                        
            <button onClick={()=>{Decrease()}} style={{width: "3rem", height: "1.5rem", fontWeight: "bold", color: "white", padding: "2px 7px",
            backgroundColor: "rgb(40, 45, 46)", border: "none", borderRadius: "8px", cursor: "pointer", transition: "all 0.3 ease-in-out 0s"
            }}>-</button>
        </div>
    )
}

export default CartElement;