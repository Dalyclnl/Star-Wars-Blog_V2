import React,{useState,useEffect,useContext} from "react";

import { Footer } from "../component/footer.js";
import "../../styles/home.css";
import { Navbar } from "../component/navbar.js";
import Cardimg from "../component/cardimg.js";
import { Context } from "../store/appContext.js";


 export const {Home} = () => {
	useContext(Context);

	return(
		<div className="container">
			<Navbar/>
			<Cardimg/>
			<Footer/>
		</div>
	);
	
};
