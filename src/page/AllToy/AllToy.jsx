
import { useEffect, useState } from "react";
import Details from "../Details/Details";



const AllToy = () => {
    const [alldata, setAlldata] = useState([]);
const [modal, setModal] = useState('')

 

    useEffect(() => {
        fetch('http://localhost:5000/alltab/text')
            .then(res => res.json())
            .then(data => {
                setAlldata(data)
            })
    }, []);

const handelDetails =(details)=>{
    setModal(details)


}


    return (
        <div className="overflow-x-auto">
            <table className="table w-3/4 mx-auto">
                <thead>
                    <tr>
                        <th className="w-2">No:</th>
                        <th>Name</th>
                        <th>Toy Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Category</th>
                        <th>Button</th>

                    </tr>
                </thead>
                
                    {
                        alldata.map((singleData, i) =>
                            <tbody key={singleData._id}>
                                <tr>
                                    <th>{i + 1}</th>
                                    <td>{}</td>
                                    <td>{singleData.name}</td>
                                    <td>{singleData.price}</td>
                                    <td>{singleData.quantity}</td>
                                    <td>{singleData.category}</td>
                                    <label onClick={()=>handelDetails(singleData)} htmlFor={singleData._id} className="btn">details</label>
                                    
                                </tr>
                            </tbody>)
                    }
                
            </table>
         <Details modal={modal}></Details>
        </div>
        
    );
};

export default AllToy;