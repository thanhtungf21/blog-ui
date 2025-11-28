import { Spin } from "antd";
import React from "react";

const RouteLoadingFallback: React.FC = () => {
  return <Spin size="large" tip="Loading..." fullscreen />;
};

export default RouteLoadingFallback;
