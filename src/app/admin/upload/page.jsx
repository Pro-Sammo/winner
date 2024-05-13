"use client";

import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";

const Page = () => {
  const [model, setModel] = useState("");
  const [brand, setBrand] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [longDescription, setLongDescription] = useState("");
  const [size, setSize] = useState("");
  const [voltage, setVoltage] = useState("");
  const [power, setPower] = useState("");
  const [temperature, setTemperature] = useState("");
  const [time, setTime] = useState("");
  const [speed, setSpeed] = useState("");
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "/api/v1/admin/additem",
        {
          model: model,
          brand: brand,
          shortDescription: shortDescription,
          longDescription: longDescription,
          size: size,
          voltage: voltage,
          power: power,
          temperature: temperature,
          time: time,
          speed: speed,
          category: selectedCategory,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const result = response.data;
      setLoading(false);
      toast("Created Successfully");
    } catch (error) {
      console.log(error);
      toast(error?.response?.data?.message);
      setLoading(false);
    }
  };

  const getAllCategory = async () => {
    try {
      const res = await axios.post("/api/v1/admin/getcategory");
      const result = res.data;
      setCategory(result);
    } catch (error) {
      toast(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  return (
    <>
      <div className="w-full flex justify-center pt-24">
        <form
          className="flex flex-col gap-2 p-2 mb-12 w-full md:w-96"
          onSubmit={submitHandler}
        >
          <label htmlFor="model">Model</label>
          <input
            value={model}
            onChange={(e) => setModel(e.target.value)}
            className="outline-blue-200 border rounded border-blue-200 py-2 px-1"
            type="text"
            id="model"
            required
          />
          <label htmlFor="Brand">Brand</label>
          <input
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="outline-blue-200 border rounded border-blue-200 py-2 px-1"
            type="text"
            id="Brand"
            required
          />
          <label htmlFor="shortdescription">Short Description</label>
          <input
            value={shortDescription}
            onChange={(e) => setShortDescription(e.target.value)}
            className="outline-blue-200 border rounded border-blue-200 py-2 px-1"
            type="text"
            id="shortdescription"
            required
          />
          <label htmlFor="longdescription">Long Desciption</label>
          <input
            value={longDescription}
            onChange={(e) => setLongDescription(e.target.value)}
            className="outline-blue-200 border rounded border-blue-200 py-2 px-1"
            type="text"
            id="longdescription"
            required
          />
          <label htmlFor="size">Size</label>
          <input
            value={size}
            onChange={(e) => setSize(e.target.value)}
            className="outline-blue-200 border rounded border-blue-200 py-2 px-1"
            type="text"
            id="size"
            required
          />
          <label htmlFor="Voltage">Voltage</label>
          <input
            value={voltage}
            onChange={(e) => setVoltage(e.target.value)}
            className="outline-blue-200 border rounded border-blue-200 py-2 px-1"
            type="text"
            id="Voltage"
            required
          />
          <label htmlFor="power">Power</label>
          <input
            value={power}
            onChange={(e) => setPower(e.target.value)}
            className="outline-blue-200 border rounded border-blue-200 py-2 px-1"
            type="text"
            id="power"
            required
          />
          <label htmlFor="Temperature">Temperature</label>
          <input
            value={temperature}
            onChange={(e) => setTemperature(e.target.value)}
            className="outline-blue-200 border rounded border-blue-200 py-2 px-1"
            type="text"
            id="Temperature"
            required
          />
          <label htmlFor="Time">Time</label>
          <input
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="outline-blue-200 border rounded border-blue-200 py-2 px-1"
            type="text"
            id="Time"
            required
          />
          <label htmlFor="speed">Average Speed</label>
          <input
            value={speed}
            onChange={(e) => setSpeed(e.target.value)}
            className="outline-blue-200 border rounded border-blue-200 py-2 px-1"
            type="text"
            id="speed"
          />
          <label htmlFor="Category">Average Speed</label>
          <select
            id="Category"
            className="outline-blue-200 border rounded border-blue-200 py-2 px-1"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {category.map((item) => {
              return (
                <option key={item._id} value={item.name}>
                  {item.name}
                </option>
              );
            })}
          </select>
          <button
            disabled={loading}
            className="bg-blue-200 h-14 rounded"
            type="submit"
          >
            Create
          </button>
        </form>
      </div>
    </>
  );
};

export default Page;
