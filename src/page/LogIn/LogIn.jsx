import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import {FaGoogle} from 'react-icons/fa';

const LogIn = () => {
    const {logIn, googleSignIn} = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || '/';

    const handelLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        logIn(email, password)
            .then(result => {
                const loggedUser = result.user;
               
                console.log(loggedUser)
                navigate(from, { replace: true })

             })
            .catch(error => {
                console.log(error)
            })
    }

    const handelGoggle = () => {
        googleSignIn()
            .then(result => {
                const goggleUser = result.user;
                console.log(goggleUser)
            })
            .catch(error => {
                console.log(error)
            })
    };
    
    return (
        <div className="w-1/2 mx-auto">
                    <div className="card-body">
                        <h1 className="text-3xl font-bold text-center">Login</h1>
                        <form onSubmit={handelLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">

                                <input className='btn btn-error' type="submit" value="Login" />
                            </div>
                        </form>
                        <p>New to toy-store <Link className='text-orange-600 font-bold text-center' to='/register'>SignUp</Link></p>
                        <div>
                        <button className='bg-red-400 p-4 w-48 flex justify-center items-center rounded-lg' onClick={handelGoggle}> <FaGoogle className='mb-1 me-2'></FaGoogle>logIn from goggle</button>
                        </div>
                    </div>
                </div>
    );
};

export default LogIn;