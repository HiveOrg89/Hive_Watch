"use client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import store from "./store/store.tsx";
import { AppRouterProvider } from "./AppRouter/components/Provider.tsx";

export default function ClientApp() {
  return (
    <Provider store={store}>
      <AppRouterProvider>
        <App />
      </AppRouterProvider>
    </Provider>
  );
}
