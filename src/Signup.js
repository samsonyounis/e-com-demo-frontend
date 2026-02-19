import axios from "axios";
import { useState } from "react"

function Signup(){
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [userType, setUserType] = useState("");
    const [password, setPassword] = useState("");

    const register = async()=>{
        console.log("sending user data to sign up api");
        const response = await axios.post("http://localhost:8080/register",
            {fullName:fullName, email:email,userType:userType, password:password}
        )
        console.log("the sign up response from the server is: ", response.data);
        alert(response.data.message);
    }

    return(
        <>
        <div style={{textAlign:"center"}}>
        <label>Full Name</label><br></br>
        <input
        type='text' name='fullName' placeholder='sam'
        value={fullName} onChange={(e)=> setFullName(e.target.value)}
        >
        </input><br></br><br></br>

        <label>Email</label><br></br>
        <input
        type='text' name='email' placeholder='e.g sam@gamil.com'
        value={email} onChange={(e)=> setEmail(e.target.value)}
        >
        </input><br></br><br></br>
        <label>Select User Type</label><br></br><br></br>
        <select value={userType} onChange={(e)=>setUserType(e.target.value)}>
            <option value="" disabled>
                Select user type
            </option>
            <option value="Seller">Seller</option>
            <option value="Buyer">Buyer</option>
        </select><br></br><br></br>
        <label>Password</label><br></br>
        <input
        type='text' name='password'
        value={password} onChange={(e)=> setPassword(e.target.value)}
        >
        </input><br></br><br></br>
        <button onClick={register}>Register</button><br></br><br></br>
        </div>
        </>
    )
}
export default Signup;