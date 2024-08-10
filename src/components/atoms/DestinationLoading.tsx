export const DestinationLoading = ({ isReverse }: { isReverse?: boolean }) => {
  return (
    <div className={`flex flex-col ${isReverse ? 'lg:flex-row-reverse xl:flex-row-reverse' : 'lg:flex-row xl:flex-row'} w h-[500px] gap-5 mt-5 animate-pulse`}>
      <div className="bg-[#f2f2f2] rounded-md shadow-sm h-full w-full lg:w-1/2 xl:w-1/2">
      </div>
      <div className="w-full lg:w-1/2 xl:w-1/2 relative">
        <div className="w-[20%] rounded-md shadow-sm bg-[#f2f2f2] h-[20px]"></div>
        <div className="w-full rounded-md shadow-sm bg-[#f2f2f2] h-[40px] mt-4"></div>
        <div className="w-1/2 rounded-md shadow-sm bg-[#f2f2f2] h-[40px] mt-3"></div>
        <div className="w-full rounded-md shadow-sm bg-[#f2f2f2] h-[20px] mt-10"></div>
        <div className="w-full rounded-md shadow-sm bg-[#f2f2f2] h-[20px] mt-3"></div>
        <div className="w-full rounded-md shadow-sm bg-[#f2f2f2] h-[20px] mt-3"></div>
        <div className="w-full rounded-md shadow-sm bg-[#f2f2f2] h-[20px] mt-3"></div>
        <div className="w-full rounded-md shadow-sm bg-[#f2f2f2] h-[20px] mt-3"></div>

        <div className="block lg:absolute lg:w-full lg:-bottom-2 xl:absolute xl:w-full xl:bottom-0">
          <div className="flex justify-between">
            <div>
              <div className="w-[200px] rounded-md shadow-sm bg-[#f2f2f2] h-[20px] my-3"></div>
              <div className="w-[200px] rounded-md shadow-sm bg-[#f2f2f2] h-[20px] my-3"></div>
            </div>
            <div className="w-[200px] rounded-md shadow-sm bg-[#f2f2f2] h-[40px] my-3"></div>
          </div>
        </div>

      </div>
    </div>
  );
}
