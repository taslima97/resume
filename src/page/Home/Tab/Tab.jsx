import { useEffect, useState } from "react";
import SingleTab from "./SingleTab";


const Tab = () => {
    const [datas, setDatas] = useState([])
    const [active, setActive] = useState('Single Sports')
    console.log(active)
    useEffect(()=>{
        fetch(`http://localhost:5000/alltab/${active}`)
        .then(res=>res.json())
        .then(data=>{
            setDatas(data)
         
        })
    },[active])

    const handleTab = (category) => {
        setActive(category);
      };

    return (
        <div className="mx-24">
           
           <button onClick={()=>handleTab('Single Sports')}>Single</button>
           <button onClick={()=>handleTab('Group Sports')}>Group</button>
           <button onClick={()=>handleTab('Combat Sports')}>Combat</button>
           <div className="grid grid-cols-2">
            {
                datas.map(data=><SingleTab data={data} key={data._id}></SingleTab>)
            }
           </div>
        </div>
    );
};

export default Tab;