import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams, useNavigate, useCallback } from "react-router-dom";
import { Context } from "../store/appContext";
import { ContactCard } from "../component/contactCard";

export const Single = () => {
    const { store, actions } = useContext(Context);

    // const contactId = store.specificContact;

    const {id} = useParams()


    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    let navigate = useNavigate();


    const handleUpdate = () => {
        actions.singleContactUpdate(id, name, email, address, phone);
        navigate("/")
    }



    return (
        <div className="container">
            <div className="container">
                <ul className="list-group">
                    <h1 className="m-5"> Update your contact </h1>
                    <li>
                        <form className="row g-3">
                            <div className="col-md-6">
                                <label htmlFor="full_name" className="form-label">Full Name</label>
                                <input type="text" className="form-control" id="full_name"
                                    value={name} onChange={(e) => setName(e.target.value)} />

                            </div>
                            <div className="col-md-6">
                                <label htmlFor="address" className="form-label">Address</label>
                                <input type="text" className="form-control" id="address" value={address} onChange={(e) => setAddress(e.target.value)} />
                            </div>
                            <div className="col-6">
                                <label htmlFor="phone" className="form-label">Phone number</label>
                                <input type="number" className="form-control" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                            </div>
                            <div className="col-6">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="text" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>

                        </form>
                    </li>
                </ul>

                <div className="justify-content-between d-flex mt-3">
                    <Link to="/">
                        <button className="btn btn-dark">Back home</button>
                    </Link>

                    <button className="btn btn-dark"
                        onClick={(e) => handleUpdate(e)}>Update contact</button>
                </div>
            </div>
        </div>
    );
};