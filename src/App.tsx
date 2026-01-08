import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "@store/store";
import MainRoutes from "./routes/MainRoutes";
import { CategoriesList } from "@containers";
import { ProductsList } from "@containers";
import { selectSelectedCategory } from "@store/selectors";
import Search from "./containers/Search/Search";
import { resetCategory, setCategory } from "@store/productSlice";
import { useMemo, useState, type ChangeEvent } from "react";
import { debounce } from "lodash";
import { api } from "@store/api";

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
const DEBOUNCE_TIME_MS = 300;

const AppContent = () => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(selectSelectedCategory);
  // const searchTerm = useSelector(selectSearchTerm);
  const [searchTerm, setSearchTerm] = useState("");
  const { data, isLoading, isError } = api.useGetCategoriesListQuery();

  const debouncedSearch = useMemo(
    () =>
      // debounce((value: string) => {
      //   dispatch(setSearchTerm(value));
      // }, DEBOUNCE_TIME_MS),
      debounce((value: string) => {
        return setSearchTerm(value);
      }, DEBOUNCE_TIME_MS),
    []
  );

  if (isError) return <div>Products Error</div>;
  if (isLoading) return <div>Is Loading...</div>;

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(e.target.value);
  };

  const handleSelectCategory = (categoryId: number) => {
    if (selectedCategory === categoryId) {
      dispatch(resetCategory());
    } else {
      dispatch(setCategory(categoryId));
    }
  };

  return (
    <>
      <RouterProvider router={router} />
      <Search icon="icon" value={searchTerm} onChange={handleSearchChange} />
      <CategoriesList
        selectedCategory={selectedCategory}
        onCategoryChange={handleSelectCategory}
        data={data}
      />
      <ProductsList
        selectedCategory={selectedCategory}
        searchTerm={searchTerm}
      />
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
