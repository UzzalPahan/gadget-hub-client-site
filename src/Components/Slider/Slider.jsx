import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';


const Slider = () => {
  return (
    <>
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: false,
      }}
      navigation={false}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper cursor-pointer my-10 rounded-md"
    >
      <SwiperSlide className='relative'>
        <img className='brightness-50' src="https://i.ibb.co/f0VF8C8/martins-zemlickis-NPFu4-Gf-FZ7-E-unsplash.jpg" alt="" />
        <div className='absolute text-center w-full mx-auto pt-20'>
          <h2 className='text-3xl text-white font-semibold text-center'>Anniversary Picnic</h2>
          <p className='text-white'>A fun-filled picnic in the park to mark our special day.</p>
          <Link to={'/view'}><button className='py-2 px-4 bg-indigo-500 text-white mr-8 mt-10'>Details</button></Link>
          <a href='#services'><button className='py-2 px-4 bg-indigo-500 text-white mt-10'>More Events</button></a>
        </div>
        </SwiperSlide>

        <SwiperSlide className='relative'>
        <img className='brightness-50' src="https://i.ibb.co/9yCHKJc/picnic-1853380-1280.jpg" alt="" />
        <div className='absolute text-center w-full mx-auto pt-20'>
          <h2 className='text-3xl text-white font-semibold text-center'>Anniversary Picnic</h2>
          <p className='text-white'>A fun-filled picnic in the park to mark our special day.</p>
          <button className='py-2 px-4 bg-indigo-500 text-white mr-8 mt-10'>Details</button>
          <a href='#services'><button className='py-2 px-4 bg-indigo-500 text-white mt-10'>More Events</button></a>
        </div>        
        </SwiperSlide>
        <SwiperSlide className='relative'>
        <img className='brightness-50' src="https://i.ibb.co/C1p57Gm/performance-3329924-1280.jpg" alt="" />
        <div className='absolute text-center w-full mx-auto pt-20'>
          <h2 className='text-3xl text-white font-semibold text-center'>Anniversary Picnic</h2>
          <p className='text-white'>A fun-filled picnic in the park to mark our special day.</p>
          <button className='py-2 px-4 bg-indigo-500 text-white mr-8 mt-10'>Details</button>
          <a href='#services'><button className='py-2 px-4 bg-indigo-500 text-white mt-10'>More Events</button></a>
        </div>
        </SwiperSlide>
    </Swiper>
  </>
  )
}

export default Slider