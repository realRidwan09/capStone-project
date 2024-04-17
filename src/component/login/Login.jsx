import React from "react";
import { useState } from "react";
import "./Login.css"
import figgyLogo from '../../assets/figgyLogo.png'
import Remember from "../remember/Remember";
import Forgetpassword from "../forgotpassword/Forgotpassword";


function Login(){

   
    const [state, setState] = useState({
        username : "",
        password : ""
    })
    
    const LoginAuth =(e)=>{
       const name = e.target.name
       const value = e.target.value

        setState((preState)=>({
            ...preState,
            [name] : value
        }))

    }

    const submitHandler =(e)=>{
        e.preventDefault()
    }
    
        const Verified = ()=>{
            if(state.username !== ""){
                console.log(state.username); 
            }
            else{alert("enter username")}

            if(state.password !== ""){
                console.log(state.password); 
            }
            else{alert("enter password")}

           
        }
    
    return(
        <>
            <div className="parentWrap">
                <div id="heading">
                    <h1>Welcome to FiggyChat</h1>
                    <span><img src={figgyLogo} alt="figgyLogo.png" /></span>
                </div>
                <br />
                
                <form onSubmit={submitHandler} id="inputWrap">
                    <div id="username">
                       
                        <input type="text" id="username" placeholder='Username' name="username" value={state.username} onChange={(e)=>{LoginAuth(e)}} />
                    </div>
                    
                    <div id="password">
                        
                        <input type="password" id="password" placeholder='Password' name="password" value={state.password} onChange={(e)=>{LoginAuth(e)}}/>
                    </div>

                    <div id="linkWrap">

                            <div id="remember">
                                <input type="checkbox" name="" id="box" />
                                <div id="rem">
                                <Remember/>
                                </div>
                            </div>
                            
                            <div id="forgetpassword">
                                <Forgetpassword/>
                            </div>
                            
                    </div>

                        <br />
                       
                       
                        <button onClick={Verified}>Sign in</button>
                   
                </form>
            </div>
        </>
    )
}

export default Login