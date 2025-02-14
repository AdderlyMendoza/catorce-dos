import React from "react";
import { FaPlay } from "react-icons/fa";
import { IoInformationCircle } from "react-icons/io5";
// import banner from '../assets/casa-de-papel.jpeg'
import bannerAmor from '../assets/we.jpg'

function Banner() {

    return (

        <div className="relative h-screen overflow-hidden">
            <div className="absolute bg-black/30 h-full w-full z-5"></div>
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${bannerAmor})`  }}>
                {/* <video
                    autoPlay
                    loop
                    muted
                    className="absolute inset-0 w-full h-full object-cover bg-center z-2">
                    <source src="https://www.youtube.com/watch?v=3y-6iaveY6c" type="video" />
                    Tu navegador no soporta la etiqueta de video.
                </video> */}
                <div className="absolute inset-0 bg-cover bg-center ">  {/*z-10 */}
                    <div className="flex items-center h-full px-16">
                        <div className="flex-1 text-white space-y-4 z-10">
                            <h1 className="text-5xl font-bold">Catorce / Febrero</h1>
                            <p className="text-md font-medium">El 12 de mayo comenzó nuestra historia, un día como cualquier otro, pero con algo muy especial. Él, un chico lleno de sueños y risas; ella, la mujer más increíble que podría haber cruzado su camino. Juntos, con el tiempo, unieron sus corazones, y en ese instante nació un amor que no solo creció, sino que se transformó en algo aún más hermoso.</p>
                            <div className="flex space-x-2">
                                <div className="flex px-4 py-2 bg-white text-black hover:bg-black/50 hover:text-white items-center space-x-1  cursor-pointer">
                                    <FaPlay />
                                    <h1 className="font-semibold">Play</h1>
                                </div>
                                <div className="flex px-4 py-2 bg-white/50 hover:bg-black/50 items-center space-x-1 cursor-pointer">
                                    <h1 className="font-semibold">Más información</h1>
                                    <IoInformationCircle className="text-2xl" />
                                </div>
                            </div>
                        </div>

                        <div className="flex-1">
                        </div>
                    </div>
                </div>
            </div >
        </div >

    );

}

export default Banner;