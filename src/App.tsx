import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout";
import { homeRoutes, accountRouters } from "./routes/routes";

const pages = [...homeRoutes];
const account = [...accountRouters];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route element={<Layout />}>
            {pages.map((route, idx) => (
              <Route key={idx} path={route.path} element={route.element} />
            ))}
          </Route>

          <Route path="account">
            {account.map((route, idx) => (
              <Route key={idx} path={route.path} element={route.element} />
            ))}
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
