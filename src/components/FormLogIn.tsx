import React, { ReactSVG, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig"
import '../styles/FormLogin.css'

const FormLogIn: React.FunctionComponent = () => {

    const dispatch = useDispatch()

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const logInForm = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()

        signInWithEmailAndPassword(auth, userName, password)
            .then((userCredential) => {
                const user = userCredential.user;
            })
            .catch((error) => {
                const errorCode = error.Code;
                const errorMessage = error.mesage;
            });

        setPassword('')
        setUserName('')
    }


    return (
        <div>
            <h1>Log In</h1>
            <form className='login-form'>
                <label htmlFor='userName'>Username</label>
                <br />
                <input
                    onChange={(e) => setUserName(e.target.value)}
                    type="text"
                    name="username"
                    value={userName}
                /><br />
                <label htmlFor="password">Password</label><br />
                <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    name="password"
                    value={password}
                /><br />
                <button className='login-bttn' onClick={(e) => logInForm(e)}>Log In</button><br />
            </form>
        </div>
    );
};

export default FormLogIn