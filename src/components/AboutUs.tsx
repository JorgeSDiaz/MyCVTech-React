import React from 'react';

interface AboutUsProps {
  image: string;
  color : string;
  title : string;
  content : string[];
}






export const AboutUs : React.FC<AboutUsProps> = ({image,color,title,content}) =>{


    const url:string = "url(images/" + image + ")";

    const colorDiv:string = "bg-"+ color +  "-400 p-4 w-11 h-30";




    return <div className="relative mt-40 grid grid-cols-2">
    <div className="bg-cover bg-center bg-no-repeat w-screen h-screen" style={{ backgroundImage: url }}></div>
    <div className={colorDiv}> 
      <h1 className="text-5xl font-roboto text-white mb-4">{title}</h1> 
      {content.map((paragraph,index) =>
      <>
      <p key={index} className=" text-2xl font-montserrat text-base text-white">{paragraph}</p>
      <br></br>
      </>
      )}
    </div>
  </div>;



}