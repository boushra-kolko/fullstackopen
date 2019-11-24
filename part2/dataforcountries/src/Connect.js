import axios from 'axios';
import {React,useEffect,useState} from 'react';

const Connect = () =>
{
    const [DataList,setDataList] = useState([])
    const Url="https://restcountries.eu/rest/v2/all";

    useEffect(()=>{
        axios
        .get(Url)
        .then(response => {setDataList(response.data)
       }
          )
    },[])
    
    return DataList
}

export default Connect