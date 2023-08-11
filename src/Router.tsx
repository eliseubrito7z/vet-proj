import { Route, Routes } from "react-router-dom";
import { Login } from "./Pages/Login/Login";


export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login/>} />
    </Routes>
  )
}