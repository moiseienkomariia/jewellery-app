import { api } from "../../store/api.ts";

export const ProductsList = () => {
  const { data, isLoading, isError } = api.useGetProductsListQuery();
  if (isError) return <div>Products Error</div>;
  if (isLoading) return <div>Is Loading...</div>;
  console.log({ data });

  return (
    <>
      {data &&
        data.map((product) => {
          return <div key={product.id}>{product.name}</div>;
        })}
    </>
  );
};
