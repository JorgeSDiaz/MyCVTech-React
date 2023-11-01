import { Image } from "primereact/image";

interface BannerProps {
  backgroundUrl: string;
  profileUrl: string;
}

export default function Banner({ backgroundUrl, profileUrl }: BannerProps) {
  return (
    <>
      <div
        className="bg-auto bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundUrl})`,
          backgroundRepeat: "no-repeat",
          width: "100%",
        }}
      >
        <div style={{ height:"100%", textAlign:"start", display:"flex", flexDirection:"row", padding:"20px"}}>
          <Image
            src={`${profileUrl}`}
            width="240"
            imageClassName="border-circle p-3"
          />
          <div style={{backgroundColor:"rgba(0,0,0,0.4)", height:"80%", paddingLeft:"50px", margin:"10px", borderRadius:"60px", width:"60%"}}>
            <h1 style={{color:"white"}}>ANA RODRÍGUEZ PÉREZ</h1>
            <h1 style={{color:"white"}}>Ingeniería en informática</h1>
            <h1 style={{color:"white"}}>8vo Semestre</h1>
            <h1 style={{color:"white"}}>NI: 1016258748</h1>
          </div>
        </div>
      </div>
    </>
  );
}
