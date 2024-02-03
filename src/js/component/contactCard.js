import React,  {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


import "../../styles/demo.css";


export const ContactCard = (props) => {
	const contact = props.object; 
	console.log("this is supposed to show", contact)
	
	return ( 
	<div className="card mb-3">
		<div className="row d-flex">
			<div className="col-6">
				<img className="rounded-circle thumbnail mt-2 mx-2"src="https://i.pinimg.com/564x/40/df/3c/40df3cc36c73e83086f1cf78ffc771f5.jpg" alt="..."/>
			</div>

			<div className="col-6">
				<div className="card-body">
					<h5 className="card-title">{props.contact.name}</h5>
					<p className="card-text"><i class="fas fa-map-marker-alt m-1"></i>{props.contact.address}</p>
					<p className="card-text"><i class="fas fa-phone m-1"></i>{props.contact.phone}</p>
					<p className="card-text"><i class="fas fa-envelope m-1"></i>{props.contact.email}</p>

				</div>
			</div>

			<div className="col-2 buttons">
				<Link to={"/single"}>
				<button type="button" className="btn btn-secondary m-2"><i class="far fa-edit"></i></button>
				</Link>
				
				<button type="button" className="btn btn-danger m-2" href="#" onClick={() => { actions.deleteContacts(props.index) }}><i class="fas fa-trash-alt"></i></button>
				
			</div>
            </div>
	</div>
	); 
};
		