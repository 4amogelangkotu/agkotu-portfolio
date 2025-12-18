// src/routes.ts
import { createBrowserRouter } from "react-router-dom";
import React from "react";

// Import your components
import App from "./App";
import ProjectTrafficSign from "./pages/projects/TrafficSignDetector";
import ProjectBenchmarkTrader from "./pages/projects/BenchmarkTrader";
import ProjectEThrifting from "./pages/projects/EThrifting";

export const router = createBrowserRouter([
  {
    path: "/",
    element: React.createElement(App),
  },
  {
    path: "/project/traffic-sign-detector",
    element: React.createElement(ProjectTrafficSign),
  },
  {
    path: "/project/benchmark-trader",
    element: React.createElement(ProjectBenchmarkTrader),
  },
  {
    path: "/project/e-thrifting",
    element: React.createElement(ProjectEThrifting),
  },
  // Optionally, you can add a catch-all route for 404 pages
  // {
  //   path: '*',
  //   element: <NotFoundPage />,
  // },
]);

export default router;
