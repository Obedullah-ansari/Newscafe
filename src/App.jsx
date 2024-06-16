
import Allmain from "./Allmain.jsx";
import { createBrowserRouter, RouterProvider, Routes } from 'react-router-dom';
import Newsmain from "./Pages/Newsmain.jsx";
function App() {
  
  
 const router= createBrowserRouter([
    
  { path : "/Newscafe" ,element : <Allmain />},
    {path :'/Newscafe/Newsbody' ,element:< Newsmain/> },
  ])



  return (
    <>
   <RouterProvider  router={router}>
          <Routes />
   </RouterProvider>
    </>
  )
}

export default App
