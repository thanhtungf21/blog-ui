import React from "react";

interface PathRouteConfig {
  path: string; // Path is required for non-index routes
  index?: false; // If index is present on a path route, it must be false
  element: React.ReactNode;
  children?: RouteConfig[];
}

interface IndexRouteConfig {
  index: true; // Index is true for index routes
  path?: never; // Path is not allowed for index routes
  element: React.ReactNode;
  children?: never; // Children are not allowed for index routes
}

export type RouteConfig = PathRouteConfig | IndexRouteConfig;
