import React, {ReactSVG, useState } from 'react'
import  { useDispatch, useSelector } from 'react-redux'

const LogIn: React.FunctionComponent = () => {
    const dispatch = useDispatch()

    const [userName, setUserName] = useState("")
    const [password, setPassword] = userState("")
    

    const logInForm = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=> {
        e.preventDefault()

        signEmailPassword(auth, userName, password)
        .then((userCredential) => {
            const user = userCredential.user;
        })
        .catch((error) => {
            const errorCode= error.Code;
            const errorMessage = error.mesage;
        });

        setPassword('')
        setUserName('')
    }
    }

    return (
        <div>
            <h1>Log In</h1>
            <form>
                <label htmlFor='userName'>Username</label>
                <br/>
            </form>
        </div>
    )
}