import React, {createContext, useReducer} from 'react';
const initialState = {
	headerOpen: false
};
const store = createContext(initialState);
const { Provider } = store;
const StateProvider = ( { children } ) => {
const [state, dispatch] = useReducer((state, action) => {
		console.log(action.payload);
		switch(action.type) {
		case 'TOGGLE_HEADER':
			return { ...state, headerOpen : action.payload.headerOpen}
			default:
			return state;
		}
	}, initialState);
	return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }
