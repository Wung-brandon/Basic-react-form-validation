import './validate.css'
import { useState } from 'react'


export default function Validate(){
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const [errorUsername, setErrorUsername] = useState("")
    const [errorEmail, setErrorEmail] = useState("")
    const [errorPassword, setErrorPassword] = useState("")
    const [errorConfirmPassword, setErrorConfirmPassword] = useState("")

    const [userColor, setUserColor] = useState("")
    const [emailColor, setEmailColor] = useState("")
    const [passwordColor, setPasswordColor] = useState("")
    const [confirmPasswordColor, setConfirmPasswordColor] = useState("")


    function validateInputs(){
        // if (username === "" && email === "" && password === "" && confirmPassword === ""){
        //     alert("Enter all the fields")
        // }
     
        if (username.length > 6){
            setErrorUsername("")
            setUserColor("green")
        }
        else{
            setErrorUsername("Username must be 6 letters and above long")
            setUserColor("red")
        }

        if (email.includes("@gmail.com")){
            setErrorEmail("")
            setEmailColor("green")
        }
        else{
            setErrorEmail("Email must include @gmail.com")
            setEmailColor("red")
        }

        if (password.length > 6){
            setErrorPassword("")
            setPasswordColor("green")
        }
        else{
            setErrorPassword("Password must be 6 letters and above long")
            setPasswordColor("red")
        }

        if (password !== "" && password === confirmPassword){
            setErrorConfirmPassword("")
            setConfirmPasswordColor("green")
        }
        else{
            setErrorConfirmPassword("Password didn't match.")
            setConfirmPasswordColor("red")
        }
    }

    return(
        <>
            <div className="card">
                <div className="card-image"></div>
                <form onSubmit={(e) => e.preventDefault()}>
                    <input 
                    type="text"
                    placeholder='Name' 
                    style={{borderColor: userColor}}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}/>
                    <p className="error">{errorUsername}</p>

                    <input 
                    type="email"
                    placeholder='Email' 
                    style={{borderColor: emailColor}}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
                    <p className="error">{errorEmail}</p>

                    <input 
                    type="password"
                    placeholder='Password' 
                    style={{borderColor: passwordColor}}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
                    <p className="error">{errorPassword}</p>

                    <input 
                    type="password"
                    placeholder='Confirm Password' 
                    style={{borderColor: confirmPasswordColor}}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}/>
                    <p className="error">{errorConfirmPassword}</p>

                    <button className="submit-btn" onClick={validateInputs}>Submit</button>
                </form>
            </div>
        
        </>
    )
}