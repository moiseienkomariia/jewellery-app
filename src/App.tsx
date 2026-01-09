import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import { store } from "@store/store";
import MainRoutes from "./routes/MainRoutes";
import { CategoriesList } from "@containers";
import { ProductsList } from "@containers";
import { selectSearchTerm, selectSelectedCategory } from "@store/selectors";
import Search from "./containers/Search/Search";
import { useCallback, useMemo, type ChangeEvent } from "react";
import { debounce } from "lodash";
import { api } from "@store/api";
import { useProductActions } from "./hooks/useProductActions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoutes />,
  },
  {
    path: "/product/:id",
    element: <div>Product</div>,
  },
]);
const DEBOUNCE_TIME_MS = 50;

const AppContent = () => {
  const { setCategory, setSearchTerm, resetCategory } = useProductActions();
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

  // TODO uprość logikę, przenieś to do akcji
  const handleSelectCategory = useCallback(
    (categoryId: number) => {
      if (selectedCategory === categoryId) {
        resetCategory();
      } else {
        setCategory(categoryId);
      }
    },
    [resetCategory, selectedCategory, setCategory]
  );

  if (isError) return <div>Products Error</div>;
  if (isLoading) return <div>Is Loading...</div>;
  return (
    <>
      <RouterProvider router={router} />
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

export const App = () => {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
};
