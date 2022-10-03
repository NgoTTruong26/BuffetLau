import React from "react";
import { Outlet } from "react-router-dom";
import Actions from "./Actions";

export default function Bills() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="max-w-[1250px] w-full bg-white">
        <Actions />
        <Outlet />
      </div>
    </div>
  );
}
