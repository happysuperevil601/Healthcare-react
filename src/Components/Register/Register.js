import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const { handleRegister, handleEmailChange, handlePasswordChange, handleRegistration } = useAuth()

    return (
        <div>
            <div>
                <div className="login-box d-flex align-items-center justify-content-center mt-4">
                    <div className="login bg-light">
                        <div className="login-box">
                            <h2 className="text-primary">Register Form</h2>
                            <form onSubmit={handleRegistration}>
                                <input
                                    onChange={handleEmailChange}
                                    className="input-felid"
                                    type="email"
                                    name="email"
                                    placeholder="Enter your Email"
                                    required
                                />
                                <br />
                                <input
                                    onChange={handlePasswordChange}
                                    className="input-felid"
                                    type="password"
                                    name="password"
                                    placeholder="Enter your Password"
                                    required
                                />
                                {/* <input onClick={handleRegister}
                                    className="mt-3 w-50 btn btn-success m-auto"
                                    type="submit"
                                    value="Register"
                                /> */}
                                <br />
                                <button onClick={handleRegister} className="btn btn-success ">Register</button>
                            </form>
                            <p>Already have an Account? <Link className="text-decoration-none text-primary" to="/login">Login</Link></p>
                        </div>
                    </div>
                </div>
                <div className="row ">
                    <div className="login-area col-md-6">



                    </div>
                </div>
            </div>







        </div>
    );
};

export default Register;