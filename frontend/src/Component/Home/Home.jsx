import React,{useEffect, useState} from "react"
import {useNavigate} from "react-router-dom"
import {useCookies} from 'react-cookie'
import axios from "axios"
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
function Home(){
    const navigate=useNavigate()
    const [cookies,setCookie,removeCookie] = useCookies([]);
    const [user,setuser] = useState()
    useEffect(()=>{
        const verifyUser = async()=>{
            if(!cookies.jwt){
                navigate("/login");
            }else{
                const {data}=await axios.post("http://localhost:5000",{},{withCredentials:true});
                if(!data.status){
                    removeCookie("jwt");
                    navigate("/login")
                }else{
                    navigate("/")
                    setuser(data)
                }
            }
        }
        verifyUser();
    },[cookies,navigate,removeCookie])
    function logout(){
        removeCookie("jwt")
        navigate("/login")
    }
    return(
        <div className="private">
            <h1>This is home Page</h1>
            <button onClick={logout}>Log out</button>
            <ToastContainer/>
        </div>
    )
}

export default Home;