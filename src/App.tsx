import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout";
import { homeRoutes } from "./pages/routes";

const routes = [...homeRoutes];

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {routes.map((route, idx) => (
            <Route key={idx} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
