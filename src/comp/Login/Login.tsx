import axios from "axios";
import {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";
import "./login.css";

const Login = () => {
    const [credentials, setCredentials] = useState({
        username: null,
        password: null,
    });

    // @ts-ignore
    const {loading, error, dispatch} = useContext(AuthContext);

    const navigate = useNavigate()

    const handleChange = (e: any) => {
        setCredentials((prev) => ({...prev, [e.target.id]: e.target.value}));
    };

    const handleClick = async (e: any) => {
        e.preventDefault();
        dispatch({type: "LOGIN_START"});
        try {
            const res = await axios.post("/auth/login", credentials);
            console.log(res.data,'res')
            dispatch({type: "LOGIN_SUCCESS", payload: res.data});
            navigate("/")
        } catch (err) {
            // @ts-ignore
            dispatch({type: "LOGIN_FAILURE", payload: err.response.data});
        }
    };


    return (
        <div className="login">
            <div className="lContainer">
                <input
                    type="text"
                    placeholder="username"
                    id="username"
                    onChange={handleChange}
                    className="lInput"
                />
                <input
                    type="password"
                    placeholder="password"
                    id="password"
                    onChange={handleChange}
                    className="lInput"
                />
                <button disabled={loading} onClick={handleClick} className="lButton">
                    Login
                </button>
                {error && <span>{error}</span>}
            </div>
        </div>
    );
};

export default Login;