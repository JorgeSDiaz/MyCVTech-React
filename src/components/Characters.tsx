export const Characters = ({color,position,image,info}) => {


    const colorDiv:string = color;
    const urlImage:string = "images/" + image;


    if(position === "start"){
        return (
            <div className="flex justify-start ml-8">
              <img src={urlImage} alt="Imagen" />
              <div className= {colorDiv}>
                {info}
              </div>
            </div>
          );

    }
    else{
        return (
            <div className="flex justify-end mr-8">
              <img src={urlImage} alt="Imagen" />
              <div className= {colorDiv} w-50 h-25>
                {info}
              </div>
            </div>
          );

    }

    
  };
  
