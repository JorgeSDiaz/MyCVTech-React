import { AboutUs } from "../components/AboutUs";
import { Characters } from "../components/Characters";
import { Presentation } from "../components/Presentation";

export const LandingPage = () => {
  return (
    <div className="grid grid-cols-1">
      <Presentation image="image1.jpg" text="CADA HABILIDAD CUENTA"></Presentation>
      <AboutUs image="image2.jpg" color="blue" title="¿Quiénes somos?" content={["En el competitivo mundo laboral de hoy en día, tener un perfil profesional sólido es esencial para destacar y prosperar. Nosotros identificamos una necesidad por parte de las instituciones educativas, de centralizar esta información profesional en un mismo punto para ayudar a sus estudiantes a construir perfiles robustos y sustentables que les permitan tener una excelente salida al mercado laboral.","Colaborar en la creación de perfiles profesionales efectivos es fundamental para preparar a los estudiantes para el mundo laboral. Estamos comprometidos en facilitar esta tarea a las instituciones educativas, permitiéndoles brindar a sus estudiantes la herramienta adecuada para destacar.Un perfil profesional bien elaborado no es solo una recopilación de experiencias y habilidades, sino una poderosa herramienta de marketing personal que puede abrir puertas y oportunidades."]} ></AboutUs>
      <h1 className="text-5xl font-roboto text-black text-center">¿Qué nos caracteriza?</h1>
      <Characters color="#5FBEB5"   initialPosition="start" image={"first.jpg"} info="Facilitamos la conexión de los usuarios con empresas y organizaciones en su campo, proporcionando oportunidades para establecer relaciones profesionales." ></Characters>
      <Characters color="#96B6E8"   initialPosition="end" image={"second.jpg"} info="Centralizamos toda la información profesional, proyectos y otras experiencias que ayuden a tener un perfil profesional sólido." ></Characters>
      <Characters color="#5FBEB5"   initialPosition="start" image={"third.jpg"} info="Apoyamos en la generación de hojas de vida para los estudiantes automáticamente a partir de la información academica de sus perfiles." ></Characters>
      
    </div>
      
  );
}
