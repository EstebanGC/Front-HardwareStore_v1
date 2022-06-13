import React, { useEffect } from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux'
import getProvider from '../actions/getProvider'
import { getAllProviders, providertp } from '../state/slices/providerSlice'
import { statetp } from '../state/store'

const ListProvider = () => {
const allProviders = useSelector((state:statetp) => state.provider)

const dispatch = useDispatch()

useEffect(()=> {
    
    getProvider().then(
        (providers)=> {
            dispatch(getAllProviders(providers))
        }
    )
},[])
    return (  
    <div>
      {allProviders.map((provider:providertp) => <h1>{provider.providerName}<br/>{provider.email}</h1> )}
    </div>
  )
}

export default ListProvider