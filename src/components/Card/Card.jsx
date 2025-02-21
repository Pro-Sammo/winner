"use client";

import React, { useEffect, useState } from "react";
import CardItem from "../CardItem/CardItem";
import { toast } from "sonner";
import Link from "next/link";
import { Oswald } from "next/font/google";
import { Row, Col, Typography, Space, Spin } from "antd"; // Importing Ant Design components
import axios from "axios";

const oswald = Oswald({ weight: ["600"], subsets: ["cyrillic"] });

const { Title } = Typography;

const Card = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Set loading state to true initially

  const fetchAsyncData = async () => {
    try {
      const response = await axios.post("/api/v1/admin/getitem");
      const result = await response.data;
      setData(result);
      setLoading(false); // Data has been fetched, so set loading to false
    } catch (error) {
      toast("Data fetch failed");
      setLoading(false); // Set loading to false even if the fetch fails
    }
  };

  useEffect(() => {
    fetchAsyncData();
  }, []);

  return (
    <div className="py-6 md:py-8 my-5 w-full mx-auto">
      <div className="w-full py-6 rounded-lg px-10">
        {/* Header Section */}
        <div className="text-center mb-14 lg:mb-20">
          <Title level={2} className={`${oswald.className} text-2xl md:text-3xl lg:text-4xl`}>
            Product Store
          </Title>
        </div>

        {/* Product Grid Section */}
        {loading ? (
          // Show loading spinner while data is being fetched
          <div className="flex justify-center items-center">
            <Spin size="large" /> {/* Ant Design loading spinner */}
          </div>
        ) : (
          <Row gutter={[16, 16]} justify="center" align="top">
            {data?.map((item) => (
              <Col
                key={item._id}
                xs={24} // 100% width on extra small screens (mobile)
                sm={12}  // 50% width on small screens
                md={8}   // 33.33% width on medium screens
                lg={6}   // 25% width on large screens
                className="flex justify-center" // Ensuring that the card is centered
              >
                <Link href={`/product/${item._id}`} passHref>
                  <div className="flex justify-center">
                    <CardItem
                      id={item._id}
                      public_id={item.images[0]?.publicId}
                      size={item.size}
                      shortDescription={item.shortDescription}
                      title={item.model}
                    />
                  </div>
                </Link>
              </Col>
            ))}
          </Row>
        )}
      </div>
    </div>
  );
};

export default Card;
