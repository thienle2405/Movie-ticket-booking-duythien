import React, { useState } from "react";
import { Tabs } from "antd";

const HomeMenu = () => {
  const items = [
    {
      key: 1,
      label: `Tab1`,
      children: "Nội dung tab 1",
    },
    {
      key: 2,
      label: `Tab2`,
      children: "Nội dung tab 2",
    },
    {
      key: 3,
      label: `Tab3`,
      children: "Nội dung tab 3",
    },
  ];
  return (
    <>
      <div className="flex justify-center items-center">
        <Tabs tabPosition="left" defaultActiveKey="1" items={items} />
      </div>
    </>
  );
};

export default HomeMenu;
