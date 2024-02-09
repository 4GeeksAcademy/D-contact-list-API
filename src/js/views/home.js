import React, {useEffect, useContext, useState}from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { propTypes } from "react-bootstrap/esm/Image";
import { ContactCard } from "../component/contactCard";

export const Home = () => {
	const { store, actions } = useContext(Context);
  
	useEffect(() => {
	  actions.getContact();
	}, []);
	
	const contactItems = store.contacts.map((item) => (
		<ContactCard
		  key={item.id}
		  fullName={item.full_name}
		  address={item.address}
		  phone={item.phone}
		  email={item.email}
		  id={item.id}
		/>
	  ));

	  

	return (
	  <div className="text-center m-5">
		<div>
		  <h1>Your contact list</h1>
		</div>
		<div className="homeView">{contactItems}
		</div>
	  </div>
	);
  };
  