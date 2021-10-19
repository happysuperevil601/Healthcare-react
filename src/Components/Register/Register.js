import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const { handleRegister, handleEmailChange, handlePasswordChange, handleRegistration, error, toggleLogin, isLogin } = useAuth()

    return (
        <div>
            <div>
                <div className="login-box d-flex align-items-center justify-content-center mt-4">
                    <div className="login bg-light">
                        <div className="login-box">
                            <h2 className="text-primary">{isLogin ? "Login" : "Register"} Form</h2>
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
                                <div class="mb-3 form-check">
                                    <input onChange={toggleLogin} type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                                </div>
                                <div className="text-danger">{error}</div>
                                <br />
                                <button onClick={handleRegister} className="btn btn-success ">{isLogin ? 'Login' : "Register"}</button>
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