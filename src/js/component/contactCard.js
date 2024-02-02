import React from "react";
import { Link } from "react-router-dom";

export const Contact = (props) => (
	<div className="card mb-3">
		<div className="row no-gutters">

			<div className="col-2">
				<img className="rounded-circle thumbnail mt-2 mx-2"src="https://i.pinimg.com/564x/40/df/3c/40df3cc36c73e83086f1cf78ffc771f5.jpg" alt="..."/>
			</div>

			<div className="col-6">
				<div className="card-body">
					<h5 className="card-title">{props.contact.name}</h5>
					<p className="card-text"><i class="fas fa-map-marker-alt m-1"></i>{props.contact.address.city}</p>
					<p className="card-text"><i class="fas fa-phone m-1"></i>{props.contact.phone}</p>
					<p className="card-text"><i class="fas fa-envelope m-1"></i>{props.contact.email}</p>

				</div>
			</div>

			<div className="col-2 buttons">
				<Link to={"/editcontacts/" + props.index}>
				<button type="button" className="btn btn-secondary m-2"><i class="far fa-edit"></i></button>
				</Link>
				
				<button type="button" className="btn btn-danger m-2" href="#" onClick={() => { props.deleteContacts(props.index) }}><i class="fas fa-trash-alt"></i></button>
				
			</div>
            </div>
	</div>
);
		