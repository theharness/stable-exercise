import axios from 'axios'
import config from '../config'

const apiInstance = axios.create({
  baseURL: config.aws.graphqlEndpoint,
  headers: { 'x-api-key': config.aws.apiKey }
})

export default apiInstance