import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const login = async()=>{
        console.log("Sending login request");
        const response = await axios.post("http://localhost:8080/login",
            {email:email, password:password}
        )
        console.log("the login response is: ", response.data);
        if(response.data.status=="00"){
            //store the token
            localStorage.setItem("userToken", response.data.token)
        }
        if(response.data.status == "00" && response.data.userType =="Seller"){
            navigate("/seller");
        }
        else if(response.data.status=="00" && response.data.userType=="Buyer"){
            navigate("/buyer");
        }
        else if(response.data.status=="00" && response.data.userType=="Admin"){
            navigate("/admin");
        }
        else{
            alert(response.data.message);
        }
    }
    return(
        <>
        <div style={{textAlign:"center"}}>
        <label>Email</label><br></br>
        <input
        type='text' name='email'
        value={email} onChange={(e)=> setEmail(e.target.value)}
        >
        </input><br></br><br></br>
        <label>Password</label><br></br>
        <input
        type='text' name='password'
        value={password} onChange={(e)=> setPassword(e.target.value)}
        >
        </input><br></br><br></br>
        <button onClick={login}>Login</button><br></br><br></br>
        </div>
        </>
    )
}
export default Login;