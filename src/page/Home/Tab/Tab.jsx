import { useEffect, useState } from "react";
import SingleTab from "./SingleTab";
import { Link } from "react-router-dom";
// import { TabList } from "react-tabs";
import './Tab.css'

const Tab = () => {
    const [datas, setDatas] = useState([])
    const [active, setActive] = useState('Single Sports')
    console.log(active)
    useEffect(() => {
        fetch(`https://toy-store-server-tawny.vercel.app/alltab/${active}`)
            .then(res => res.json())
            .then(data => {
                setDatas(data)

            })
    }, [active])

    const handleTab = (category) => {
        setActive(category);
    };

    return (
        <div className="mx-auto">
            <h2 className="text-5xl font-bold text-center">Shop by category</h2>

            <div className="mx-auto flex items-center justify-center my-8">
                <Link className="active" onClick={() => handleTab('Single Sports')}>Single</Link>
                <Link className="active" onClick={() => handleTab('Group Sports')}>Group</Link>
                <Link className="active" onClick={() => handleTab('Combat Sports')}>Combat</Link>
            </div>
            <div className="grid grid-cols-2">
                {
                    datas.map(data => <SingleTab data={data} key={data._id}></SingleTab>)
                }
            </div>
        </div>
    );
};

export default Tab;