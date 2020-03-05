import { http } from './config';

const USER_TOKEN = localStorage.getItem('token')
const AuthStr = 'Bearer '.concat(USER_TOKEN)


export default {
    
    index:() =>{  
        return http.get('users' , {headers: {'Authorization': AuthStr}})
    },

    store:(user) =>{
        return http.post('users', user);
    }



}