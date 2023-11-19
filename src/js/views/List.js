import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/List.css";

const List = () => {

	const {store,actions} = useContext(Context);

	const deleteContact = (index) => {
		actions.deleteContact(index);
	};

	return(<>

		<div className="button__nav">

			<h1>Contact List</h1>

			<Link to="/Add">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Create a new contact
				</span>
			</Link>

		</div>

		<ul>
			{store.listaDeTareas.map((tarea, index)=>(
			<li key={index}>

				<div className="tareas__container">

					<h5><b>Name:</b> {tarea.name} </h5>
					<h5><b>Phone:</b> {tarea.phone} </h5>
					<h5><b>Address:</b> {tarea.address} </h5>
					<h5><b>E-Mail:</b> {tarea.email} </h5>

				</div>

			<div className="boton__container">
              <button className="boton__edit">Edit</button>
             
              <button className="boton__delete" onClick={() => deleteContact(index)}>Delete</button>
            </div>

			</li>

			))}
		</ul>
	</>)
}

export default List;
