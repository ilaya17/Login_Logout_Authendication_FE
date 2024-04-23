import { useEffect } from "react";
// import { API } from "../global";
import axios from "axios";
function LoginSuccess({ user, setUser }) {
    console.log("login success :", user)
    useEffect(() => {
        const getUser = async () => {

            await axios.get("https://multi-oauth.onrender.com/auth/login/success")
                .then((res) => setUser(res.data.user))
                .catch((err) => console.log(err))
        }
        getUser();

    }, []);

    console.log(user)
    return (
        <div className="log">
            <h1 className="h1">LoginSuccess</h1>
            <img className="loginsuccess" src="https://img.freepik.com/premium-photo/silhouette-man-standing-holding-flag_50039-1879.jpg?size=626&ext=jpg&ga=GA1.1.523418798.1711497600&semt=ais" alt="img" />
        </div>
    )
}



export default LoginSuccess;