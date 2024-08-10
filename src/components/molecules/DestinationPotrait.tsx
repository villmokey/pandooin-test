import Image from "next/image";
import SampleImage from '@/assets/images/sample-destination-image-1.png'
import { DestinationType } from "./Destination";
import { currency } from "@/utils/numberFormat";

export type DestinationPotraitType = Omit<DestinationType, 'description | isReverse | isDesktop'>

export const DestinationPotrait = ({ id, time = 7, title, images, price = "5200000", pricePromo, href, partner }: DestinationPotraitType) => {
  return (
    <div className="w-[280px] lg:w-[285px] xl:w-[265px] 2xl:w-[250px] h-[500px] relative mt-5">
      <div className="w-full h-[256px] mb-3">
        <Image loader={() => images ? images[0].src : ''} src={images ? images[0].src : SampleImage} alt="Image" width={256} height={256} className="h-full w-full"  />
      </div>
      <h5 className="text-greeny text-[12px]">{time} Days {time-1} Nights</h5>
      <h3 className="text-greeny font-bold font-unbounded text-[15px]">{ title }</h3>
      <h5 className="text-[#004040] font-bold text-[14px]">Organized by {partner}</h5>
      <div className="absolute bottom-0">
        <span className="text-greeny text-[12px]">Start from</span>
        {
          pricePromo && pricePromo !== "0" && <h5 className="text-[14px] text-[#B8B8B8] line-through">IDR { currency(parseInt(pricePromo)) }</h5>
        }
        <h4 className="text-greeny text-[18px] font-bold mb-3">IDR { currency(parseInt(price)) }</h4>
        <a href="#" className="border-2 border-[#004040] rounded-full px-5 py-3 font-bold hover:bg-[#004040] hover:text-white text-[#004040]">See Details</a>
      </div>
    </div>
  );
}
