import { Routes, Route } from "react-router-dom";

import Layout from "./screens/Layout";
import NotFound from "./screens/NotFound";
import Projects from "./screens/Projects";

export default function App() {

  return (
    <>
      <Routes>
        <Route index element={<Layout />} />
        <Route path='/projects' element={<Projects />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>    
    </>
  )
}
