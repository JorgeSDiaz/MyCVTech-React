import { Characters } from "../components/Characters";

export const LandingPage = () => {
  return (
    <div className="grid grid-cols-1">
      <div className="relative bg-cover bg-center bg-no-repeat w-screen h-screen" style={{ backgroundImage: 'url("/images/image1.jpg")' }}>
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-10 h-1/4 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="text-white text-6xl font-roboto text-center">
              CADA HABILIDAD CUENTA
            </div>
          </div>
        </div>
      </div>
      <div className="relative mt-40 grid grid-cols-2">
        <div className="bg-cover bg-center bg-no-repeat w-screen h-screen" style={{ backgroundImage: 'url("/images/image2.jpg")' }}></div>
        <div className="bg-blue-400 p-4 w-11 h-30"> 
          <h1 className="text-5xl font-roboto text-white mb-4">¿Quiénes somos?</h1> 
          <p className=" text-2xl font-montserrat text-base text-white">En el competitivo mundo laboral de hoy en día, tener un perfil profesional sólido es esencial para destacar y prosperar. Nosotros identificamos una necesidad por parte de las instituciones educativas, de centralizar esta información profesional en un mismo punto para ayudar a sus estudiantes a construir perfiles robustos y sustentables que les permitan tener una excelente salida al mercado laboral.
</p>
<br></br>
        <p className=" text-2xl font-montserrat text-base text-white">Colaborar en la creación de perfiles profesionales efectivos es fundamental para preparar a los estudiantes para el mundo laboral. Estamos comprometidos en facilitar esta tarea a las instituciones educativas, permitiéndoles brindar a sus estudiantes la herramienta adecuada para destacar.Un perfil profesional bien elaborado no es solo una recopilación de experiencias y habilidades, sino una poderosa herramienta de marketing personal que puede abrir puertas y oportunidades.</p>
        </div>
      </div>
      <div className="relative mt-20 grid grid-cols-2 flex flex-col">
        <h1 className="text-5xl font-roboto text-black text-center">¿Qué nos caracteriza?</h1>
        <br></br>
        <br></br>
        <Characters  color="customGreen" position="start" image={"first.jpg"} info="Facilitamos la conexión de los usuarios con empresas y organizaciones en su campo, proporcionando oportunidades para establecer relaciones profesionales." ></Characters>
        </div>
    </div>
  );
}
