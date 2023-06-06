import { useState } from "react";
import { v4 as uuid } from "uuid";
import "./Formulario.css"
import Campo from "../Campo";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";


const Formulario = (props) => {
    const [nombre, setNombre] = useState("");
    const [puesto, setPuesto] = useState("");
    const [foto, setFoto] = useState("");
    const [equipo, setEquipo] = useState("");


    const [titulo, setTitulo] = useState("");
    const [color, setColor] = useState("");


    const { registrarColaborador, crearEquipo } = props;

    const manejarEnvio = (e) => {
        e.preventDefault();
        let datosEnviar = {
            id: uuid(),
            nombre: nombre,
            puesto: puesto,
            foto: foto,
            equipo: equipo,
            fav: false
        }
        registrarColaborador(datosEnviar);
    }
    
    const manejarNuevoEquipo = (e) => {
        e.preventDefault();
        crearEquipo({
            titulo, 
            colorPrimario: color
        })
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>
                Rellena el formulario para crear el colaborador.
            </h2>
            <Campo 
                titulo="Nombre" 
                placeholder="Ingresar nombre" 
                required 
                valor={nombre} 
                actualizarValor={setNombre}/>
            <Campo
                titulo="Puesto" 
                placeholder="Ingresar puesto" 
                required={true}
                valor={puesto}
                actualizarValor={setPuesto}/>
            <Campo
                titulo="Foto" 
                placeholder="Ingresar foto" 
                required
                valor={foto}
                actualizarValor={setFoto}/>
            <ListaOpciones
                valor={equipo}
                actualizarEquipo={setEquipo}
                equipos={props.equipos}/>
            <Boton texto="Crear"/>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>
                Rellena el formulario para crear el equipo.
            </h2>
            <Campo 
                titulo="Titulo" 
                placeholder="Ingresar titulo" 
                required 
                valor={titulo} 
                actualizarValor={setTitulo}/>
            <Campo
                className="campo-color"
                titulo="Color" 
                placeholder="Ingresar el color en Hex" 
                required={true}
                valor={color}
                actualizarValor={setColor}
                type = "color"/>
                <Boton texto="Registrar equipo"/>
        </form>
    </section>
}

export default Formulario;