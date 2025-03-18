import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "./components/ui/provider";
import { BrowserRouter } from "react-router";
import PageLoading from "./components/page-loading.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <BrowserRouter>
        <Suspense fallback={<PageLoading />}>
          <App />
        </Suspense>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
