import useAxiosPrivate from "../../data/api/axiosInterceptors";
import { useEffect } from "react";
import "./CartElement.scss";
const INCREASE_URL = "/AddInCart";
const DECREASE_URL = "/DeacreaseInQuantityCart";
const DELETE_URL = "/DeleteFromCart";


const CartElement = ({ params }) => {

    return (
        <div className="element">
            <div className="element" id="infoline" style={{ display: "flex", justifyContent: "center", padding: "0.4rem", alignItems: "center", justifyContent:"center",marginTop:"1rem",marginLeft:"35rem",marginRight:"35rem",border:"solid 1px",padding:"1.5rem 1rem"}}>
                Item: {params.title} --- quantity: {params.quantity} ---Price per: ${params.price}
                <button onClick={() => { }} style={{
                    width: "3rem", height: "1.5rem", fontWeight: "bold", color: "white", padding: "2px 7px",
                    marginLeft: "15px",
                    backgroundColor: "rgb(40, 45, 46)", border: "none", borderRadius: "8px", cursor: "pointer", transition: "all 0.3 ease-in-out 0s"
                }}>+</button>



                <button onClick={() => { }} style={{
                    width: "3rem", height: "1.5rem", fontWeight: "bold", color: "white", padding: "2px 7px",
                    marginLeft: "5px",
                    backgroundColor: "rgb(40, 45, 46)", border: "none", borderRadius: "8px", cursor: "pointer", transition: "all 0.3 ease-in-out 0s"
                }}>-</button>
            </div>
        </div>
    )
}

export default CartElement;