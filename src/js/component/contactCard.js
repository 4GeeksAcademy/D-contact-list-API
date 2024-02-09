import React,  {useContext, useEffect} from "react";
import { Link, useParams} from "react-router-dom";
import { Context } from "../store/appContext";


import "../../styles/demo.css";


export const ContactCard = ({ fullName, address, phone, email,id}) => {
	const { store, actions } = useContext(Context);
	const contactId = store.contacts 
	


	const deleteContact = () => {
		actions.deleteContact();
		location.replace(location.href);
	};

	
	
	return ( 
	<div className="card mb-3">
		<div className="row d-flex">
			<div className="col-6 pt-4">
				<img className="rounded-circle thumbnail mt-2" style={{width:"150px"}} src="https://i.pinimg.com/564x/40/df/3c/40df3cc36c73e83086f1cf78ffc771f5.jpg" alt="..."/>
			</div>
			<div className="col-6 pt-4">
				<p>{fullName}</p>
				<p>{address}</p>
				<p>{phone}</p>
				<p>{email}</p>
				</div>
			</div>
			

			<div className="d-flex flex-row-reverse">
				<Link to={`/single/${id}`}>
				<button type="button" className="btn btn-secondary m-2"><i className="far fa-edit"></i></button>
				</Link>
				
				<button type="button" className="btn btn-danger m-2" href="#" 
				onClick={deleteContact}><i className="fas fa-trash-alt"></i></button>
				
			</div>
    </div>
	); 
};
		