import { AiFillGithub, AiFillGitlab, AiOutlineRocket, AiOutlineBranches } from "react-icons/ai";

export default function ExtraDetails() {
    return (
        <div className="grid" style={{ display: "flex", flexDirection: "row", width: "100%" }}>
            <div style={{ width: "40%", height:"80%", paddingLeft: "30px", padding: "20px" }}>
                <div style={{ backgroundColor: "#9cb5e4", padding: "30px", borderRadius: "20px" }}>
                    <h1 style={{ color: "white", textAlign: "center" }}>Experiencia Laboral</h1>
                    <h2>Desarrolladora de Software TechSolutions S.A</h2>
                    <h3 style={{ color: "white" }}>Enero 2022 - Septiembre 2023</h3>
                    <h2>Desarrolladora de Software TechSolutions S.A</h2>
                    <h3 style={{ color: "white" }}>Agosto 2021 - Diciembre 2021</h3>
                    <h2>Monitora Académica(Ciclos de Vida del Desarrollo de software) Universidad XYZ</h2>
                    <h3 style={{ color: "white" }}>Junio 2022 - Mayo 2021</h3>
                    <button className="button" style={{ backgroundColor: "#77bcb5", border: "0px", borderRadius: "20px", width: "50%", alignSelf: "center" }}><h2>Agregar</h2></button>
                </div>
            </div>
            <div style={{ width: "60%", height:"50%", textAlign: "center", padding: "30px" }}>
                <h1>Actualizaciones de proyectos</h1>
                <div style={{ backgroundColor: "Black", borderRadius: "150px", display: 'flex', flexDirection: 'row', padding: "20px", alignItems: "center", marginBottom:"20px", height:"150px" }}>
                    <AiFillGithub size={48} style={{ color: 'white', }} />
                    <div style={{ textAlign: "start", padding: "20px", width: "70%" }}>
                        <h2 style={{ color: "white" }}>Proyecto POOB</h2>
                        <h3 style={{ color: "white" }}>Commit: add a new take photo feature 12/08/23</h3>
                    </div>
                    <div style={{ width: "30%" }}>
                    <h2 style={{color:"white"}}><AiOutlineBranches size={48} style={{ color: 'white', }} /> Master</h2>
                    </div>
                </div>
                <div style={{ backgroundColor: "#d35334", borderRadius: "150px", display: 'flex', flexDirection: 'row', padding: "20px", alignItems: "center",marginBottom:"20px",height:"150px" }}>
                    <AiFillGitlab size={48} style={{ color: 'white', }} />
                    <div style={{ textAlign: "start", padding: "20px", width: "70%" }}>
                        <h2 style={{ color: "white" }}>Proyecto MBDA</h2>
                        <h3 style={{ color: "white" }}>Commit: change foreingkey users - bills 07/08/23</h3>
                    </div>
                    <div style={{ width: "30%" }}>
                    <h2 style={{color:"white"}}><AiOutlineBranches size={48} style={{ color: 'white', }} /> Leti-Branch</h2>
                    </div>
                </div>
                <div style={{ backgroundColor: "#4e73d2", borderRadius: "150px", display: 'flex', flexDirection: 'row', padding: "20px", alignItems: "center", marginBottom:"20px", height:"150px" }}>
                    <AiOutlineRocket size={48} style={{ color: 'white', }} />
                    <div style={{ textAlign: "start", padding: "20px", width: "70%" }}>
                        <h2 style={{ color: "white" }}>Proyecto CVDS</h2>
                        <h3 style={{ color: "white" }}>Commit: fix lombok dependency version 12/08/23</h3>
                    </div>
                    <div style={{ width: "30%" }}>
                    <h2 style={{color:"white"}}><AiOutlineBranches size={48} style={{ color: 'white', }} /> Users</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}