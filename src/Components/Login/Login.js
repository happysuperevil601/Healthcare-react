import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { logInusingGoogle } = useAuth();

    return (
        <div className="container ">
            <div className="login-box d-flex align-items-center justify-content-center mt-4 ">
                <div className="login bg-light">

                    <div className="login-box ">
                        <h2 className="text-primary">Login Form</h2>
                        <form onSubmit="">
                            <p className="text-danger"></p>

                            <input
                                onChange
                                className="input-felid"
                                type="email"
                                name="email"
                                placeholder="Enter your Email"
                            />
                            <br />
                            <input
                                onChange
                                className="input-felid"
                                type="password"
                                name="password"
                                placeholder="Enter your Password"
                            />
                            <br />

                        </form>
                        <div className="mt-4">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </div>
                    <br />

                    <div>
                        <button className="me-2 btn btn-warning" onClick={logInusingGoogle}><i className="fa fa-google text-primary" ></i>  Login with Google
                        </button>
                        <button className="me-2 btn btn-dark" onClick=""><i class="fab fa-github"></i>
                            Login with Github
                        </button>
                    </div>
                    <div className="mt-4">
                        <p>New to JHealth Care? <Link className="text-decoration-none" to="/register">Create Account</Link></p>
                    </div>


                </div>



            </div>
        </div>
    );
};

export default Login;