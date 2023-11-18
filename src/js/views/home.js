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

		tarea= {
			name,
			phone,
			address,
			email
		}
		actions.agregarTarea(tarea);
  
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
			{store.listaDeTareas.map((tarea, index)=>(<li key={index}>{tarea}</li>))}
		</ul>
	</>)
}

export const Home = () => (<>

	<Input/>
	<List/>

</>);