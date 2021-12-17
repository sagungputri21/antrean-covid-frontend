import Axios from 'axios'

BaseURL = "https://vaksin-server.herokuapp.com"
API_Key = "ddbfda4fcc2c969528ca65243e440f53cbc509278534b6bca167211779b4a170"


const axios = Axios.create({BaseURL})

export default{
    async getAllQueue(JWT_Token) {
        try{
            let response = axios.get("/api/queue", {headers : {
                Key : API_Key,
                Authorization: JWT_Token
            }})
            return response.data
        }
        catch(e){
            console.log(e)
        }
    },

    async getOneQueue(id, JWT_Token){
        try{
            let response = axios.get("/api/queue/" + id, {headers : {
                Key : API_Key,
                Authorization: JWT_Token
            }})
            return response.data
        }
        catch(e){
            console.log(e)
        }
    },

    async getOneQueueFront(id, JWT_Token){
        try{
            let response = axios.get("/api/queue/" + id + "/front", {headers : {
                Key : API_Key,
                Authorization: JWT_Token
            }})
            return response.data
        }
        catch(e){
            console.log(e)
        }
    },

    async addPasien(user, JWT_Token) {
        try{
            let response = axios.post("/api/queue/" + user, {headers : {
                Key : API_Key,
                Authorization: JWT_Token
            }})
            return response
        }
        catch(e){
            console.log(e)
        }
    },

    async deletePasien(id, JWT_Token){
        try{
            let response = axios.delete("/api/queue/" + id, {headers : {
                Key : API_Key,
                Authorization: JWT_Token
            }})
            return response
        }
        catch(e){
            console.log(e)
        }
    },

    async createQueue(nama, max, JWT_Token){
        try{
            let response = axios.post("/api/queue/",{ "nama" : nama, "max" : max}, {headers : {
                Key : API_Key,
                Authorization: JWT_Token
            }})
            return response
        }
        catch(e){
            console.log(e)
        }
    },

    async addVaccine(id, JWT_Token){
        try{
            let response = axios.patch("/api/queue/status/" + id, {headers : {
                Key : API_Key,
                Authorization: JWT_Token
            }})
        }
        catch(e){
            console.log(e)
        }
    }

}