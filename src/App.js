import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component.jsx";
import Nav from "./routes/navigation/nav.component.jsx";
import Authentication from "./routes/authentication/authentication.component.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Home />} />
        <Route path="shop" />
        <Route path="authentication" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
