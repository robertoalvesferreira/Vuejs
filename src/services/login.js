import { http } from './config';


const USER_TOKEN = localStorage.getItem('token')
const AuthStr = 'Bearer '.concat(USER_TOKEN)


export default {

    login:(login) =>{
        return http.post('auth/login', login)
    },
    logout:() =>{
        return http.post('auth/logout',"" ,{headers: {'Authorization': AuthStr, 'Content-Type': 'application/x-www-form-urlencoded'}})
    }

}