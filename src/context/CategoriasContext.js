import React, { createContext, useState } from 'react';

//Crear el context
export const CategoriasContext = createContext();

// Provider es donde se encuentran las funciones y state
const CategoriasProvider = (props) => {

    // crear el state del Context
    const [ hola, guardarHola ] = useState('Hola');

    return (
        <CategoriasContext.Provider
            value={{
                hola
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    )
}
export default CategoriasProvider;