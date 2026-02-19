import axios from "axios";
import { useState, useEffect } from "react";
import {useParams} from 'react-router-dom';

function Payment(){
    const {price} = useParams();
    const {id} = useParams();
    const [phone, setPhone] = useState("");
    const payment = async()=>{
        const response = await axios.post("http://localhost:8080/payment",
            {amount:price, phone:phone, productId:id}
        )
        console.log("the payment response is: ",(await response).data);
    }
    return(
        <>
        <label>Amount</label><br></br>
        <input type="number" placeholder="100" value={price}>
        </input><br></br><br></br>
        <label>Phone Number</label><br></br>
        <input type="text" placeholder="e.g 0708575657"
        value={phone} onChange={(e)=>setPhone(e.target.value)}>
        </input><br></br><br></br>
        <button onClick={payment}>Pay</button>
        </>
    )
}
export default Payment;