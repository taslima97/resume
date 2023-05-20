import { useEffect, useState } from "react";
import SingleTab from "./SingleTab";
import { Link } from "react-router-dom";
// import { TabList } from "react-tabs";
import './Tab.css'

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
           
    
           
           <Link className="active" onClick={()=>handleTab('Single Sports')}>Single</Link>
           <Link className="tab" onClick={()=>handleTab('Group Sports')}>Group</Link>
           <Link className="active" onClick={()=>handleTab('Combat Sports')}>Combat</Link>
           <div className="grid grid-cols-2">
            {
                datas.map(data=><SingleTab data={data} key={data._id}></SingleTab>)
            }
           </div>
        </div>
    );
};

export default Tab;