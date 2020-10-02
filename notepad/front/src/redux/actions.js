import axios from "axios"

export const signIn = async () => {
    try{
        console.log("teste")
        const res = await axios.post('http://localhost:3003/user/signIn')
        console.log("teste")
    }catch(error){

    }
};
