import React from "react";
import logoNetflix from '../assets/logoNetflix.png';

function Footer() {
    return (
        <footer className="text-white pt-8 pb-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap text-left lg:text-left">
                    <div className="w-full lg:w-6/12 px-4">
                        <img src={logoNetflix} alt="" width={140} />
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="flex flex-wrap items-top mb-6">
                            <div className="w-full lg:w-4/12 px-4 ml-auto">
                                <span className="block uppercase text-sm font-semibold mb-2">Familia</span>
                                <ul className="list-unstyled">
                                    <li><a className="font-semibold block pb-2 text-sm">Adderly</a></li>
                                    <li><a className="font-semibold block pb-2 text-sm">Liseth Paula</a></li>
                                    <li><a className="font-semibold block pb-2 text-sm">Fabio Sebastian</a></li>
                                </ul>
                            </div>
                            <div className="w-full lg:w-4/12 px-4">
                                <span className="block uppercase text-sm font-semibold mb-2">Otros</span>
                                <ul className="list-unstyled">
                                    <li><a className="font-semibold block pb-2 text-sm">Gracias</a></li>
                                    <li><a className="font-semibold block pb-2 text-sm">Por todo</a></li>
                                    <li><a className="font-semibold block pb-2 text-sm">Mi</a></li>
                                    <li><a className="font-semibold block pb-2 text-sm">Amor</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-blueGray-300" />
                <div className="flex flex-wrap items-center md:justify-between justify-center">
                    <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                        <div className="text-sm text-gray-400 font-semibold py-1">
                            © Adderly Mendoza Nina 2025
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
