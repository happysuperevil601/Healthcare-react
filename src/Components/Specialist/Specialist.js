import React from 'react';
import { Link } from 'react-router-dom';
import specialone from '../../Images/special 1.jpg'
import specialtwo from '../../Images/special 2.jpg'
import specialthree from '../../Images/special 3.jpg'

const Specialist = () => {
    return (
        <div>
            <div class="card-group">
                <div class="card">
                    <img src={specialone} class="card-img-top" alt="..." />
                    <div className="card-body">
                        <h3 className="card-title">James Maghill</h3>
                        <span className="text-primary text-bold">Dental Surgeon</span>
                        <p className="card-text">He perform corrective and therapeutic procedures on the mouths and jaws of their patients and often work in conjunction with other dentists, surgeons, and orthodontists.</p>
                    </div>
                    <div className="card-footer">
                        <Link className="fa fa-facebook px-2 text-decoration-none text-primary " to=""></Link>
                        <Link className="fa fa-twitter  px-2 text-decoration-none text-primary " to=""></Link>
                        <Link className="fa fa-instagram px-2 text-decoration-none text-primary " to=""></Link>
                    </div>
                </div>
                <div className="card">
                    <img src={specialtwo} class="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 class="card-title">Sara Taylor</h5>
                        <span className="text-primary text-bold">Cosmetic Surgeon
                        </span>
                        <p className="card-text">Sara Taylor as a surgical specialty dedicated to reconstruction of facial and body defects due to birth disorders, trauma, burns, and disease.</p>
                    </div>
                    <div className="card-footer">
                        <Link className="fa fa-facebook px-2 text-decoration-none text-primary " to=""></Link>
                        <Link className="fa fa-twitter  px-2 text-decoration-none text-primary " to=""></Link>
                        <Link className="fa fa-instagram px-2 text-decoration-none text-primary " to=""></Link>
                    </div>
                </div>
                <div className="card">
                    <img src={specialthree} class="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Micheal Holding</h5>
                        <span className="text-primary text-bold">General Doctor
                        </span>
                        <p class="card-text">Micheal Holdingexamining patients, diagnosing common illnesses, and administering or prescribing appropriate treatment.</p>
                    </div>
                    <div class="card-footer">
                        <Link className="fa fa-facebook px-2 text-decoration-none text-primary " to=""></Link>
                        <Link className="fa fa-twitter  px-2 text-decoration-none text-primary " to=""></Link>
                        <Link className="fa fa-instagram px-2 text-decoration-none text-primary " to=""></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Specialist;