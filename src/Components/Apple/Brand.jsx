// slider start 
import { Swiper, SwiperSlide } from 'swiper/react';
// import StarRatings from './react-star-ratings';
import StarRatings from 'react-star-ratings';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

//slider end

import { useLoaderData } from "react-router-dom"
import { useState } from 'react';

const Brand = () => {
  const [rating, setRating] = useState(0); // Initial rating value

  const changeRating = (newRating, name) => {
    setRating(newRating);
  }

    const brandData = useLoaderData();
  return (
    <div>
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
      {
        brandData?.map(slider =>
      <SwiperSlide key={slider._id} className='relative'>
        <img className='brightness-50 object-center' src={slider.image} alt="" />
        <div className='absolute text-center w-full mx-auto pt-20'>
          <h2 className='text-3xl text-white font-semibold text-center'>Anniversary Picnic</h2>
          <p className='text-white'>A fun-filled picnic in the park to mark our special day.</p>
          <Link to={'/view'}><button className='py-2 px-4 bg-indigo-500 text-white mr-8 mt-10'>Details</button></Link>
          <a href='#services'><button className='py-2 px-4 bg-indigo-500 text-white mt-10'>More Events</button></a>
        </div>
        </SwiperSlide>
        )
      }
  
    </Swiper>
  </>

  {/* slider end */}
  
{/** star */}

          <h2 className="text-6xl text-center uppercase">{brandData[0]?.categoryValue}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90vw] mx-auto my-10 gap-4">
        {brandData?.map(categorys =>
        <div key={categorys._id} className="w-full max-w-sm rounded overflow-hidden shadow-lg">
        <img src={categorys.image} alt="Image Alt Text" className="w-40 h-60 mx-auto"/>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{categorys.name}</div>
          <p className="text-gray-700 text-lg font-bold mb-2">{categorys.price}</p>
          <p className="text-gray-700 text-base mb-2">{categorys.brand}</p>
          <p className="text-gray-700 text-base mb-2">{categorys.category}</p>
          <p className="text-gray-700 text-base mb-2">Rating: {categorys.rating} / 10</p>
          <StarRatings 
      rating={rating}
      starRatedColor="blue"
      changeRating={changeRating}
      numberOfStars={5}
      defaultValue ={parseInt(categorys?.rating)}
      starDimension="30px"
      name='rating'
    />
        </div>
        <div className="px-6 py-4 text-center">
        <Link to={`/productdetails/${categorys._id}`}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Details
          </button>
          </Link>
          <Link to={`/update/${categorys._id}`}>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full ml-2">
            Update
          </button>
          </Link>
        </div>
      </div>


)}
    </div>
    </div>
  )
}

export default Brand