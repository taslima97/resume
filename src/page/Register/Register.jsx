import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {

    const { createUser } = useContext(AuthContext);
    console.log(createUser)
    const handelRegister = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(name, email, password, photo);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => {
                console.log(error)
            })

    }
    return (
        <div className="w-1/2 mx-auto">
            <div className="card-body">
                <h1 className="text-3xl font-bold text-center">SignUp</h1>
                <form onSubmit={handelRegister}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text"> Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type='url' name='photo' placeholder="Photo-url" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">

                        <input className='btn btn-error' type="submit" value="SignUp" />
                    </div>
                </form>
                <p>Already have an account <Link className='text-orange-600 font-bold text-center' to='/login'>Login</Link></p>
                
            </div>
        </div>
    );
};

export default Register;