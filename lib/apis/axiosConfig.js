import Axios from 'axios';
import envConfig from './envConfig';

const baseURL = envConfig.ApiBaseURL

Axios.defaults.withCredentials = true;
const axios = Axios.create({baseURL})


export default axios