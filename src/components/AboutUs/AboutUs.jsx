"use client";

import React from "react";
import { Row, Col, Button, Typography } from "antd";
import Image from "next/image";
import factory from '../../../public/factory.jpg'
const { Title, Paragraph } = Typography;
import { Montserrat,Oswald } from "next/font/google";

const montserrat = Montserrat({ weight: ["400"], subsets: ["cyrillic"] });
const oswald = Oswald({ weight: ["600"], subsets: ["cyrillic"] });

const AboutUs = () => {
  return (
    <div className="min-h-fit py-14 px-8 bg-gray-50">
      {/* About Us Section */}
      <div className={`${montserrat.className} container mx-auto text-center`}>
        <Title level={2} className={`${oswald.className} text-4xl font-semibold mb-6`}>
          Who We Are
        </Title>
        <Paragraph className="text-xl text-gray-700 mb-8">
          At Winner Machineries, we are dedicated to providing cutting-edge machinery designed to meet the diverse needs of industries.
        </Paragraph>

        <Row gutter={[16, 16]} justify="center">
          {/* Image Section */}
          <Col xs={24} md={12} lg={8} className="flex justify-center">
           <Image src={factory} width={400} className="object-contain"/>
          </Col>
          {/* Text Section */}
          <Col xs={24} md={12} lg={12}>
            <div className="text-left text-gray-800">
              <Title level={4} className="text-2xl font-semibold mb-4">
                Our Vision
              </Title>
              <Paragraph className="text-lg leading-relaxed mb-4">
                We envision a future where businesses across all industries thrive with the power of reliable, efficient, and innovative machinery. Our commitment to excellence drives us to continuously enhance the design, performance, and sustainability of our products.
              </Paragraph>

              <Title level={4} className="text-2xl font-semibold mb-4">
                Our Mission
              </Title>
              <Paragraph className="text-lg leading-relaxed mb-6">
                Our mission is to provide the best machinery solutions that empower businesses, enhance productivity, and ensure safety. Through constant research, development, and a customer-centric approach, we aim to be the top choice for industrial machinery worldwide.
              </Paragraph>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AboutUs;
