import React from 'react';

interface CharactersProps {
  color: string;
  position: string;
  image: string;
  info: string;
}

export const Characters: React.FC<CharactersProps> = ({ color, position, image, info }) => {
  const colorDiv: string = color;
  const urlImage: string = "images/" + image;

  if (position === "start") {
    return (
      <div className="flex justify-start ml-8">
        <img src={urlImage} alt="Imagen" />
        <div className="customGreen" style={{ width: "50%", height: "25%" }}>
          {info}
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex justify-end mr-8">
        <img src={urlImage} alt="Imagen" />
        <div className={colorDiv} style={{ width: "50%", height: "25%" }}>
          {info}
        </div>
      </div>
    );
  }
};

export default Characters;
