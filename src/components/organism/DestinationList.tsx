import { Swiper, SwiperSlide } from 'swiper/react';
import { Destination, DestinationType } from "../molecules/Destination";

type DestinationList = {
  data: DestinationType[],
  isDesktop: boolean
}


export const DestinationList = ({
  data,
  isDesktop
}: DestinationList) => {

  const productData = data?.map((item: any) => ({
    title: item.itinerary_name,
    description: item.itinerary_short_description,
    price: item.itinerary_variant_pub_price,
    promoPrice: item.itinerary_variant_disc_price,
    partner: item.partner_name,
    id: item.itinerary_id,
    time: item.itinerary_day,
    images: item.related_galleries,
    isDesktop
  }))
  
  return (
      <div className="mt-5">
        {
          productData && productData.map((item: DestinationType, index: number) => (
            <Destination 
              key={item.id}
              isReverse={index % 2 == 0 ? false : true}
              isDesktop={item.isDesktop}
              {...item}
            />
          ))
        }
      </div>
  );
}