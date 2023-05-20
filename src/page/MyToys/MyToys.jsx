import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";



const MyToys = () => {
    const {user} = useContext(AuthContext)
  
    const [toys, setToys] = useState([])

    const url = `http://localhost:5000/insertToy?email=?${user?.email}`;

    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setToys(data)
        })
    },[url])
    return (
        <div>
          
        </div>
    );
};

export default MyToys;