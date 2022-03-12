import {clienteAxios} from './config/axios'
import axios from 'axios'

export const axiosSendFile = async (file) =>{
    console.log('En service',file)

    let data = new FormData();
    data.append('file', file);
    let  respuesta = await axios.post(
        `http://localhost:4000/api/file`,
         data,
         {
            headers: {
                'Content-Type': 'multipart/form-data'
              }
          }
        )

    return respuesta
}

export const axiosGetPartners = async () =>{
    let  respuesta = {}
    try {
        const  res  = await clienteAxios.get(`/api/file`,
        {
           headers: {
               'Content-Type': 'multipart/form-data'
             }
         })
        respuesta = res.data
        //console.log(respuesta)
        return respuesta
    } catch (error) {
        //console.log(error.response.data)
        respuesta = error
    }
    return respuesta
}

export const axiosGetP1 = async () =>{
    let  respuesta = {}
    try {
        const  res  = await clienteAxios.get(`/api/file/p1`,
        {
           headers: {
               'Content-Type': 'multipart/form-data'
             }
         })
        respuesta = res.data
        //console.log(respuesta)
        return respuesta
    } catch (error) {
        //console.log(error.response.data)
        respuesta = error
    }
    return respuesta
}

export const axiosGetP2 = async () =>{
    let  respuesta = {}
    try {
        const  res  = await clienteAxios.get(`/api/file/p2`,
        {
           headers: {
               'Content-Type': 'multipart/form-data'
             }
         })
        respuesta = res.data
        //console.log(respuesta)
        return respuesta
    } catch (error) {
        //console.log(error.response.data)
        respuesta = error
    }
    return respuesta
}

export const axiosGetP3 = async () =>{
    let  respuesta = {}
    try {
        const  res  = await clienteAxios.get(`/api/file/p3`,
        {
           headers: {
               'Content-Type': 'multipart/form-data'
             }
         })
        respuesta = res.data
        //console.log(respuesta)
        return respuesta
    } catch (error) {
        //console.log(error.response.data)
        respuesta = error
    }
    return respuesta
}

export const axiosGetP4 = async () =>{
    let  respuesta = {}
    try {
        const  res  = await clienteAxios.get(`/api/file/p4`,
        {
           headers: {
               'Content-Type': 'multipart/form-data'
             }
         })
        respuesta = res.data
        //console.log(respuesta)
        return respuesta
    } catch (error) {
        //console.log(error.response.data)
        respuesta = error
    }
    return respuesta
}

export const axiosGetP5 = async () =>{
    let  respuesta = {}
    try {
        const  res  = await clienteAxios.get(`/api/file/p5`,
        {
           headers: {
               'Content-Type': 'multipart/form-data'
             }
         })
        respuesta = res.data
        //console.log(respuesta)
        return respuesta
    } catch (error) {
        //console.log(error.response.data)
        respuesta = error
    }
    return respuesta
}