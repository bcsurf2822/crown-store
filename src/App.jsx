import { Route, Routes } from "react-router-dom";

// import Home from "./routes/home/home.component";
// import Navigation from "./routes/navigation/navigation.component";
// import Authentication from "./routes/authentication/authentication.component";
// import Shop from "./components/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";

import { lazy, Suspense, useEffect } from "react";
import { checkUserSession } from "./store/user/user.action";
import { useDispatch } from "react-redux";
import Spinner from "./components/spinner/spinner.component";
import { GlobalStyle } from "./global.styles";

//React Lazy and Suspense for Optimization
const Home = lazy(() => import("./routes/home/home.component"));

const Authentication = lazy(() =>
  import("./routes/authentication/authentication.component")
);

const Navigation = lazy(() =>
  import("./routes/navigation/navigation.component")
);

const Shop = lazy(() => import("./components/shop/shop.component"));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <Suspense fallback={<Spinner />}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
