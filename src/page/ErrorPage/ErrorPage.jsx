import { Link, useRouteError } from "react-router-dom";
import errorimg from '../../assets/images/404 - Copy.jpg'

const ErrorPage = () => {
    const { error, status } = useRouteError()
    return (
       <div className="flex justify-center items-center">
        <div className='text-center mt-4 pt-4'>
            <img style={{height:'400px'}} src={errorimg}alt="" />
            <h1 className="text-3xl">{status}</h1>
            <h3 className="text-2xl">{error?.message}</h3>
           <Link to='/'><button className="bg-red-500 p-4 rounded-lg">Go back</button></Link> 
        </div>
        </div>
    );
};

export default ErrorPage;