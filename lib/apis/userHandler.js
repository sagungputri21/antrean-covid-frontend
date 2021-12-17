import Axios from 'axios'

const BaseURL = "https://vaksin-server.herokuapp.com"
const API_Key = "ddbfda4fcc2c969528ca65243e440f53cbc509278534b6bca167211779b4a170"

// Axios.defaults.withCredentials = true;
export const axios = Axios.create({BaseURL})

export default {
    async login(email, password, dokter){
        try{
            let response = await Axios.post(BaseURL + "/auth/login/",{"email" : email, "password" : password, "dokter" : dokter}, { headers : {
                'Key' : API_Key,
                'Content-Type' : 'application/json'
            }})
            return response.data
        }
        catch(e){
            console.log(e)
        }
    },

    async register(email, password, nama, nik, dokter){
        try{
            let response = axios.post("/auth/login",{"email" : email, "password" : password, "nama" : nama, "nik" : nik, "dokter" : dokter}, {
                Key : API_Key,
            })
            return response.data
        }
        catch(e){
            console.log(e)
        }
    }
}