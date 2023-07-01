import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Detail from "./pages/Detail";
import Home from "./Templates/Home";
import Page404 from "./pages/Page404";
import Admin from "./Templates/Admin";
import Dashboard from "./pages/Dashboard";
import ItemDetail from "./pages/ItemDetail";
import ProductList from "./pages/DemoForm/ProductList";

// import Layout from './CV/Layout';
// import About from './CV/About';
// import Experience from './CV/Experience';
// import Education from "./CV/Education";
// import Interest from "./CV/Interest";
// import Skill from "./CV/Skill";
// import Award from "./CV/Award";

export default function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />}>
          {/* <Route index element={<Carousel />} /> */}
          <Route path="login" element={<Login />} />
          <Route path="detail" element={<Detail />}>
            <Route path=":id" element={<ItemDetail />} />
          </Route>
          <Route path='form' element={<ProductList />} />
          <Route path="*" element={<Page404 />} />
          {/* // trang 404  */}
        </Route>
        <Route path="/admin" element={<Admin />}>
          {/* <Route index element={<DashBoard />}></Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// {
//   /* <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<About />} />
//           <Route path="/experience" element={<Experience />} />
//           <Route path="/education" element={<Education />} />
//           <Route path="/interest" element={<Interest />} />
//           <Route path="/skill" element={<Skill/>} />
//           <Route path="/award" element={<Award />} />
//         </Route>
//       </Routes> */
// }