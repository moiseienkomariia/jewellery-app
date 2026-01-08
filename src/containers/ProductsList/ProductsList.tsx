import { api } from "../../store/api.ts";

interface ProductsListProps {
  selectedCategory: number | null;
  searchTerm: string;
}

export const ProductsList = ({
  selectedCategory,
  searchTerm,
}: ProductsListProps) => {
  console.log({ CategoryName: selectedCategory });
  const { data, isLoading, isError } = api.useGetProductsListQuery(
    {
      category: selectedCategory,
      search: searchTerm,
    },
    {
      refetchOnMountOrArgChange: true,
    }
  );

  if (isError) return <div>Products Error</div>;
  if (isLoading) return <div>Is Loading...</div>;

  return (
    <>
      {data &&
        data.map((product) => {
          return <div key={product.id}>{product.name}</div>;
        })}
    </>
  );
};
