import React from 'react';
import reviewone from '../../Images/people-1.jpg'
import reviewtwo from '../../Images/people-2.jpg'
import reviewthree from '../../Images/people-3.jpg'

const Testimonials = () => {
    return (
        <div>
            <div className="row text-center">
                <div className="col-md-4 mb-4 ">

                    <div>
                        <img className="rounded-circle w-50 " alt="100x100" src={reviewone}
                            data-holder-rendered="true" />
                    </div>
                    <div>
                        <h4>Monica</h4>
                        <small className="text-warning">Accountant</small>
                        <p>One of the best Service health care.Quality service with excellent behaviour.</p>
                        <div className="card-footer text-warning">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                    </div>

                </div>
                <div className="col-md-4 mb-4">

                    <div>
                        <img className="rounded-circle w-50" alt="100x100" src={reviewtwo}
                            data-holder-rendered="true" />
                    </div>
                    <div>
                        <h4>Richard</h4>
                        <small className="text-warning">Model</small>
                        <p>Honestly,Feel blessed to be part of this healthcare.Their services and behaviour was super awesome</p>
                        <div className="card-footer text-warning">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                    </div>

                </div>
                <div className="col-md-4 mb-4">

                    <div>
                        <img className="rounded-circle w-50" alt="100x100" src={reviewthree}
                            data-holder-rendered="true" />
                    </div>
                    <div>
                        <h4>Racel</h4>
                        <small className="text-warning">Developer</small>
                        <p>I take my kids here for better treatment.Everyone here treated their patient like thier own.Great Service!</p>
                        <div className="card-footer text-warning">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Testimonials;