import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import addProvider from '../actions/addProvider'
import { statetp } from '../state/store'
import ListProvider from './ListProvider'
import '../styles/FormProvider.css'

const FormProvider = () => {

    const dispatch = useDispatch()

    const [providerName, setProviderName] = useState("")
    const onProvNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setProviderName(e.target.value)

    const [providerEmail, setProviderEmail] = useState("")
    const onProvEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => setProviderEmail(e.target.value)

    const [providerPassport, setProviderPassport] = useState("")
    const onProvPassportChange = (e: React.ChangeEvent<HTMLInputElement>) => setProviderPassport(e.target.value)


    const createProvider = (e:React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        addProvider(providerName, providerEmail, providerPassport, dispatch)
        setProviderName("")
        setProviderEmail("")
        setProviderPassport("")
    }
    return (
        <div>
            <form action='' className='provider-form'>
                <label>Name</label>
                <input onChange={onProvNameChange} type="text" name="providerName" value={providerName} />
                <br/>
                <label>E-mail</label>
                <input onChange={onProvEmailChange} type="text" name="providerEmail" value={providerEmail} />
                <br/>
                <label>Passport</label>
                <input onChange={onProvPassportChange} type="text" name="providerPassport" value={providerPassport}/>
                <br/>
                <button className='provider-bttn' onClick={createProvider} type="submit">Add Provider</button>
            </form>
            <hr></hr>
            <h1>Providers</h1>
            <ListProvider/>
        </div>
    )
}

export default FormProvider