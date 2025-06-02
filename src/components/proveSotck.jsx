import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import principal from "./../../public/proveStock/paginaUsuario.png"
const ProveSotck = () => {
    return (
        <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
      spaceBetween={50}
      enabled="true"
      slidesPerView="auto"
      navigation
      pagination={{clickable: true}}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className='swipImg '
    >
      <SwiperSlide className='h-50'><div className='swiper-zoom-container'>
        <img src={principal} alt="" className='w-100'/>
        </div></SwiperSlide>
      <SwiperSlide><div className='swiper-zoom-container'>
        <img src={principal} alt="" className='w-100'/>
        </div></SwiperSlide>
      <SwiperSlide><div className='swiper-zoom-container'>
        <img src={principal} alt="" className='w-100'/>
        </div></SwiperSlide>
      
    </Swiper>
    );
};

export default ProveSotck;