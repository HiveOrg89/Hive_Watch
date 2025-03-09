import { ComponentProvider } from "./components/contexts/ComponentContext";
import { AppRouterProps } from "./components/types";
import "./components/css/style.css";
import RouteFetchingLoader from "./components/loader";

export const AppRouter = ({ children }: AppRouterProps) => {
  return (
    <>
      <RouteFetchingLoader />
      <ComponentProvider
        initialValue={{ componentChildren: <></>, parentPath: "", params: {} }}
      >
        {children}
      </ComponentProvider>
    </>
  );
};
