"use client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import store from "./store/store.tsx";
import { AppRouterProvider } from "./AppRouter/components/contexts/AppRouterContext.tsx";
import { isServer } from "./util/util.tsx";

export default function ClientApp() {
  return (
    <Provider store={store}>
      <AppRouterProvider persist>
        <App />
      </AppRouterProvider>
    </Provider>
  );
}
