import React, { useContext } from 'react';
import { CategoriasContext } from '../context/CategoriasContext'

const Formulario = () => {

    const { hola } = useContext(CategoriasContext);

    return ( 
        <form
            className="col-12"
        >
            <fieldset className="text-center">
                <legend>
                    Busca bebidas por categoría o Ingrediente
                </legend>
                <div className="row mt-4">
                    <div className="col-md-4">
                        <input
                            name="nombre"
                            className="form-control"
                            type="text"
                            placeholder="Buscar por Ingrediente"
                        />
                    </div>
                    <div className="col-md-4">
                        <select 
                            className="form-control"
                            name="categoria"
                        >
                            <option value="">-- Selecciona Categoría --</option>
                        </select>
                    </div>
                    <div className="col-md-4">
                        <input
                            type="submit"
                            className="btn btn-block btn-primary"
                            value="Buscar Bebidas"
                        />
                    </div>
                </div>
            </fieldset>
        </form>
     );
}
 
export default Formulario;