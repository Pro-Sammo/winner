"use client";

import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import axios from "axios";
import { Spin, Button, Dropdown, Menu, Typography } from "antd";
import { DownOutlined } from "@ant-design/icons";
import CardItem from "@/components/CardItem/CardItem";
import Link from "next/link";

const { Title, Text } = Typography;

const Page = () => {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);
  const [searchCategory, setSearchCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [categoryLoading, setCategoryLoading] = useState(true); // Initially loading categories

  const fetchAsyncData = async () => {
    setLoading(true);
    try {
      const response = await axios.post(`/api/v1/admin/product?category=${searchCategory}`);
      setData(response.data);
    } catch (error) {
      toast("Product fetch failed");
    } finally {
      setLoading(false);
    }
  };

  const getAllCategory = async () => {
    setCategoryLoading(true);
    try {
      const res = await axios.post("/api/v1/admin/getcategory");
      setCategory(res.data);
    } catch (error) {
      toast("Category fetch failed");
    } finally {
      setCategoryLoading(false); // Done loading categories
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  useEffect(() => {
    fetchAsyncData();
  }, [searchCategory]);

  const categoryMenu = (
    <Menu>
      {category?.map((ctg) => (
        <Menu.Item key={ctg.name} onClick={() => setSearchCategory(ctg.name)}>
          <div className="category-item">
            <strong>{ctg.name}</strong>
            {ctg.description && <Text type="secondary">{ctg.description}</Text>}
          </div>
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <div className="min-h-screen flex flex-col pt-20 px-8">
      {/* Header Section */}
      <div className="text-center pb-6">
        <Title level={2}>Welcome to Our Product Store</Title>
        {/* Only show this text when categories are loaded */}
        {!categoryLoading && (
          <Text type="secondary">Select a category to explore a variety of products.</Text>
        )}
      </div>

      {/* Category Dropdown */}
      <div className="flex justify-center pb-4">
        {categoryLoading ? (
          <Spin size="large" /> // Show loading spinner until categories are loaded
        ) : (
          <Dropdown overlay={categoryMenu} trigger={["click"]}>
            <Button
              type="primary"
              style={{
                backgroundColor: "#1890ff",
                borderColor: "#1890ff",
                padding: "10px 20px",
                fontSize: "16px",
              }}
              icon={<DownOutlined />}
            >
              {searchCategory || "Select a Category"}
            </Button>
          </Dropdown>
        )}
      </div>

      {/* Loading and Product Display */}
      {loading ? (
        <div className="flex justify-center items-center h-60">
          <Spin size="large" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-16 lg:gap-10 md:flex-row gap-8 py-8 mx-auto">
          {data?.map((item) => (
            <Link key={item._id} href={`/product/${item._id}`}>
              <CardItem
                id={item._id}
                public_id={item.images[0]?.publicId}
                size={item.size}
                shortDescription={item.shortDescription}
                title={item.model}
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Page;
