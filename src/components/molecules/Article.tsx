import Image from "next/image";
import SampleImage from '@/assets/images/exclusive-experiences.png'

export type ArticleType = {
  id?: string,
  href?: string,
  imageSrc?: string,
  title?: string,
  alt?: string,
  clasName?: string,
  isTheFirst?: boolean
}

const trimTitle = (text: string) => {
  return text.substring(0, 40) + '...'
}

export const Article = ({ imageSrc, title, alt = 'Article Image', href = "#", clasName, isTheFirst }: ArticleType) => {
  return (
    <a href={href} className={`w-full h-full ${clasName} relative`}>
      <Image loader={() => imageSrc ? imageSrc : '' } width={500} height={550} src={imageSrc ? imageSrc : SampleImage} alt={alt} className="w-full h-full grayscale hover:grayscale-0 transition-all" />
      <div className="h-[70px] bg-[#0B7373] text-white p-3 absolute w-full bottom-0">
        <h3 className="text-[16px]">{isTheFirst ? title : trimTitle(title || '')}</h3>
      </div>
    </a>
  );
}
