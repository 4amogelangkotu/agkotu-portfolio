// src/routes.ts
import { createBrowserRouter } from "react-router-dom";
import React from "react";
import RootLayout from "./components/RootLayout"; // Import the new layout

// Import your page components
import App from "./App";
import ProjectTrafficSign from "./pages/projects/TrafficSignDetector";
import ProjectBenchmarkTrader from "./pages/projects/BenchmarkTrader";
import ProjectEThrifting from "./pages/projects/AThrifters";
import EducationPage from "./pages/EducationPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: React.createElement(RootLayout),
    children: [
      {
        index: true,
        element: React.createElement(App),
      },
      {
        path: "project/traffic-sign-detector",
        element: React.createElement(ProjectTrafficSign),
      },
      {
        path: "project/benchmark-trader",
        element: React.createElement(ProjectBenchmarkTrader),
      },
      {
        path: "project/a-thrifters",
        element: React.createElement(ProjectEThrifting),
      },
      {
        path: "/education",
        element: React.createElement(EducationPage),
      },
    ],
  },
  // Optionally, you can add a catch-all route for 404 pages
  // {
  //   path: '*',
  //   element: <NotFoundPage />,
  // },
]);

export default router;
