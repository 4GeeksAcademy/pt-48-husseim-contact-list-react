import React, { useContext, useState } from "react";
import "../../styles/Add.css";
import { Context } from '../store/appContext';
import { Link } from "react-router-dom";

const Add = () => {

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

	return (<>

		<h1>Create a new Contact</h1>

			<input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
			<input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
			<input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
			<input type="text" placeholder="E-Mail" value={email} onChange={(e) => setEmail(e.target.value)} />

			<button onClick={agregarTarea}>Add new contact</button>
		<div>
		<Link to="/">
			<br></br>
			<span className="btn btn-secondary btn-lg" href="#" role="button">
				Back to List
			</span>
		</Link>
		</div>
	</>);
}
export default Add;