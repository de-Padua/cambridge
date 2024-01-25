import React from "react";
import { UserBookProps } from "@/types";

function section({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full flex items-center justify-center">
      <div className=" w-full flex items-center justify-center flex-col">{children}</div>
    </div>
  );
}

export default section;
