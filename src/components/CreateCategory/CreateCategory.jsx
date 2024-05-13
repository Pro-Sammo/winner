"use client";

import React, { useState, useEffect } from "react";
import { toast } from "sonner";
import axios from "axios";
import { Trash } from "lucide-react";

const Categorysection = () => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState([]);

  console.log(category);

  const getAllCategory = () => {
    try {
      axios
        .post("/api/v1/admin/getcategory", {})
        .then((res) => res.data)
        .then((data) => {
          setCategory(data);
          setLoading(false);
        });
    } catch (error) {
      toast(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(
        "/api/v1/admin/createcategory",
        {
          name: name,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setLoading(false);
      toast("Created Successfully");
      getAllCategory();
    } catch (error) {
      toast(error?.response?.data?.message);
      setLoading(false);
    }
  };

  const categoryDeleteHandler = async (id) => {
    try {
      const res = await axios.delete(`/api/v1/admin/deletecategory/${id}`);
      const result = res.data;
      toast("Category Deleted Successfully");
      getAllCategory();
    } catch (error) {
      toast(error?.response?.data?.message);
    }
  };

  return (
    <div className="w-full flex mt-5 flex-col md:flex-row px-3 md:justify-center gap-8 md:items-start min-h-screen pt-20">
      <table className="border md:w-80 md:mt-8">
        <thead>
          <tr>
            <th>All Category</th>
          </tr>
        </thead>
        <tbody>
          {category?.map((item) => (
            <tr key={item._id}>
              <td className="flex justify-between px-4">
                <div>{item.name}</div>
                <div>
                  <button
                    onClick={() =>
                      toast("Are You Sure", {
                        action: {
                          label: "Delete",
                          onClick: () => categoryDeleteHandler(item._id), // Changed 'data' to 'item'
                        },
                      })
                    }
                  >
                    <Trash size={15} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <form
        className="flex flex-col gap-2 mb-12 w-full md:w-96"
        onSubmit={submitHandler}
      >
        <label htmlFor="category">Enter Category Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="outline-blue-200 border rounded border-blue-200 py-2 px-1"
          type="text"
          id="category"
          required
        />
        <button
          disabled={loading}
          className="bg-blue-200 h-14 rounded"
          type="submit"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default Categorysection;
