import React from 'react';

interface PresentationProps {
  image: string;
  text : string;
}



export const Presentation: React.FC<PresentationProps> = ({image,text}) =>{


    const url:string = "url(images/" + image + ")";

    return <div className="relative bg-cover bg-center bg-no-repeat w-screen h-screen" style={{ backgroundImage: url }}>
    <div className="absolute inset-0 flex justify-center items-center">
      <div className="w-10 h-1/4 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="text-white text-6xl font-roboto text-center">
          {text}
        </div>
      </div>
    </div>
  </div>;



}