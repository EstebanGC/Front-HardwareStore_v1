import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import addProvider from '../actions/addProvider'
import { statetp } from '../state/store'

const FormProvider = () => {

    const dispatch = useDispatch()

    const [providerName, setProviderName] = useState("")
    const onProvNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setProviderName(e.target.value)

    const [providerId, setProviderId] = useState("")
    const onProvIdChange = (e: React.ChangeEvent<HTMLInputElement>) => setProviderId(e.target.value)

    const [providerEmail, setProviderEmail] = useState("")
    const onProvEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => setProviderEmail(e.target.value)

    const [providerPassport, setProviderPassport] = useState("")
    const onProvPassportChange = (e: React.ChangeEvent<HTMLInputElement>) => setProviderPassport(e.target.value)


    const createProvider = (e:React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        addProvider(providerId, providerName, providerEmail, providerPassport, dispatch)
        setProviderName("")
        setProviderEmail("")
        setProviderPassport("")
    }
    return (
        <div>
            <form action=''>
                <label>Name</label>
                <input onChange={onProvNameChange} type="text" name="providerName" />
                <br/>
                <label>ID</label>
                <input onChange={onProvIdChange} type="text" name="prov iderId" />
                <br/>
                <label>E-mail</label>
                <input onChange={onProvEmailChange} type="text" name="providerEmail" />
                <br/>
                <label>Passport</label>
                <input onChange={onProvPassportChange} type="text" name="providerPassport" />
                <br/>
                <button onClick={createProvider} type="submit">Add Provider</button>
            </form>
            <h1>Providers</h1>
        </div>
    )
}

export default FormProvider