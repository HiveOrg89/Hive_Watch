import { useEffect, useState } from "react";
import {
  ComponentProvider,
  useComponentContext,
} from "./contexts/ComponentContext";
import { initiateRouteMatching, useLocation } from "./hooks";
import { RouteProps } from "./types";
import { useAppRouterContext } from "./contexts/AppRouterContext";

export const Route = ({
  element,
  path,
  children,
  action,
  visited = false,
}: RouteProps) => {
  const [isVisited, setIsVisited] = useState(visited);
  const [updateUI, setUpdateUI] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const { persist, isFetching, setIsFetching, targetRoute, setTargetRoute } =
    useAppRouterContext();
  const [params, setParams] = useState({});
  const { pathname, pathnamewithsearch } = useLocation();
  const { parentPath } = useComponentContext();
  const fullParentPath = parentPath + path;

  useEffect(() => {
    if (isFetching || action) return;
    shouldRender && setIsVisited(true);
  }, [isFetching, shouldRender]);

  useEffect(() => {
    if (isFetching) return;
    shouldRender && console.log("updating ui", fullParentPath);
    setUpdateUI(shouldRender);
  }, [targetRoute, shouldRender, isFetching]);

  useEffect(() => {
    const { render, urlParams } = initiateRouteMatching(
      fullParentPath,
      pathname
    );
    setShouldRender(render);
    handleTransition(render);
    setParams(urlParams);
  }, [pathnamewithsearch]);

  const handleAction = async () => {
    if (action) {
      return await action();
    }
  };

  const handleTransition = (render: boolean) => {
    if (render && action) {
      handleAction()
        .then(() => {
          setTargetRoute(pathnamewithsearch);
          setIsVisited(true);
        })
        .catch((err) => {
          console.error("Something went wrong", err);
        })
        .finally(() => {
          setIsFetching(false);
        });
    }
  };

  const regularRoute = () => {
    return updateUI ? (
      <ComponentProvider
        initialValue={{
          componentChildren: children,
          parentPath: fullParentPath,
          params,
          isHidden: !updateUI,
        }}
      >
        {element}
      </ComponentProvider>
    ) : null;
  };

  const persistedRoute = () => {
    const show = updateUI;
    return isVisited ? (
      <div className={`route-wrapper`} hidden={!show}>
        <ComponentProvider
          initialValue={{
            componentChildren: children,
            parentPath: fullParentPath,
            params,
            isHidden: !updateUI,
          }}
        >
          {element}
        </ComponentProvider>
      </div>
    ) : null;
  };

  return persist ? persistedRoute() : regularRoute();
};
