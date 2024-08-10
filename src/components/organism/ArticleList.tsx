import { Article, ArticleType } from "../molecules/Article";


export const ArticleList = ({ data }: { data: ArticleType[] }) => {

  const articleData = data?.map((item: any) => ({
    id: item.id,
    title: item.title,
    imageSrc: item.featured_image,
    alt: item.featured_image_caption
  }))

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 h-full lg:h-[700px] xl:h-[700px] my-5">
      {
        articleData?.map((item: ArticleType, index: number) => (
          index === 0 ? (
            <Article {...item} key={item.id} isTheFirst={true} clasName="lg:row-span-2 lg:col-span-2" />
          ) : (
            <Article {...item} key={item.id} />
          )
        ))
      }
    </div>
  );
}
