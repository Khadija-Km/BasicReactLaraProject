import {axiosClient} from "../../../api/axios";

const AdminApi = {
  getCsrfToken: async ()=>{
    return axiosClient.get('/sanctum/csrf-cookie')
  },
  login: async (email, password) => {
    return await axiosClient.post('/api/login', {email, password})
  },
  logout: async () => {
    return await axiosClient.post('/api/logout')
  },
  getUser: async () => {
    return await axiosClient.get('/api/user')
  },

}
export default AdminApi
