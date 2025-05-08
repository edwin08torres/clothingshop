import { createBrowserRouter } from "react-router-dom";
import Layout       from "@/shared/ui/Layout";
import Home         from "@/pages/Home";
import ProductPage  from "@/pages/ProductPage";
import ContactPage  from "@/pages/ContactPage";
import GalleryPage from "./pages/GalleryPage";

export const router = createBrowserRouter([
  {
    element: <Layout />,          
    children: [
      { path: "/",            element: <Home /> },
      { path: "/products/:id",element: <ProductPage /> },
      { path: "/contact",     element: <ContactPage /> },
      { path: "/gallery",     element: <GalleryPage /> },
      { path: "*",            element: <h1>404</h1> },
    ],
  },
]);
