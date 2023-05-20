// import React from 'react';
import { Link } from "react-router-dom";

import ReactStarsRating from 'react-awesome-stars-rating';





const SingleTab = ({ data }) => {
    const {_id, name, category, image, price, rating} = data || {};
    return (
        <div className="">
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img className="h-48" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{category}</p>
                    <div className="flex justify-between ">
                        <p>Price: ${price}</p>
                        <div className="flex">
                        <ReactStarsRating className=' flex' style={{ maxWidth: 150 }} value={rating} readOnly />
                        <p>{rating}</p>
                        </div>
                    </div>
                    <div className="card-actions justify-end">
                        <Link to={`/addtoy/${_id}`} className="bg-red-300 p-4 rounded-lg"><button>view details</button></Link>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default SingleTab;