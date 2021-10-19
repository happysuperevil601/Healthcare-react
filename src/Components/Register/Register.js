import React from 'react';

const Register = () => {
    return (
        <div>


            <div>
                <div className="login-box d-flex align-items-center justify-content-center mt-4">
                    <div className="login bg-light">
                        <div className="login-box">
                            <h2 className="text-primary">Register Form</h2>
                            <form onSubmit="">
                                <input
                                    type="text"
                                    name=""
                                    placeholder="Your name"
                                    id="" />
                                <br />
                                <input
                                    onChange=""
                                    className="input-felid"
                                    type="email"
                                    name="email"
                                    placeholder="Enter your Email"
                                    required
                                />
                                <br />
                                <input
                                    onChange=""
                                    className="input-felid"
                                    type="password"
                                    name="password"
                                    placeholder="Enter your Password"
                                    required
                                />
                                <input
                                    className="mt-3 w-50 btn btn-success m-auto"
                                    type="submit"
                                    value="Register"
                                />
                            </form>
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