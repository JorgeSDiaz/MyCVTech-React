export const LandingPage = () => {
    

    return (
        <div className="grid grid-cols-1">
            <div className="relative bg-cover bg-center bg-no-repeat w-screen h-screen" style={{ backgroundImage: 'url("/images/image1.jpg")' }}>
                 <div className="absolute inset-0 flex justify-center items-center ">
                    <div className="w-10 h-1/4 bg-black bg-opacity-50 flex justify-center items-center">
                        <div className="text-white text-6xl font-roboto text-center">
                            CADA HABILIDAD CUENTA
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative mt-20">
                <div className="bg-cover bg-center bg-no-repeat w-screen h-screen" style={{ backgroundImage: 'url("/images/image2.jpg")' }}></div>
            </div>    
        </div>

    );
      
}
