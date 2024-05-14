import "./styles/App.css";
import Events from "./pages/Events";
import Home from "./pages/Home";
import Partner from "./pages/Partner";
import NotFound from "./pages/NotFound";
import Landing from "./pages/Landing";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="events" element={<Events />} />
      <Route path="partner" element={<Partner />} />
      <Route path="landing" element={<Landing />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
