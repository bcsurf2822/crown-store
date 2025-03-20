import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.scss";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { persistor, store } from "./store/store.js";
import { PersistGate } from "redux-persist/integration/react";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "./utils/stripe/stripe.utils.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Elements stripe={stripePromise}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Elements>
      </PersistGate>
    </Provider>
  </StrictMode>
);

serviceWorkerRegistration.register();
