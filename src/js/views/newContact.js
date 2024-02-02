import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate} from "react-router-dom";


import { Context } from "../store/appContext";


import "../../styles/demo.css";

export const AddNewContact = () => {
    const { store, actions } = useContext(Context);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  let navigate = useNavigate();

const handleSave = (e) => {
    e.preventDefault();
    actions.createContact(name, phone, email, address);
    navigate("/")
};

    return (
        <div className="container">
            <ul className="list-group">
                <h1 className="m-5"> Adding a new Contact </h1> 
                        <li>
                            <form className="row g-3">
                                <div className="col-md-6">
                                    <label htmlFor="full_name" className="form-label">Full Name</label>
                                    <input type="text" className="form-control" id="full_name" onChange={(e) => setName(e.target.value)} />

                                </div>
                                <div className="col-md-6">
                                <label htmlFor="address" className="form-label">Address</label>
                                <input type="text" className="form-control" id="address" placeholder="123 Apple St"  onChange={(e) => setAddress(e.target.value)}/>
                            </div>
                            <div className="col-6">
                                <label htmlFor="phone" className="form-label">Phone number</label>
                                <input type="number" className="form-control" id="phone" placeholder="(123)456-7890" onChange={(e) => setPhone(e.target.value)}/>
                            </div>
                            <div className="col-6">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="text" className="form-control" id="email" placeholder="example.email@icloud.com" onChange={(e) => setEmail (e.target.value)}/>
                            </div>
                          
                        
                            </form>
                        </li>
            </ul>
            <div className="justify-content-between d-flex mt-3"> 
            <Link to="/">
                <button className="btn btn-dark">Back home</button>
            </Link>
            <Link>
                <button className="btn btn-dark" onClick={(e) => handleSave(e)}>Save contact</button>
            </Link>
            </div> 
        </div>
    );
};
