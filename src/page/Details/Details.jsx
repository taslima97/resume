import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const Details = ({modal}) => {
    const {image, name, description, seller, quantity, price} = modal;
    const {user} = useContext(AuthContext)
    return (
        <div className=" text-center">
     
<input type="checkbox" id={modal._id} className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <img className="h-20 mx-auto" src={image} alt="" />
    <h3 className="font-bold text-lg">{name}</h3>
    <p className="py-4">Seller:{seller}</p>
    <p>{user?.email}</p>
    <p>{description}</p>
    <p>Quantity:{quantity}</p>
    <p>Price:{price}</p>
    <div className="modal-action">
      <label htmlFor={modal._id} className="btn">Ok</label>
    </div>
  </div>
</div>
        </div>
    );
};

export default Details;