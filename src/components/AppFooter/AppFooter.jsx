import { Typography } from "antd";
import React from "react";

const AppFooter = () => {
  return (
    <div className="AppFooter h-16 flex justify-evenly border-0 border-t-[1px] border-solid border-gray-200 flexCenter">
      <Typography.Link href="tel:+19820422445">+19820422445</Typography.Link>
      <Typography.Link href="">Privacy Policy</Typography.Link>
      <Typography.Link href="">Terms & Conditions</Typography.Link>
    </div>
  );
};

export default AppFooter;
