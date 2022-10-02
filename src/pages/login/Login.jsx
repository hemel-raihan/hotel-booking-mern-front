import "./login.css";
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ()=>{
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const {loading, error, dispatch} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleClick = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
          const res = await axios.post("https://hotel-booking-app-api.herokuapp.com/api/auth/login", {username, password});
          dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
          navigate("/")
        } catch (err) {
          dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
        }
      };

    return <div className="login">
        <div className="lContainer">
            <input type="text" placeholder="User name" onChange={e=> setUsername(e.target.value)} className="lInput"/>

            <input
                type="password"
                placeholder="password"
                id="password"
                onChange={e=> setPassword(e.target.value)}
                className="lInput"
                />
            <button disabled={loading} onClick={handleClick} className="lButton">
            Login
            </button>
            {error && <span>{error.message}</span>}
        </div>
    </div>
}

export default Login