import { useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const { error, status } = useRouteError()
    return (
       
        <div className='text-center mt-4 pt-4'>
            {/* <img style={{height:'200px'}} src={errorImg} alt="" /> */}
            <h1>{status}</h1>
            <h3>{error?.message}</h3>
        </div>
    );
};

export default ErrorPage;