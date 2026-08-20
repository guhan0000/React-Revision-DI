import React, { useMemo, useState } from "react";
import routes from "./data-router-api/routes/routes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {
  const router = useMemo(() => {
    return createBrowserRouter(routes); // must return the router fn
  }, []);
  return <RouterProvider router={router}></RouterProvider>;
}
export default App;
