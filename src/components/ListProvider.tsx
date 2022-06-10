import React from 'react'
import { Provider, useSelector } from 'react-redux'
import { providertp } from '../state/slices/providerSlice'
import { statetp } from '../state/store'

const ListProvider = () => {
const allProviders = useSelector((state:statetp) => state.provider)
    return (  
    <div>
      {allProviders.map((provider:providertp) => <h1>{provider.email}</h1> )}
    </div>
  )
}

export default ListProvider
