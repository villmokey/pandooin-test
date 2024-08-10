import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Luxury1 from '@/assets/images/luxury-1.png';
import Luxury2 from '@/assets/images/luxury-2.png';
import Luxury3 from '@/assets/images/luxury-3.png';
import Luxury4 from '@/assets/images/luxury-4.png';
import Luxury5 from '@/assets/images/luxury-5.png';
import Luxury6 from '@/assets/images/luxury-6.png';
import SeparatorWhite from '@/assets/images/separator-white.png';
import Image from "next/image";


const MobileView = () => {
  return (
    <Swiper
      slidesPerView={1}
      // spaceBetween={250}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className="w-full"
    >
      <SwiperSlide>
        <Image src={Luxury1} alt="Luxury 1" width={350} height={250} className="w-full h-[235px]" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={Luxury2} alt="Luxury 2" width={350} height={250} className="w-full h-[235px]" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={Luxury3} alt="Luxury 3" width={350} height={250} className="w-full h-[235px]" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={Luxury4} alt="Luxury 4" width={350} height={250} className="w-full h-[235px]" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={Luxury5} alt="Luxury 5" width={350} height={250} className="w-full h-[235px]" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={Luxury6} alt="Luxury 6" width={350} height={250} className="w-full h-[235px]" />
      </SwiperSlide>
    </Swiper>
  )
}

export const LuxuryFootages = () => {
  return (
    <div className="bg-[#D6B66B] w-full mt-10 lg:py-10 xl:py-10">
      <div className="container py-10">
        <h1 className="text-[55px] lg:text-[72px] xl:text-[72px] text-center lg:text-left xl:text-left font-signature text-[#004040]">Luxury Footages</h1>
        {/* <LuxuryFootages /> */}
        <div className="block lg:hidden xl:hidden">
          <MobileView />
        </div>
        <div className="hidden lg:grid xl:grid grid-cols-3 gap-5 my-5">
          <Image src={Luxury1} alt="Luxury 1" width={350} height={250} className="w-full h-[350px]" />
          <Image src={Luxury2} alt="Luxury 2" width={350} height={250} className="w-full h-[350px]" />
          <Image src={Luxury3} alt="Luxury 3" width={350} height={250} className="w-full h-[350px]" />
        </div>
        <Image src={SeparatorWhite} alt="Separator" width={500} height={500} className="w-full hidden lg:flex xl:flex" />
        <div className="hidden lg:grid xl:grid grid-cols-3 gap-5 my-5">
          <Image src={Luxury4} alt="Luxury 4" width={350} height={250} className="w-full h-[350px]" />
          <Image src={Luxury5} alt="Luxury 5" width={350} height={250} className="w-full h-[350px]" />
          <Image src={Luxury6} alt="Luxury 6" width={350} height={250} className="w-full h-[350px]" />
        </div>
      </div>
    </div>
  );
}
