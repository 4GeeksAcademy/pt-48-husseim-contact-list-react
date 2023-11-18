import React, { useContext, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from '../store/appContext';

const Input = () => {

	const {store, actions} = useContext(Context);
	const [tarea, setTarea] = useState('');

	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [address, setAddress] = useState('');
	const [email, setEmail] = useState('');

	const agregarTarea = () => {

		const nuevaTarea= {
			name,
			phone,
			address,
			email
		};

		actions.agregarTarea(nuevaTarea);
  
		setName('');
		setPhone('');
		setAddress('');
		setEmail('');
	};

	return (
		<>
			<input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
			<input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
			<input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
			<input type="text" placeholder="E-Mail" value={email} onChange={(e) => setEmail(e.target.value)} />

			<button onClick={agregarTarea}>Add new contact</button>
		</>
	);
}

const List = () => {

	const {store,actions} = useContext(Context);

	return(<>
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
					<button className="boton__delete">Delete</button>
				</div>

			</li>
			))}
		</ul>
	</>)
}

export const Home = () => (<>

	<Input/>
	<List/>

</>);