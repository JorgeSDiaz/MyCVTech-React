import { AiFillSignal,  } from "react-icons/ai";
import { BiIdCard } from "react-icons/bi";
import { FaUserGear } from "react-icons/fa6";
export default function ExtraDetails() {
  return (
    <div className="grid" style={{ backgroundColor: "#4a9f93", display: "flex", flexDirection: "row", padding: "50px", alignItems:"flex-start", justifyContent: "center", textAlign: "center"}}>
      <div className="col">
        <h3 style={{color: "white", fontSize: "28px"}}><BiIdCard size={40} style={{ color: 'white', }} />datos generales</h3>
        <div style={{textAlign:"left"}}>
          <ul>
          <li style={{color: "white", fontSize: "20px"}}>Fecha de Nacimiento: 15/09/2020</li>
          <li style={{color: "white", fontSize: "20px"}}>Ciudad de Residencia: Bogotá, Cundinamarca</li>
          <li style={{color: "white", fontSize: "20px"}}>Número de Telefono: +57 312 456 7890</li>
          <li style={{color: "white", fontSize: "20px"}}>Correo Electronico: ana.rodriguez@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="col">
        <h3 style={{color: "white", fontSize: "28px"}}><FaUserGear size={40} style={{ color: 'white', }} />habilidades</h3>
        <div style={{textAlign:"left"}}>
          <ul>
          <li style={{color: "white", fontSize: "20px"}}>Resoluciónde problemas</li>
          <li style={{color: "white", fontSize: "20px"}}>Comunicación asertiva</li>
          <li style={{color: "white", fontSize: "20px"}}>Trabajo en equipo</li>
          <li style={{color: "white", fontSize: "20px"}}>Pensamiento analítico</li>
          <li style={{color: "white", fontSize: "20px"}}>Creatividad</li>
          </ul>
        </div>
      </div>
      <div className="col">
        <h3 style={{color: "white", fontSize: "28px"}}><AiFillSignal size={40} style={{ color: 'white', }} />conocimientos</h3>
        <div style={{textAlign:"left"}}>
          <ul>
          <li style={{color: "white", fontSize: "20px"}}>Python: Avanzado</li>
          <li style={{color: "white", fontSize: "20px"}}>Machine Learning: Intermedio</li>
          <li style={{color: "white", fontSize: "20px"}}>Redes Neuronales Artificiales: Avanzado</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
