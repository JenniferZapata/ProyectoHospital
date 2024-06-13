import IndexAdmin from "./pages/admin";
import Login from "./pages/frontend/login";
import Register from "./pages/frontend/register";
import Home from "./pages/frontend/home";
import NoFound from "./pages/frontend/nofound";
import { Routes, Route } from "react-router";
import Dashboard from "./pages/admin/dashboard";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/index" element={<IndexAdmin/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="*" element={<NoFound/>}/>
      </Routes>
    </>
  );
}

export default App;
