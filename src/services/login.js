import { http } from './config';



export default {

    store:(login) =>{
        return http.post('auth/login', login)
    }

}