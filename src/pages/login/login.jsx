import "./login.css";
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from './../../context/AuthContext';

const Login = ()=>{
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    

    const {loading, error, dispatch} = useContext(AuthContext)

    return <div className="login">
        <div className="lContainer">
            <input type="text" placeholder="User name" onChange={e=>(e.target.value)} className="lInput"/>
        </div>
    </div>
}

export default Login