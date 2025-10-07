import { useState, useEffect } from 'react'
import axiosClient from '../api/axiosClient'

export default function useFetch(url){
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(()=>{
    let mounted = true
    setLoading(true)
    axiosClient.get(url).then(r=>{
      if(mounted) setData(r.data)
    }).catch(e=>{
      if(mounted) setError(e)
    }).finally(()=> mounted && setLoading(false))

    return ()=> mounted = false
  }, [url])

  return { data, loading, error }
}
