import React,{useState,useEffect} from 'react'
import axios from 'axios'
// import {RAPID_API_KEY} from '@env'

const rapidApiKey = process.env.RAPID_API_KEY

function useFetch(endpoint,query) {
    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
          'X-RapidAPI-Key': '3678334ac6msh5190bedcef26137p121772jsna0c27fef5de8',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: {...query}
      };

    const fetchdata=async()=>{
        setIsLoading(true);
        try{
            const response = await axios.request(options)
            setData(response.data)
            setIsLoading(false)
        }
        catch(error){
            setError(error)
            setIsLoading(false)
            alert("There is an error")
        }
        finally{
            setIsLoading(false);
        }
    }
    useEffect(()=>{
        fetchdata();
    },[])

    const refetch=()=>{
        setIsLoading(true)
        fetchdata();
    }


    const [data,setData] = useState([])
    const [isLoading,setIsLoading] = useState(false)
    const [error,setError] = useState(null)


  return {data,isLoading,error,refetch}
}

export default useFetch