import altimg from '../../assets/images/sports-1.png'

const ToyFrom = ({toy, handelDelete, handelUpdate}) => {
    const {_id, seller, category, price, quantity, image, status} = toy;



    return (
        <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
               {image? <img src={image} />: <img src={altimg} />}
              </div>
            </div>
            <div>
              <div className="font-bold">{seller}</div>
              
            </div>
          </div>
        </td>
        <td>
         {category}
          <br/>
          
        </td>
        <td>{category}</td>
        <td>{quantity}</td>
        <td>{price}</td>
        <th>{
          status==='confirm'?<span>confirm</span>:
          <button onClick={()=>handelUpdate(_id)}>Edit</button>}
        </th>
        <th>
          <button onClick={()=>handelDelete(_id)} className="btn btn-ghost btn-xs">Delete</button>
        </th>
      </tr>
    );
};

export default ToyFrom;