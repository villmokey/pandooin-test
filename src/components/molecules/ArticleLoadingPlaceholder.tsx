import { ArticleLoading } from "../atoms/ArticleLoading";

export const ArticleLoadingPlaceholder = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 h-full my-5">
      <ArticleLoading />
      <ArticleLoading />
      <ArticleLoading />
      <ArticleLoading />
      <ArticleLoading />
      <ArticleLoading />
      <ArticleLoading />
      <ArticleLoading />
    </div>
  );
}
