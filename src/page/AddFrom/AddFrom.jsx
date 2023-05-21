// import React from 'react';

import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";




const AddFrom = () => {
    const { user } = useContext(AuthContext)


    const handelSubmit = (event) => {
        event.preventDefault();
        const from = event.target;
        const name = from.name.value;
        const category = from.category.value;
        const price = from.price.value;
        const subCategory = from.subCategory.value;
        const quantity = from.quantity.value;
        const photo = from.photo.value;
        const rating = from.rating.value;
        const email = user?.email;
        const description = from.description.value;
        const insertedData = {
            seller: name,
            name: subCategory,
            category,
            price,
            rating,
            quantity,
            image: photo,
            email,
            description,

        }
        // console.log(insertedData)
        fetch('http://localhost:5000/insertToy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(insertedData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('data posted successful')
                }
            })

    }

    return (
        <form onSubmit={handelSubmit}>
            <div className="flex gap-8">
                <div className="form-control w-1/2">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="name" className="input input-bordered" />
                </div>
                <div className="form-control w-1/2">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <input type="text" name="category" placeholder="category" className="input input-bordered" />

                </div>
            </div>

            <div className="flex gap-8">
                <div className="form-control w-1/2">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control w-1/2">
                    <label className="label">
                        <span className="label-text">Photo Url</span>
                    </label>
                    <input type="url" name="photo" placeholder="photo url" className="input input-bordered" />

                </div>
            </div>


            <div className="flex gap-8">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Sub-Category</span>
                    </label>
                    <input type="text" name="subCategory" placeholder="subCategory" className="input input-bordered" />

                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <input type="text" name="rating" placeholder="rating" className="input input-bordered" />

                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="text" name="price" placeholder="price" className="input input-bordered" />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Quantity</span>
                    </label>
                    <input type="text" name="quantity" placeholder="quantity" className="input input-bordered" />

                </div>
            </div>

            <div className="flex gap-8">
                <div className="form-control w-2/3 mx-auto">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea name="description" id="" cols="30" rows="10"></textarea>
                </div>

            </div>
            <button className=" bg-red-400 p-4 w-full m-12 rounded">Submit</button>
        </form>
    );
};

export default AddFrom;


