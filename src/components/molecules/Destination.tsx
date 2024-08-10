import SampleImage from '@/assets/images/sample-destination-image-1.png'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { currency } from '@/utils/numberFormat';

interface ImageSliderInterface {
  gallery_alt_text: string;
  gallery_id: number;
  gallery_path: string;
  itinerary_id: string;
  src: string;
  title: string;
}

type ImageSliderType = {
  data: ImageSliderInterface[] | undefined
}

const ImageSlider = ({ data }: ImageSliderType) => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className='w-full lg:w-1/2 xl:w-1/2' 
    >
      {
        data?.map((item) => (
          <SwiperSlide key={item.src}>
            <Image loader={() => item.src} src={item.src ? item.src : SampleImage} alt="Destination image" width={300} height={250} className='w-full h-[300px] lg:h-[350px] xl:h-[400px]' />
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
}

export type DestinationType = {
  id?: string,
  time?: number,
  title?: string,
  description?: string,
  partner?: string,
  images?: ImageSliderInterface[] | undefined,
  price?: string,
  pricePromo?: string,
  href?: string,
  isReverse?: boolean,
  isDesktop?: boolean
}


export const Destination = ({
  time = 7,
  title = 'Paradise Gateway: Labuan Bajo',
  description = "Labuan Bajo is a tropical paradise nestled in the westernmost part of Flores Island, Indonesia. With its stunning landscapes, crystal-clear waters, and vibrant marine life, it's a gateway to explore the mesmerizing Komodo National Park.",
  images,
  partner = 'Organized by Pandooin',
  price = "5200000",
  pricePromo,
  href,
  isReverse,
  isDesktop
}: DestinationType) => {

  const titleClassName = 'text-[16px] lg:text-[17px] xl:text-[30px] font-bold font-unbounded text-greeny';
  const descClassname = 'mt-2 text-[12px] lg:text-[14px] xl:text-[16px] text-[#004040]';

  return (
    <div className="flex flex-col lg:flex-row xl:flex-row gap-5 py-7">
      {
        isReverse && isDesktop ? (
            <>
              <div className='w-full lg:w-1/2 xl:w-1/2 relative'>
                <h5 className='text-greeny'>{time} Days {time - 1} Night</h5>
                <h1 className={titleClassName}>{title}</h1>
                <p className='font-bold hidden text-[#004040] lg:block xl:block'>Organized by {partner}</p>
                <p className={descClassname}>{description}</p>
                <p className='font-bold block lg:hidden xl:hidden mt-3 text-[12px] text-[#004040]'>Organized by {partner}</p>
                <div className="block lg:absolute lg:w-full lg:-bottom-2 xl:absolute xl:w-full xl:-bottom-2">
                  <div className={`flex justify-between`}>
                    <div>
                      <p className='m-0 p-0 text-[#004040]'>Start from</p>
                      {
                        pricePromo && pricePromo !== "0" && <p className='m-0 p-0 line-through text-[#B8B8B8] text-[16px] font-bold'>IDR {currency(parseInt(pricePromo))}</p>
                      }
                      <p className='m-0 p-0 text-[18px] lg:text-[23px] xl:text-[28px] font-semibold text-[#0B7373]'>IDR {currency(parseInt(price))}</p>
                    </div>
                    <a href={href} className='rounded-full text-[#004040] border-[#004040] border-2 px-5 py-3 font-bold mt-auto mb-2 hover:bg-[#004040] hover:text-white align-middle'>See Details</a>
                  </div>
                </div>
              </div>
              <ImageSlider data={images} />
            </>
        ) : (
          <>
            <ImageSlider data={images} />
            <div className='text-[#004040] w-full lg:w-1/2 xl:w-1/2 relative'>
              <h5 className=''>{time} Days {time - 1} Night</h5>
              <h1 className={titleClassName}>{title}</h1>
              <p className='font-bold hidden text-[#004040] lg:block xl:block'>Organized by {partner}</p>
              <p className={descClassname}>{description}</p>
              <p className='font-bold block lg:hidden xl:hidden mt-3 text-[12px] text-[#004040]'>Organized by {partner}</p>
              <div className="block lg:absolute lg:w-full lg:-bottom-2 xl:absolute xl:w-full xl:-bottom-2">
                <div className={`flex justify-between`}>
                  <div>
                    <p className='align-baseline text-[#004040]'>Start from</p>
                    {
                      pricePromo && pricePromo !== "0" && <p className='align-baseline line-through text-[#B8B8B8] text-[16px] font-bold'>IDR {currency(parseInt(pricePromo))}</p>
                    }
                    <p className='align-baseline text-[18px] lg:text-[23px] xl:text-[28px] font-semibold text-[#0B7373]'>IDR {currency(parseInt(price))}</p>
                  </div>
                  <a href={href} className='rounded-full ml-auto border-[#004040] text-[#004040] border-2 px-5 py-3 font-bold mt-auto mb-2 hover:bg-[#004040] hover:text-white align-middle'>See Details</a>
                </div>
              </div>
            </div>
          </>
        )
      }
     

    </div>
  );
}
 