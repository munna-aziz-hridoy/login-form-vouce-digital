import { Button, Menu } from "antd";
import React from "react";

const HeaderMenu = () => {
  return (
    <Menu mode="horizontal" className="sticky top-0 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-1">
        <div className="text-2xl font-bold p-2">
          ATools<span className="text-secondary">.</span>
        </div>
        <div className="hidden md:flex justify-center items-center ">
          <Menu.Item>
            <Button
              size="large"
              className="bg-primary text-white font-semibold tracking-widest"
            >
              Start Free Trial
            </Button>
          </Menu.Item>
          <Menu.Item>
            <Button
              size="large"
              className="bg-secondary text-white font-semibold tracking-widest"
            >
              Start Free Trial
            </Button>
          </Menu.Item>
        </div>
      </div>
    </Menu>
  );
};

export default HeaderMenu;
