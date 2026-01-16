import { useDispatch, useSelector } from "react-redux";
import { useProductActions } from "../../hooks/useProductActions";
import {
  selectCartId,
  selectSearchTerm,
  selectSelectedCategory,
} from "@store/selectors";
import { api } from "@store/api";
import { useCallback, useEffect, useMemo, type ChangeEvent } from "react";
import { debounce } from "lodash";
import Search from "../Search/Search";
import { CategoriesList } from "../CategoriesList/CategoriesList";
import { ProductsList } from "../ProductsList/ProductsList";
import { initializeCart } from "@store/cartSlice";

const DEBOUNCE_TIME_MS = 50;

export const HomePage = () => {
  const { setSearchTerm } = useProductActions();
  const selectedCategory = useSelector(selectSelectedCategory);
  const searchTerm = useSelector(selectSearchTerm);
  const { data, isLoading, isError } = api.useGetCategoriesListQuery();
  const { data: products } = api.useGetProductsListQuery(
    {
      category: selectedCategory,
      search: searchTerm,
    },
    {
      refetchOnMountOrArgChange: true,
    }
  );
  const dispatch = useDispatch();
  const cartId = useSelector(selectCartId);
  const debouncedSearch = useMemo(
    () =>
      debounce((value: string) => {
        setSearchTerm(value);
      }, DEBOUNCE_TIME_MS),
    [setSearchTerm]
  );

  const handleSearchChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      debouncedSearch(e.target.value);
    },
    [debouncedSearch]
  );

  const { changeCategory } = useProductActions();
  const handleSelectCategory = useCallback(
    (categoryId: number) => {
      changeCategory(categoryId);
    },
    [changeCategory]
  );

  console.log("cart id!", cartId);

  useEffect(() => {
    if (!cartId) dispatch(initializeCart());
  }, [cartId, dispatch]);

  if (isError) return <div>Products Error</div>;
  if (isLoading) return <div>Is Loading...</div>;
  return (
    <>
      <Search icon="icon" value={searchTerm} onChange={handleSearchChange} />
      <CategoriesList
        selectedCategory={selectedCategory}
        onCategoryChange={handleSelectCategory}
        data={data}
      />
      <ProductsList products={products || []} />
    </>
  );
};
