import React, {useEffect}from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);
	useEffect (() => { 
		actions.getContact(); 
	}, []);

return( 
	<div className="text-center m-5">
		<h1>Welcome to your contact list!</h1>
	
	</div>
	)

};
