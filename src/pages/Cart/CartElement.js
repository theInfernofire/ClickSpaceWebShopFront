import useAxiosPrivate from "../../data/api/axiosInterceptors";
import { useEffect } from "react";
const INCREASE_URL = "/AddInCart";
const DECREASE_URL = "/DeacreaseInQuantityCart";
const DELETE_URL = "/DeleteFromCart";

const CartElement = ({params,sum}) => {
    const axiosPrivate = useAxiosPrivate();

    const Increase = async () => {
        const response = await axiosPrivate.post(INCREASE_URL + "?productId="+params.productId);
        sum(params.price)
    }

    const Decrease = async () => {
        console.log(params.id);
        const response = await axiosPrivate.post(DECREASE_URL+"?Id="+params.productId+"&userId="+params.userId);
        if(params.quantity > 1){
            sum(-params.price)
        }else{
            const response = await axiosPrivate.post(DELETE_URL+"?Id="+params.productId+"&userId=dachimagaria");
            sum(-params.price)
        }
    }

    return(
        <div id="infoline" style={{ display: "flex", justifyContent: "center", padding: "0.4rem", alignItems: "center", justifyContent:"center",marginTop:"1rem",marginLeft:"35rem",marginRight:"35rem",border:"solid 1px",padding:"1.5rem 1rem"}}>
            Item: {params.title} --- quantity: {params.quantity} ---Price per: ${params.price}  
            <button onClick={()=>{Increase()}} style={{width: "3rem", height: "1.5rem", fontWeight: "bold", color: "white", padding: "2px 7px",
            marginLeft: "15px",
            backgroundColor: "rgb(40, 45, 46)", border: "none", borderRadius: "8px", cursor: "pointer", transition: "all 0.3 ease-in-out 0s"
            }}>+</button>

                                                        
                                                        
            <button onClick={()=>{Decrease()}} style={{width: "3rem", height: "1.5rem", fontWeight: "bold", color: "white", padding: "2px 7px",
            marginLeft: "15px",
            backgroundColor: "rgb(40, 45, 46)", border: "none", borderRadius: "8px", cursor: "pointer", transition: "all 0.3 ease-in-out 0s"
            }}>-</button>
        </div>
    )
}

export default CartElement;