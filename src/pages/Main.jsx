import React from "react";
import Header from '../components/Header';
import Carrusell from '../components/Carrusell';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import { blogs } from '../assets/data.js';
import { dataAmor } from '../assets/dataAmor.js';
import { dataBebe } from '../assets/dataBebe.js';
import { dataNosotros } from '../assets/dataNosotros.js';

function Main() {
  // const carouselBlogs = [...blogs, ...blogs]; // Duplicamos los blogs para el efecto carrusel
  const carouselBlogsAmor = [...dataAmor, ...dataAmor];
  const carouselBlogsBebe = [...dataBebe];
  const carouselBlogsNosotros = [...dataNosotros, ...dataNosotros];

  return (
    <div className='bg-black'>
      <Header />

      <div className="relative ">

        <Banner className="relative z-10 " />

        <div className="absolute -bottom-40 w-full z-20 bg-transparent pl-16">
          <div className="overflow-hidden w-full">

            {/* data amor */}
            <h1 className='text-white text-3xl font-bold'>Mi amor</h1>

            <div className="flex whitespace-nowrap animate-scroll">
              {carouselBlogsAmor.map((blog, index) => (
                <Carrusell blog={blog} key={index} />
              ))}
            </div>

          </div>
        </div>

      </div>

      <div className='h-full pt-50'>

        <div className="w-full z-20 bg-transparent pl-16">
          <div className="overflow-hidden w-full">


            {/* data bebe */}
            <h1 className='text-white text-3xl font-bold'>Nuestro Bebé</h1>

            <div className="flex whitespace-nowrap animate-scroll">
              {carouselBlogsBebe.map((blog, index) => (
                <Carrusell blog={blog} key={index} />
              ))}
            </div>

          </div>
        </div>

      </div>


      <div className='pt-10'>

        <div className="w-full z-20 bg-transparent pl-16">
          <div className="overflow-hidden w-full">


            {/* data nosotros */}
            <h1 className='text-white text-3xl font-bold'>Nosotros</h1>

            <div className="flex whitespace-nowrap animate-scroll">
              {carouselBlogsNosotros.map((blog, index) => (
                <Carrusell blog={blog} key={index} />
              ))}
            </div>

          </div>
        </div>

      </div>


      <Footer />


    </div>
  );
}

export default Main;
