import {axiosClient} from "../../../api/axios";

const AdminApi = {
  getCsrfToken: async ()=>{
    return axiosClient.get('/sanctum/csrf-cookie')
  },
  login: async (email, password) => {
      console.log('here')
    return await axiosClient.post('/api/login', {email, password})
  },
  logout: async () => {
    return await axiosClient.post('/api/logout')
  },
  getUser: async () => {
    return await axiosClient.get('/api/user')
  },

  getChauffeurs : async ()=>{
    return await axiosClient.get('/api/Chauffeurs')
  },
    getHistoriques : async ()=>{
        return await axiosClient.get('/api/Historiques')
    },
    getVehicules : async ()=>{
        return await axiosClient.get('/api/Vehicules')
    },
    getAgences : async ()=>{
        return await axiosClient.get('/api/Agences')
    },
    getGarage : async ()=>{
        return await axiosClient.get('/api/Garages')
    },


}
export default AdminApi
