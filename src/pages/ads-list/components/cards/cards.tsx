import { useGetAdsQuery } from '../../../../redux/api';

export const Cards = () => {
  const { data } = useGetAdsQuery();
  console.log(data);
  return <div>Cards</div>;
};
