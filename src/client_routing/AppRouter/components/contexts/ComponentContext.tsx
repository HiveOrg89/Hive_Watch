import { createContext, useContext } from "react";
import { ComponentContextProps, ComponentProviderProps } from "../types";

const ComponentContext = createContext<ComponentContextProps | null>(null);

export const ComponentProvider = ({
  children,
  initialValue,
}: ComponentProviderProps) => {
  const { componentChildren, parentPath, params, isHidden } = initialValue;

  const value: ComponentContextProps = {
    componentChildren,
    parentPath,
    params,
    isHidden,
  };

  return (
    <ComponentContext.Provider value={value}>
      {children}
    </ComponentContext.Provider>
  );
};

export const useComponentContext = () => {
  const ctx = useContext(ComponentContext);
  if (!ctx)
    throw new Error(
      "This context is not available. Check the render method of the component"
    );
  return ctx;
};
