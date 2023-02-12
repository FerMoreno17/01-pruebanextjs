import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const BaseLayout = ({ children }: Props) => {
  return (
    <div
      style={{
        backgroundColor: "red",
        borderRadius: 5,
        padding: 10,
      }}
    >
      <h3>BaseLayout</h3>
      <div>{children}</div>
    </div>
  );
};

export default BaseLayout;
