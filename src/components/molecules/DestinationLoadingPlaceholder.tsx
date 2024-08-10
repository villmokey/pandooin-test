import { DestinationLoading } from "../atoms/DestinationLoading";

export const DestinationLoadingPlaceholder = () => {
  return (
    <>
      <DestinationLoading />
      <DestinationLoading isReverse />
      <DestinationLoading />
      <DestinationLoading isReverse />
    </>
  );
}
