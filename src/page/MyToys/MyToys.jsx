import { useContext, useEffect, useState,   } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import ToyFrom from "../ToyFrom/ToyFrom";



const MyToys = () => {
    const {user} = useContext(AuthContext)
  console.log(user)
    const [toys, setToys] = useState([])

    const url = `https://toy-store-server-tawny.vercel.app/insertToy?email=${user?.email}`;

    useEffect(()=>{
        fetch(url)
        .then(res =>res.json())
        .then(data=>setToys(data))
    },[])

    const handelDelete = id =>{
      const proceed = confirm('are sure you want to delete')
      if (proceed) {
        fetch(`https://toy-store-server-tawny.vercel.app/insertToy/${id}`,{
    method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
          if (data.deletedCount>0) {
            alert('delete successful')
            const remaining = toys.filter(toy=>toy._id !== id);
            setToys(remaining);
          }
        })
      }
    }


    const handelUpdate = id => {
      fetch(`https://toy-store-server-tawny.vercel.app/insertToy/${id}`,{
        method:'PATCH',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify({status: 'confirm'})
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data);
        if (data.modifiedCount>0) {
          // update
          const remaining = toys.filter(toy=>toy._id !== id);
          const updated = toys.find(toy=>toy._id === id);
          updated.status='confirm'
          const newToys = [updated, ...remaining]
          setToys(newToys)
        }
      })
    }
    
 
    return (
        <div className="overflow-x-auto w-full">
           <table className="table w-full">
 <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>image</th>
        <th>Name</th>
        <th>category</th>
        <th>quantity</th>
        <th>price</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {
        toys.map(toy=><ToyFrom key={toy._id} toy={toy} handelDelete={handelDelete} handelUpdate={handelUpdate}></ToyFrom>)
      }
      </tbody>
    
    
  </table>
</div>
    );
};

export default MyToys;