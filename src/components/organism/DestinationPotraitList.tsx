import { Swiper, SwiperSlide } from "swiper/react";
import { DestinationPotrait, DestinationPotraitType } from "../molecules/DestinationPotrait";

type DestinationPotraitListType = {
  data: DestinationPotraitType[],
}

const MobileSwiper = ({ data }: { data: DestinationPotraitType[] }) => {
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={250}
      pagination={{
        clickable: true,
      }}
      className="w-full h-[600px]"
    >
      {
        data && data.map((item: DestinationPotraitType, index: number) => (
          <SwiperSlide key={item.id}>
            <DestinationPotrait
              key={item.id}
              {...item}
            />
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
}

export const DestinationPotraitList = ({
  data,
}: DestinationPotraitListType) => {

  const productData = data?.map((item: any) => ({
    title: item.itinerary_name,
    description: item.itinerary_short_description,
    price: item.itinerary_variant_pub_price,
    promoPrice: item.itinerary_variant_disc_price,
    partner: item.partner_name,
    id: item.itinerary_id,
    time: item.itinerary_day,
    images: item.related_galleries
  }))
  
  return (
    <>
      <div className="hidden lg:flex xl:flex lg:flex-wrap xl:flex-wrap gap-5 mt-6 lg:justify-center xl:justify-start">
        {
          productData && productData.map((item: DestinationPotraitType, index: number) => (
            <DestinationPotrait
              key={item.id}
              {...item}
            />
          ))
        }
      </div>
      <div className="lg:hidden xl:hidden 2xl:hidden ">
        <MobileSwiper data={productData}/>
      </div>
    </>
  );
}
