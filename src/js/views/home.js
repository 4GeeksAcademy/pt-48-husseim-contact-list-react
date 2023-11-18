import React, { useContext, useState } from "react";
import "../../styles/home.css";
import { Context } from '../store/appContext';

const Input = () => {

	const [store,actions] = useContext(Context);
	const [tarea,setTarea] = useState('');

	const agregarTarea = () =>{
		actions.agregarTarea(tarea);
	}

	return(<>
		<input type="text" placeholder="agregar tarea" onChange={(e)=>setTarea(e.target.value)}></input>
		<button onClick={agregarTarea}>Agregar Tarea</button>
	</>)
}

const List = () => {

	const [store,actions] = useContext(Context);

	return(<>
		<ul>
			{store.listaDeTareas.map((tarea)=>(<li>{tarea}</li>))}
		</ul>
	</>)
}

export const Home = () => (<>

	<Input />
	<List />

</>);
