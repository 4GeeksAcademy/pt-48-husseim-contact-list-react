const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			listaDeTareas: []
		},
		actions: {
			agregarTarea: (nuevaTarea) => {
				const store = getStore();
				const listaDeTareas = [...store.listaDeTareas, nuevaTarea];
				setStore({ ...store, listaDeTareas });
			},
			deleteContact: (index) => {
				const store = getStore();
				const updatedTareasList = store.listaDeTareas.filter((_, i) => i !== index);
				setStore({ ...store, listaDeTareas: updatedTareasList });
			}
		}
	};
};

export default getState;
