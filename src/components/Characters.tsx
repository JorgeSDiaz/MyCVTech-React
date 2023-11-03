import React from 'react';

interface CharactersProps {
  color: string;
  initialPosition: string; 
  image: string;
  info: string;
}

export const Characters: React.FC<CharactersProps> = ({ color, initialPosition, image, info }) => {
  const colorDiv: string = color;
  const urlImage: string = "images/" + image;

  const commonDivStyles = {
    width: "60%",
    height: "70%",
    backgroundColor: colorDiv,
    display: "flex",
    alignItems: "center",
    padding: "10px",
    borderRadius: "70px",
  };

  const textStyle = {
    fontSize: "27px",
    color: "white",
  };

  const imageStyle = {
    marginLeft: "-50px",
    width: "200px",
  };

  const imageStyleRight = {
    marginRight: "-50px",
    width: "200px",
  };

  if (initialPosition === "start") {
    return (
      <div  style={commonDivStyles} className='mt-20 justify-start ml-40' >
        <img src={urlImage} style={imageStyle} />
        <div style={textStyle}>{info}</div>
      </div>
    );
  } else {
    return (
      <div  style={commonDivStyles} className=" mt-20  justify-end ml-60">
        <div style={textStyle}>{info}</div>
        <img src={urlImage} style={imageStyleRight} />
      </div>
    );
  }
};

export default Characters;
