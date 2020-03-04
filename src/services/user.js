import { http } from './config';



export default {
    index:() =>{
        return http.get('users')
    },

    store:(user) =>{
        return http.post('users', user)
    }

}