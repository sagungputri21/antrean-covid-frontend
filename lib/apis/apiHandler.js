import envConfig from "./envConfig"
import axios from "./axiosConfig"

export const config = {
    API_Key = envConfig.ApiKey
}

export default{
    async getAllPasien() {
        try{
            let response = axios.get({ApiBaseURL}, {headers = config})
            return response.data
        }
        catch(e){
            console.log(e)
        }
    },

    async getPasienByID(id){
        try{
            let response = axios.get({ApiBaseURL} + `/${id}`, {headers = config})
            return response.data
        }
        catch(e){
            console.log(e)
        }
    },

    async addPasien(nama, nik) {
        try{
            let response = axios.push({ApiBaseURL}, {headers = config, body={"nama" : nama, "nik" : nik}})
            return response
        }
        catch(e){
            console.log(e)
        }
    },

    async deletePasien(id){
        try{
            let response = axios.delete({ApiBaseURL} + `/${id}`, {headers = config})
            return response
        }
        catch(e){
            console.log(e)
        }
    }

}