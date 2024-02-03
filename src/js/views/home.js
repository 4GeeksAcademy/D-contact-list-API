import React, {useEffect, useContext}from "react";
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
  
	const contactItems = store.contacts.map((item, index) => (
	  <p key={item.id}>{item.full_name}</p>,
	  <p key={item.id}>{item.address}</p>,
	  <p key={item.id}>{item.phone}</p>,
	  <p key={item.id}>{item.email}</p>
	));
  
	return (
	  <div className="text-center m-5">
		<div>
		  <h1>Your contact list</h1>
		</div>
		<div>{contactItems}</div>
	  </div>
	);
  };
  