import Item from "../../../../../schema/itemschema";
import connectDB from "../../../../../db/db";
import { NextResponse } from "next/server";
import Category from "@/schema/categoryschema";

export async function POST(req) {
  const {
    model,
    shortDescription,
    longDescription,
    size,
    brand,
    voltage,
    power,
    temperature,
    time,
    speed,
    category,
  } = await req.json();

  try {
     connectDB();

   
    const alreadyExist = await Item.findOne({ model });

    if (alreadyExist) {
      return NextResponse.json(
        { success: false, message: "Model already exists" },
        { status: 400 }
      );
    }

    const ctg = await Category.findOne({ name: category });

    await Item.create({
      model,
      shortDescription,
      longDescription,
      size,
      brand,
      voltage,
      power,
      temperature,
      time,
      averageSpeed: speed,
      category: ctg._id,
    });

    return NextResponse.json(
      { success: true, message: "Item Created Successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create item",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
