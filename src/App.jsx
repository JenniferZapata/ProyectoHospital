import IndexAdmin from "./pages/admin";
import Login from "./pages/admin/login";
import Register from "./pages/admin/register";
import Home from "./pages/frontend/home";
import { Routes, Route } from "react-router";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/index" element={<IndexAdmin/>} />
      </Routes>
    </>
  );
}

export default App;
