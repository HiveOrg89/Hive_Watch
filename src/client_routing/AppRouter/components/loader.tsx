import { useAppRouterContext } from "./contexts/AppRouterContext";

export default function RouteFetchingLoader() {
  const { isFetching } = useAppRouterContext();
  return (
    <div className={`fetching-loader ${isFetching ? "show" : "done"}`}>
      <div className='fetching-loader__sliding-window sliding-window__one'></div>
    </div>
  );
}
