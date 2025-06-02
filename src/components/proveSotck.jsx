import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import principal from "./../../public/proveStock/paginaUsuario.png"
const ProveSotck = () => {
    return (
      <div className='container '>
        <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={50}
        enabled="true"
        slidesPerView="auto"
        navigation
        pagination={{clickable: true}}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className='proyectoImg'
        >
      <SwiperSlide><div className='container'>
        <img src={principal} alt="" className='proyectoImg'/>
        </div></SwiperSlide>
      <SwiperSlide><div className='container'>
        <img src={principal} alt="" className='proyectoImg'/>
        </div></SwiperSlide>
      <SwiperSlide><div className='container'>
        <img src={principal} alt="" className='proyectoImg'/>
        </div></SwiperSlide>
      
    </Swiper>
  </div>
    );
};

export default ProveSotck;