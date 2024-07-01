import {redirect} from 'react-router-dom'


export const CheckLogin = ()=>{

    const id = localStorage.getItem("id");

    if(id===null){
        alert("Please login first")
        return redirect("/login")
    }
    
    return true;
   
}