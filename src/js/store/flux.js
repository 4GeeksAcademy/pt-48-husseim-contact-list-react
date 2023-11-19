const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			listaDeTareas:[]
		},
		actions: {
			agregarTarea: (nuevaTarea)=> {
	
				const store = getStore();

				const listaDeTareas = [...store.listaDeTareas, nuevaTarea];
				setStore({...store, listaDeTareas});
			},
			deleteContact: (index)=> {

				const store = getStore();

				const updatedContact = listaDeTareas.filter((tarea) => tarea.index !== index);
				setStore(updatedContact);

		}
	};
};

export default getState;
