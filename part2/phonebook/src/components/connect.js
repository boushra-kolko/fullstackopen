import axios from 'axios'


const getData = (baseURL)=>
    axios
    .get(baseURL)
    .then(response => response.data)

const update = (baseURL,newItem) => axios.post(baseURL,newItem).then(response=>response.data)

export default {getData,update}