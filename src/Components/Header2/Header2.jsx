import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules


const Header2 = () => {
  return (
    <>
    <Swiper className="mySwiper cursor-pointer my-10 rounded-md"
    >
      <SwiperSlide className='relative'>
        <img className='brightness-50' src="https://i.ibb.co/nbGptmV/in-feature-nbsp-534922870.png" alt="" />
        <div className='absolute text-center w-full mx-auto pt-20'>
          <h2 className='text-3xl text-white font-semibold text-center'>GadgetHub is the worlds most popular gadget selling company</h2>
          <p className='text-white'>You can explore our product and buy</p>
          <a id='about'>
            <button className='py-2 px-4 bg-indigo-500 text-white mr-8 mt-10'>About Us</button>
          </a>
            
          <a href='#category'><button className='py-2 px-4 bg-indigo-500 text-white mt-10'>Explore</button></a>
        </div>
        </SwiperSlide>
    </Swiper>
  </>
  )
}

export default Header2