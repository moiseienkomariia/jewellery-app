import { useGetProductsListQuery } from "../../api.ts";

export const ProductsList = () => {
  const { data, isLoading } = useGetProductsListQuery();
  if (isLoading) return <div>Is Loading...</div>;
  console.log({ data });

  return (
    <>
      {data &&
        data.map((product) => {
          <div>{product.name}</div>;
        })}
    </>
  );
};
