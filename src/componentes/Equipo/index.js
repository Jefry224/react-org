import "./Equipo.css"
import Colaborador from "../Colaborador"
import hexToRgba from "hex-to-rgba";

const Equipo = (props) => {

    //Destructuracion
    const {id, titulo , colorPrimario} = props.equipo;
    const estiloTitulo = {borderColor: colorPrimario };
    const fondoEquipo = {backgroundColor: hexToRgba(colorPrimario, 0.4)};
    const { colaboradores, eliminarColaborador, actualizarColor, like } = props;
    


    return colaboradores.length > 0 
    ? <section className="equipo" style={fondoEquipo}>
        <input  
            type="color" 
            value={colorPrimario}
            className="input-color"
            onChange={(event) => {
                actualizarColor(event.target.value, id);
            }}
        />
        <h3 style={estiloTitulo}>{titulo}</h3>
        <div className="colaboradores">
        {
        colaboradores.map((colaborador, index) => 
            <Colaborador colorPrimario={colorPrimario} datos={colaborador} key={index} eliminarColaborador={eliminarColaborador} like={like}/>)
        }
        </div>
    </section> 
    : <section></section> 
}

export default Equipo;