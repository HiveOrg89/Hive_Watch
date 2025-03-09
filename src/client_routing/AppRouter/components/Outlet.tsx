import { useComponentContext } from "./contexts/ComponentContext";

export default function OutLet() {
  const { componentChildren } = useComponentContext();

  return componentChildren ?? <></>;
}
