import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"

import { RouterProvider } from "react-router-dom"
import router from "./Routes/Routes.jsx"
import AuthProvider from "./providers/AuthProvider.jsx"
import { HelmetProvider } from "react-helmet-async"

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="max-w-7xl mx-auto font-poppins">
    <HelmetProvider>
      <AuthProvider>
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>
      </AuthProvider>
    </HelmetProvider>
  </div>
)
