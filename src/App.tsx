import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home.component";
import Greeting from "./routes/Greeting.component";
import Auth from "./routes/Auth.component";
import Shop from "./routes/Shop.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Greeting />}></Route>
        <Route path="/sign" element={<Auth />}></Route>
        <Route path="/shop/*" element={<Shop />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
