import "./Colaborador.css"
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const Colaborador = (props) =>{
    const {nombre, puesto, foto, id, fav} = props.datos;
    const { eliminarColaborador, like } = props;
    return <div className="colaborador">
        <AiFillCloseCircle className="eliminar" onClick={()=>eliminarColaborador(id)} style={{color: '#F77862'}}/>
        <div className="encabezado" style={{backgroundColor: props.colorPrimario}}>
            <img src={foto} alt={nombre} />
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            <div className="fav-div">
                {fav ? <AiFillHeart color="red" onClick={()=>like(id)}/> : <AiOutlineHeart onClick={()=>like(id)}/>}
            </div>
            
            
            
        </div>
    </div>
}

export default Colaborador 