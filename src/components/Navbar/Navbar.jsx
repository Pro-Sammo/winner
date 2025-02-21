"use client";

import { useState, useEffect } from "react";
import { Menu, Button, Drawer } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import Image from "next/image";
import axios from "axios";
import Logo from "../../../public/logo.png";
import { motion } from "framer-motion";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [category, setCategory] = useState([]);

  const getAllCategory = async () => {
    try {
      const res = await axios.post("/api/v1/admin/getcategory");
      setCategory(res.data);
    } catch (error) {
      console.error("Category fetch failed", error);
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  return (
    <motion.header>
      <motion.nav
        className="flex justify-between items-center py-4 px-6 bg-blue-200 fixed w-full top-0 z-50 shadow-md"
      >
        <a href="/" className="flex items-center">
          <Image src={Logo} width={280} alt="logo" />
        </a>
        <div className="hidden lg:flex space-x-6">
          <Button type="link" href="/product" className="text-white text-lg">Products</Button>
          <Button type="link" href="/about" className="text-white text-lg">About Us</Button>
        </div>
        <Button
          className="lg:hidden"
          type="text"
          icon={<MenuOutlined style={{ fontSize: '24px', color: 'white' }} />}
          onClick={() => setMobileMenuOpen(true)}
        />
      </motion.nav>
      <Drawer
        title={<Image src={Logo} width={120} alt="logo" />}
        placement="right"
        closable
        onClose={() => setMobileMenuOpen(false)}
        visible={mobileMenuOpen}
      >
        <Menu mode="vertical">
          <Menu.Item key="1">
            <a href="/product">Products</a>
          </Menu.Item>
          <Menu.Item key="2">
            <a href="/about">About Us</a>
          </Menu.Item>
        </Menu>
      </Drawer>
    </motion.header>
  );
}
